import './posts.css'
import Post from '../Post/Post'

export default function Posts({posts}) {
    return (
        <>
            <h2 className="a11y-hidden">Post</h2>
            <ul className="posts">
                {posts.slice(0).reverse().map( post => {
                    return (<Post key={post.id} post={post}/>);
                })}
            </ul>
        </>
    )
}
