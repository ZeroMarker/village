import React, { useState } from 'react';
import AdminService from "../../services/AdminService";

function LoginAdmin(props) {
    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');

    function handleAdminNameChange(event) {
        setAdminName(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // 处理登录逻辑
        const admin = {adminName, password}
        AdminService.createAccount(admin)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                AdminName:
                <input type="text" value={adminName} onChange={handleAdminNameChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginAdmin;