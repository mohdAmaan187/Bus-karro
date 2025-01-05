document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".table"); // Select the table
    const searchButton = document.querySelector(".search_box_btn"); // Select the search button

    // Initially hide the table
    table.style.display = "none";

    // Add event listener to the search button
    searchButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default button behavior (for <a> or <button> inside <a>)

            table.style.display = "table";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#edit_buses"); // Select the table
    const editButton = document.querySelector(".edt"); // Select the search button

    // Initially hide the table
    form.style.display = "none";

    // Add event listener to the search button
    editButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default button behavior (for <a> or <button> inside <a>
            form.style.display = "flex";
    });
});