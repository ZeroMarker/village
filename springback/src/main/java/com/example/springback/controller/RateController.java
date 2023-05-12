package com.example.springback.controller;

import com.example.springback.entity.Rate;
import com.example.springback.service.RateService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/rates")
@Slf4j
public class RateController {
    @Resource
    private RateService rateService;

    @GetMapping
    public List<Rate> getAllRates(){
        log.info("Enter rate controller and get all rates at time : " + new Date());
        return rateService.getAllRates();
    }

    // Build create rate REST API
    @PostMapping
    public Rate createRate(@RequestBody Rate rate){
        log.info("Enter rate controller and create a  rate at time : " + new Date());
        return rateService.createRate(rate);
    }

    // Build get rate by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Rate> getRateById(@PathVariable long id){
        log.info("Enter rate controller and get rate by id  at time : " + new Date());
        Rate rate = rateService.getRateById(id);
        return ResponseEntity.ok(rate);
    }

    // Build update rate REST API
    @PutMapping("{id}")
    public ResponseEntity<Rate> updateRate(@PathVariable long id, @RequestBody Rate rateDetails){
        log.info("Enter rate controller and update rate at time : " + new Date());
        Rate updateRate = rateService.updateRate(id, rateDetails);
        return ResponseEntity.ok(updateRate);
    }

    // Build delete rate REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteRate(@PathVariable long id){
        log.info("Enter rate controller and delete rate at time : " + new Date());
        rateService.deleteRate(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
