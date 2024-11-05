package com.backend.dto;

import com.backend.enums.UserRole;
import lombok.Data;

@Data
public class SignupRequest {

    private String email;
    private String password;
    private String name;
    private UserRole userRole;
}
