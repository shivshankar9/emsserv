//package com.bigdatanyze.ems.model;
//
//import lombok.Getter;
//
//import javax.persistence.*;
//import java.util.Set;
//
//@Getter
//@Entity
//@Table(name = "users") // Define the table name explicitly
//public class User {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id;
//
//	@Column(name = "full_name", nullable = false)
//	private String fullName;
//
//	@Column(nullable = false, unique = true)
//	private String email;
//
//	@Column(nullable = false)
//	private String password;
//
//	@ElementCollection(fetch = FetchType.EAGER)
//	@CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
//	@Column(name = "role")
//	private Set<String> roles;
//
//	// Constructors, Getters, and Setters
//
//	public User() {
//		// Default constructor required by JPA
//	}
//
//	public User(String fullName, String email, String password, Set<String> roles) {
//		this.fullName = fullName;
//		this.email = email;
//		this.password = password;
//		this.roles = roles;
//	}
//
//	// Getters and Setters for all fields
//
//	public void setId(Long id) {
//		this.id = id;
//	}
//
//	public void setFullName(String fullName) {
//		this.fullName = fullName;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public void setRoles(Set<String> roles) {
//		this.roles = roles;
//	}
//}
