import React from "react";
import styles from "../../styles/style";
import {
	Navbar,
	Billing,
	CardDeal,
	Business,
	Clients,
	CTA,
	Stats,
	Footer,
	Testimonials,
	Hero,
} from "./components";

function index() {
	return (
		<div className="w-full overflow-hidden bg-primary">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth} `}>Navbar</div>
			</div>

			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>Hero</div>
			</div>
		</div>
	);
}

export default index;
