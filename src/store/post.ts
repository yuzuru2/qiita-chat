import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import i_reducdr from 'src/interface/reducer';
import Constant from 'src/constant';

import firebase from 'src/firebase';

const initialState: i_reducdr['post'] = {
  message: '',
};

const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    message: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

export const post = (message: string) => async (dispatch: Dispatch<any>) => {
  try {
    if (message.trim().length === 0) {
      alert('メッセージを入力してください');
      return;
    }

    dispatch(slice.actions.message(''));
    document.getElementById('textarea')?.blur();

    // apiたたく
    await firebase
      .firestore()
      .collection(Constant.collection)
      .add({
        uid: await firebase.auth().currentUser?.uid,
        message: message.trim(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });

    document.getElementById('textarea')?.focus();
  } catch (err) {}
};

export default slice;
