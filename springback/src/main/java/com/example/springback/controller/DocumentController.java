package com.example.springback.controller;

import com.example.springback.entity.Document;
import com.example.springback.service.DocumentService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/documents")
@Slf4j
public class DocumentController {
    @Resource
    private DocumentService documentService;

    @GetMapping
    public List<Document> getAllDocuments(){
        log.info("Enter document controller and get all documents at time : " + new Date());
        return documentService.getAllDocuments();
    }

    // Build create document REST API
    @PostMapping
    public Document createDocument(@RequestBody Document document){
        log.info("Enter document controller and create a  document at time : " + new Date());
        return documentService.createDocument(document);
    }

    // Build get document by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Document> getDocumentById(@PathVariable long id){
        log.info("Enter document controller and get document by id  at time : " + new Date());
        Document document = documentService.getDocumentById(id);
        return ResponseEntity.ok(document);
    }

    // Build update document REST API
    @PutMapping("{id}")
    public ResponseEntity<Document> updateDocument(@PathVariable long id,@RequestBody Document documentDetails){
        log.info("Enter document controller and update document at time : " + new Date());
        Document updateDocument = documentService.updateDocument(id,documentDetails);
        return ResponseEntity.ok(updateDocument);
    }

    // Build delete document REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteDocument(@PathVariable long id){
        log.info("Enter document controller and delete document at time : " + new Date());
        documentService.deleteDocument(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
