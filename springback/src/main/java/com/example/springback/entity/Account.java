package com.example.springback.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.relational.core.mapping.Table;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accountId")
    private Long accountId;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "accountName", unique = true)
    private String accountName;

    @Column(name = "password")
    private String password;

//    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
//    private List<Info> infos;
}
