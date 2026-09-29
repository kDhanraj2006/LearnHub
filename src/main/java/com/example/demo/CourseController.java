package com.example.demo;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*") // CORS error-ai block seiya
@RestController
public class CourseController {

    // 1. All Courses load aagum API
    @GetMapping("/api/courses")
    public List<Map<String, Object>> getCourses() {
        return List.of(
            Map.of("id", 1, "title", "Java Full Stack", "description", "Learn Java, Spring Boot & Supabase"),
            Map.of("id", 2, "title", "Web Development", "description", "HTML, CSS, JavaScript & React"),
            Map.of("id", 3, "title", "Database Management", "description", "Master SQL and PostgreSQL")
        );
    }

    // 2. Enrolled "My Courses" load aagum API (Ippo ulla error-ai fix panna)
    // Kurippu: Unga frontend-la enna endpoint name irukko adhai '@GetMapping'la kudukavendum
    @GetMapping("/api/my-courses") 
    public List<Map<String, Object>> getMyCourses() {
        // Enrolled courses-kaga dummy data anuppugirom
        return List.of(
            Map.of("id", 1, "title", "Java Full Stack", "description", "Learn Java, Spring Boot & Supabase")
        );
    }
}
