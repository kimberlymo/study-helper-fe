import {Container, Typography} from "@mui/material";
import {CreateModuleModal} from "../../components/createModule/CreateModuleModal";
import ModuleLists from "../../components/module/ModuleLists";
import {TabbedNavigation} from "../../components/tabbedNavigation/TabbedNavigation";
import styles from "../pages.module.scss";

export const ToDoPage = () => {
    return (
        <div>
            <TabbedNavigation/>
            <Container className={styles.container}>
                <Typography variant="h3" className={styles.heading}>
                    TO LEARN
                </Typography>
                <ModuleLists/>
                <CreateModuleModal/>
            </Container>
        </div>
    );
};
