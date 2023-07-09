import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export const SinglePostPage = () => {
    let { postId } = useParams();
    console.log(`inside SinglePostPage : ${postId}`);
    const post = useSelector(state => {
        return state.posts.find((posts => posts.id === postId));
    });

    if(!post) {
        return (
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
            </article>
        </section>
    )
}