package com.example.springback.service;

import com.example.springback.common.exception.ResourceNotFoundException;
import com.example.springback.entity.Model;
import com.example.springback.repository.ModelRepository;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class ModelService {
    @Resource
    private ModelRepository modelRepository;

    public List<Model> getAllModels(){
        log.info("Enter model service and get all models at time : " + new Date().toString());
        return modelRepository.findAll();
    }

    // Build create model REST API
    public Model createModel(Model model){
        log.info("Enter model service and create a model at time : " + new Date().toString());
        return modelRepository.save(model);
    }

    // Build get model by id REST API
    public Model getModelById(long id){
        log.info("Enter model service and get a model by id at time : " + new Date().toString());
        Model model = modelRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Model not exist with id" + id));
        return model;
    }

    // Build update model REST API
    public Model updateModel(long id, Model modelDetails){
        log.info("Enter model service and update model at time : " + new Date().toString());
        Model updateModel = modelRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Model not exist with id"+id));
        updateModel.setModelName(modelDetails.getModelName());
        updateModel.setModelDescription(modelDetails.getModelDescription());
        updateModel.setModelContent(modelDetails.getModelContent());

        modelRepository.save(updateModel);
        return updateModel;
    }

    // Build delete model REST API
    public void deleteModel(long id){
        log.info("Enter model service and delete a model at time : " + new Date().toString());
        Model model = modelRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Model not exist with id"+id));
        modelRepository.delete(model);
    }
}
