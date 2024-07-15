//package com.bigdatanyze.ems.service;
//
//import com.bigdatanyze.ems.model.User;
//import com.bigdatanyze.ems.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//public class userService {
//
//	@Autowired
//	private UserRepository userRepository;
//
//	@Autowired
//	private PasswordEncoder passwordEncoder;
//
//	public User findByEmail(String email) {
//		return userRepository.findByEmail(email).orElse(null);
//	}
//
//	public void saveUser(User user) {
//		user.setPassword(passwordEncoder.encode(user.getPassword()));
//		userRepository.save(user);
//	}
//}
