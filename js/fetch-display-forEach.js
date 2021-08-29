// ৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

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

