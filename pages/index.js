import PropTypes from "prop-types";
import Head from "next/head";
import Checkout from "components/Checkout";
import { CART_ENDPOINT } from "endpoint";
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
};

export default function Home({ cart }) {
  return (
    <div style={styles.div}>
      <Head>
        <title>Scalapay test</title>
      </Head>
      <section style={styles.section}>
        <Checkout cart={cart} />
      </section>
    </div>
  );
}

Home.getInitialProps = async function () {
  const res = await fetch(CART_ENDPOINT);
  const cart = await res.json();

  return { cart };
};

Home.propTypes = {
  cart: PropTypes.shape({
    redirectCancelUrl: PropTypes.string,
    redirectConfirmUrl: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        price: PropTypes.shape({
          amount: PropTypes.string,
          currency: PropTypes.string
        }),
        brand: PropTypes.string,
        category: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string
      })
    )
  })
};
