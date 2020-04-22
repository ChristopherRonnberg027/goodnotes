let container = document.querySelector(".posts-container")
let createButton = document.querySelector(".createPost")
let deleteButtonOnPost = document.querySelector(".delete")


createButton.addEventListener("click", createNewPost)

// on click functions

function editPostIt(id) {

    console.log(renderEditedPosts(postIts, container, id))
    renderEditedPosts(postIts, container, id)

}
function deletePostFromPost(id) {
    let currentPostsId = id
    console.log(currentPostsId)
    postIts = postIts.filter(post => post.id != currentPostsId)
    renderPosts(postIts, container)
}

function createNewPost() {
    postIts.push(newPostIt)
    renderPosts(postIts, container)
}




// Rendering chain for edited post

function BlogPostEdited(postIt) {
    return `
        <article class="post" id="${postIt.id}">
            <input type="text" class="title">${postIt.title}</input>
            <input type="text" class="content">${postIt.content}</input>
            <p class="createdAt">${postIt.createdAt}</p>
            <button class="delete" onclick="deletePostFromPost(${postIt.id})">DELETE</button>
            <button class="save" onclick="savePostIt(${postIt.id})">SAVE</button>
        </article>
    `
}
function BlogPostAllEdited(posts, id) {
    let newPostItHtmlString = ``

    for (let post of posts) {
        if (post.id != id) {
            newPostItHtmlString += BlogPost(post)
        } else {
            newPostItHtmlString += BlogPostEdited(post)
        }
    }
    return newPostItHtmlString
}
function renderEditedPosts(postItData, container, id){
    container.innerHTML = BlogPostAllEdited(postItData, id)
}



// rendering chain for posts

function BlogPostAll(posts){
    return `
        <section class="posts">
            ${posts.map( post => BlogPost(post)).join("")}
        </section>
    `
}

function BlogPost(postIt){
    return `
        <article class="post" id="${postIt.id}>
            <h3 class="title">${postIt.title}</h3>
            <p class="content">${postIt.content}</p>
            <p class="createdAt">${postIt.createdAt}</p>
            <button class="delete" onclick="deletePostFromPost(${postIt.id})">DELETE</button>
            <button class="edit" onclick="editPostIt(${postIt.id})">EDIT</button>
        </article>
    `
}

function renderPosts(postItData, container){
    container.innerHTML = BlogPostAll(postItData)
}







// temporary data for experiments


let postIts = [
    {
        title: 'title',
        id: '1',
        content: 'A Post',
        createdAt: Date.now()
    },
    {
        title: 'title',
        id: '2',
        content: 'A Post',
        createdAt: Date.now()
    },
    {
        title: 'title',
        id: '3',
        content: 'A Post',
        createdAt: Date.now()
    },
]

let newPostIt = {
    title: 'new',
    id: '234',
    content: 'A Post',
    createdAt: Date.now()
}

let emptyPost = {
    title: '',
    id: '',
    content: '',
    createdAt: Date.now()

}


// initial posts renering


renderPosts(postIts, container)
console.log(document);

