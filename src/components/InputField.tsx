import { InputAdornment, TextField } from "@mui/material";
import {type ChangeEvent, type FC, type ReactNode, useId} from "react";
import styles from "./createModule/createListModal.module.scss";

interface Props {
	label: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	color?: string;
	icon?: ReactNode;
	type?: string;
	isMultiline?: boolean;
}

export const InputField: FC<Props> = ({
	value,
	onChange,
	className,
	color,
	label,
	icon,
	type,
	isMultiline,
}) => {
	return (
		<TextField
			id={useId()}
			className={className || styles.inputField}
			label={label}
			value={value}
			onChange={onChange}
			sx={{
				input: { color },
				label: { color, "&.Mui-focused": { color } },
				"& .MuiInput-underline:before": {
					borderBottomColor: color,
				},
				"& .MuiInput-underline:after": {
					borderBottomColor: color,
				},
				"& .MuiInput-underline:hover:before": {
					borderBottomColor: color,
				},

				"& .Mui-focused .MuiInput-underline:after": {
					borderBottomColor: color,
				},
			}}
			slotProps={{
				input: {
					startAdornment: (
						<InputAdornment position="start">{icon}</InputAdornment>
					),
				},
			}}
			variant="standard"
			type={type}
			multiline={isMultiline}
		/>
	);
};
