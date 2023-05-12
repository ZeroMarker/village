package com.example.springback.controller;

import com.example.springback.entity.Info;
import com.example.springback.service.InfoService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/infos")
@Slf4j
public class InfoController {
    @Resource
    private InfoService infoService;

    @GetMapping
    public List<Info> getAllInfos(){
        log.info("Enter info controller and get all infos at time : " + new Date());
        return infoService.getAllInfos();
    }

    // Build create info REST API
    @PostMapping
    public Info createInfo(@RequestBody Info info){
        log.info("Enter info controller and create a  info at time : " + new Date());
        return infoService.createInfo(info);
    }

    // Build get info by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Info> getInfoById(@PathVariable long id){
        log.info("Enter info controller and get info by id  at time : " + new Date());
        Info info = infoService.getInfoById(id);
        return ResponseEntity.ok(info);
    }

    // Build update info REST API
    @PutMapping("{id}")
    public ResponseEntity<Info> updateInfo(@PathVariable long id,@RequestBody Info infoDetails){
        log.info("Enter info controller and update info at time : " + new Date());
        Info updateInfo = infoService.updateInfo(id,infoDetails);
        return ResponseEntity.ok(updateInfo);
    }

    // Build delete info REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteInfo(@PathVariable long id){
        log.info("Enter info controller and delete info at time : " + new Date());
        infoService.deleteInfo(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    @GetMapping("/rate")
    public String rateInfo() throws IOException {
        return infoService.rateInfo();
    }
    @GetMapping("/rerate")
    public String repeatRate() throws IOException {
        return infoService.repeatRate();
    }
    @GetMapping("/clear")
    public String clearRate() throws IOException {
        return infoService.clearRate();
    }

}

