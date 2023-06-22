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
getPost()


function createPost(post){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.push(post);

        const error = false;

        if(!error){
            resolve();
        }else {
            reject('Error: Something went wrong');
        }
     
    }, 2000);
   
  })
}
// createPost({title: 'Post Three', body: 'This is post three'}, getPost) 
// .then(getPost)
// .catch(err => console.log(err));

// Async/ Await
async function init(){
    await createPost({title: 'Post Three', body: 'This is post three'}) 
    
    getPost();
}
init()

// Async / Await / Fetch 
// async function fetchUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json()
//     console.log(data);
// }
// fetchUsers()

// Using the Promise.all method
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch ('https://jsonplaceholder.typecode.com/users').then(res =>
res.json()
)
Promise.all([promise1, promise2, promise3, promise4]
    .then(values =>
        console.log(values))
    );

