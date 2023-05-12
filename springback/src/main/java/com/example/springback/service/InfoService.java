package com.example.springback.service;


import com.example.springback.common.exception.ResourceNotFoundException;
import com.example.springback.entity.Info;
import com.example.springback.repository.InfoRepository;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.python.util.PythonInterpreter;

import java.io.*;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class InfoService {
    @Resource
    private InfoRepository infoRepository;

    public List<Info> getAllInfos() {
        log.info("Enter info service and get all infos at time : " + new Date().toString());
        return infoRepository.findAll();
    }

    // Build create info REST API
    public Info createInfo(Info info) {
        log.info("Enter info service and create a info at time : " + new Date().toString());
        return infoRepository.save(info);
    }

    // Build get info by id REST API
    public Info getInfoById(long id) {
        log.info("Enter info service and get a info by id at time : " + new Date().toString());
        Info info = infoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Info not exist with id" + id));
        return info;
    }

    // Build update info REST API
    public Info updateInfo(long id, Info infoDetails) {
        log.info("Enter info service and update info at time : " + new Date().toString());
        Info updateInfo = infoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Info not exist with id" + id));
        updateInfo.setInfoName(infoDetails.getInfoName());


        infoRepository.save(updateInfo);
        return updateInfo;
    }

    // Build delete info REST API
    public void deleteInfo(long id) {
        log.info("Enter info service and delete a info at time : " + new Date().toString());
        Info info = infoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Info not exist with id" + id));
        infoRepository.delete(info);
    }

    public String rateInfo() throws IOException {
        String pythonScriptPath = "C:/Users/ttft3/web/village/springback/src/main/resources/db.py";
        String fetching = "python " + pythonScriptPath;
        String[] commandToExecute = new String[]{"cmd.exe", "/c", fetching};
        Runtime.getRuntime().exec(commandToExecute);
        return "Rate Done";
    }
    public String repeatRate() throws IOException {
        String pythonScriptPath = "C:/Users/ttft3/web/village/springback/src/main/resources/dc.py";
        String fetching = "python " + pythonScriptPath;
        String[] commandToExecute = new String[]{"cmd.exe", "/c", fetching};
        Runtime.getRuntime().exec(commandToExecute);
        return "Rate Again Done";
    }
    public String clearRate() throws IOException {
        String pythonScriptPath = "C:/Users/ttft3/web/village/springback/src/main/resources/dd.py";
        String fetching = "python " + pythonScriptPath;
        String[] commandToExecute = new String[]{"cmd.exe", "/c", fetching};
        Runtime.getRuntime().exec(commandToExecute);
        return "Clear Done";
    }
}
