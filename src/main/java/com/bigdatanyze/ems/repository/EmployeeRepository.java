package com.bigdatanyze.ems.repository;

import com.bigdatanyze.ems.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
