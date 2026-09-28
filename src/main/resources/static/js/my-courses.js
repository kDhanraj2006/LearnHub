const container = document.getElementById("myCoursesContainer");

const email = localStorage.getItem("loggedInEmail");

if (!email) {

    container.innerHTML = `
        <p>Please login to view your courses.</p>
    `;

} else {

    fetch("/api/my-courses?email=" + encodeURIComponent(email))
        .then(response => response.json())
        .then(courses => {

            if (courses.length === 0) {

                container.innerHTML = `
                    <p>You have not enrolled in any course yet.</p>
                `;

                return;
            }

            courses.forEach(course => {

                const card = document.createElement("div");

                card.className = "course-card";

                card.innerHTML = `
                    <h2>${course.course_title}</h2>
                    <p>Course ID: ${course.course_id}</p>
                    <a href="learning.html" class="btn">
                        Start Learning
                    </a>
                `;

                container.appendChild(card);

            });

        })
        .catch(error => {

            console.error(error);

            container.innerHTML = `
                <p>Unable to load your courses.</p>
            `;

        });
}