import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {useToDoStore} from "../store/useToDoStore";
import {formatDate} from "../model/formatDate";
import LaptopMac from '@mui/icons-material/LaptopMac';


export const ExamTimeLine = () => {
    const {lists} = useToDoStore();

    return (
         <Timeline position="left" color="primary">
             {lists.map(exam =>
                 <TimelineItem>
                     <TimelineOppositeContent sx={{ margin: 'auto 0', color: 'secondary.contrastText' }}
                                              align="right"
                                              variant="body2">
                         {formatDate(exam.examDate)}
                     </TimelineOppositeContent>
                     <TimelineSeparator>
                         <TimelineConnector sx={{ backgroundColor: 'warning.main' }}/>
                         <TimelineDot sx={{ color: 'warning.contrastText', backgroundColor: 'warning.main' }}>
                             <LaptopMac />
                         </TimelineDot>
                         <TimelineConnector sx={{ backgroundColor: 'warning.main' }}/>
                     </TimelineSeparator>
                     <TimelineContent sx={{ py: '12px', px: 2, margin: 'auto 0', color: 'secondary.contrastText' }}>{exam.name}</TimelineContent>
                 </TimelineItem>
             )}
            </Timeline>
    );
}