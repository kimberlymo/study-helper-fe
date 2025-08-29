import {Calendar} from "../../components/calendar/Calendar";
import {TabbedNavigation} from "../../components/tabbedNavigation/TabbedNavigation";
import {Container, Typography} from "@mui/material";
import styles from "../pages.module.scss";

export const Overview = () => {
    return (
        <div>
            <TabbedNavigation/>
            <Container className={styles.container}>
                <Typography variant="h3" className={styles.heading}>
                    OVERVIEW
                </Typography>
                <Calendar startDate={new Date()}/>
            </Container>

        </div>
    );
};
