let container = document.querySelector(".posts-container")
let createButton = document.querySelector(".createPostButton")
let deleteButtonOnPost = document.querySelector(".delete")
let searchField = document.querySelector(".search")
let destroyAll = document.querySelector(".destroyAll")

searchField.addEventListener("keyup", searchFunction)
createButton.addEventListener("click", createNewPost)
destroyAll.addEventListener("click", destroyAllPosts)


let repeater
// on click functions

function editPostIt(id) {

    renderEditedPosts(postIts, container, id)

}
function deletePostFromPost(id) {
    let currentPostsId = id
    postIts = postIts.filter(post => post.id != currentPostsId)
    renderPosts(postIts, container)
}

function createNewPost() {
    let newId = Math.floor((Math.random() * 1000000) + 1)
    console.log(newId)
    let newPostIt = {
        title: '',
        id: newId,
        content: '',
        createdAt: Date.now()
    }
    postIts.push(newPostIt)
    renderPosts(postIts, container)
}

function savePostIt(id) {

    let titleId = `` + id + `title`
    let contentId = `` + id + `content`

    renderSavedPosts(postIts, container, id, document.getElementById(titleId).value, document.getElementById(contentId).value)
}

function destroyAllPosts() {
    postIts = []
    renderPosts(postIts, container)
}


// keyup event function

function searchFunction() {
    let foundPostits = []
    let serachQueery = document.getElementById("searchField").value
    if (serachQueery.length > 0) {
        postIts
                .filter(post => post.title.includes(serachQueery))
                .map(post => foundPostits.push(post))

        renderPosts(foundPostits, container)
    } else {
        renderPosts(postIts,container)
    }
    // repeater = setTimeout(searchFunction, 100); --> keeps rendering and blocks other functions

}

// Rendering chain for edited post

function BlogPostEdited(postIt) {
    return `
        <article class="post" id="post-${postIt.id}">
            <input type="text" class="title" value = "${postIt.title}" id = "${postIt.id}title" ></input>
            <input type="text" class="content" value = "${postIt.content}" id = "${postIt.id}content"></input>
            <p class="createdAt">${postIt.createdAt}</p>
            <button class="delete" onclick="deletePostFromPost(${postIt.id})">DELETE</button>
            <button class="save" onclick="savePostIt(${postIt.id})" >SAVE</button>
        </article>
    `
}
function BlogPostAllEdited(posts, id) {
    let newPostItHtmlString = `<section class="posts">`

    for (let post of posts) {
        if (post.id != id) {
            newPostItHtmlString += BlogPost(post)
        } else {
            newPostItHtmlString += BlogPostEdited(post)
        }
    }
    newPostItHtmlString
    return newPostItHtmlString += `</section>`
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
        <article class="post" id="post-${postIt.id}>
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
    for (let post of postItData) {
        let element = document.querySelector("#post-" + post.id)
        console.log(element)
    }
}


// rendering chain for saving edited posts

function renderSavedPosts(postItData, container, id, title, content){
    container.innerHTML = BlogPostAllSaving(postItData, id, title, content)
}


function BlogPostAllSaving(posts, id, title, content) {
    let newPostItHtmlString = `<section class="posts">`

    for (let post of posts) {
        if (post.id != id) {
            newPostItHtmlString += BlogPost(post)
        } else {
            post.title = title
            post.content = content
            newPostItHtmlString += BlogPostSaved(post)
        }
    }
    return newPostItHtmlString += `</section>`
    return newPostItHtmlString
}


function BlogPostSaved(postIt) {
    return `
        <article class="post" id="post-${postIt.id}>
            <h3 class="title">${postIt.title}</h3>
            <p class="content">${postIt.content}</p>
            <p class="createdAt">${postIt.createdAt}</p>
            <button class="delete" onclick="deletePostFromPost(${postIt.id})">DELETE</button>
            <button class="edit" onclick="editPostIt(${postIt.id})">EDIT</button>
        </article>
    `
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
    id: Math.floor((Math.random() * 1000000) + 1),
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
for (let post of postIts) {
    let element = document.querySelector("#post-" + post.id)
    console.log(element)
}

