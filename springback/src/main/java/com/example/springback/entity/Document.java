package com.example.springback.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "document")
public class Document {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "documentId")
    private Long documentId;

    @Column(name = "title")
    private String title;

    @Column(name = "time")
    private String time;

    @Column(name = "documentContent", columnDefinition = "TEXT", length = 100000)
    private String documentContent;
}
