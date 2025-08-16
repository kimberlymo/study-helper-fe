import {Button, Drawer, useTheme} from '@mui/material';
import AlarmIcon from '@mui/icons-material/Alarm';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Typography from "@mui/material/Typography";
import DrawIcon from '@mui/icons-material/Draw';
import {ChangeEvent, FC, useState} from "react";
import {InputField} from "../InputField";
import FormatListBulletedAddIcon from "@mui/icons-material/FormatListBulleted";
import {validateDate, validateString} from "../../model/validateFields";
import {useToDoStore} from "../../store/useToDoStore";
import styles from './createListModal.module.scss';

export const CreateListModal: FC = () => {
    const theme = useTheme();
    const {addList} = useToDoStore();

    const [open, setOpen] = useState(false);
    const [exam, setExam] = useState({name: '', examDate: ''});
    const [errors, setErrors] = useState({name: '', examDate: ''});

    const handleExamChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
        setExam({...exam, [key]: event.target.value});
        setErrors({...errors, [key]: ''}); // Clear error when user types
    };

    const validateFields = () => {
        setErrors({name: validateString(exam.name), examDate: validateDate(exam.examDate)});
    };

    const createList = (event: any) => {
        event.preventDefault();
        validateFields();
        if (!errors.name && !errors.examDate) {
            addList(exam.name, new Date(exam.examDate));
            setOpen(false);
        }
    };

    const openDrawer = () => {
        setExam({name: '', examDate: ''});
        setOpen(true);
    }

    return <div>
        <Button onClick={openDrawer} color="warning" variant="contained"
                startIcon={<FormatListBulletedAddIcon/>}>ADD MODULE</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
            <div className={styles.container}>
                <Typography variant="h4" className={styles.title}>ADD EXAM FOR MODULE</Typography>

                <form onSubmit={createList} className={styles.form}>
                    <InputField
                        value={exam.name}
                        onChange={event => handleExamChange(event, "name")}
                        label="Exam"
                        icon={<DriveFileRenameOutlineIcon className={styles.inputFieldIcon}/>}
                        color={theme.palette.info.contrastText}
                        className={styles.inputField}
                    />
                    {errors.name && <Typography color="error" className={styles.error}>{errors.name}</Typography>}

                    <InputField
                        value={exam.examDate}
                        onChange={event => handleExamChange(event, "examDate")}
                        label="Exam Date"
                        icon={<AlarmIcon className={styles.inputFieldIcon}/>}
                        color={theme.palette.info.contrastText}
                        className={styles.inputField}
                        type="date"
                    />
                    {errors.examDate && <Typography color="error" className={styles.error}>{errors.examDate}</Typography>}

                    <Button startIcon={<DrawIcon/>} type="submit" color="primary" variant="contained"
                            className={styles.button}>
                        ADD EXAM
                    </Button>
                </form>
            </div>
        </Drawer>
    </div>
}