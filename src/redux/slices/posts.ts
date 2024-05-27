import { createSlice } from "@reduxjs/toolkit";
//czy chcesz galierię zdjęć
//mapa strony (google maps)
//zakładki
const initialState: any = {
  posts: [],
};
export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = posts.actions;

export default posts.reducer;
