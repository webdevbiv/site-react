const posts = [
    {
        id: 1,
        title: 'title 1'
    },
    {
        id: 2,
        title: 'title 2'
    },
    {
        id: 3,
        title: 'title 3'
    }
];

const List = () => {
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export default List