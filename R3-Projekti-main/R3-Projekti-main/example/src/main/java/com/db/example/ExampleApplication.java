package com.db.example;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;



@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })   // poistaa mm Javan kirjautumissivun
public class ExampleApplication {


	public static void main(String[] args) {
		SpringApplication.run(ExampleApplication.class, args);
	}

}