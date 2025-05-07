import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useStateContext } from "../ContextProvider";
import router from "../router";

export default function PostForm() {
  const [model, setModel] = useState({
    id: "",
    title: "",
    body: "",
  });

  const params = useParams();
  const { getSinglePost, savePost } = useStateContext();

  useEffect(() => {
    if (!params.id) {
      return;
    }
    setModel(getSinglePost(params.id))
  }, []);

  function onSubmit(ev) {
    ev.preventDefault();

    savePost(model)
    router.navigate('/')
  }

  return (
    <div>
      <p>
        <Link to="/" className="btn btn-outline-secondary">
          一覧に戻る
        </Link>
      </p>
      <form onSubmit={onSubmit}>
        <h1>{model.id ? "編集" : "新規"}</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={model.title}
            onInput={(ev) => setModel({ ...model, title: ev.target.value })}
            placeholder="タイトル"
          />
        </div>
        <div className="mb-3">
          <textarea
            type="text"
            className="form-control"
            value={model.body}
            onInput={(ev) => setModel({ ...model, body: ev.target.value })}
            placeholder="内容"
          ></textarea>
        </div>
        <p>
          <button
            disabled={!model.title || !model.body}
            className="btn btn-success"
            type="submit"
          >
            確定
          </button>
        </p>
      </form>
    </div>
  );
}
