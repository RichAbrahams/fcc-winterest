import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as firebase from 'firebase';
import auth from 'firebase/auth';
import database from 'firebase/database';
import { SIGN_IN, RESTORE_TOKEN } from './constants';
import { signInSuccess, restoreTokenSuccess } from './actions';

const config = {
  apiKey: 'AIzaSyC-SpBJeIKE62gz5e_pRIx3iZ2vWOviVqc',
  authDomain: 'winterest-6a299.firebaseapp.com',
  databaseURL: 'https://winterest-6a299.firebaseio.com',
  projectId: 'winterest-6a299',
  storageBucket: 'winterest-6a299.appspot.com',
  messagingSenderId: '124832527875',
};

const app = firebase.initializeApp(config);



function* signInSaga(action) {
  let provider;
  switch (action.payload) {
    case 'google': provider = new firebase.auth.GoogleAuthProvider();
      break;
    case 'github': provider = new firebase.auth.GithubAuthProvider();
      break;
    case 'twitter': provider = new firebase.auth.TwitterAuthProvider();
      break;
    default:
      break;
  }
  try {
    const response = yield firebase.auth().signInWithPopup(provider)
    .then((result) => result)
    .catch((err) => err);
    yield setLocalStorage(response.credential.accessToken);
    yield put(signInSuccess({
      name: response.additionalUserInfo.profile.name,
      email: response.additionalUserInfo.profile.email,
      token: response.credential.accessToken,
      uid: response.user.uid,
    }));
  } catch (err) {
    console.log(err);
  }
}

function* restoreTokenSaga() {
  const token = yield localStorage.getItem('token');
  console.log('restored', token);
}

export function* watcher() {
  yield fork(takeLatest, SIGN_IN, signInSaga);
  yield fork(takeLatest, RESTORE_TOKEN, restoreTokenSaga);
}

export default [
  watcher,
];