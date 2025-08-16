import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CreateModuleModal } from "../../components/createModule/CreateModuleModal";
import ModuleLists from "../../components/module/ModuleLists";
import styles from "./todo.module.scss";

export const ToDoPage = () => {
	return (
		<Container className={styles.container}>
			<Typography variant="h3" className={styles.heading}>
				TO LEARN
			</Typography>
			<ModuleLists />
			<CreateModuleModal />
		</Container>
	);
};
