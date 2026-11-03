// 07 This component will be responsible for rendering a list of comments for a blog post.

function CommentList({ comments }) {
    // Conditional render the array of comments if it is empty
    if (comments.length === 0) {
        return (
            <p className="no-comments">No comments yet.</p>
        );
    }

    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <article className="comment" key={comment.id}>
                    <h3>{comment.author}</h3>
                    <p>{comment.text}</p>
                </article>
            ))}
        </div>
    );
}

export default CommentList;