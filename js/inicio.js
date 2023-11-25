
let tableHidden = false;

function toggleTable() {
    const tableBody = document.querySelector('tbody');
    const toggleIcon = document.getElementById('toggleIcon');

    if (!tableHidden) {
        tableBody.style.display = 'none';
        toggleIcon.classList.remove('fa-minus');
        toggleIcon.classList.add('fa-plus');
    } else {
        tableBody.style.display = 'table-row-group';
        toggleIcon.classList.remove('fa-plus');
        toggleIcon.classList.add('fa-minus');
    }

    tableHidden = !tableHidden;
}

let tableHidden2 = false;

function toggleTable2() {
    const tableBody = document.getElementById('tbody2');
    const toggleIcon = document.getElementById('toggleIcon2');

    if (!tableHidden2) {
        tableBody.style.display = 'none';
        toggleIcon.classList.remove('fa-minus');
        toggleIcon.classList.add('fa-plus');
    } else {
        tableBody.style.display = 'table-row-group';
        toggleIcon.classList.remove('fa-plus');
        toggleIcon.classList.add('fa-minus');
    }

    tableHidden2 = !tableHidden2;
}



