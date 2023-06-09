import React, {Profiler} from 'react'
import './App.css'
// import './index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListModelComponent from "./components/Model/ListModelComponent";
import ListDocumentComponent from "./components/Document/ListDocumentComponent";
import ListInfoComponent from "./components/Info/ListInfoComponent";
import Analysis from "./components/Analysis/Analysis";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Home from "./components/HomePage/Home";
import ListAccountComponent from "./components/Account/ListAccountComponent";
import ListRateComponent from "./components/Rate/ListRateComponent";
import Model from "./components/Analysis/Model";
import Document from "./components/Analysis/Document";
import Notice from "./components/Analysis/Notice";
import Doc from "./components/Analysis/Doc";
import Mod from "./components/Analysis/Mod";
import Request from "./components/Analysis/Request";
import AddInfoComponent from "./components/Analysis/AddInfoComponent";
import LoginAdmin from "./components/Login/LoginAdmin";
import About from "./layouts/About";
import Profile from "./components/Login/Profile";
import DocumentFind from "./components/Analysis/DocumentFind";
import Logout from "./components/Login/Logout";
import Admin from "./components/HomePage/Admin";
export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path="/admin" element={<ListAccountComponent/>}></Route>
                        <Route path="/admin/models" element={<ListModelComponent/>}></Route>
                        <Route path="/admin/accounts" element={<ListAccountComponent/>}></Route>
                        <Route path="/admin/documents" element={<ListDocumentComponent/>}></Route>
                        <Route path="/admin/rates" element={<ListRateComponent/>}></Route>
                        <Route path="/admin/infos" element={<ListInfoComponent/>}></Route>
                        <Route path="/admin/login" element={<LoginAdmin/>}></Route>

                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/analysis" element={<Analysis/>}></Route>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/register" element={<Register/>}></Route>
                        <Route path="/profile" element={<Profile/>}></Route>
                        <Route path="/document" element={<Document/>}></Route>
                        <Route path="/document/:documentId" element={<Doc />}></Route>
                        <Route path="/document/find" element={<DocumentFind />}></Route>
                        <Route path="/model" element={<Model/>}></Route>
                        <Route path="/model/:modelId" element={<Mod />}></Route>
                        <Route path="/notice" element={<Notice/>}></Route>
                        <Route path="/request" element={<Request/>}></Route>
                        <Route path="/addinfo" element={<AddInfoComponent/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/logout" element={<Logout/>}></Route>


                    </Routes>
                </div>
            </Router>
        </div>
    )
} 
