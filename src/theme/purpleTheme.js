import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        //mode: 'dark',
        primary: {
            main: '#2098FB',
            backgroundColor: '#121212'
        },
        secondary: {
            main: '#0F62A7'
        },
        error: {
            main: red.A400
        }
    }
})





