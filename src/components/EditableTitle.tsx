import {FC, useState} from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {InputField} from "./InputField";
import DoneIcon from '@mui/icons-material/Done';
import {Button} from "@mui/material";
import styles from "./module/list.module.scss";

interface Props {
    title: string;
    listId: string;
    onRenameTitle: (listId: string, newTitle: string) => void;
}

export const EditableTitle: FC<Props> = ({title, onRenameTitle, listId}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const onTitleChange = () => {
        onRenameTitle(listId, newTitle)
        setIsEditing(false);
    }

    if (!isEditing) {
        return (
            <Typography variant="h4" className={styles.title} onClick={() => setIsEditing(true)}>
                {title}
            </Typography>
        );
    }

    return (
        <div className={styles.titleContainer}>
            <InputField label="" value={newTitle} onChange={e => setNewTitle(e.target.value)}
                        color="secondary.contrastText"
            />
            <Button onClick={onTitleChange}>
            <DoneIcon className={styles.icon}/>
            </Button>
        </div>
    );
}