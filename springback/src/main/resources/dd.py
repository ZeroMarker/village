from sqlalchemy import create_engine, text

db_connection_str = 'mysql+pymysql://root:password@localhost:3306/ems'
db_connection = create_engine(db_connection_str)
db_connection.connect().execute(text('truncate table rate'))