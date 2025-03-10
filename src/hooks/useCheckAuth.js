import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config';

export const useCheckAuth = () => {

    const { status } = useSelector( state => state.auth );

    const dispatch = useDispatch();

    useEffect( () => {
        onAuthStateChanged( FirebaseAuth, async ( user ) => {
            if ( !user ) return dispatch( logout( {} ) );

            const { uid, email, displayName, photoURL } = user;

            dispatch( login( { uid, displayName, email, photoURL } ) );
        } )
    }, [] );

    return status
}
