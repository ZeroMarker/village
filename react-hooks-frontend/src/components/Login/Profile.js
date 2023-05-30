import React, {useContext, useEffect, useState} from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import AccountsService from '../../services/AccountService'
import HeaderComponent from "../../layouts/HeaderComponent";
import {Card} from "react-bootstrap";
import UpdateAccountComponent from "../Account/UpdateAccountComponent";
import FooterComponent from "../../layouts/FooterComponent";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import AuthContext from "./AuthProvider";
import accountService from "../../services/AccountService";
import {useNavigate} from "react-router-dom";

const Profile = ({setShowAddAccount,getAllAccounts}) => {


    const [account, setAccount] = useState("");
    const navigate = useNavigate();
    const {auth, setAuth} = useContext(AuthContext);

    const getAccount = () => {
        if(auth.roles === "user") {
            setAccount(accountService.getAccountById(auth.accountId));
        }
        else {
            alert("请登录用户");
            navigate(`/login`);
        }
        setAccount(accountService.getAccountById(auth.accountId))
    }
    useEffect(() => {
        getAccount();
    }, [account])
    // const saveAccount = (e)=>{
    //     e.preventDefault();
    //
    //     const Account = {accountName, email, password};
    //
    //     // console.log(Account)
    //
    //     AccountsService.createAccount(Account).then(response=>{
    //
    //         console.log(response.data)
    //         setShowAddAccount(false);
    //         getAllAccounts();
    //
    //
    //     }).catch(error=>{
    //         console.log(error)
    //     })
    //
    //
    //
    // }


    return (
        <div className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <Header/>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center text-white"
                                        style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                  alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                                    <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                                    <MDBCardText>Web Designer</MDBCardText>
                                    {/*<MDBIcon far icon="edit mb-5" />*/}
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">用户信息</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">用户名</MDBTypography>
                                                <MDBCardText className="text-muted">{auth.accountName}</MDBCardText>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">邮箱</MDBTypography>
                                                <MDBCardText className="text-muted">{auth.email}</MDBCardText>
                                            </MDBCol>
                                        </MDBRow>



                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer/>
        </div>
    )
}
export default Profile;
