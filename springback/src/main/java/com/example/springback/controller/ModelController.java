package com.example.springback.controller;

import com.example.springback.entity.Model;
import com.example.springback.service.ModelService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/models")
@Slf4j
public class ModelController {
    @Resource
    private ModelService modelService;

    @GetMapping
    public List<Model> getAllModels(){
        log.info("Enter model controller and get all models at time : " + new Date());
        return modelService.getAllModels();
    }

    // Build create model REST API
    @PostMapping
    public Model createModel(@RequestBody Model model){
        log.info("Enter model controller and create a  model at time : " + new Date());
        return modelService.createModel(model);
    }

    // Build get model by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Model> getModelById(@PathVariable long id){
        log.info("Enter model controller and get model by id  at time : " + new Date());
        Model model = modelService.getModelById(id);
        return ResponseEntity.ok(model);
    }

    // Build update model REST API
    @PutMapping("{id}")
    public ResponseEntity<Model> updateModel(@PathVariable long id,@RequestBody Model modelDetails){
        log.info("Enter model controller and update model at time : " + new Date());
        Model updateModel = modelService.updateModel(id,modelDetails);
        return ResponseEntity.ok(updateModel);
    }

    // Build delete model REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteModel(@PathVariable long id){
        log.info("Enter model controller and delete model at time : " + new Date());
        modelService.deleteModel(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
