package com.example.springback.service;

import com.example.springback.common.exception.ResourceNotFoundException;
import com.example.springback.entity.Document;
import com.example.springback.repository.DocumentRepository;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class DocumentService {
    @Resource
    private DocumentRepository documentRepository;

    public List<Document> getAllDocuments(){
        log.info("Enter document service and get all documents at time : " + new Date().toString());
        return documentRepository.findAll();
    }

    // Build create document REST API
    public Document createDocument(Document document){
        log.info("Enter document service and create a document at time : " + new Date().toString());
        return documentRepository.save(document);
    }

    public List<Document> getDocumentsByTitle(String title) {
        return documentRepository.findAllByTitleContaining(title);
    }

    // Build get document by id REST API
    public Document getDocumentById(long id){
        log.info("Enter document service and get a document by id at time : " + new Date().toString());
        Document document = documentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Document not exist with id" + id));
        return document;
    }

    // Build update document REST API
    public Document updateDocument(long id, Document documentDetails){
        log.info("Enter document service and update document at time : " + new Date().toString());
        Document updateDocument = documentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Document not exist with id"+id));
        updateDocument.setTitle(documentDetails.getTitle());
        updateDocument.setDocumentContent(documentDetails.getDocumentContent());

        documentRepository.save(updateDocument);
        return updateDocument;
    }

    // Build delete document REST API
    public void deleteDocument(long id){
        log.info("Enter document service and delete a document at time : " + new Date().toString());
        Document document = documentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Document not exist with id"+id));
        documentRepository.delete(document);
    }
}