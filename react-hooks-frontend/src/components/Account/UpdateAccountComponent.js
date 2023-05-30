import React,{ useState,useEffect } from 'react'

import AccountsService from '../../services/AccountService'

const UpdateAccountComponent = ({id,setShowUpdateAccount,getAllAccounts}) => {

    const [accountName, setAccountName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [roles, setRoles] = useState("")

    const UpdateAccount = (e)=>{
        e.preventDefault();
        const Account = {accountName, email, password};
        // console.log(Account)
        AccountsService.updateAccount(id, Account).then(response => {
                setShowUpdateAccount(false);
                getAllAccounts();
            }).catch(error=>{
                console.log(error);
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AccountsService.getAccountById(id);
                const { accountName, email, password, roles} = response.data;
                setAccountName(accountName);
                setEmail(email);
                setPassword(password)
                setRoles(roles)
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]); 
 

    return (
        <div style={{position:"absolute",width:"100%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}}>
            <br/>
           <div className="">
               <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow:"1px 2px 2px grey,-1px -2px 2px grey"}}>
                        <h2 className="text-center">编辑用户</h2>
                       <div className="card-body">
                           <form>
                               <div className="form-group mb-2">
                                   <label className="form-label">用户名 :</label>
                                   <input 
                                    type="text" 
                                    placeholder="用户名"
                                    name="AccountName"
                                    className="form-control"
                                    value = {accountName}
                                    onChange={e=>setAccountName(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">邮箱 :</label>
                                   <input 
                                    type="text" 
                                    placeholder="邮箱"
                                    name="email"
                                    className="form-control"
                                    value = {email}
                                    onChange={e=>setEmail(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">权限 :</label>
                                   <input
                                    type="text"
                                    placeholder="权限"
                                    name="roles"
                                    className="form-control"
                                    value = {roles}
                                    onChange={e=>setEmail(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">密码 :</label>
                                   <input
                                    type="password"
                                    placeholder="密码"
                                    name="password"
                                    className="form-control"
                                    value = {password}
                                    onChange={e=>setPassword(e.target.value)} />
                               </div>
                              

                                <button className="btn btn-success" onClick={(e)=>UpdateAccount(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowUpdateAccount(false)}>取消</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default UpdateAccountComponent
