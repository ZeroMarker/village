package com.example.springback.service;

import com.example.springback.common.exception.ResourceNotFoundException;
import com.example.springback.entity.Account;
import com.example.springback.entity.Account;
import com.example.springback.repository.AccountRepository;
import com.example.springback.repository.AccountRepository;
import com.example.springback.utils.LoginMessage;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class AccountService {
    @Resource
    private AccountRepository accountRepository;

    public LoginMessage register(Account account) {
        accountRepository.save(account);
        return new LoginMessage("注册成功", Boolean.TRUE);
    }
    
    public LoginMessage  login(Account account) {
        Account account1 = accountRepository.findOneByEmail(account.getEmail());
        if (account1 != null) {
            String password = account.getPassword();
            String encodedPassword = account1.getPassword();
            boolean isPwdRight = password.equals(encodedPassword);
            if (isPwdRight) {
                Optional<Account> account2 = Optional.ofNullable(accountRepository.findOneByEmailAndPassword(account.getAccountName(), encodedPassword));
                if (account2.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } 
                else {
                    return new LoginMessage("Login Failed", false);
                }
            } 
            else {

                return new LoginMessage("password Not Match", false);
            }
        }
        else {
            return new LoginMessage("Email not exits", false);
        }
    }

    public List<Account> getAllAccounts(){
        log.info("Enter account service and get all accounts at time : " + new Date().toString());
        return accountRepository.findAll();
    }

    // Build create account REST API
    public Account createAccount(Account account){
        log.info("Enter account service and create a account at time : " + new Date().toString());
        return accountRepository.save(account);
    }

    // Build get account by id REST API
    public Account getAccountById(long id){
        log.info("Enter account service and get a account by id at time : " + new Date().toString());
        Account account = accountRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Account not exist with id" + id));
        return account;
    }

    // Build update account REST API
    public Account updateAccount(long id, Account accountDetails){
        log.info("Enter account service and update account at time : " + new Date().toString());
        Account updateAccount = accountRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Account not exist with id"+id));
        updateAccount.setAccountName(accountDetails.getAccountName());
        updateAccount.setEmail(accountDetails.getEmail());
        updateAccount.setPassword(accountDetails.getPassword());

        accountRepository.save(updateAccount);
        return updateAccount;
    }

    // Build delete account REST API
    public void deleteAccount(long id){
        log.info("Enter account service and delete a account at time : " + new Date().toString());
        Account account = accountRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Account not exist with id"+id));
        accountRepository.delete(account);
    }
}