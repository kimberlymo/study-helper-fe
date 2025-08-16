import * as React from 'react';
import {Container, Divider, List, ListSubheader} from '@mui/material';
import ListItem from './ListItem';
import {Task} from "../../model/task";
import {useToDoStore} from "../../store/useToDoStore";
import styles from './list.module.scss';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {AddTask} from "../AddTask";
import {formatDate} from "../../model/formatDate";
import {EditableTitle} from "../EditableTitle";

export const ModuleLists = () => {
    const modules = useToDoStore((state) => state.modules);
    const {renameModule} = useToDoStore();

    return <Container className={styles.listsContainer}>
        {modules.map((list) => (
                <List className={styles.list} key={`${list.id}_${list.name}`}>
                    <Container className={styles.titleContainer}>
                        <AssignmentTurnedInIcon className={styles.title}/>
                        <EditableTitle title={list.name} onRenameTitle={renameModule} listId={list.id}/>
                    </Container>
                    <ListSubheader className={styles.listSubTitle}>
                        EXAM: {formatDate(list.examDate)}
                    </ListSubheader>
                    <Divider variant="middle" className={styles.customDivider}/>
                    {
                        list.tasks.map((task: Task) => (
                            <ListItem listId={list.id} task={task} key={`${list.id}_${task.id}`}/>
                        ))
                    }
                    <AddTask listId={list.id}/>
                </List>
        ))}</Container>
}

export default ModuleLists;