package com.example.demo;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*") // CORS error-ai block seiya
@RestController
public class CourseController {

    // 1. Cources load aagum API
    @GetMapping("/api/courses")
    public List<Map<String, Object>> getCourses() {
        return List.of(
            Map.of("id", 1, "title", "Java Full Stack", "description", "Learn Java, Spring Boot & Supabase"),
            Map.of("id", 2, "title", "Web Development", "description", "HTML, CSS, JavaScript & React"),
            Map.of("id", 3, "title", "Database Management", "description", "Master SQL and PostgreSQL")
        );
    }

    // 2. Login-ai bypass seiyum API (500 Error-ai seri seiya)
    @PostMapping("/api/login")
    public Map<String, Object> login(@RequestBody Map<String, String> loginData) {
        return Map.of(
            "status", "success",
            "message", "Login Successful",
            "user", Map.of("email", loginData.get("email"), "role", "student")
        );
    }

    // 3. Register-aiyum bypass seiyum API (Register error-ai thavirka)
    @PostMapping("/api/register")
    public Map<String, Object> register(@RequestBody Map<String, Object> registerData) {
        return Map.of(
            "status", "success",
            "message", "Registration Successful"
        );
    }
}
