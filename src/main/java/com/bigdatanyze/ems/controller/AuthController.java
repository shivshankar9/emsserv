//package com.bigdatanyze.ems.controller;
//
//import com.bigdatanyze.ems.model.User;
//import com.bigdatanyze.ems.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//
//@Controller
//public class AuthController {
//
//	@Autowired
//	private UserService userService;
//
//	@GetMapping("/login")
//	public String login() {
//		return "login";
//	}
//
//	@GetMapping("/register")
//	public String register(Model model) {
//		model.addAttribute("user", new User());
//		return "register";
//	}
//
//	@PostMapping("/register")
//	public String register(User user) {
//		userService.saveUser(user);
//		return "redirect:/login";
//	}
//}
