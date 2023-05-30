import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../components/Login/AuthProvider";

const Header = () => {
    const {auth, setAuth} = useContext(AuthContext)
    return (

            <div>
                <div>
                    <img src="https://p7.itc.cn/q_70/images01/20220616/56e5c773be3748cc975360c8c2878d48.jpeg" alt="shuzi" className="w-100"/>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                    <Link to="/" className="navbar-brand">数字乡村基础建设水平测度系统</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-brand text-left" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/analysis" className="nav-link">水平测度</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link btn-primary">个人中心</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/document" className="nav-link primary">政策文件</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/model" className="nav-link primary">算法模型</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">管理后台</Link>
                            </li>
                            {
                                auth.roles === "user" ? (
                                    <>
                                        <li className="nav-item float-right">
                                            <Link to="/profile" className="nav-link">{auth.accountName}</Link>
                                        </li>
                                        <li className="nav-item float-right">
                                            <Link to="/logout" className="nav-link">退出登录</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item float-right">
                                            <Link to="/login" className="nav-link">登录</Link>
                                        </li>
                                        <li className="nav-item float-right">
                                            <Link to="/register" className="nav-link">注册</Link>
                                        </li>
                                    </>

                                )
                            }

                        </ul>
                    </div>
                </nav>
            </div>


    )
}

export default Header;
