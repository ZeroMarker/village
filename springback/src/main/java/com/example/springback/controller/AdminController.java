package com.example.springback.controller;

import com.example.springback.entity.Admin;
import com.example.springback.service.AdminService;
import com.example.springback.utils.LoginMessage;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/admins")
@Slf4j
public class AdminController {
    @Resource
    private AdminService adminService;

    @PostMapping("/register")
    public LoginMessage registerUser(@RequestBody Admin admin) {
        return adminService.register(admin);
    }

    @PostMapping("/login")
    public LoginMessage loginUser(@RequestBody Admin admin) {
        return adminService.login(admin);
    }
}
