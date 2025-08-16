import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ShortTextIcon from "@mui/icons-material/ShortText";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import TitleIcon from "@mui/icons-material/Title";
import { Button, Divider, useTheme } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import { type ChangeEvent, type FC, useState } from "react";
import { validateString } from "../model/validateFields";
import { useToDoStore } from "../store/useToDoStore";
import { InputField } from "./InputField";
import styles from "./module/list.module.scss";

interface Props {
	listId: string;
}

export const AddTask: FC<Props> = ({ listId }) => {
	const theme = useTheme();
	const { addTask } = useToDoStore();

	const [open, setOpen] = useState(false);
	const [task, setTask] = useState({ name: "", description: "" });
	const [errors, setErrors] = useState({ name: "" });

	const handleTaskChange = (
		event: ChangeEvent<HTMLInputElement>,
		key: string,
	) => {
		setTask({ ...task, [key]: event.target.value });
		setErrors({ ...errors, [key]: "" }); // Clear error when user types
	};

	const validateFields = () => {
		setErrors({ name: validateString(task.name) });
	};

	const createTask = (event: any) => {
		event.preventDefault();
		validateFields();
		console.log(validateString(task.name));
		if (!errors.name) {
			addTask(listId, task.name, task.description);
			setOpen(false);
			console.log("hallo");
		}
	};

	return (
		<div>
			<ListItemButton
				className={styles.addContainer}
				onClick={() => setOpen(!open)}
			>
				<AddCircleOutlineIcon className={styles.icon} />
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<form onSubmit={createTask}>
					<Divider variant="middle" className={styles.customDivider} />
					<InputField
						label="Task"
						value={task.name}
						onChange={(event) => handleTaskChange(event, "name")}
						icon={<TitleIcon className={styles.icon} />}
						color={theme.palette.secondary.contrastText}
					/>
					<InputField
						label="Description"
						value={task.description}
						onChange={(event) => handleTaskChange(event, "description")}
						icon={<ShortTextIcon className={styles.icon} />}
						color={theme.palette.secondary.contrastText}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						startIcon={<TaskAltIcon />}
						className={styles.button}
					>
						CREATE TASK
					</Button>
				</form>
			</Collapse>
		</div>
	);
};
