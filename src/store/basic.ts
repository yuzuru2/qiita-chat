import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import i_reducdr from 'src/interface/reducer';

const initialState: i_reducdr['basic'] = {
  loading: true,
};

const slice = createSlice({
  name: 'basic',
  initialState,
  reducers: {
    loading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default slice;
