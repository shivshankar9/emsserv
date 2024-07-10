package com.bigdatanyze.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class EmsApplication {
	public static void main(String[] args) {
		SpringApplication.run(EmsApplication.class, args);
	}
}
