import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import i_reducdr from 'src/interface/reducer';
import { post } from 'src/store/post';

export default () => {
  const state = useSelector(state => state) as i_reducdr;
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <button
        className="btn btn-primary"
        onClick={() => dispatch(post(state.post.message))}
      >
        投稿
      </button>
    </div>
  );
};
