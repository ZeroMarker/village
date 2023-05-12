package com.example.springback.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "model")
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "modelId")
    private Long modelId;

    @Column(name = "modelName")
    private String modelName;

    @Column(name = "modelDescription", columnDefinition = "TEXT")
    private String modelDescription;

    @Column(name = "modelContent", columnDefinition = "TEXT")
    private String modelContent;
}
