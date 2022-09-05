import React from "react";

const featuredTopics = [
	{
		id: 1,
		category: "Development",
		topic: [
			{
				id: 1,
				label: "Python",
				num_students: "36,220,446",
			},
			{
				id: 2,
				label: "Web Development",
				num_students: "11,376,700",
			},
			{
				id: 3,
				label: "Machine Learning",
				num_students: "7,052,658",
			},
		],
	},
	{
		id: 2,
		category: "Business",
		topic: [
			{
				id: 1,
				label: "Financial Analysis",
				num_students: "1,192,555",
			},
			{
				id: 2,
				label: "SQL",
				num_students: "5,954,894",
			},
			{
				id: 3,
				label: "PMP",
				num_students: "1,728,088",
			},
		],
	},
	{
		id: 3,
		category: "IT and Software",
		topic: [
			{
				id: 1,
				label: "AWS Certification",
				num_students: "6,043,725",
			},
			{
				id: 2,
				label: "Ethical Hacking",
				num_students: "10,895,432",
			},
			{
				id: 3,
				label: "Cyber Security",
				num_students: "3,979,983",
			},
		],
	},
	{
		id: 3,
		category: "Design",
		topic: [
			{
				id: 1,
				label: "Photoshop",
				num_students: "10,878,744",
			},
			{
				id: 2,
				label: "Graphic Design",
				num_students: "3,370,101",
			},
			{
				id: 3,
				label: "Drawing",
				num_students: "2,404,086",
			},
		],
	},
];
function Featured() {
	return (
		<div>
			<h1 className="mb-4 font-bold text-black text-xl">
				Featured topics by category
			</h1>
			<div className="grid gap-8 mb-6 grid-cols-2 md:grid-cols-4">
				{featuredTopics.map((featured) => (
					<div key={featured.id}>
						<h3 className="text-black font-bold mb-4">{featured.category}</h3>
						{featured.topic.map((topic) => (
							<div key={topic.id} className="mb-4">
								<h4 className="text-indigo-800 font-bold underline mb-2">
									{topic.label}
								</h4>
								<p className="text-gray-500 text-sm">
									{topic.num_students} students
								</p>
							</div>
						))}
					</div>
				))}
			</div>
			<button className="w-full px-5 py-3 border border-black text-black font-bold hover:bg-gray-100 md:w-auto">
				Explore more topics
			</button>
		</div>
	);
}

export default Featured;
