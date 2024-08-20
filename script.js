const cursor = document.querySelector('.cursor');
const trails = document.querySelectorAll('.trail');

document.addEventListener('mousemove', function(e) {
    let x = e.clientX;
    let y = e.clientY;
    
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = `${x}px`;
            trail.style.top = `${y}px`;
        }, index * 10);  // Zpoždění pro vytvoření efektu stopy
    });
});



function opener() {
    let status = document.getElementById("hobbies").style;
    if(status.display == "none" || status.display == ""){
        status.display = "block"
    } else {
        status.display = "none"
    }
}

function exit() {
    let status = document.getElementById("hobbies").style;
    status.display = "none"
}