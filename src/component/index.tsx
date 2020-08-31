import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import i_reducdr from 'src/interface/reducer';
import firebase from 'src/firebase';

// action
import { getmessageList } from 'src/store/messageList';

// component
import Loading from 'src/component/loading';
import MessageList from 'src/component/messageList';
import Aside from 'src/component/aside';
import PostArea from 'src/component/postArea';

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

      <PostArea />

      <p>最新100件のメッセージ</p>

      <div className="row2">
        <MessageList />
        <Aside />
      </div>
    </>
  );
};
