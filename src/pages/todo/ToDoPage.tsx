import Typography from "@mui/material/Typography";
import * as React from "react";
import Lists from "../../components/list/Lists";
import {Container} from "@mui/material";
import styles from './todo.module.scss';
import {CreateListModal} from "../../components/createList/CreateListModal";

export const ToDoPage = () => {
    return (
        <Container className={styles.container}>
            <Typography variant="h3" className={styles.heading}>TO LEARN</Typography>
            <Lists/>
            <CreateListModal/>
        </Container>
    )
};