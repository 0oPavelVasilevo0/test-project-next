import { listPosts } from "./listPosts"

export default function Posts() {
    return (
        <div className="posts-container">
            <div className="post-header">
                <h3>Recent posts</h3>
                <a href="">View all</a>
            </div>
            <div className="posts">
                {listPosts.map((post) => {
                    return (
                        <div key={post.id} className="post">
                            <h2>{post.name}</h2>
                            <p className="first-p">{post.date}<span className='line' />{post.skills}</p>
                            <p>{post.p}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}