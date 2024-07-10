package com.bigdatanyze.ems.model;

import jakarta.persistence.*;
import lombok.Getter;

@Entity
public class Employee {
    // Getters and Setters
    @Getter
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Column(nullable = false) // firstName cannot be null
    private String firstName;

    @Getter
    @Column(nullable = false) // lastName cannot be null
    private String lastName;

    @Column(nullable = false) // role cannot be null
    private String phoneNo;



    @Column(nullable = false) // role cannot be null
    private String emailId;


    @Getter
    @Column(nullable = false) // role cannot be null
    private String role;

    @Getter
    @Column(nullable = false) // salary cannot be null
    private Long salary;

    @Getter
    @Column(nullable = false) // address cannot be null
    private String address;

    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
}
