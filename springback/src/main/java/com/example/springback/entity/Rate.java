package com.example.springback.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.relational.core.mapping.Table;

@Data
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
@Entity
@Table(name = "rate")
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rateId")
    private Long rateId;

    @Column(name = "rateName")
    private String rateName;

    @Column(name = "network")
    private double network;

    @Column(name = "industry")
    private double industry;

    @Column(name = "service")
    private double service;

    @Column(name = "ecosystem")
    private double ecosystem;

    @Column(name = "security")
    private double security;

    @Column(name = "overall")
    private double overall;
}
