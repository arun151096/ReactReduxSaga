import { Action } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN, LoginAction, loginFailure, loginSuccess } from './actions';


function* mySaga() {
    yield takeLatest(LOGIN, loginUser);
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function* loginUser(action: LoginAction) {
    try {
        yield call(delay, 2000);
        const { email, password } = action.payload;
        if(email === 'email@email.com' && password === '12345678') {
            yield put(loginSuccess({ name: 'Arun', email }));
        } else {
            alert('Wrong Creds');
            throw new Error('Wrong Creds');
        }
    } catch (e) {
        yield put(loginFailure());
    }
  }

  export default mySaga;