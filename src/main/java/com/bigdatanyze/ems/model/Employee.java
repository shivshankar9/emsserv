package com.bigdatanyze.ems.model;

import jakarta.persistence.*;

@Entity
public class Employee {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false) // firstName cannot be null
    private String firstName;

    @Column(nullable = false) // lastName cannot be null
    private String lastName;

    @Column(nullable = false) // role cannot be null
    private String role;

    @Column(nullable = false) // salary cannot be null
    private Long salary;

    @Column(nullable = false) // address cannot be null
    private String address;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
