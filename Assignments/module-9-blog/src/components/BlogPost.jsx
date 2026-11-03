// 02 Updated, instead of importing a single blog post, the component now accepts a post as a prop.

function BlogPost({ post }) {
    return (
        <article className="blog-post">
            <h2>{post.title}</h2>

            <p className="post-meta">
                By {post.author} | Published on {post.date}
            </p>

            <p>{post.content}</p>
        </article>
    );
}

export default BlogPost;