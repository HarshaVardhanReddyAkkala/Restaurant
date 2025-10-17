package com.example.demoRestaurant.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demoRestaurant.entity.User;
import com.example.demoRestaurant.repo.UserRepo;
@CrossOrigin(origins ="http://localhost:3000" ,allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
	UserRepo userRepo;
	
	
	@PostMapping("/register")
	public ResponseEntity<User>saveUser(@RequestBody User user) {
		return new ResponseEntity<>(userRepo.save(user),HttpStatus.CREATED);
	}
	

	   @GetMapping("/register")
	      public ResponseEntity<List<User>> getStudent(){
		    return new ResponseEntity<>(userRepo.findAll(),HttpStatus.OK);
	   }
	    
	   @PostMapping("/login")
		public ResponseEntity<String> validateUser(@RequestBody User user) {
		    Optional<User> userOptional = userRepo.findByUsername(user.getUsername());

		    if (userOptional.isPresent()) {
		        User users = userOptional.get();
		        if (users.getPassword().equals(user.getPassword())) {
		            return ResponseEntity.ok("Login successful");
		        }
		    }

		    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
		}
	   @GetMapping("/Getting/{id}")
	   	public ResponseEntity<User> getStudent(@PathVariable Long id) {
	    Optional<User> student = userRepo.findById(id);
	    	if(student.isPresent()) {
	    		return new ResponseEntity<>(student.get(),HttpStatus.OK);
	    	}{
	     	return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	      }
	    }
	   @PutMapping("/edit/{id}")
		public ResponseEntity<User> editDetails(@PathVariable Long id, @RequestBody User user) {
			Optional<User> userOptional = userRepo.findById(id);
			if (userOptional.isPresent()) {
				User updateUser = userOptional.get();
				updateUser.setFirstname(user.getFirstname());
				updateUser.setLastname(user.getLastname());
				updateUser.setUsername(user.getUsername());
				updateUser.setMobilenumber(user.getMobilenumber());
				updateUser.setEmail(user.getEmail());
				updateUser.setPassword(user.getPassword());
				 User savedUser = userRepo.save(updateUser);
				 return ResponseEntity.ok(savedUser);

			}
			 else {
			        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			 }

		}

		@DeleteMapping("/delete/{id}")
		public ResponseEntity<String> deleteUser(@PathVariable Long id) {

			if (userRepo.existsById(id)) {// if it's exist in the data list
				userRepo.deleteById(id); // delete that user
				return ResponseEntity.ok("Your User Details " + id + "is successfully deleted");

			} else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Your User details is not found");
			}

		}

		
}
