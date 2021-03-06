//Easier promise function compared to [then]
async function fetchAuthorName(postId) {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResponse.json();
    const userId = post.userId;
    
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await userResponse.json();
        return user.name;
    } catch (err) {
        console.log('Faile to fetch user:', err);
        return "Unknown";
    }
}
