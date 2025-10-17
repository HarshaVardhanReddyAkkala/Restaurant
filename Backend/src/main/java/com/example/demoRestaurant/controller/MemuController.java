package com.example.demoRestaurant.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demoRestaurant.entity.Memu;
import com.example.demoRestaurant.repo.MemuRepo;
@CrossOrigin(origins ="http://localhost:3000" ,allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class MemuController {
	
	@Autowired
	MemuRepo memuRepo;
	@PostMapping("/memu")
	public ResponseEntity<Memu>saveMemu(@RequestBody Memu memu) {
		return new ResponseEntity<>(memuRepo.save(memu),HttpStatus.CREATED);
		
		
	}
	
	@GetMapping("/memu")
	public ResponseEntity<List<Memu>> getMemu(){
		return new ResponseEntity<>(memuRepo.findAll(),HttpStatus.OK);
		
	}
	
	
}
