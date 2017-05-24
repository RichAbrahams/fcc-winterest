import { eventChannel, takeLatest } from 'redux-saga';
import { fork, take, call, put } from 'redux-saga/effects';
import firebase from 'firebase';
import { SIGN_IN, SIGN_OUT, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './constants';
import { signInSuccess, signOutSuccess } from './actions';

const config = {
  apiKey: 'AIzaSyC-SpBJeIKE62gz5e_pRIx3iZ2vWOviVqc',
  authDomain: 'winterest-6a299.firebaseapp.com',
  databaseURL: 'https://winterest-6a299.firebaseio.com',
  projectId: 'winterest-6a299',
  storageBucket: 'winterest-6a299.appspot.com',
  messagingSenderId: '124832527875',
};

const fb = firebase.initializeApp(config);

function initFirebase() {
  return eventChannel((emitter) => {
    fb.auth()
      .onAuthStateChanged((user) => {
        if (user) {
          emitter({ type: SIGN_IN_SUCCESS, payload: user });
        } else {
          emitter({ type: SIGN_OUT_SUCCESS, value: null });
        }
      });

    return () => console.log('Socket off');
  });
}

function* fireBaseReceiveData(channel) {
  while (true) {
    const action = yield take(channel);
    switch (action.type) {
      case SIGN_IN_SUCCESS:
        yield put(signInSuccess({ username: action.payload.displayName }));
        break;
      case SIGN_OUT_SUCCESS:
        yield put(signOutSuccess());
        break;
      default:
        break;
    }
  }
}

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
    yield firebase.auth().signInWithPopup(provider);
  } catch (err) {
    console.log(err);
  }
}

function* signOutSaga() {
  fb.auth().signOut();
}

export function* watcher() {
  const channel = yield call(initFirebase);
  yield fork(fireBaseReceiveData, channel);
  yield fork(takeLatest, SIGN_IN, signInSaga);
  yield fork(takeLatest, SIGN_OUT, signOutSaga);
}

export default [
  watcher,
];

