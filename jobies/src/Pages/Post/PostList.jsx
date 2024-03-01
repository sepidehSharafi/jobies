import Post from "./Post"
//const styles = { wrapper: { width: 'calc(100% - 300px)' } }

export default function PostList({ list }) {

    return <div className="container">

        {list.map(post => (
            <Post key={post.id} post={post} />
        ))}
    </div>
}