//package com.bigdatanyze.ems.service;
//
//import com.bigdatanyze.ems.model.User;
//import com.bigdatanyze.ems.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//import java.util.Set;
//
//@Service
//public class CustomUserDetailsService {
//
//	@Autowired
//	private UserRepository userRepository;
//
//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
//
//	public Optional<User> findByEmail(String email) {
//		return userRepository.findByEmail(email);
//	}
//
//	public void registerUser(String fullName, String email, String password, String role) {
//		User newUser = new User();
//		newUser.setFullName(fullName);
//		newUser.setEmail(email);
//		newUser.setPassword(passwordEncoder.encode(password)); // Encode password before saving
//		newUser.setRoles((Set<String>) List.of(role)); // Set user role(s) - Here assuming a single role for simplicity
//		userRepository.save(newUser);
//	}
//}
