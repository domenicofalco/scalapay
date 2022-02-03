import Head from "next/head";
import Checkout from "components/Checkout";
import { pink } from "colors";

const styles = {
	div: {
		background: pink
	},
	section: {
		width: "100%",
		maxWidth: "800px",
		margin: "0 auto",
		padding: "120px 5%"
	}
}

export default function Home() {
	return (
		<div style={styles.div}>
			<Head>
				<title>Scalapay test</title>
			</Head>
			<section style={styles.section}>
				<Checkout />
			</section>
		</div>
	);
}
