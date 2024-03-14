const blog = document.getElementById('blogposts');
const backButton = document.getElementById('button');

const createArticle = document.createElement('article');
const createH4 = document.createElement('h4');
const createP = document.createElement('p');
const createAside = document.createElement('aside');

// _______________________________________________________________________________________________

backButton.addEventListener('click', function () {
    window.location='file:///C:/Users/jiske/Bootcamp/Week%204/my-blog/index.html';
});

// ___________________________________________________________________________________________________

// function renderPost() {
//     // const blogPosts = retrievePost();
//     const blogPosts = JSON.parse(localStorage.getItem('post'));

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

// renderPost();

// __________________________________________________________________________________________________________

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