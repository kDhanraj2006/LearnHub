package com.example.demo;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*") // CORS எர்ரரை சரி செய்ய
@RestController
public class CourseController {

    @GetMapping("/api/courses")
    public List<Map<String, Object>> getCourses() {
        // டேட்டாபேஸ் இல்லாமல் நேரடியாக டேட்டாவை அனுப்புகிறோம்
        return List.of(
            Map.of("id", 1, "title", "Java Full Stack", "description", "Learn Java, Spring Boot & Supabase"),
            Map.of("id", 2, "title", "Web Development", "description", "HTML, CSS, JavaScript & React"),
            Map.of("id", 3, "title", "Database Management", "description", "Master SQL and PostgreSQL")
        );
    }
}
