import React from "react";
import Design from "../assets/category-design-1.jpeg";
import Development from "../assets/category-development-2.jpeg";
import Marketing from "../assets/category-marketing-2x-v2.jpeg";
import IT from "../assets/category-it-and-software-2x-v2.jpeg";
import PersonalDevelopment from "../assets/category-personal-development-2x-v2.jpeg";
import Business from "../assets/category-business-2x-v2.jpeg";
import Photography from "../assets/category-photography-2x-v2.jpeg";
import Music from "../assets/category-music-2x-v2.jpeg";
import Image from "next/image";

const categories = [
	{
		id: 1,
		image: Design,
		label: "Design",
	},
	{
		id: 2,
		image: Development,
		label: "Development",
	},
	{
		id: 3,
		image: Marketing,
		label: "Marketing",
	},
	{
		id: 4,
		image: IT,
		label: "IT and Software",
	},
	{
		id: 5,
		image: PersonalDevelopment,
		label: "Personal Development",
	},
	{
		id: 6,
		image: Business,
		label: "Business",
	},
	{
		id: 7,
		image: Photography,
		label: "Photography",
	},
	{
		id: 8,
		image: Music,
		label: "Music",
	},
];
function Categories() {
	return (
		<div className="grid grid-cols-4 gap-8">
			{categories.map((category) => (
				<div key={category.id}>
					<Image src={category.image} alt="Category" className="w-16 h-auto" />
					<p className="text-black font-bold">{category.label}</p>
				</div>
			))}
		</div>
	);
}

export default Categories;
