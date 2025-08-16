import AlarmIcon from "@mui/icons-material/Alarm";
import DrawIcon from "@mui/icons-material/Draw";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import FormatListBulletedAddIcon from "@mui/icons-material/FormatListBulleted";
import { Button, Drawer, Typography, useTheme } from "@mui/material";
import { type ChangeEvent, type FC, useState } from "react";
import { validateDate, validateString } from "../../model/validateFields";
import { useToDoStore } from "../../store/useToDoStore";
import { InputField } from "../InputField";
import styles from "./createListModal.module.scss";

export const CreateModuleModal: FC = () => {
	const theme = useTheme();
	const { addList } = useToDoStore();

	const [open, setOpen] = useState(false);
	const [exam, setExam] = useState({ name: "", examDate: "" });
	const [errors, setErrors] = useState({ name: "", examDate: "" });

	const handleExamChange = (
		event: ChangeEvent<HTMLInputElement>,
		key: string,
	) => {
		setExam({ ...exam, [key]: event.target.value });
		setErrors({ ...errors, [key]: "" }); // Clear error when user types
	};

	const createList = (event: any) => {
		event.preventDefault();
		const nameError = validateString(exam.name);
		const dateError = validateDate(exam.examDate);
		setErrors({ name: nameError, examDate: dateError });
		if (!nameError && !dateError) {
			addList(exam.name, new Date(exam.examDate));
			setOpen(false);
		}
	};

	const openDrawer = () => {
		setOpen(true);
		setExam({ name: "", examDate: "" });
	};

	const closeDrawer = () => {
		setOpen(false);
		setErrors({ name: "", examDate: "" });
	};

	return (
		<div>
			<Button
				onClick={openDrawer}
				color="warning"
				variant="contained"
				startIcon={<FormatListBulletedAddIcon />}
			>
				ADD MODULE
			</Button>
			<Drawer open={open} onClose={closeDrawer}>
				<div className={styles.container}>
					<Typography variant="h4" className={styles.title}>
						ADD EXAM FOR MODULE
					</Typography>

					<form onSubmit={createList} className={styles.form}>
						<InputField
							value={exam.name}
							onChange={(event) => handleExamChange(event, "name")}
							label="Exam"
							icon={
								<DriveFileRenameOutlineIcon className={styles.inputFieldIcon} />
							}
							color={theme.palette.info.contrastText}
							className={styles.inputField}
						/>
						{errors.name && (
							<Typography color="error" className={styles.error}>
								{errors.name}
							</Typography>
						)}

						<InputField
							value={exam.examDate}
							onChange={(event) => handleExamChange(event, "examDate")}
							label="Exam Date"
							icon={<AlarmIcon className={styles.inputFieldIcon} />}
							color={theme.palette.info.contrastText}
							className={styles.inputField}
							type="date"
						/>
						{errors.examDate && (
							<Typography color="error" className={styles.error}>
								{errors.examDate}
							</Typography>
						)}

						<Button
							startIcon={<DrawIcon />}
							type="submit"
							color="primary"
							variant="contained"
							className={styles.button}
						>
							ADD EXAM
						</Button>
					</form>
				</div>
			</Drawer>
		</div>
	);
};
