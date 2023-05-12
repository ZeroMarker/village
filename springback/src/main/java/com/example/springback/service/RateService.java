package com.example.springback.service;

import com.example.springback.common.exception.ResourceNotFoundException;
import com.example.springback.entity.Rate;
import com.example.springback.repository.RateRepository;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.python.util.PythonInterpreter;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class RateService {
    @Resource
    private RateRepository rateRepository;

    public List<Rate> getAllRates(){
        log.info("Enter rate service and get all ratees at time : " + new Date());
        return rateRepository.findAll();
    }

    // Build create rate REST API
    public Rate createRate(Rate rate){
        log.info("Enter rate service and create a rate at time : " + new Date());
        return rateRepository.save(rate);
    }

    // Build get rate by id REST API
    public Rate getRateById(long id){
        log.info("Enter rate service and get a rate by id at time : " + new Date());
        return rateRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Rate not exist with id" + id));
    }

    // Build update rate REST API
    public Rate updateRate(long id, Rate rateDetails){
        log.info("Enter rate service and update rate at time : " + new Date());
        Rate updateRate = rateRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Rate not exist with id"+id));
        updateRate.setRateName(rateDetails.getRateName());


        rateRepository.save(updateRate);
        return updateRate;
    }

    // Build delete rate REST API
    public void deleteRate(long id){
        log.info("Enter rate service and delete a rate at time : " + new Date());
        Rate rate = rateRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Rate not exist with id"+id));
        rateRepository.delete(rate);
    }
}
