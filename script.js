document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor

    alert('Mensaje enviado');
    document.getElementById('contactForm').reset();
});

function showPage(pageId,li) {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    document.getElementById(pageId).classList.add('active');

    var listItems = document.getElementsByTagName('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('active');
    }
    li.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('myTable');
    var headers = table.getElementsByTagName('th');

    for (var i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', function() {
            var columnIndex = Array.prototype.indexOf.call(headers, this);
            sortTable(columnIndex);
        });
    }
});
function sortTable(columnIndex) {
    console.log('Sorting column:', columnIndex);

    var table, rows, switching, i, x, y, shouldSwitch;

    table = document.getElementById("myTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}






let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    const slideWidth = slides[0].offsetWidth;
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

    slides.forEach((slide) => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

showSlide(slideIndex);




