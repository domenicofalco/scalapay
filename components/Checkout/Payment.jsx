import Form from "usetheform";
import InputField from "molecules/InputField";
import { inputField, form } from './Styles.module.css';

export default function Payment() {
	const onChange = state => {
		console.log(state);
	}

	return (
		<Form className={form} onChange={onChange}>
			<section className={inputField}>
				<InputField 
					type="text"
					name="name" 
					label="some really loong too long label label" 
				/>
			</section>

			<section className={inputField}>
				<InputField
					type="text"
					name="name"
					label="some label"
				/>
			</section>
		</Form>
	);
}
