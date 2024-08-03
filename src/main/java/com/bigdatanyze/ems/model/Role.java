package com.bigdatanyze.ems.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long roleId;

	@Column(nullable = false, unique = true)
	private String roleName;

	@Column
	private String description;  // Optional field for role descriptions
}
