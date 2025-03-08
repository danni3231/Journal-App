import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword, EmailAuthProvider } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    console.log( FirebaseAuth );

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const credentials = GoogleAuthProvider.credentialFromResult( result );

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            //userInfo
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch ( error ) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
};


export const registerUserWithEmailPassword = async ( { email, password, displayName } ) => {
    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName } )

        return {
            ok: true,
            uid,
            displayName,
            photoURL,
            email,
        };

    } catch ( error ) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }
}


export const loginWithEmailPassword = async ( { email, password } ) => {
    try {

        const result = await signInWithEmailAndPassword( FirebaseAuth, email, password );

        const { displayName, photoURL, uid } = result.user;

        return {
            ok: true,
            //userInfo
            displayName,
            email,
            photoURL,
            uid,
        };

    } catch ( error ) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }

}

