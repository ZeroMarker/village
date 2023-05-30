import React, {useState, useEffect, useContext} from 'react'
import AccountsService from '../../services/AccountService'
import AddAccountComponent from './AddAccountComponent'
import UpdateAccountComponent from './UpdateAccountComponent'
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";
import FooterComponent from "../../layouts/FooterComponent";
import {useNavigate} from "react-router-dom";
import AuthContext from "../Login/AuthProvider";

const ListAccountComponent = () => {

    // define Accounts state and get a methed to update Accounts
    const [Accounts, setAccounts] = useState([])

    // define addAccount's Pop-ups state
    const [showAddAccount,setShowAddAccount] = useState(false);

    // define updateAccount's Pop-ups state
    const [showUpdateAccount,setShowUpdateAccount] = useState(false);

    // define the updateId
    let [activeId,setActiveId] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    // const handleDeleteClick = () => {
    //     setShowConfirmation(true);
    // };
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);

    const getAccount = () => {
        if(auth.roles === "admin") {

        }
        else {
            alert("请登录管理员账户");
            navigate(`/admin/login`);
        }

    }
    useEffect(() => {
        getAccount();
    }, [])

    const handleConfirmDelete = () => {
        // 执行删除操作
        // 这里可以调用删除函数或者传递删除操作给父组件
        AccountsService.deleteAccount(activeId).then(response=>{

            getAllAccounts();

        }).catch(error=>{
            console.log(error)
        })
        setShowConfirmation(false);
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };


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
        // AccountsService.deleteAccount(AccountId).then(response=>{
        //
        //     getAllAccounts();
        //
        // }).catch(error=>{
        //     console.log(error)
        // })
        setShowConfirmation(true);
        setActiveId(AccountId);
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
                                <th>权限</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Accounts.map(Account=>
                                    <tr key={Account.accountId}>
                                        <td>{Account.accountId}</td>
                                        <td>{Account.accountName}</td>
                                        <td>{Account.roles}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => updateAccount(Account.accountId)}>编辑</button>
                                            <button className="btn btn-danger" onClick={() => deleteAccount(Account.accountId)}>删除</button>
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
                        {showConfirmation && (
                            <div style={{position:"absolute",width:"50%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}} className="modal-dialog modal-dialog-centered bg-info rounded">

                                <div className="modal-content">
                                    <p>确认删除吗？</p>
                                    <button onClick={handleConfirmDelete} className="rounded">确认</button>
                                    <button onClick={handleCancelDelete} className="rounded">取消</button>
                                </div>
                            </div>
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>

            <FooterComponent/>
        </div>
    )
}

export default ListAccountComponent;
