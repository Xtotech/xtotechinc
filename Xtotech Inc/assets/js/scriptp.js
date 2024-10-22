// philosophy.html
const philosophy = {
    Innovation: "Prioritizing research and development to create cutting-edge, accessible solutions.",
    Integrity: "Commitment to ethical practices, transparency, and accountability.",
    Empowerment: "Fostering digital literacy and skill development to uplift communities.",
    Collaboration: "Building partnerships with stakeholders for collective impact.",
    Sustainability: "Ensuring solutions positively affect the environment and society."
};

const philosophyList = document.getElementById('philosophy-list');

// Populate the philosophy items
for (const [key, value] of Object.entries(philosophy)) {
    const item = document.createElement('div');
    item.classList.add('philosophy-item');
    item.innerHTML = `<strong>${key}:</strong> ${value}`;
    philosophyList.appendChild(item);
}

// Button functionality
document.getElementById('show-more').addEventListener('click', () => {
    alert("Explore more about our initiatives and partnerships at Xtotech Nigeria!");
});
