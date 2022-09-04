import React from "react";
import NASDAQ from "../../assets/nasdaq-dark.svg";
import BOX from "../../assets/box-dark.svg";
import NETAPP from "../../assets/netapp-dark.svg";
import EVENTBRITE from "../../assets/eventbrite-dark.svg";
import Image from "next/image";

const logos = [
	{
		id: 1,
		logo: NASDAQ,
	},
	{
		id: 2,
		logo: BOX,
	},
	{
		id: 3,
		logo: NETAPP,
	},
	{
		id: 4,
		logo: EVENTBRITE,
	},
];
function Trusties() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="mb-4 font-bold text-black text-xl">
				Truested by companies of all sizes
			</h1>
			<div className="flex space-x-1">
				{logos.map((logo) => (
					<Image
						key={logo.id}
						src={logo.logo}
						className="w-20 h-20"
						alt="Trust companies"
					/>
				))}
			</div>
		</div>
	);
}

export default Trusties;
