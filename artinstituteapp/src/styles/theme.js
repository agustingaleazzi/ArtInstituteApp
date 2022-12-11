import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

/*$font-color-primary: #777777;
$font-color-secondary: #3c3c3c;
$font-family-primary: 'Roboto Slab', serif;
$font-family-secondary: 'Roboto', sans-serif;
$controls: #0074CA;
$background-primary: #27509b;
$background-secondary: #cbcbcb;*/

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
    typography: {
        myVariant: {
            fontSize: "4rem"
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
                },
            },
        },
    },
});

export default theme;