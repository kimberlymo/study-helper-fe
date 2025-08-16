import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button, Checkbox } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import classNames from "classnames";
import { type ChangeEvent, type FC, useState } from "react";
import type { Task } from "../../model/task";
import { useToDoStore } from "../../store/useToDoStore";
import { InputField } from "../InputField";
import styles from "./list.module.scss";

interface Props {
	listId: string;
	task: Task;
}

export const ListItem: FC<Props> = ({ listId, task }) => {
	const [open, setOpen] = useState(false);
	const [description, setDescription] = useState(task.description);
	const [editMode, setEditMode] = useState(false);

	const { updateTask, removeTask } = useToDoStore();

	const textClassName = classNames({
		[styles.listItemChecked]: task.completed,
	});

	const handleClick = () => {
		setOpen(!open);
	};

	const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
		updateTask(listId, task.id, { completed: event.target.checked });
	};

	const updateDescription = () => {
		updateTask(listId, task.id, { description });
		setEditMode(false);
	};

	const deleteTask = () => {
		removeTask(listId, task.id);
	};

	return (
		<>
			<ListItemButton>
				<Checkbox
					checked={task.completed}
					className={styles.icon}
					onChange={handleSelect}
				/>
				<ListItemText
					className={textClassName}
					primary={task.name}
					onClick={handleClick}
				/>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{editMode ? (
					<div>
						<InputField
							value={description}
							onChange={(event) => setDescription(event.target.value)}
							label="Description"
							color="secondary.contrastText"
							isMultiline={true}
						/>
						<Button
							variant="contained"
							color="warning"
							className={styles.button}
							startIcon={<UpgradeIcon />}
							onClick={updateDescription}
						>
							UPDATE
						</Button>
						<Button
							variant="contained"
							color="primary"
							className={styles.button}
							startIcon={<DeleteForeverIcon />}
							onClick={deleteTask}
						>
							DELETE
						</Button>
					</div>
				) : (
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }} onClick={() => setEditMode(true)}>
							<ListItemText
								primary={
									<span style={{ whiteSpace: "pre-wrap" }}>
										{task.description}
									</span>
								}
							/>
						</ListItemButton>
					</List>
				)}
			</Collapse>
		</>
	);
};

export default ListItem;
