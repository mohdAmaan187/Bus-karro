document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector(".table");
    const searchForm = document.querySelector("#searchForm"); 

    table.style.display = "none";

    searchForm.addEventListener("submit", (event) => {
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