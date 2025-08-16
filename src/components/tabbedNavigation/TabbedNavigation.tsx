import {Box, AppBar, Toolbar, Typography, Button} from "@mui/material"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import {useNavigate} from "react-router";

export const TabbedNavigation = () => {
    let navigate = useNavigate();

    return (
        <Box sx={{width: '100%'}}>
            <AppBar position="static" color="info">
                <Toolbar disableGutters>
                    <LightbulbIcon sx={{display: {xs: 'none', md: 'flex', padding: '20px'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        STUDY HELPER
                    </Typography>
                    <Button sx={{padding: '20px', color: 'info.contrastText'}} onClick={() => navigate("/to-do")}>
                        TO DO
                    </Button>
                    <Button sx={{padding: '20px', color: 'info.contrastText'}} onClick={() => navigate("/overview")}>
                        CALENDAR
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}