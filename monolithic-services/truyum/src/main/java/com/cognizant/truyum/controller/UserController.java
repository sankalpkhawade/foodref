package com.cognizant.truyum.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.truyum.TruyumApplication;
import com.cognizant.truyum.exception.UserAlreadyExistsException;
import com.cognizant.truyum.model.User;


@RestController
@RequestMapping("/users") 
public class UserController {
	private static final Logger LOGGER = LoggerFactory.getLogger(TruyumApplication.class);
	
	@Autowired
	InMemoryUserDetailsManager inMemoryUserDetailsManager;
	
	@PostMapping
	public boolean signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
		
			if(inMemoryUserDetailsManager.userExists(user.getUsername())){
				return false;
			}
			else{
				inMemoryUserDetailsManager.createUser(
						org.springframework.security.core.userdetails.User.withUsername(user.getUsername())
						.password(new BCryptPasswordEncoder().encode(user.getPassword()))
						.roles("USER").build());
				return true;
			}

	}


}
