export default function Posts() {
    return (
        <div className="posts-container">
            <div className="post-header">
                <h3>Recent posts</h3>
                <a href="">View all</a>
            </div>
            <div className="posts">
                <div className="post">
                    <h2>Making a design system from scratch</h2>
                    <p className="date">12 Feb 2020<span className="line"></span>Design, Pattern</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="post">
                    <h2>Creating pixel perfect icons in Figma</h2>
                    <p className="date">12 Feb 2020<span className="line"></span>Figma, Icon Design</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </div>
        </div>
    )
}