// const blog = document.getElementById('blogposts');
const backButton = document.getElementById('button');

// navigate back to blog form
backButton.addEventListener('click', function () {
    window.location = './index.html';
});

// create elements and display posts from local storage
function renderPost() {
    const blogPosts = JSON.parse(localStorage.getItem('post'));
    const blog = document.getElementById('blogposts');

    for (let index = 0; index < blogPosts.length; index++) {
        const createArticle = document.createElement('article');
        const createH4 = document.createElement('h4');
        const createP = document.createElement('p');
        const createAside = document.createElement('aside');

        createH4.textContent = blogPosts[index].title;
        createP.textContent = blogPosts[index].content;
        createAside.textContent = `Posted by: ${blogPosts[index].username}`;

        createArticle.appendChild(createH4);
        createArticle.appendChild(createP);
        createArticle.appendChild(createAside);

        blog.appendChild(createArticle);
    }
};

renderPost();