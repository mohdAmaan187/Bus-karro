document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".table");
    const searchButton = document.querySelector(".search_box_btn"); 

    table.style.display = "none";


    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
            table.style.display = "table";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#edit_buses"); 
    const editButton = document.querySelector(".edt"); 

    form.style.display = "none";

    editButton.addEventListener("click", (event) => {
        event.preventDefault(); 
            form.style.display = "flex";
    });
});