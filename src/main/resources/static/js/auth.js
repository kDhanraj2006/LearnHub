// ================================
// LEARNHUB AUTHENTICATION
// ================================


// ================================
// REGISTER
// ================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const name = document.getElementById("registerName").value.trim();
        const email = document.getElementById("registerEmail").value.trim();
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const message = document.getElementById("registerMessage");

        if (password !== confirmPassword) {

            message.textContent = "Passwords do not match.";
            message.className = "auth-message error";

            return;
        }

        if (password.length < 6) {

            message.textContent =
                "Password must contain at least 6 characters.";

            message.className = "auth-message error";

            return;
        }

        try {

            const response = await fetch("/api/register", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })

            });

            const result = await response.text();

            if (response.ok) {

                message.textContent =
                    "Registration successful!";

                message.className =
                    "auth-message success";

                setTimeout(function() {

                    window.location.href = "login.html";

                }, 1000);

            } else {

                message.textContent =
                    "Registration failed: " + result;

                message.className =
                    "auth-message error";
            }

        } catch (error) {

            console.error(error);

            message.textContent =
                "Server connection failed.";

            message.className =
                "auth-message error";
        }

    });
}

// ================================
// LOGIN
// ================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const message = document.getElementById("loginMessage");

        try {

            const response = await fetch("/api/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })

            });

            const result = await response.text();

            if (response.ok && result === "Login successful") {
				localStorage.setItem("loggedInEmail", email);

                message.textContent = "Login successful!";
                message.className = "auth-message success";

                setTimeout(function() {
                    window.location.href = "index.html";
                }, 1000);

            } else {

                message.textContent = result;
                message.className = "auth-message error";
            }

        } catch (error) {

            console.error(error);

            message.textContent = "Server connection failed.";
            message.className = "auth-message error";
        }

    });
}