/* eslint no-console:0, no-constant-condition:0, arrow-body-style:0 */

import { eventChannel, takeLatest } from 'redux-saga';
import { fork, take, call, put, select } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form/immutable';
import firebase from 'firebase';
import { LIKE_CLICK } from 'containers/HomePage/constants';
import { SUBMIT_WIN, DELETE_WIN } from 'containers/MyWins/constants';
import { selectUsername } from 'containers/Header/selectors';
import { toggleAddWin } from 'containers/MyWins/actions';
import { SIGN_IN, SIGN_OUT, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, FIREBASE_DATA_SUCCESS, FIREBASE_DATA_ERROR } from './constants';
import { signInSuccess, signOutSuccess, toggleShowSignIn, updateWins } from './actions';

const config = {
  apiKey: 'AIzaSyC-SpBJeIKE62gz5e_pRIx3iZ2vWOviVqc',
  authDomain: 'winterest-6a299.firebaseapp.com',
  databaseURL: 'https://winterest-6a299.firebaseio.com',
  projectId: 'winterest-6a299',
  storageBucket: 'winterest-6a299.appspot.com',
  messagingSenderId: '124832527875',
};

const fb = firebase.initializeApp(config);

const dbRef = fb.database()
                .ref('wins');

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


    const dataSuccess = (data) => emitter({ type: FIREBASE_DATA_SUCCESS, payload: data });
    const dataFailed = (err) => emitter({ type: FIREBASE_DATA_ERROR, payload: err });

    dbRef.on('value', dataSuccess, dataFailed);

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
      case FIREBASE_DATA_SUCCESS:
        yield put(updateWins(action.payload.val()));
        break;
      case FIREBASE_DATA_ERROR:
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

const asyncValidate = (values) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(false);
    img.onerror = () => resolve(true);
    img.src = values.get('imgLink');
  });
};


function* submitWinSaga(action) {
  const { data, resolve, reject } = action.payload;
  const checkImgLink = yield asyncValidate(data);
  if (checkImgLink) {
    reject(new SubmissionError({ imgLink: 'Image link is broken' }));
  } else {
    const user = yield select(selectUsername());
    const jsData = data.toJS();
    jsData.user = user;
    dbRef.push(jsData);
    yield resolve();
    yield put(toggleAddWin());
  }
}


function* deleteWinSaga(action) {
  yield dbRef.child(action.payload.uid).remove();
}

const addLike = (win) => {
  dbRef.child(win.uid).set(win);
};

const removeLike = (win) => {
  dbRef.child(win.uid).set(win);
};

function* likeClickSaga(action) {
  const win = Object.assign({}, action.payload);
  const user = yield select(selectUsername());
  if (!user) {
    yield put(toggleShowSignIn());
  } else if (!win.liked) {
    win.liked = [user];
    yield addLike(win);
  } else if (win.liked.indexOf(user) === -1) {
    win.liked.push(user);
    yield addLike(win);
  } else {
    const index = win.liked.indexOf(user);
    win.liked.splice(index, 1);
    yield removeLike(win);
  }
}

export function* watcher() {
  const channel = yield call(initFirebase);
  yield fork(fireBaseReceiveData, channel);
  yield fork(takeLatest, SIGN_IN, signInSaga);
  yield fork(takeLatest, SIGN_OUT, signOutSaga);
  yield fork(takeLatest, SUBMIT_WIN, submitWinSaga);
  yield fork(takeLatest, DELETE_WIN, deleteWinSaga);
  yield fork(takeLatest, LIKE_CLICK, likeClickSaga);
}

export default [
  watcher,
];

