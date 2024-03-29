import { takeLatest, call, put, all } from 'redux-saga/effects';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import {
  firestore,
  convertCollectionsSnapToMap
} from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapToMap, snapshot);    
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
