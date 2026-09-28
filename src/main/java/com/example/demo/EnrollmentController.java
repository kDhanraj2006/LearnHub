package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class EnrollmentController {

    private final JdbcTemplate jdbcTemplate;

    public EnrollmentController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // ENROLL COURSE
    @PostMapping("/api/enroll")
    public String enroll(@RequestBody Map<String, String> enrollment) {

        String email = enrollment.get("email");
        String courseId = enrollment.get("courseId");
        String courseTitle = enrollment.get("courseTitle");

        String sql = """
                INSERT INTO enrollments
                (user_email, course_id, course_title)
                VALUES (?, ?, ?)
                """;

        jdbcTemplate.update(
                sql,
                email,
                Integer.parseInt(courseId),
                courseTitle
        );

        return "Enrollment successful";
    }

    // GET MY COURSES
    @GetMapping("/api/my-courses")
    public List<Map<String, Object>> getMyCourses(
            @RequestParam String email) {

        String sql = """
                SELECT id, course_id, course_title
                FROM enrollments
                WHERE user_email = ?
                """;

        return jdbcTemplate.queryForList(sql, email);
    }
}