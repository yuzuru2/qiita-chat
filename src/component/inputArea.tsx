import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import i_reducdr from 'src/interface/reducer';

// slice
import slice_post, { post } from 'src/store/post';

export default () => {
  const state = useSelector(state => state) as i_reducdr;
  const dispatch = useDispatch();

  return (
    <div className="form-group textareaWrapper">
      <textarea
        className="form-control"
        id="textarea"
        placeholder="メッセージ 150文字以内"
        maxLength={150}
        value={state.post.message}
        onChange={e => dispatch(slice_post.actions.message(e.target.value))}
        onKeyDown={e =>
          e.keyCode === 13 ? dispatch(post(state.post.message)) : ''
        }
      ></textarea>
    </div>
  );
};
