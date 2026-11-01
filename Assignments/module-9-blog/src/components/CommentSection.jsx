import {useState} from "react";
import {initialComments} from "../data/blogData";

function CommentSection() {
    const [comments, setComments] = useState(initialComments);
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if(!author.trim() || !text.trim()) {
            return;
        }

        const newComment = {
            id: Date.now(),
            author: author.trim(),
            text: text.trim()
        };

        setComments((previousComments) => [
            ...previousComments,
            newComment
        ]);

        setAuthor("");
        setText("");
    }

    return (
        <section id="comments" className="comment-section">
            <h2>Comments</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="comment-author">Author</label>
                <input
                    id="comment-author"
                    type="text"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                    placeholder="Author name"
                    required
                />

                <label htmlFor="comment-text">Comment</label>
                <textarea
                    id="comment-text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Write a comment here..."
                    required
                />

                <button type="submit">Submit Comment</button>
            </form>

            <div className="comments-list">
                {comments.map((comment) => (
                    <article className="comment" key={comment.id}>
                        <h3>{comment.author}</h3>
                        <p>{comment.text}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default CommentSection;