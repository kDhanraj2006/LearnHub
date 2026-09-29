package com.example.demo;

import java.util.Map;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    private final JdbcTemplate jdbcTemplate;

    public UserController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // REGISTER
    @PostMapping("/api/register")
    public String register(@RequestBody Map<String, String> user) {

        String name = user.get("name");
        String email = user.get("email");
        String password = user.get("password");

        String sql = """
                INSERT INTO users (name, email, password)
                VALUES (?, ?, ?)
                """;

        jdbcTemplate.update(sql, name, email, password);

        return "Registration successful";
    }

    @PostMapping("/api/login")
    public String login(@RequestBody Map<String, String> user) {

        String email = user.get("email");
        String password = user.get("password");

        String sql = """
                SELECT 1
                FROM users
                WHERE email = ? AND password = ?
                LIMIT 1
                """;

        List<Integer> result = jdbcTemplate.query(
                sql,
                (rs, rowNum) -> rs.getInt(1),
                email,
                password
        );

        if (!result.isEmpty()) {
            return "Login successful";
        }

        return "Invalid email or password";
    }