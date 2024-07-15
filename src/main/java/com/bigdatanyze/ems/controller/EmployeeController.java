package com.bigdatanyze.ems.controller;

import com.bigdatanyze.ems.model.Employee;
import com.bigdatanyze.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping
	public List<Employee> getAllEmployees() {
		return employeeService.getAllEmployees();
	}

	@GetMapping("/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		return employeeService.getEmployeeById(id);
	}

	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.saveEmployee(employee);
	}

	@PutMapping("/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
		employee.setId(id);
		return employeeService.saveEmployee(employee);
	}

	@DeleteMapping("/{id}")
	public void deleteEmployee(@PathVariable Long id) {
		employeeService.deleteEmployee(id);
	}

	@GetMapping("/api/data")
	public String getData() {
		return "Data from Spring Boot";
	}

	@GetMapping("/admin/employees")
	@PreAuthorize("hasRole('ADMIN')")
	public List<Employee> getAllAdminEmployees() {
		return employeeService.getAllEmployees(); // Example implementation
	}

	@GetMapping("/manager/employees")
	@PreAuthorize("hasRole('MANAGER')")
	public List<Employee> getManagedEmployees() {
		return employeeService.getAllEmployees(); // Example implementation
	}

	@GetMapping("/employee/profile")
	@PreAuthorize("hasRole('EMPLOYEE')")
	public Employee getEmployeeProfile() {
		// Implement logic to retrieve current authenticated employee's profile
		return employeeService.getEmployeeById(1L); // Example implementation
	}
}
