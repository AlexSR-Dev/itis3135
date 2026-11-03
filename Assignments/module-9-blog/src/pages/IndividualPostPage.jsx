// 04 Updated the IndividualPostPage to import the BlogPost component and the blog data.
// Additionally, the IndividualPostPage should find the specific blog post based on the postId parameter from the URL.
// If the post is not found, it should display a "Post Not Found" message with a link to return to the blog posts page.

import { Link, useParams } from "react-router";
import { blogPosts } from "../data/blogData";
import BlogPost from "../components/BlogPost";
import CommentSection from "../components/CommentSection";

function IndividualPostPage() {
    const { postId } = useParams();

    const post = blogPosts.find((blogPost) => blogPost.id === Number(postId));

    if (!post) {
        return (
            <section className="individual-post-page">
                <h1>Post Not Found</h1>
                <Link to="/posts">Return to Blog Posts</Link>
            </section>
        );
    }

    return (
        <section className="individual-post-page">
            <BlogPost post={post} />
            <CommentSection postId={post.id} />
            <Link to="/posts">Return to Blog Posts</Link>
        </section>
    );
}

export default IndividualPostPage;