import React, {useContext, useEffect} from 'react';
import AuthContext from "./AuthProvider";
import {Link} from "react-router-dom";

const Logout = () => {

    const {auth, setAuth} = useContext(AuthContext);
    useEffect(() => {
        setAuth('');
    })

    return (
        <div>
            <h1 className="text-center">退出登录</h1>
            <Link to="/" className="text-decoration-none">返回首页</Link>
        </div>
    );
};

export default Logout;