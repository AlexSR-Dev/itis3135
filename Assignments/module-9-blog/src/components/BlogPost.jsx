import { blogPost } from "../data/blogData";

function BlogPost() {
    return (
        <article id="blog-post" className="blog-post">
            <h2>{blogPost.title}</h2>

            <p className="post-meta">
                By {blogPost.author} | Published on {blogPost.date}
            </p>

            <p>{blogPost.content}</p>
        </article>
    );
}

export default BlogPost;