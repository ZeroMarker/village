package com.example.springback.service;

import com.example.springback.entity.Admin;
import com.example.springback.repository.AdminRepository;
import com.example.springback.utils.LoginMessage;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    @Resource
    private AdminRepository adminRepository;

    public LoginMessage register(Admin admin) {
        adminRepository.save(admin);
        return new LoginMessage("注册成功", Boolean.TRUE);
    }

    public LoginMessage  login(Admin admin) {
        Admin admin1 = adminRepository.findOneByAdminName(admin.getAdminName());
        if (admin1 != null) {
            String password = admin.getPassword();
            String encodedPassword = admin1.getPassword();
            boolean isPwdRight = password.equals(encodedPassword);
            if (isPwdRight) {
                return new LoginMessage("Login Success", true);
            }
            else {
                return new LoginMessage("password Not Match", false);
            }
        }
        else {
            return new LoginMessage("Email not exits", false);
        }
    }
}
