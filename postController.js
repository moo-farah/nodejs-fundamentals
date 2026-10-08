const getPost = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Content 1'
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Content 2'
    }
]

const getPosts = () => getPost;

export const getPostLength = () => getPost.length;

export default getPosts ;