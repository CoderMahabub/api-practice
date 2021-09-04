//৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 

const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

const displayComments = (comments) => {
    const displayContainer = document.getElementById('display-container')
    comments.forEach(comment => {
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
    });
}