import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import i_reducdr from 'src/interface/reducer';
import firebase from 'src/firebase';

// slice
import slice_post, { post } from 'src/store/post';

// action
import { getmessageList } from 'src/store/messageList';

// component
import Loading from 'src/component/loading';
import MessageList from 'src/component/messageList';
import Aside from 'src/component/aside';

export default () => {
  const state = useSelector(state => state) as i_reducdr;
  const dispatch = useDispatch();

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(async data => {
      if (data === null) {
        firebase
          .auth()
          .signInAnonymously()
          .then(() => dispatch(getmessageList()));
        return;
      }

      dispatch(getmessageList());
    });
  }, []);

  if (state.basic.loading) {
    return <Loading />;
  }

  return (
    <>
      <h1>qiitaチャット</h1>

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

      <div className="text-center">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(post(state.post.message))}
        >
          投稿
        </button>
      </div>

      <p>最新100件のメッセージ</p>

      <div className="row2">
        <MessageList />
        <Aside />
      </div>
    </>
  );
};
