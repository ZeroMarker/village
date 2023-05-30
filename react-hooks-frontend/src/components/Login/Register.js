import {useEffect, useRef, useState} from "react";
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

import accountService from "../../services/AccountService";
import Footer from "../../layouts/Footer";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,16}$/;

const Register = () => {
    const accountRef = useRef();
    const errRef = useRef();

    const [accountName, setAccountName] = useState('');
    const [validName, setValidName] = useState(false);
    const [accountFocus, setAccountFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        accountRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(accountName));
    }, [accountName])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [accountName, password, matchPassword])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(accountName);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            alert("请输入用户名和密码");
            return;
        }
        try {
            const account = {accountName, password};
            const response = await accountService.createAccount(account);
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            setAccountName('');
            setPassword('');
            setMatchPassword('');
            alert("注册成功");
        } catch (err) {
            if (!err?.response) {
                setErrMsg('无服务器响应');
            } else if (err.response?.status === 409) {
                setErrMsg('用户名已存在');
            } else {
                setErrMsg('注册失败')
            }
            errRef.current.focus();
        }
    }

    return (<>
        {success ? (<section>
            <h1 className="text-center">注册成功</h1>
            <p className="text-center">
                <Link to={"/login"}>登录</Link>
            </p>
        </section>) : (<section className="container bg-light">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                    <Link to="/" className="text-decoration-none">返回首页</Link>

                    <h1 className="text-center mb-4">注册</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="accountname">用户名:</label>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                id="accountname"
                                ref={accountRef}
                                autoComplete="off"
                                onChange={(e) => setAccountName(e.target.value)}
                                value={accountName}
                                required
                                className={`form-control ${validName ? "is-valid" : ""} ${!validName && accountFocus && accountName ? "is-invalid" : ""}`}
                                aria-describedby="uidnote"
                                onFocus={() => setAccountFocus(true)}
                                onBlur={() => setAccountFocus(false)}
                                placeholder="用户名"
                            />

                            <div
                                id="uidnote"
                                className={`invalid-feedback ${accountFocus && accountName && !validName ? "d-block" : "offscreen"}`}
                            >
                                <FontAwesomeIcon icon={faInfoCircle} className="me-1"/>
                                4至24个字符；必须以字母开始；使用字母、数字、下划线和连字符
                            </div>
                        </div>
                        <label htmlFor="password">密码:</label>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                id="password"
                                placeholder="密码"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                required
                                className={`form-control ${validPassword ? "is-valid" : ""} ${!validPassword && passwordFocus ? "is-invalid" : ""}`}
                                aria-describedby="passwordnote"
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                            />

                            <div
                                id="passwordnote"
                                className={`invalid-feedback ${passwordFocus && !validPassword ? "d-block" : "offscreen"}`}
                            >
                                <FontAwesomeIcon icon={faInfoCircle} className="me-1"/>
                                8至16个字符；至少含有字母和数字
                            </div>
                        </div>
                        <label htmlFor="confirm_password">确认密码:</label>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                id="confirm_password"
                                onChange={(e) => setMatchPassword(e.target.value)}
                                value={matchPassword}
                                required
                                className={`form-control ${validMatch ? "is-valid" : ""} ${!validMatch && matchFocus ? "is-invalid" : ""}`}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}
                            />
                            <div
                                id="confirmnote"
                                className={`invalid-feedback ${matchFocus && !validMatch ? "d-block" : "offscreen"}`}
                            >
                                <FontAwesomeIcon icon={faInfoCircle} className="me-1"/>
                                必须与第一次输入密码相同
                            </div>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={!validName || !validPassword || !validMatch}
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                注册
                            </button>
                        </div>
                        {/*<p>密码不能为空</p>*/}
                    </form>

                    <div className="mt-4 text-center">
                        <p>
                            已有账户?<br/>
                            <span className="line">
                                <Link to="/login" className="text-decoration-none">登录</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>)}
    </>)
}

export default Register
