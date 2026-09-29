package com.example.demo;

import java.util.Map;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    // REGISTER - Bypass database
    @PostMapping("/api/register")
    public String register(@RequestBody Map<String, String> user) {
        return "Registration successful";
    }

    // LOGIN - Bypass database
    @PostMapping("/api/login")
    public String login(@RequestBody Map<String, String> user) {
        return "Login successful";
    }
}
