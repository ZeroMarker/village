import numpy as np
import pandas as pd
from sqlalchemy import create_engine, text

db_connection_str = 'mysql+pymysql://root:password@localhost:3306/ems'
db_connection = create_engine(db_connection_str)
db_connection.connect().execute(text('truncate table rate'))
data = pd.DataFrame(db_connection.connect().execute(text('SELECT * FROM info')))

data.set_index("info_name", inplace=True)
data.drop("info_id", axis=1, inplace=True)
# data.drop("account_id", axis=1, inplace=True)
data.to_excel("数据.xlsx")
indicator = data.columns.tolist()  # 指标个数
project = data.index.tolist()  # 方案数、评价主体
value = data.values
print(len(indicator))
print(indicator)
print(project)
print(value)
data.head()
print(data.shape)


# #定义数据标准化函数。为了避免求熵值时对数无意义，对数据进行平移，对标准化后的数据统一加了常数0.001
def std_data(value, flag):
    for i in range(len(indicator)):
        print(flag[i])
        if flag[i] == '+':
            value[:, i] = (value[:, i] - np.min(value[:, i], axis=0)) / (
                    np.max(value[:, i], axis=0) - np.min(value[:, i], axis=0)) + 0.001
        elif flag[i] == '-':
            value[:, i] = (np.max(value[:, i], axis=0) - value[:, i]) / (
                    np.max(value[:, i], axis=0) - np.min(value[:, i], axis=0)) + 0.001
    return value


# 数据标准化
flag = ["-", "+", "-", "+", "+", "-", "+", "-", "+", "+", "-", "+", "-", "+", "+", "+", "+", "+"]
# 表示指标为正向指标还是反向指标
print(f"{len(value)} {len(flag)}")
std_value = std_data(value, flag)
std_value.round(3)
print(std_value)


# 定义熵值法函数、熵值法计算变量的权重
def cal_weight(indicator, project, value):
    p = np.array([[0.0 for i in range(len(indicator))] for i in range(len(project))])
    # print(p)
    for i in range(len(indicator)):
        p[:, i] = value[:, i] / np.sum(value[:, i], axis=0)

    e = -1 / np.log(len(project)) * sum(p * np.log(p))  # 计算熵值
    g = 1 - e  # 计算一致性程度
    w = g / sum(g)  # 计算权重
    return w


def ewm(indicator, project, value):
    p = np.array([[0.0 for i in range(len(indicator))] for i in range(len(project))])
    # print(p)
    for i in range(len(indicator)):
        p[:, i] = value[:, i] / np.sum(value[:, i], axis=0)

    e = -1 / np.log(len(project)) * sum(p * np.log(p))  # 计算熵值
    # g = 1 - e  # 计算一致性程度
    # w = g / sum(g)  # 计算权重
    return e

ewm = ewm(indicator, project, std_value)

ewm = pd.DataFrame(ewm, index=data.columns, columns=['信息熵'])

ewm.to_excel('二级信息熵.xlsx', index=True)

print(ewm)
# 结果
w = cal_weight(indicator, project, std_value)
w = pd.DataFrame(w, index=data.columns, columns=['权重'])
print("Weight")
print(w)
w.to_excel('二级权重.xlsx', index=True)
broadcast = np.tile(w.T, (std_value.shape[0], 1))
sc = std_value * broadcast
print(sc)
df = pd.DataFrame(sc, columns=indicator, index=project)
df.to_excel('二级得分.xlsx', index=True)
print(df)
df_new = pd.DataFrame(index=project)

df_new['network'] = df[['broadband', 'mobile', 'cable']].sum(axis=1)
df_new['security'] = df[['data', 'emergency', 'technology']].sum(axis=1)
df_new['ecosystem'] = df[['soil', 'water', 'air']].sum(axis=1)
df_new['service'] = df[['government', 'medical', 'online', 'education']].sum(axis=1)
df_new['industry'] = df[['agriculture', 'traffic', 'irrigation', 'power', 'logistics']].sum(axis=1)
df_new['overall'] = df.sum(axis=1)

# 创建新列，将其设置为索引列的值
df_new['rate_name'] = data.index
df_new = df_new.reset_index(drop=True)
df_new.to_excel('结果.xlsx', index=False)
print(df_new)
# score = np.dot(std_value, w).round(2)
#
# score = pd.DataFrame(score, index=data.index, columns=['综合得分']).sort_values(by=['综合得分'], ascending=False)
# print(score)

# try:
#     # 使用 pandas 的 to_sql() 方法将数据框插入 MySQL
#     df_new.to_sql(name='rate', con=db_connection, if_exists='append', index=False)
#     print("Data inserted to MySQL database")
# except Exception as e:
#     print(e)

