package com.motoworld.motoworld_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.motoworld.motoworld_backend.dto.LoginRequest;
import com.motoworld.motoworld_backend.dto.RegisterRequest;
import com.motoworld.motoworld_backend.entity.User;
import com.motoworld.motoworld_backend.repo.UserRepository;
import com.motoworld.motoworld_backend.response.ApiResponse;
import com.motoworld.motoworld_backend.service.JwtService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest req) {
        if (userRepository.existsByEmail(req.getEmail())) {
            return ResponseEntity.badRequest().body(new ApiResponse("Email already registered"));
        }

        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setRole(req.getRole());
        userRepository.save(user);

        return ResponseEntity.ok(new ApiResponse("Registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest req) {
        // ✅ FIXED: handle Optional<User>
        User user = userRepository.findByEmail(req.getEmail())
                .orElse(null);

        if (user == null || !passwordEncoder.matches(req.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body(new ApiResponse("Invalid email or password"));
        }

        System.out.println("user details " + user.getEmail() + " name : " + user.getName() + " password : " + user.getPassword() + " role : " + user.getRole());
        String token = jwtService.generateToken(user.getEmail());
        String role = user.getRole();
        return ResponseEntity.ok(new ApiResponse("Login successful", token, role));
    }
}
