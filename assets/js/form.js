const submitButton = document.getElementById('button');
const usernameInput = document.getElementById('usernameinput');
const titleInput = document.getElementById('titleinput');
const contentInput = document.getElementById('contentinput');

// submitButton.addEventListener('click', function(inputToLocalStorage) {
//     inputToLocalStorage.preventDefault();

//     const inputToObject = {
//         username: usernameInput.value,
//         title: titleInput.value,
//         content: contentInput.value,
//     };

//     if (usernameInput.value == "") {
//         alert("Please enter a Username");
//     } else if (titleInput.value == "") {
//         alert("Please enter a Title")
//     } else if (contentInput.value == "") {
//         alert("Please enter Content")
//     } else {
//         localStorage.setItem('post', JSON.stringify(inputToObject));
//     };
//     window.location='file:///C:/Users/jiske/Bootcamp/Week%204/my-blog/blog.html';
// });

// ___________________________________________________________________________________

function retrievePost() {
    const oldPosts = JSON.parse(localStorage.getItem('posts'));
    console.log(oldPosts);
    // if (newPost !== null) {
    //     blogPosts.push (newPost);
    // };
    return oldPosts;
};

retrievePost();

submitButton.addEventListener('click', function(inputToLocalStorage) {
    inputToLocalStorage.preventDefault();

    const blogPosts = [
    ];

    if (retrievePost() !== null) {
    retrievePost().push (blogPosts);
    };

    const inputToObject = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value,
    };

    if (usernameInput.value == "") {
        alert("Please enter a Username");
    } else if (titleInput.value == "") {
        alert("Please enter a Title")
    } else if (contentInput.value == "") {
        alert("Please enter Content")
    } else {
        blogPosts.push(inputToObject);
        console.log(blogPosts);
        localStorage.setItem('posts', JSON.stringify(blogPosts));
    };
    // window.location='file:///C:/Users/jiske/Bootcamp/Week%204/my-blog/blog.html';
});


