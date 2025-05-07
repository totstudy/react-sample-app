import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { useStateContext } from "../ContextProvider";

export default function PostItem({ post, onDelete = () => { } }) {
  const { deletePost } = useStateContext()


  function onDeleteClick(post) {
    if (!window.confirm("削除してもよろしいでしょうか？")) {
      return;
    }

    deletePost(post.id)

  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="text-end">
          <Link to={`/edit/${post.id}`} className="btn btn-primary me-2"
          >編集</Link>

          <button
            onClick={() => onDeleteClick(post)}
            className="btn btn-danger"
          >
            削除
          </button>
        </div>
      </div>
    </div>
  );
}


PostItem.propTypes = {
  post: PropTypes.object.isRequired
}