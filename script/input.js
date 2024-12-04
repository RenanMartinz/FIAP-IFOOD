/* =====Input data/calendário=====*/
var dateInputs = document.querySelectorAll('.calendar-only');

dateInputs.forEach(function(dateInput) {
    dateInput.addEventListener('keydown', function(event) {
        event.preventDefault();
    });

    dateInput.addEventListener('input', function(event) {
        event.preventDefault();
    });
});


/*=====Input solicitar=====*/

const valorInput = document.querySelector('#valorInput');

valorInput.addEventListener('keydown', function(event) {
    event.preventDefault();
});