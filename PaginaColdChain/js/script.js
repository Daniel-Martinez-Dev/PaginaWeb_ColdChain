const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const listComments = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await response.json();

    let tableBody = ``;
    comments.forEach((comment) => {
        tableBody += `<tr>
        <td class='centered'>${comment.id}</td>
        <td class='centered'>${comment.name}</td>
        <td class='centered'>${comment.email}</td>
        <td class='centered'>${comment.body}</td>
        </tr>`;
    });
    tableBody_Comments.innerHTML = tableBody;
};

window.addEventListener("load", function() {
    listComments();
});

$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });
});