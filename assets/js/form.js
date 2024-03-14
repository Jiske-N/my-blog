const submitButton = document.getElementById('button');
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// retrieve posts already in local storage
function retrievePost() {
    const oldPosts = JSON.parse(localStorage.getItem('post'));
    return oldPosts;
};

// part 1: add old/existing posts to array
// part 2: new object to be added to array
// part 3: set to local storage and navigate to blog.html
submitButton.addEventListener('click', function () {

    let blogPosts = [
    ];

    // part 1
    let oldPosts = retrievePost();

    if (oldPosts !== null) {
        blogPosts = oldPosts;
    };

    // part 2
    const inputToObject = {
        username: usernameInput.value.charAt(0).toUpperCase() + usernameInput.value.slice(1),
        title: titleInput.value.charAt(0).toUpperCase() + titleInput.value.slice(1),
        content: contentInput.value.charAt(0).toUpperCase() + contentInput.value.slice(1),
    };

    if (usernameInput.value == "") {
        alert("Please enter a Username");
    } else if (titleInput.value == "") {
        alert("Please enter a Title")
    } else if (contentInput.value == "") {
        alert("Please enter Content")
    } else {
        blogPosts.push(inputToObject);
        // part 3
        localStorage.setItem('post', JSON.stringify(blogPosts));
        window.location = './blog.html';
    };
});