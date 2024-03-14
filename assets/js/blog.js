const blog = document.getElementById('blogposts');
const backButton = document.getElementById('button');

const createArticle = document.createElement('article');
const createH4 = document.createElement('h4');
const createP = document.createElement('p');
const createAside = document.createElement('aside');

// function retrievePost() {
//     const blogPosts = [
//     ];

//     const newPost = JSON.parse(localStorage.getItem('posts'));

//     if (newPost !== null) {
//         blogPosts.push (newPost);
//     };
//     return blogPosts;
// };

// function renderPost() {
//     const blogPosts = retrievePost();

//     for (let index = 0; index < blogPosts.length; index++) {
   
//         blog.appendChild(createArticle);
//         createArticle.appendChild(createH4, createP, createAside);
//         createArticle.appendChild(createP);
//         createArticle.appendChild(createAside);
    
//         console.log(blogPosts);
//         createH4.textContent = blogPosts[index].title;
//         createP.textContent = blogPosts[index].content;
//         createAside.textContent = (`Posted by: ${blogPosts[index].username}`);
//     }
// };

// retrievePost();
// renderPost();

backButton.addEventListener('click', function () {
    window.location='file:///C:/Users/jiske/Bootcamp/Week%204/my-blog/index.html';
});

function retrievePost() {
    const newPost = JSON.parse(localStorage.getItem('posts'));

    // if (newPost !== null) {
    //     blogPosts.push (newPost);
    // };
    return newPost;
};

function renderPost() {
    const blogPosts = retrievePost();

    for (let index = 0; index < blogPosts.length; index++) {
   
        blog.appendChild(createArticle);
        createArticle.appendChild(createH4, createP, createAside);
        createArticle.appendChild(createP);
        createArticle.appendChild(createAside);
    
        console.log(blogPosts);
        createH4.textContent = blogPosts[index].title;
        createP.textContent = blogPosts[index].content;
        createAside.textContent = (`Posted by: ${blogPosts[index].username}`);
    }
};

retrievePost();
renderPost();

backButton.addEventListener('click', function () {
    window.location='file:///C:/Users/jiske/Bootcamp/Week%204/my-blog/index.html';
});