package com.motoworld.motoworld_backend.response;

public class ApiResponse {
    private String message;
    private String token;

    public ApiResponse(String message) {
        this.message = message;
    }

    public ApiResponse(String message, String token) {
        this.message = message;
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public String getToken() {
        return token;
    }
}
