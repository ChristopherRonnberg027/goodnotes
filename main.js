
function BlogPostAll(posts){
    return `
        <section class="posts">
            ${posts.map( post => BlogPost(post)).join("")}
        </section>
    `
}

function BlogPost(postData){
    return `
        <article class="post">
            <h1 class="title">${postIts.title}</h1>
            <h1 class="id">${postIts.id}</h1>
            <p class="content">${postIts.content}</p>
            <p class="createdAt">${postIts.createdAt}</p>
            <button class="delete">DELETE</button>
        </article>
    `
}

function renderPosts(postItData, container){
    container.innerHTML = BlogPostAll(postItData)
}

let postIts = [
    {
        title: 'title',
        id: '1',
        content: 'A Post',
        createdAt: Date.now()
    }
]


let container = document.querySelector(".posts-container")
renderPosts(postIts, container)