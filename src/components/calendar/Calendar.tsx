import React, {FC, useEffect, useState} from 'react';
import {CalendarEntry} from "./CalendarEntry";
import styles from './calendar.module.scss';
import {useToDoStore} from "../../store/useToDoStore";
import {getDatesInRange, WEEKDAYS} from "../../model/dateHelper";
import {IconButton} from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface Props {
    startDate: Date;
}

const DATES_TO_SHOW = 21; // three weeks

export const Calendar: FC<Props> = ({startDate}) => {
    const {getPlannedTasks} = useToDoStore();
    const [displayedStartDate, setDisplayedStartDate] = useState(startDate);
    const [datesToShow, setDatesToShow] = useState(getDatesInRange(displayedStartDate, DATES_TO_SHOW));

    useEffect(() => {
        setDatesToShow(getDatesInRange(displayedStartDate, DATES_TO_SHOW));
    }, [displayedStartDate]);

    const handlePrevious = () => {
        const newStartDate = new Date(displayedStartDate);
        newStartDate.setDate(newStartDate.getDate() - DATES_TO_SHOW);
        setDisplayedStartDate(newStartDate);
    };

    const handleNext = () => {
        const newStartDate = new Date(displayedStartDate);
        newStartDate.setDate(newStartDate.getDate() + DATES_TO_SHOW);
        setDisplayedStartDate(newStartDate);
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.weekdayHeader}>
                <IconButton aria-label="before" onClick={handlePrevious} style={{color: "white"}}>
                    <NavigateBeforeIcon/>
                </IconButton>
                {WEEKDAYS.map(day => (<div key={day}>{day}</div>))}
                <IconButton aria-label="next" onClick={handleNext}  style={{color: "white"}}>
                    <NavigateNextIcon/>
                </IconButton>
            </div>
            <div className={styles.calendar}>
                {datesToShow.map(date => (<div key={date.toISOString()}>
                    <CalendarEntry date={date} tasks={getPlannedTasks()}/>
                </div>))}
            </div>

            <div style={{marginBottom: 12, color: "white"}}>
                <span className={styles.legend} style={{ background: "var(--mui-success-main)" }} />
                To Learn
                <span className={styles.legend} style={{ background: "var(--mui-warning-main)" }} />
                Exam
            </div>
        </div>
    );
};