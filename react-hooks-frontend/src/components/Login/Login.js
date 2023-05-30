import {useContext, useEffect, useRef, useState} from 'react';
import AuthContext from "./AuthProvider";
import {Link, useNavigate} from "react-router-dom";
import accountService from "../../services/AccountService";
import Footer from "../../layouts/Footer";
import {Row} from "react-bootstrap";
import logo from "../../public/logo.jpg"
const Login = () => {
    const {auth, setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const [accountId, setAccountId] = useState("");
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const styles = {
        background: {
            backgroundImage: `url(../../public/menu.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
        },
    };
    const isLogin = () => {
        if(auth.roles === "user") {
            alert("已登录用户账户");
            navigate(`/`);
        }
    }
    useEffect(() => {
        isLogin();
    }, [])
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [accountName, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const account = {accountName, password}
            const response = await accountService.login(account);
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const accountId = response?.data?.accountId;
            const email = response?.data?.email;


            alert("登录成功");
            setAuth({accountId, accountName, password, roles, email});
            setAccountName('');
            setPassword('');
            setSuccess(true);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('无服务器响应');
            } else if (err.response?.status === 400) {
                setErrMsg('缺少用户名或密码');
            } else if (err.response?.status === 401) {
                setErrMsg('无授权');
            } else {
                setErrMsg('登录失败');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1 className="text-center">登录成功</h1>
                    <br/>
                    <p className="text-center">
                        <Link to={'/'} className="text-decoration-none">返回首页</Link>
                    </p>
                </section>
            ) : (
                <Row>
                    <div className="col-6 container">
                        <img src={logo} alt="" className="w-100"/>
                    </div>
                    <div className="container bg-light col-6" style={styles.background}>
                        <Link to="/" className='text-decoration-none'>返回首页</Link>

                    <h1 className="text-center">登录</h1>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username">用户名:</label>
                                <div className="form-floating mb-3">

                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setAccountName(e.target.value)}
                                        value={accountName}
                                        required
                                    />
                                </div>
                                <label htmlFor="password">密码:</label>
                                <div className="form-floating  mb-3">

                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary" type="submit">登录</button>
                                </div>
                                <p>
                                    还没有账号?<br/>
                                    <span className="line">
                                        <Link to="/register" className="btn">注册</Link>
                                    </span>
                                </p>
                            </form>
                            <p>请输入用户名和密码</p>
                            <p ref={errRef} className={errMsg ? "alert alert-danger" : "offscreen"}
                               aria-live="assertive">{errMsg}</p>
                        </div>
                    </div>
                    <Footer/>
                </div></Row>

            )}
        </>
    )
}

export default Login
