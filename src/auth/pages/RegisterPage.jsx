import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store';

const formData = {
    email: '',
    password: '',
    displayName: '',
}

const formValidations = {
    email: [ ( value ) => value.includes( '@' ), 'El correo debe de tener una @' ],
    password: [ ( value ) => value.length >= 6, 'El password debe de tener más de 6 letras' ],
    displayName: [ ( value ) => value.length >= 1, 'El nombre es  obligatorio' ]
}

export const RegisterPage = () => {

    const [ formSubmited, setformSubmited ] = useState( false )

    const { status, errorMessage } = useSelector( state => state.auth )

    const isCheckingAuth = useMemo( () => status === 'checking', [ status ] )

    const dispatch = useDispatch()

    const {
        email, password, displayName, onInputChange, formState,
        isFormValid, emailValid, passwordValid, displayNameValid
    } = useForm( formData, formValidations );

    const onSubmit = ( e ) => {
        e.preventDefault();
        setformSubmited( true );

        if ( !isFormValid ) return

        console.log( formState );


        dispatch( startCreatingUserWithEmailPassword( formState ) )
    };

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={ onSubmit }>
                <Grid container>

                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder='Nombre completo'
                            fullWidth
                            name={ 'displayName' }
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmited }
                            helperText={ displayNameValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name={ 'email' }
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmited }
                            helperText={ emailValid }
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder='Contraseña'
                            fullWidth
                            name={ 'password' }
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmited }
                            helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>

                        <Grid
                            item xs={ 12 }
                            display={ !!errorMessage ? '' : 'none' }
                        >
                            <Alert severity='error'>{ errorMessage }</Alert>
                        </Grid>

                        <Grid item xs={ 12 }>
                            <Button
                                disabled={ isCheckingAuth }
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={ { mr: 1 } }>¿Ya tienes cuenta?</Typography>
                        <Link component={ RouterLink } color='inherit' to="/auth/login">
                            ingresar
                        </Link>
                    </Grid>

                </Grid>


            </form>

        </AuthLayout>
    )
}
