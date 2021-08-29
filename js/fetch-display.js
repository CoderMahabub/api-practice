// ৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে। 
//Automatically Load and Display Data
/* const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
loadComments();
const displayComments = (comments) => {
    const displayContainer = document.getElementById('display-container')
    for (const comment of comments) {
        // console.log(comment.name);
        const div = document.createElement('div');
        div.classList.add('comment');
        displayContainer.classList.add('comment-container')
        div.innerHTML = `
        <h3>${comment.id}. Name: ${comment.name} </h3>
        <h4>Email: ${comment.email}</h4>
        <p>Comment: ${comment.body}</p>
        `;
        displayContainer.appendChild(div);
    }
} */


// ২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।
const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

const displayComments = (comments) => {
    const displayContainer = document.getElementById('display-container')
    for (const comment of comments) {
        // console.log(comment.name);
        const div = document.createElement('div');
        div.classList.add('comment');
        displayContainer.classList.add('comment-container')
        div.innerHTML = `
        <h3>${comment.id}. Name: ${comment.name} </h3>
        <h4>Email: ${comment.email}</h4>
        <p>Comment: ${comment.body}</p>
        `;
        displayContainer.appendChild(div);
    }
}
