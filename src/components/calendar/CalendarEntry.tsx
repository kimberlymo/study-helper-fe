import {FC} from "react";
import styles from "./calendar.module.scss";
import classnames from "classnames";
import {useToDoStore} from "../../store/useToDoStore";
import {Button} from "@mui/material";
import {Task} from "../../model/task";
import {formatTime, isSameDay} from "../../model/dateHelper";

interface Props {
    date: Date;
    tasks?: Task[];
}

function formatTaskTimeRange(task: Task) {
    const start = task.startTime ? formatTime(task.startTime) : "";
    const end = task.endTime ? formatTime(task.endTime) : "";
    return `${task.name} ${start} - ${end}`;
}

export const CalendarEntry: FC<Props> = ({date, tasks}) => {
    const {getExamsOnDate} = useToDoStore();
    const isDateInPast = date < new Date(new Date().setHours(0, 0, 0, 0));
    const isToday = isSameDay(date, new Date());
    const exams = getExamsOnDate(date);

    const classNames = classnames(styles.calendarEntry, {
        [styles.past]: isDateInPast,
        [styles.today]: isToday,
    })

    const tasksToDisplay = tasks ? tasks.filter(task => task.startTime && isSameDay(date, task.startTime)) : [];

    return <div className={classNames}>
        {date.getDate()}
        {exams.map(exam =>
            <Button variant="contained" color="warning" className={styles.event} key={exam.id}>
                {`${exam.name} ${formatTime(exam.examDate)}`}
            </Button>
        )}

        {tasksToDisplay.slice(0, 3).map(task =>
            <Button variant="contained" color="success" className={styles.event} key={task.id}>
                {formatTaskTimeRange(task)}
            </Button>
        )}
        {tasksToDisplay.length > 2 &&
            <Button variant="text" size="small" className={styles.moreTasks}>
                +{tasksToDisplay.length - 3} more
            </Button>
        }
        <div>
        </div>
    </div>
}