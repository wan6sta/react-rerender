interface IPost {
  id: string;
  title: string;
  likes: number;
}

interface INewPost {
  title: string;
  likes: number;
}

interface PostsState {
  posts: IPost[];
  newPostValue: INewPost;
}

const initialState: PostsState = {
  posts: [
    { id: "1", likes: 123, title: "Я сделал козу" },
    { id: "2", likes: 123, title: "Новый тт уже в тгк" },
    { id: "3", likes: 123, title: "Лайкните мой новый лайк!!!" },
    { id: "4", likes: 123, title: "Что за фэшн опиум демон" },
  ],
  newPostValue: {
    title: "",
    likes: 0,
  },
};

interface ChangeNewPostValueAction {
  type: "ChangeNewPostValueAction";
  payload: {
    title: string;
    likes: number;
  };
}

interface ChangeNewPosts {
  type: "ChangePostsValue";
  payload: IPost[];
}

type Action = ChangeNewPostValueAction | ChangeNewPosts;

export const postsReducer = (
  state: PostsState = initialState,
  action: Action
): PostsState => {
  switch (action.type) {
    case "ChangeNewPostValueAction":
      return {
        ...state,
        newPostValue: action.payload,
      };

    case "ChangePostsValue":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
