package com.backend.dto;


import com.backend.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationRequest {

    private String username;
    private String password;
}
