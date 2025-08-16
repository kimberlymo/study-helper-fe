import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {CreateModuleModal} from "../../components/createModule/CreateModuleModal";
import ModuleLists from "../../components/module/ModuleLists";
import styles from "./todo.module.scss";
import {TabbedNavigation} from "../../components/tabbedNavigation/TabbedNavigation";

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
