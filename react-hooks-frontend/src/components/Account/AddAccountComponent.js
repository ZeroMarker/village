import React,{ useState } from 'react'
import AccountsService from '../../services/AccountService'

const AddAccountComponent = ({setShowAddAccount,getAllAccounts}) => {

    const [accountName, setAccountName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const saveAccount = (e)=>{
        e.preventDefault();

        const Account = {accountName, email, password};

        // console.log(Account)

        AccountsService.createAccount(Account).then(response=>{

            console.log(response.data)
            setShowAddAccount(false);
            getAllAccounts();


        }).catch(error=>{
            console.log(error)
        })



    }


    return (
        <div style={{position:"absolute",width:"100%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}}>

           <div className="">
               <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow:"1px 2px 2px grey,-1px -2px 2px grey"}}>
                      <div style={{textAlign:"center",fontSize:"20px",fontWeight:"bold"}}> Add Account</div>
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
                                   <label className="form-label">Account Information :</label>
                                   <input
                                    type="text"
                                    placeholder="邮箱"
                                    name="email"
                                    className="form-control"
                                    value = {email}
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


                                <button className="btn btn-success" onClick={(e)=>saveAccount(e)}>提交</button>
                                <button className="btn btn-danger" onClick={()=>setShowAddAccount(false)}>取消</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default AddAccountComponent;
