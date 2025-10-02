// Change text functionality
document.getElementById("changeTextBtn").addEventListener("click", function () {
    document.getElementById("myParagraph").innerText = "The text has been changed! But not by a lot.";
});

// Greeting form functionality
document.getElementById("greetForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("nameInput").value;
    document.getElementById("greetingMessage").innerText = `Hello, ${name}!`;
});

// List favorite foods using a loop
let foods = ["Ramen", "Cassava Leaf", "Fufu & Okra", "Fried Chicken"];
let foodList = document.getElementById("foodList");
foods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    li.classList.add("list-group-item");
    foodList.appendChild(li);
});

// Courses checkbox functionality
document.getElementById("coursesForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let checkedCourses = [];
    document.querySelectorAll("input[name='course']:checked").forEach(course => {
        checkedCourses.push(course.value);
    });

    let alertBox = document.getElementById("courseAlert");
    if (checkedCourses.length > 0) {
        alertBox.classList.remove("d-none");
        alertBox.textContent = "You have taken: " + checkedCourses.join(", ");
    } else {
        alertBox.classList.remove("d-none");
        alertBox.textContent = "No courses selected.";
    }
});