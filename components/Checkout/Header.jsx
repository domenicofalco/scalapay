import Paragraph from "atoms/Paragraph";
import Title from "molecules/Title";
import { textMargin, heading } from './Styles.module.css';

export default function Header() {
	return (
		<>
			<Title className={heading} variant="primary">Checkout</Title>
      <Paragraph>
				Fill in the form below.
			</Paragraph>
      <Paragraph className={textMargin}>
				You'll be redirected to the checkout page for payment.
			</Paragraph>
		</>
	);
}
