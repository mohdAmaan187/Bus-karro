document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".upd_fix_con"); 
    const editButton = document.querySelector(".edt"); 

    form.style.display = "none";

    editButton.addEventListener("click", (event) => {
        form.style.display = "flex";
    });
});