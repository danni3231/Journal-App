import { singInWithGoogle } from '../../firebase/googleAuth';
import { checkingCredentials } from './authSlice';

export const checkingAuthentication = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await singInWithGoogle();
	};
};
