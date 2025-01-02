document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".table"); // Select the table
    const searchButton = document.querySelector(".search_box_btn"); // Select the search button

    // Initially hide the table
    table.style.display = "none";

    // Add event listener to the search button
    searchButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default button behavior (for <a> or <button> inside <a>)

        // Check if search fields are filled (optional validation)
        const busNoInput = document.getElementById("search-bar-from").value;
        const dateInput = document.getElementById("date").value;

        if (busNoInput || dateInput) {
            // Show the table if there's input
            table.style.display = "table";
        } else {
            alert("Please enter Bus No. or Date to search!");
        }
    });
});
