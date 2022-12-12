import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#27509b',            
        },
        secondary: {
            main: '#cbcbcb'
        },
        text: {
            primary: '#777777',
            secondary: '#3c3c3c'
        }
    },
    components: {
        MuiBox: {
            styleOverrides: {
                root: {
                    width: '90vw',
                    height: '90vh',
                    backgroundColor: '#fff',
                    alignContent: 'center',
                    textAlign: 'center'
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    paddingRight: '2rem'
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    width: 200,
                    height: 420
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    width: 250,
                    height: 150,
                    alignContent: 'center',
                    textAlign: 'center',
                    margin: 'auto'
                },
            },
        },
    },
});

export default theme;