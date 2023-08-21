import { useDispatch, useSelector } from "react-redux";
import { useReducer, useEffect } from "react";
import { RootState } from "../store/store";

const DisplayPostsValue = () => {
  const newPostValue = useSelector(
    (state: RootState) => state.posts.newPostValue
  );

  console.log("render DisplayPostsValue");

  return (
    <div className="flex flex-col gap-2">
      <span>{newPostValue.likes}</span>
      <span>{newPostValue.title}</span>
    </div>
  );
};

const ChangeNewPostValue = () => {
  const dispatch = useDispatch();
  console.log("render ChangeNewPostValue");

  const handle = () => {
    const newValue = {
      title: Number((Math.random() * 100).toFixed(1)),
      likes: (Math.random() * 100).toFixed(1),
    };

    dispatch({
      type: "ChangeNewPostValueAction",
      payload: newValue,
    });
  };

  return (
    <button className="bg-yellow-600 text-gray-50  p-3" onClick={handle}>
      CHANGE NEW POST VALUE
    </button>
  );
};

const ChangePostsValue = () => {
  const dispatch = useDispatch();
  console.log("render ChangeNewPostValue");

  const handle = () => {
    dispatch({
      type: "ChangePostsValue",
      payload: [
        { id: "1", likes: 123, title: "Я сделал козу" },
        { id: "2", likes: 123, title: "Новый тт уже в тгк" },
        { id: "3", likes: 123, title: "Лайкните мой новый лайк!!!" },
        { id: "4", likes: 123, title: "Что за фэшн опиум демон" },
      ],
    });
  };

  return (
    <button className="bg-yellow-600 text-gray-50  p-3" onClick={handle}>
      ChangePostsValue
    </button>
  );
};

const Posts = () => {
  const posts = useSelector((state: RootState) => state.posts.posts);

  useEffect(() => {
    console.log("posts changed");
  }, [posts]);

  console.log("render POSTS");

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title} {post.likes}
        </div>
      ))}
    </div>
  );
};

export const ReduxPage = () => {
  const [, forceUpdate] = useReducer((i) => i + 1, 0);
  console.log("render ReduxPage");

  return (
    <div>
      <div className="text-2xl w-100 flex flex-col items-center pt-16">
        <h1 className="text-3xl mb-16">Memo, useMemo, useCallback</h1>
        <div className="flex gap-10 justify-center items-center">
          <button
            className="bg-red-600 text-gray-50  p-3"
            onClick={forceUpdate}
          >
            Обновить
          </button>

          <div className="flex flex-col gap-5 align-middle justify-center">
            <ChangeNewPostValue />
            <ChangePostsValue />
            <Posts />
            <DisplayPostsValue />
          </div>
        </div>
      </div>
    </div>
  );
};
