package com.example.springback.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "info")
public class Info {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "infoId")
    private Long infoId;

    @Column(name = "infoName")
    private String infoName;

    @Column(name = "cable")
    private double cable;

    @Column(name = "broadband")
    private double broadband;

    @Column(name = "mobile")
    private double mobile;

    @Column(name = "agriculture")
    private double agriculture;

    @Column(name = "traffic")
    private double traffic;

    @Column(name = "irrigation")
    private double irrigation;

    @Column(name = "power")
    private double power;

    @Column(name = "logistics")
    private double logistics;

    @Column(name = "government")
    private double government;

    @Column(name = "online")
    private double online;

    @Column(name = "education")
    private double education;

    @Column(name = "medical")
    private double medical;

    @Column(name = "soil")
    private double soil;

    @Column(name = "air")
    private double air;

    @Column(name = "water")
    private double water;

    @Column(name = "emergency")
    private double emergency;

    @Column(name = "technology")
    private double technology;

    @Column(name = "data")
    private double data;

//    @ManyToOne
//    @JoinColumn(name = "accountId")
//    private Account account;
}
