package com.motoworld.motoworld_backend.response;

public class ApiResponse {
    private String message;
    private String token;
    private String role;

    public ApiResponse(String message) {
        this.message = message;
    }

    public ApiResponse(String message, String token, String role) {
        this.message = message;
        this.token = token;
        this.role = role;
    }

    public String getMessage() {
        return message;
    }

    public String getToken() {
        return token;
    }
    
    public String getRole() {
    	return role;
    }
}
