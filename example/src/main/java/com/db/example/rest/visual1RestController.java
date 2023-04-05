package com.db.example.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.example.service.visual1Service;
import com.db.example.visual1.nhannual;
import com.db.example.visual1.visual1;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
public class visual1RestController {
    
    visual1Service Visual1Service;



    @Autowired
    public visual1RestController(visual1Service Visual1Service){
        this.Visual1Service = Visual1Service;
    }

    @GetMapping("/visual1")
    public List<visual1> getVisual(){
        return Visual1Service.getVisual();
    }
    @GetMapping("/nhannual")
    public List<nhannual> geNhannuals(){
        return Visual1Service.geNhannuals();
    }
 
}