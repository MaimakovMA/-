import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "./slices.jsx";

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
