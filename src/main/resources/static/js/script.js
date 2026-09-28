// ========================================
// LearnHub - Main JavaScript
// ========================================

console.log("LearnHub JavaScript connected!");


// ========================================
// COURSE DATA
// ========================================

const courses = {

    java: {
        title: "Java Full Stack",

        description:
            "Learn Java, HTML, CSS, JavaScript and MySQL through this course.",

        topics: [
            "Java Programming",
            "HTML & CSS",
            "JavaScript",
            "MySQL"
        ]
    },

    python: {
        title: "Python Programming",

        description:
            "Learn Python programming from basic concepts.",

        topics: [
            "Python Basics",
            "Variables and Data Types",
            "Conditional Statements",
            "Loops",
            "Functions"
        ]
    },

    web: {
        title: "Web Development",

        description:
            "Learn HTML, CSS and JavaScript for web development.",

        topics: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Web Design"
        ]
    }

};


// ========================================
// COURSE DETAILS
// ========================================

const urlParams =
    new URLSearchParams(window.location.search);

const courseId =
    urlParams.get("course");

const selectedCourse =
    courses[courseId];


const courseTitle =
    document.getElementById("courseTitle");

const courseDescription =
    document.getElementById("courseDescription");

const courseTopics =
    document.getElementById("courseTopics");


if (
    selectedCourse &&
    courseTitle &&
    courseDescription &&
    courseTopics
) {

    courseTitle.textContent =
        selectedCourse.title;

    courseDescription.textContent =
        selectedCourse.description;


    selectedCourse.topics.forEach(
        function(topic) {

            const paragraph =
                document.createElement("p");

            paragraph.textContent =
                "✓ " + topic;

            courseTopics.appendChild(
                paragraph
            );

        }
    );

}


// ========================================
// ENROLL COURSE
// ========================================

const enrollButton =
    document.getElementById("enrollButton");


if (
    enrollButton &&
    selectedCourse
) {

    enrollButton.addEventListener(
        "click",
        function() {

            localStorage.setItem(
                "enrolledCourse",
                selectedCourse.title
            );


            console.log(
                "Course enrolled:",
                selectedCourse.title
            );


            alert(
                "Successfully enrolled in " +
                selectedCourse.title
            );

        }
    );

}


// ========================================
// MY COURSES
// ========================================

const myCoursesContainer =
    document.getElementById(
        "myCoursesContainer"
    );


if (myCoursesContainer) {

    const enrolledCourse =
        localStorage.getItem(
            "enrolledCourse"
        );


    if (enrolledCourse) {

        myCoursesContainer.innerHTML = `

            <div class="course-container">

                <div class="course-card">

                    <h3>
                        ${enrolledCourse}
                    </h3>

                    <p>
                        You are enrolled in this course.
                    </p>

                    <a
                        href="learning.html"
                        class="btn">

                        Continue Learning

                    </a>

                </div>

            </div>

        `;

    }

    else {

        myCoursesContainer.innerHTML = `

            <p>
                You have not enrolled in any course yet.
            </p>

            <br>

            <a
                href="courses.html"
                class="btn">

                Browse Courses

            </a>

        `;

    }

}


// ========================================
// COURSE SEARCH
// ========================================

const searchInput =
    document.getElementById(
        "searchInput"
    );


const courseCards =
    document.querySelectorAll(
        ".course-card[data-course]"
    );


const noResult =
    document.getElementById(
        "noResult"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            const searchText =
                searchInput.value
                    .toLowerCase()
                    .trim();


            let foundCourses = 0;


            courseCards.forEach(
                function(card) {

                    const courseName =
                        card.getAttribute(
                            "data-course"
                        );


                    if (
                        courseName
                            .toLowerCase()
                            .includes(searchText)
                    ) {

                        card.style.display =
                            "block";

                        foundCourses++;

                    }

                    else {

                        card.style.display =
                            "none";

                    }

                }
            );


            if (
                foundCourses === 0 &&
                noResult
            ) {

                noResult.style.display =
                    "block";

            }

            else if (noResult) {

                noResult.style.display =
                    "none";

            }

        }
    );

}


// ========================================
// LEARNING PAGE
// ========================================

const learningTitle =
    document.getElementById(
        "learningTitle"
    );


const lessonsContainer =
    document.getElementById(
        "lessonsContainer"
    );


const progressText =
    document.getElementById(
        "progressText"
    );


const progressBar =
    document.getElementById(
        "progressBar"
    );


const completionMessage =
    document.getElementById(
        "completionMessage"
    );


if (
    learningTitle &&
    lessonsContainer &&
    progressText &&
    progressBar
) {

    const enrolledCourse =
        localStorage.getItem(
            "enrolledCourse"
        );


    if (enrolledCourse) {

        learningTitle.textContent =
            enrolledCourse;


        // ========================================
        // COURSE LESSONS
        // ========================================

        let lessons = [];


        if (
            enrolledCourse ===
            "Java Full Stack"
        ) {

            lessons = [

                "Java Introduction",

                "Java Variables and Data Types",

                "OOP Concepts in Java",

                "HTML and CSS",

                "JavaScript Basics",

                "MySQL Basics"

            ];

        }


        else if (
            enrolledCourse ===
            "Python Programming"
        ) {

            lessons = [

                "Python Introduction",

                "Variables and Data Types",

                "Conditional Statements",

                "Loops",

                "Functions",

                "Object Oriented Programming"

            ];

        }


        else if (
            enrolledCourse ===
            "Web Development"
        ) {

            lessons = [

                "HTML Introduction",

                "HTML Elements and Forms",

                "CSS Basics",

                "CSS Flexbox",

                "JavaScript Basics",

                "DOM and Events"

            ];

        }


        // ========================================
        // LOCAL STORAGE
        // ========================================

        const storageKey =
            "completedLessons_" +
            enrolledCourse;


        let completedLessons =
            JSON.parse(
                localStorage.getItem(
                    storageKey
                )
            ) || [];


        // ========================================
        // DISPLAY LESSONS
        // ========================================

        lessonsContainer.innerHTML = "";


        lessons.forEach(
            function(lesson, index) {

                const lessonDiv =
                    document.createElement(
                        "div"
                    );


                lessonDiv.className =
                    "lesson";


                const checkbox =
                    document.createElement(
                        "input"
                    );


                checkbox.type =
                    "checkbox";


                checkbox.checked =
                    completedLessons.includes(
                        index
                    );


                const label =
                    document.createElement(
                        "label"
                    );


                label.textContent =
                    lesson;


                lessonDiv.appendChild(
                    checkbox
                );


                lessonDiv.appendChild(
                    label
                );


                lessonsContainer.appendChild(
                    lessonDiv
                );


                // ========================================
                // CHECKBOX EVENT
                // ========================================

                checkbox.addEventListener(
                    "change",
                    function() {

                        if (
                            checkbox.checked
                        ) {

                            if (
                                !completedLessons.includes(
                                    index
                                )
                            ) {

                                completedLessons.push(
                                    index
                                );

                            }

                        }

                        else {

                            completedLessons =
                                completedLessons.filter(
                                    function(item) {

                                        return (
                                            item !== index
                                        );

                                    }
                                );

                        }


                        localStorage.setItem(
                            storageKey,
                            JSON.stringify(
                                completedLessons
                            )
                        );


                        updateProgress();

                    }
                );

            }
        );


        // ========================================
        // UPDATE PROGRESS
        // ========================================

        function updateProgress() {

            const totalLessons =
                lessons.length;


            const completed =
                completedLessons.length;


            let percentage = 0;


            if (totalLessons > 0) {

                percentage =
                    Math.round(
                        (
                            completed /
                            totalLessons
                        ) * 100
                    );

            }


            progressText.textContent =
                "Progress: " +
                percentage +
                "%";


            progressBar.style.width =
                percentage +
                "%";


            // ========================================
            // COURSE COMPLETION
            // ========================================

            if (
                percentage === 100 &&
                completionMessage
            ) {

                completionMessage.style.display =
                    "block";


                completionMessage.innerHTML = `

                    <h2>
                        Course Completed!
                    </h2>

                    <p>
                        Congratulations!
                    </p>

                    <p>
                        You have successfully completed
                        <strong>
                            ${enrolledCourse}
                        </strong>.
                    </p>

                    <button
                        class="btn"
                        onclick="window.print()">

                        Print Certificate

                    </button>

                `;

            }

            else if (completionMessage) {

                completionMessage.style.display =
                    "none";

            }

        }


        // Initial progress
        updateProgress();

    }

}


// ========================================
// CONNECT FRONTEND WITH SPRING BOOT
// ========================================

fetch(
    "/api/courses"
)

    .then(
        response => {

            if (!response.ok) {

                throw new Error(
                    "Backend response error: " +
                    response.status
                );

            }

            return response.json();

        }
    )

    .then(
        backendCourses => {

            console.log(
                "Courses from Backend:",
                backendCourses
            );


            const container =
                document.getElementById(
                    "courseContainer"
                );


            if (!container) {

                return;

            }


            container.innerHTML = "";


            backendCourses.forEach(
                course => {

                    let courseCode = "";


                    if (
                        course.title ===
                        "Java Full Stack"
                    ) {

                        courseCode =
                            "java";

                    }

                    else if (
                        course.title ===
                        "Python Programming"
                    ) {

                        courseCode =
                            "python";

                    }

                    else if (
                        course.title ===
                        "Web Development"
                    ) {

                        courseCode =
                            "web";

                    }


                    const card =
                        document.createElement(
                            "div"
                        );


                    card.className =
                        "course-card";


                    card.innerHTML = `

                        <h3>
                            ${course.title}
                        </h3>

                        <p>
                            ${course.description}
                        </p>

                        <a
                            href="course-details.html?course=${courseCode}"
                            class="btn">

                            View Course

                        </a>

                    `;


                    container.appendChild(
                        card
                    );

                }
            );

        }
    )

    .catch(
        error => {

            console.error(
                "Backend Connection Error:",
                error
            );


            const container =
                document.getElementById(
                    "courseContainer"
                );


            if (container) {

                container.innerHTML = `

                    <p>
                        Unable to load courses from server.
                    </p>

                `;

            }

        }
    );


// ========================================
// DUMMY VIDEO PLAYER
// ========================================

let dummyVideoRunning = false;


function playDummyVideo() {

    if (dummyVideoRunning) {

        return;

    }


    const status =
        document.getElementById(
            "videoStatus"
        );


    const progress =
        document.getElementById(
            "videoProgress"
        );


    const playButton =
        document.querySelector(
            ".play-button"
        );


    if (!status || !progress) {

        return;

    }


    dummyVideoRunning = true;


    status.textContent =
        "Video Playing...";


    if (playButton) {

        playButton.innerHTML =
            "&#10074;&#10074;";

    }


    let percentage = 0;


    const videoTimer =
        setInterval(
            function() {

                percentage += 2;


                progress.style.width =
                    percentage + "%";


                if (percentage >= 100) {

                    clearInterval(
                        videoTimer
                    );


                    status.textContent =
                        "Lesson Video Completed";


                    if (playButton) {

                        playButton.innerHTML =
                            "&#10003;";

                    }


                    dummyVideoRunning =
                        false;

                }

            },
            100
        );

}
