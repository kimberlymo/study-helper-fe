import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0F1820',
            contrastText: '#7B72B5',
        },
        secondary: {
            main: '#002934',
            contrastText: '#95CEC7',
        },
        info: {
          main: '#4B183A',
            contrastText: '#F2A5AD'
        },
        warning: {
            main: '#2C5F2D',
            contrastText: '#97BC62'
        },
        success: {
            main: '#2e5873',
            contrastText: '#9dd0fa'
        },
        error: {
            main: '#B00020',
            contrastText: '#F2A5AD'
        },
        background: {
            default: '#341313', // Set your desired background color here
        },
    },
    components: {
        //MuiAccordion: {
        //    styleOverrides: {
        //        root: {
        //            backgroundColor: '#002934',
        //            color: '#95CEC7',
        //        },
        //    },
        //},
        //MuiList: {
        //    styleOverrides: {
        //        root: {
        //            backgroundColor: '#002934',
        //            color: '#95CEC7',
        //            borderRadius: '10px',
        //        },
        //    },
        //}
    }
})