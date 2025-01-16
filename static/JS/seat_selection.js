document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".map");
    const confirmButton = document.querySelector(".confirm");
    const form = document.querySelector("form");

    const bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    bookedSeats.forEach(id => {
        const seat = document.getElementById(id);
        if (seat) {
            seat.classList.add("booked");
        }
    });

    let hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "selected_seats";
    form.appendChild(hiddenInput);

    seats.forEach(seat => {
        seat.addEventListener("click", function () {
            if (!seat.classList.contains("booked")) {
                seat.classList.toggle("selected");
            }
        });
    });

    confirmButton.addEventListener("click", function (event) {
        event.preventDefault(); 
        const newBookedSeats = [];
        const selectedSeats = [];

        document.querySelectorAll(".map.selected").forEach(selectedSeat => {
            selectedSeat.classList.remove("selected");
            selectedSeat.classList.add("booked");
            newBookedSeats.push(selectedSeat.id);
            selectedSeats.push(selectedSeat.id);
        });

        localStorage.setItem("bookedSeats", JSON.stringify([...bookedSeats, ...newBookedSeats]));

        hiddenInput.value = JSON.stringify(selectedSeats);

        form.submit();
    });
});
