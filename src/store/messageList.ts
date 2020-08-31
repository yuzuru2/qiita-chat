import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import i_reducdr from 'src/interface/reducer';
import Constant from 'src/constant';

import firebase from 'src/firebase';

// slice
import slice_basic from 'src/store/basic';

const initialState: i_reducdr['messageList'] = {
  list: [],
};

const slice = createSlice({
  name: 'messageList',
  initialState,
  reducers: {
    list: (state, action: PayloadAction<i_reducdr['messageList']['list']>) => {
      state.list = action.payload;
    },
  },
});

export const getmessageList = () => async (dispatch: Dispatch) => {
  firebase
    .firestore()
    .collection(Constant.collection)
    .limit(100)
    .orderBy('createdAt', 'desc')
    .onSnapshot(col => {
      dispatch(
        slice.actions.list(
          col.docs.map(m => m.data()) as i_reducdr['messageList']['list']
        )
      );
      dispatch(slice_basic.actions.loading(false));
    });
};

export default slice;
