import React,{useState,useEffect} from 'react'
import AccountsService from '../../services/AccountService'
import AddAccountComponent from './AddAccountComponent'
import UpdateAccountComponent from './UpdateAccountComponent'
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";

const ListAccountComponent = () => {

    // define Accounts state and get a methed to update Accounts
    const [Accounts, setAccounts] = useState([])

    // define addAccount's Pop-ups state
    const [showAddAccount,setShowAddAccount] = useState(false);

    // define updateAccount's Pop-ups state
    const [showUpdateAccount,setShowUpdateAccount] = useState(false);

    // define the updateId
    let [activeId,setActiveId] = useState(null);


    // get Accounts data from backend
    const getAllAccounts = () =>{
        AccountsService.getAllAccounts().then((response) => {
            // console.log(response.data)
            setAccounts(response.data);
        }).catch(error=>{
            console.log(error)
        })
    }

    // Call the method when the component didmount
    useEffect(() => {
       
        getAllAccounts();
        

    }, [Accounts])

    const updateAccount = (AccountId) => {
        setActiveId(AccountId);
        setShowUpdateAccount(true);
    }

    const deleteAccount = (AccountId) => {
        // console.log(AccountId);
        AccountsService.deleteAccount(AccountId).then(response=>{

            getAllAccounts();

        }).catch(error=>{
            console.log(error)
        })
    }


    return (
        <div className="" style={{position:"relative"}}>
            <HeaderComponent/>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">
                        用户列表
                    </Card.Title>
                    <Card.Header>

                    </Card.Header>
                    <Card.Text>
                        <button className="btn btn-primary mb-2" onClick={()=>setShowAddAccount(true)}>添加用户</button>
                        <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>用户ID</th>
                                <th>用户名</th>
                                <th>邮箱</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Accounts.map(Account=>
                                    <tr key={Account.accountId}>
                                        <td>{Account.accountId}</td>
                                        <td>{Account.accountName}</td>
                                        <td>{Account.email}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => updateAccount(Account.accountId)}>更新</button>
                                            <button className="btn btn-danger" onClick={() => deleteAccount(Account.accountId)}

                                            >删除</button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        {
                            showAddAccount? <AddAccountComponent setShowAddAccount={setShowAddAccount} getAllAccounts={getAllAccounts} /> : null
                        }
                        {
                            showUpdateAccount? <UpdateAccountComponent id={activeId} setShowUpdateAccount={setShowUpdateAccount} getAllAccounts={getAllAccounts} /> : null
                        }
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
    )
}

export default ListAccountComponent;
