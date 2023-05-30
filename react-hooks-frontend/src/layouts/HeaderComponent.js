import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from "../components/Login/AuthProvider";

const HeaderComponent = () => {
    const {auth, setAuth} = useContext(AuthContext);
    return (

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                    <Link to="/" className="navbar-brand">数字乡村基础建设水平测度系统</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-brand" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/admin/accounts" className="nav-link">用户管理</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/infos" className="nav-link">数据管理</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/rates" className="nav-link">测度管理</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/models" className="nav-link">模型管理</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/documents" className="nav-link">政策文件管理</Link>
                            </li>

                            <li className="nav-item float-right">
                                <Link to="/admin" className="nav-link">{auth.accountName}</Link>
                            </li>
                            <li className="nav-item float-right">
                                <Link to="/logout" className="nav-link">退出登录</Link>
                            </li>

                        </ul>
                    </div>
                </nav>


    )
}

export default HeaderComponent
