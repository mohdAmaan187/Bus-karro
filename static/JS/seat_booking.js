document.addEventListener("DOMContentLoaded", () => {
    const seats = document.querySelector(".seats");
    const btn = document.querySelector(".view_seat_btn"); 

    seats.style.display = "none";

    btn.addEventListener("click", (event) => {
        seats.style.display = "flex";
    });
});


// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("#edit_buses"); 
//     const editButton = document.querySelector(".edt"); 

//     form.style.display = "none";

//     editButton.addEventListener("click", (event) => {
//         form.style.display = "flex";
//     });
// });