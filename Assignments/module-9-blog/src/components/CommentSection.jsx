import {useState} from "react";
import {initialComments} from "../data/blogData";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

// 08 Latest update: import the CommentList and CommentForm components to render the list of comments and handle new comments

function CommentSection({ postId }) {
    const [commentsByPost, setCommentsByPost] = useState({ 1: initialComments });

    const comments = commentsByPost[postId] || [];

    function handleAddComment(newComment) {
        const commentWithId = {
            id: Date.now(),
            ...newComment
        };

        setCommentsByPost((prevCommentsByPost) => ({
            ...prevCommentsByPost,
            [postId]: [...(prevCommentsByPost[postId] || []), commentWithId]
        }));
    }

    return (
        <section id="comments" className="comment-section">
            <h2>Comments</h2>
            <CommentList comments={comments} />
            <CommentForm onAddComment={handleAddComment} />
        </section>
    );
}

export default CommentSection;
        