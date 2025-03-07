import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store';

export const LoginPage = () => {
    const {email, password, onInputChange} = useForm({
        email: 'danni@gmail.com',
        password: '123456'
    })

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch( checkingAuthentication() );
    };

    const onGoogleSignIn = (e) => {
        console.log('google sign in');

        dispatch( startGoogleSignIn() );
        
        // Google sign-in logic here
    }

	return (
		<AuthLayout title='Login'>
			<form onSubmit={ onSubmit }>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='correo@google.com'
							fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							placeholder='Contraseña'
							fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} sm={6}>
							<Button type='submit' variant='contained' fullWidth>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button 
                                variant='contained' 
                                fullWidth
                                onClick={ onGoogleSignIn }
                            >
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction='row' justifyContent='end'>
						<Link
							component={RouterLink}
							color='inherit'
							to='/auth/register'
						>
							Crear una cuenta
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
