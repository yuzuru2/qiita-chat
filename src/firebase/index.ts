import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDz_2ZRlnjrix8KtK2qOUCXITXrXEbBh6k',
  authDomain: 'qiita-chat.firebaseapp.com',
  databaseURL: 'https://qiita-chat.firebaseio.com',
  projectId: 'qiita-chat',
  storageBucket: 'qiita-chat.appspot.com',
  messagingSenderId: '4008163199',
  appId: '1:4008163199:web:b7b818a3acb4164deb8c4a',
  measurementId: 'G-LV55KXVHS1',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
