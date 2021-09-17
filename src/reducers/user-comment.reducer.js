import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userCommentApi from '../apis/user-comment.api';
import { getResponseError } from '../helpers';

export const getListCommentByProductID = createAsyncThunk(
  'userComment/GetList',
  async ({ productID, page }, { rejectWithValue }) => {
    try {
      return (await userCommentApi.getListByProductID({ productID, page })).data;
    } catch (error) {
      return rejectWithValue(getResponseError(error));
    }
  }
);

export const addComment = createAsyncThunk(
  'userComment/AddComment',
  async ({ productID, content, vote }, { rejectWithValue }) => {
    try {
      console.log(content)
      return (await userCommentApi.addComment({ productID, content, vote })).data;
    } catch (error) {
      return rejectWithValue(getResponseError(error));
    }
  }
);

const userComment = createSlice({
  name: 'userComment',
  initialState: {
    loading: false,
    comments: [],
    totalPage: 0,
    avgStar: 0,
    totalReviewStar: {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
    },
    totalPeopleReview: 0,
  },
  [getListCommentByProductID.pending]: (state) => {
    state.loading = true;
  },
  [getListCommentByProductID.error]: (state) => {
    state.loading = false;
  },
  [getListCommentByProductID.fulfilled]: (state, action) => {
    state.loading = false;
    state.comments = action.payload.listComment.commentList;
    state.avgStar = action.payload.listComment.avgStar;
    state.totalReviewStar.one = action.payload.listComment.numberOneStar;
    state.totalReviewStar.two = action.payload.listComment.numberTwoStars;
    state.totalReviewStar.three = action.payload.listComment.numberThreeStars;
    state.totalReviewStar.four = action.payload.listComment.numberFourStars;
    state.totalReviewStar.five = action.payload.listComment.numberFiveStars;
    state.totalPage = action.payload.listComment.numberOfPage;
  },
  [getListCommentByProductID.pending]: (state) => {
    state.loading = true;
  },
  [getListCommentByProductID.error]: (state) => {
    state.loading = false;
  },
  [getListCommentByProductID.fulfilled]: (state, action) => {
    state.add = action.payload.cmtId;
    state.loading = true;
  }
});

export const userCommentActions = userComment.actions;
export default userComment;
