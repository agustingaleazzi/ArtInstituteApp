import { makeStyles } from '@material-ui/styles';
import theme from './theme';

const useStyles = makeStyles(theme => ({
    MuiBox: {
        flexWrap: 'wrap',
        minWidth: '90vw',
        minHeight: '90vh',
        backgroundColor: '#fff',
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    MuiGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start"
    },

}));

export default useStyles;