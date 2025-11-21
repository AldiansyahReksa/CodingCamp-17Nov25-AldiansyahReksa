/// Function to prompt user for their name and display a welcome message
function welcomeMessage() {
    /// Prompt the user to enter their name
    let userName = prompt("Please enter your name:");

    /// If the user did not enter a name, default to "Guest"
    if (userName === '' || userName === null) {
        userName = "Guest";
    }

    /// Create the welcome message
    const message = "Welcome, " + userName + "!";
    const element = document.getElementById("welcome-speech");
    
    /// Clear the element first
    element.innerText = "";
    
    /// Typing animation
    let index = 0;
    function typeWriter() {
        if (index < message.length) {
            element.innerText += message.charAt(index);
            index++;
            setTimeout(typeWriter, 80); // Speed of typing
        }
    }
    
    typeWriter();
}

/// Fade-in animation for logo
function fadeInLogo() {
    const logo = document.getElementById("company-logo");
    if (!logo) return; // prevent error if not found

    let opacity = 0;

    function fade() {
        if (opacity < 1) {
            opacity += 0.02;
            logo.style.opacity = opacity;
            requestAnimationFrame(fade);
        }
    }

    fade();
}

/// Handle form submission + call animations
document.addEventListener("DOMContentLoaded", () => {

    // Call animations AFTER DOM is fully loaded
    welcomeMessage();
    fadeInLogo();

    const form = document.getElementById("messageForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const birth = document.getElementById("birthdate").value;
        const gender = document.querySelector("input[name='gender']:checked")?.value;
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !birth || !gender || !message) {
            alert("Semua data wajib diisi!");
            return;
        }

        // Show output
        document.getElementById("outputName").textContent = name;
        document.getElementById("outputBirth").textContent = birth;
        document.getElementById("outputGender").textContent = gender;   
        document.getElementById("outputMessage").textContent = message;
    });
});
