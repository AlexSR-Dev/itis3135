//03 Updated the BlogPostsPage to import the BlogPost component and the blog data.
// Additionally, the BlogPostsPage component will render a list of blog posts using the BlogPost component.
// Lastly, The link allows users to navigate to the individual blog post page.

import { Link } from "react-router";
import { blogPosts } from "../data/blogData";
import BlogPost from "../components/BlogPost";

function BlogPostsPage() {
    return (
        <section className="blog-posts-page">
        <h1>Blog Posts</h1>

        <p>Welcome to the blog posts page! Where all of my latest posts are displayed.</p>
        <div className="blog-post-list">
            {blogPosts.map((post) => (
                <div key={post.id}>
                    <BlogPost post={post} />

                    <Link to={`/posts/${post.id}`}>Read More</Link>
                </div>
            ))}
        </div>
    </section>
    );
}

export default BlogPostsPage;