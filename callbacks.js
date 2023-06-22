const posts = [
    {title: 'Post One', body: 'This is a post one'},
    {title: 'Post two', body: 'This is a post two'}
]

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li> ${post.title}:  ${post.body} </li>`;
        })
document.body.innerHTML = output;
    }, 1000)
}
getPost();

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
createPost({title: 'Post Three', body: 'This is post three'}, getPost) 


