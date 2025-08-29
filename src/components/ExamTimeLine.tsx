import LaptopMac from "@mui/icons-material/LaptopMac";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { formatDate } from "../model/dateHelper";
import { useToDoStore } from "../store/useToDoStore";

export const ExamTimeLine = () => {
	const { modules } = useToDoStore();

	return (
		<Timeline position="left" color="primary">
			{modules.map((module) => (
				<TimelineItem key={module.id}>
					<TimelineOppositeContent
						sx={{ margin: "auto 0", color: "secondary.contrastText" }}
						align="right"
						variant="body2"
					>
						{formatDate(module.examDate)}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ backgroundColor: "warning.main" }} />
						<TimelineDot
							sx={{
								color: "warning.contrastText",
								backgroundColor: "warning.main",
							}}
						>
							<LaptopMac />
						</TimelineDot>
						<TimelineConnector sx={{ backgroundColor: "warning.main" }} />
					</TimelineSeparator>
					<TimelineContent
						sx={{
							py: "12px",
							px: 2,
							margin: "auto 0",
							color: "secondary.contrastText",
						}}
					>
						{module.name}
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
};
