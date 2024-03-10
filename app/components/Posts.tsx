const listPosts = [
    {
        id: 1,
        name: "Making a design system from scratch",
        date: "12 Feb 2020",
        skills: "Design, Pattern",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 2,
        name: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2022",
        skills: "Figma, Icon Design",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 3,
        name: "UI Interactions of the week",
        date: "12 Feb 2021",
        skills: "Express, Handlebars",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        id: 4,
        name: "Creating pixel perfect",
        date: "12 Feb 2019",
        skills: "Design",
        p: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },

]

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
                            <p>{post.date}<span className='line'></span>{post.skills}</p>
                            <p>{post.p}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}