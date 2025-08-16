import Typography from "@mui/material/Typography";
import * as React from "react";
import ModuleLists from "../../components/module/ModuleLists";
import {Container} from "@mui/material";
import styles from './todo.module.scss';
import {CreateModuleModal} from "../../components/createModule/CreateModuleModal";

export const ToDoPage = () => {
    return (
        <Container className={styles.container}>
            <Typography variant="h3" className={styles.heading}>TO LEARN</Typography>
            <ModuleLists/>
            <CreateModuleModal/>
        </Container>
    )
};