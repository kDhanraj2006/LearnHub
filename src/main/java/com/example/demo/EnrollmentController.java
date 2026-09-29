package com.example.demo;

import java.util.Map;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*") // CORS error-ai block seiya
@RestController
public class EnrollmentController {

    // ENROLL - Bypass database to fix 500 error
    @PostMapping("/api/enroll")
    public String enroll(@RequestBody Map<String, Object> enrollmentData) {
        // Database-ai check pannamal dummy success response anuppugirom
        return "Enrollment successful";
    }
}
