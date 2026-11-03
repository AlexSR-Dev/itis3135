// 06 Updated the CommentForm component to include fields for name and comment, and handle form submission to add a new comment.

import { useState } from "react";

function CommentForm( {onAddComment} ) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        // Reject empty name or comment fields
        if (!name.trim() || !comment.trim()) {
            return;
        }

        onAddComment({ 
            author: name.trim(),
            text: comment.trim() 
        });
        setName("");
        setComment("");
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                    id="comment"
                    name="comment"
                    placeholder="Enter your comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Add Comment</button>
        </form>
    );
}

export default CommentForm;