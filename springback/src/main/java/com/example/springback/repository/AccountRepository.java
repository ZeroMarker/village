package com.example.springback.repository;

import com.example.springback.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
//    Account findByAccountNameOrEmail(String text);
    Account findByAccountName(String text);
    Account findOneByEmailAndPassword(String email, String password);

    Account findOneByEmail(String email);
}
