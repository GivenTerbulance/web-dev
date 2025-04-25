// Get the button and content
const btn = document.getElementById("aboutMeBtn");
const content = document.getElementById("aboutMeContent");
const texts = ["a Web developer", "an engineer", "a hacker"];

let index = 0;
let textElement = document.getElementById("animatedText");
let currentText = "";
let isDeleting = false;
const navLinks = document.querySelectorAll('.navbar a');

// Get all sections
const sections = document.querySelectorAll('.section');

// Initially set the content to be hidden
content.style.display = "none";

// Toggle the display of the content and handle button size when the button is clicked
btn.addEventListener("click", () => {
    if (content.style.display === "none") {
        // Show the content and apply the show class for smooth transition
        content.style.display = "block";
        content.classList.add("show");

        // Adjust button size after content is shown
        btn.style.width = "250px"; // Set to a constant width
    } else {
        // Hide the content and reset button width when it's hidden
        content.style.display = "none";
        content.classList.remove("show");

        // Reset the button size back to the original width
        btn.style.width = "250px"; // Or use whatever width you want here
    }
});

function type() {
    const fullText = texts[index];
    
    if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
    } else {
        currentText = fullText.substring(0, currentText.length + 1);
    }

    textElement.textContent = " : " + currentText + " |";

    if (!isDeleting && currentText === fullText) {
        // Pause before starting to delete the text
        setTimeout(() => {
            isDeleting = true;
        }, 1500);
    } else if (isDeleting && currentText === "") {
        // Move to the next text after clearing
        isDeleting = false;
        index = (index + 1) % texts.length;  // Move to the next text in the array
        setTimeout(type, 500); // Wait before starting the next text
        return;
    }

    // Speed of typing/deleting
    setTimeout(type, isDeleting ? 100 : 200); 
}

// Start typing animation
type();

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the target section ID from the data-target attribute
        const targetSectionId = link.getAttribute('data-target');

        // Hide all sections first
        sections.forEach(section => {
            section.classList.remove('show');
        });

        // Show the targeted section
        const targetSection = document.getElementById(targetSectionId);
        targetSection.classList.add('show');
    });
});