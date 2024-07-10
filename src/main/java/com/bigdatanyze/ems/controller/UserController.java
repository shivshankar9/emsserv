///*
//package com.bigdatanyze.ems.controller;
//
//import com.bigdatanyze.ems.model.User;
//import com.bigdatanyze.ems.service.CustomUserDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//	@Autowired
//	private CustomUserDetailsService customUserDetailsService;
//
//	@PostMapping("/register")
//	public ResponseEntity<String> registerUser(@RequestBody User user) {
//		// Check if the user already exists
//		if (customUserDetailsService.findByEmail(user.getEmail()).isPresent()) {
//			return ResponseEntity.badRequest().body("Email already in use");
//		}
//
//		// Register the user with a default role (e.g., ROLE_EMPLOYEE)
//		customUserDetailsService.registerUser(user.getFullName(), user.getEmail(), user.getPassword(), "ROLE_EMPLOYEE");
//		return ResponseEntity.ok("User registered successfully");
//	}
//
//	@GetMapping("/verify")
//	public ResponseEntity<String> verifyUser(@RequestParam String email) {
//		// Check if the user exists
//		if (customUserDetailsService.findByEmail(email).isPresent()) {
//			return ResponseEntity.ok("User exists");
//		}
//		return ResponseEntity.notFound().build();
//	}
//}
//*/
