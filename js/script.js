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
            setTimeout(typeWriter, 80); // Speed of typing (80ms per character)
        }
    }
    
    typeWriter();
}

/// Function to validate the message form (to be implemented)
function validateForm() {

}

/// Call the welcome message when page loads
welcomeMessage();

/// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("messageForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const number = document.getElementById("number").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validation
        if (!name || !email || !number || !message) {
            alert("Semua data wajib diisi!");
            return;
        }

        // Show output
        document.getElementById("outputName").textContent = name;
        document.getElementById("outputEmail").textContent = email;
        document.getElementById("outputNumber").textContent = number || "N/A";
        document.getElementById("outputMessage").textContent = message;
    });
});
