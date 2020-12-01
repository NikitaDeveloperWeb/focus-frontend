import { createSelector } from "reselect";
import { RootState } from "../../store";
import { PostState } from "./contracts/state";

export const selectPosts = (state:RootState):PostState =>state.posts;

export const selectLoadingState = (state:RootState)=> selectPosts(state).loadingState;

export const SelectPostItems = createSelector(selectPosts, (posts) => posts.items);
