package com.bigdatanyze.ems.controller;

import com.bigdatanyze.ems.model.Role;
import com.bigdatanyze.ems.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/role")
public class RoleController {

	@Autowired
	private RoleService roleService;

	@GetMapping
	public List<Role> getAllRoles() {
		return roleService.getAllRoles();
	}

	@GetMapping("/{id}")
	public Role getRoleById(@PathVariable Long id) {
		return roleService.getRoleById(id);
	}

	@PostMapping
	public Role createRole(@RequestBody Role role) {
		return roleService.saveRole(role);
	}

	@PutMapping("/{id}")
	public Role updateRole(@PathVariable Long id, @RequestBody Role role) {
		role.setRoleId(id);
		return roleService.saveRole(role);
	}

	@DeleteMapping("/{id}")
	public void deleteRole(@PathVariable Long id) {
		roleService.deleteRole(id);
	}

	@GetMapping("/api/data")
	public String getData() {
		return "Data from Spring Boot";
	}

	@GetMapping("/admin/employees")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Role> getAllAdminRoles() {
		return roleService.getAllRoles(); // Example implementation
	}

	@GetMapping("/manager/employees")
	@PreAuthorize("hasRole('MANAGER')")
	public List<Role> getManagedRoles() {
		return roleService.getAllRoles(); // Example implementation
	}

	@GetMapping("/employee/profile")
	@PreAuthorize("hasRole('EMPLOYEE')")
	public Role getEmployeeProfile() {
		// Implement logic to retrieve current authenticated employee's profile
		return roleService.getRoleById(1L); // Example implementation
	}
}
