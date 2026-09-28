package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "http://localhost:8080")
@RestController
public class CourseController {

    private final JdbcTemplate jdbcTemplate;

    public CourseController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/api/courses")
    public List<Map<String, Object>> getCourses() {

        String sql = "SELECT * FROM courses";

        return jdbcTemplate.queryForList(sql);
    }
}