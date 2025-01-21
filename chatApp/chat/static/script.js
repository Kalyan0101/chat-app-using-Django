// userlist
document.getElementById('userList').addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() === 'li') {
        const userId = e.target.getAttribute('data-id')
        window.location.pathname = `/chat/user/${userId}`
        
    }
})

// Function to toggle the left menu
function toggleMenu() {
    const menu = document.getElementById('leftMenu');
    menu.classList.toggle('show');
}

// Function to adjust the page scale based on screen width
function adjustPageScale() {
    const width = window.innerWidth;
    const body = document.body;

    // if (width >= 992 && width <= 1600) {
    //     // body.style.transform = "scale(0.9)";
    // } else if (width >= 700 && width <= 767) {
    //     body.style.transform = "scale(0.8)";
    // } else if (width >= 600 && width < 700) {
    //     body.style.transform = "scale(0.75)";
    // } else if (width <= 600) {
    //     body.style.transform = "scale(0.5)";
    // } else {
    //     body.style.transform = "scale(1)";
    // }
}

// Call the function when the window resizes
window.addEventListener('resize', adjustPageScale);

// Initial call to set the page scale on load
adjustPageScale();
