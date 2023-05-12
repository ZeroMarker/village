package com.example.springback.controller;

import com.example.springback.entity.Account;
import com.example.springback.entity.Account;
import com.example.springback.service.AccountService;
import com.example.springback.utils.LoginMessage;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/accounts")
@Slf4j
public class AccountController {

    @Resource
    private AccountService accountService;

    @PostMapping("/register")
    public LoginMessage registerUser(@RequestBody Account account) {
        return accountService.register(account);
    }

    @PostMapping("/login")
    public LoginMessage loginUser(@RequestBody Account account) {
        return accountService.login(account);
    }

    @GetMapping
    public List<Account> getAllAccounts(){
        log.info("Enter account controller and get all accounts at time : " + new Date());
        return accountService.getAllAccounts();
    }

    // Build create account REST API
    @PostMapping
    public Account createAccount(@RequestBody Account account){
        log.info("Enter account controller and create a  account at time : " + new Date());
        return accountService.createAccount(account);
    }

    // Build get account by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable long id){
        log.info("Enter account controller and get account by id  at time : " + new Date());
        Account account = accountService.getAccountById(id);
        return ResponseEntity.ok(account);
    }

    // Build update account REST API
    @PutMapping("{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable long id,@RequestBody Account accountDetails){
        log.info("Enter account controller and update account at time : " + new Date());
        Account updateAccount = accountService.updateAccount(id,accountDetails);
        return ResponseEntity.ok(updateAccount);
    }

    // Build delete account REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteAccount(@PathVariable long id){
        log.info("Enter account controller and delete account at time : " + new Date());
        accountService.deleteAccount(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

