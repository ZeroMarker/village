package com.example.springback;

import com.example.springback.entity.Document;
import com.example.springback.service.DocumentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@SpringBootTest
class SpringbackApplicationTests {

    @Autowired
    private DocumentService documentRepository;

    @Test
    void contextLoads() {
//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        System.out.println("Password");
//        System.out.println(encoder.encode("123456"));
        List<Document> results = documentRepository.getDocumentsByTitle("农业");
        System.out.println(results);
    }

}
