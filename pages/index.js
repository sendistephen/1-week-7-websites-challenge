import Link from "next/link";

export default function Home() {
	return (
		<div className="h-screen px-8 bg-gray-900">
			<div className="max-w-5xl pt-10 lg:max-w-lg">
				<h1 className="mb-4 text-3xl font-bold leading-relaxed text-center text-transparent sm:text-4xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text">
					Create 7 Websites in 1 Week Challenge
				</h1>
				<div className="text-center text-gray-400">
					<p>
						In this challenge I take on the task to create 7 landing website
						pages
					</p>
					<p>
						I have used <span className="text-blue-500">react.js</span> and{" "}
						<span className="text-blue-500">tailwindcss</span> as my tools for
						this challenge.
					</p>
				</div>
				<div className="flex flex-col mt-4 space-y-2 text-center">
					<Link href="/udemy-clone" className="cursor-pointer">
						<a>
							<div className="p-2 bg-gray-800 opacity-0.5 rounded">
								<h3 className="text-xl text-transparent bg-gradient-to-r from-blue-500 via-red-500 to-violet-500 bg-clip-text">
									Day1: Udemy Landing Page Clone
								</h3>
							</div>
						</a>
					</Link>
					<Link href="/hoobank" className="cursor-pointer">
						<a>
							<div className="p-2 bg-gray-800 opacity-0.5 rounded">
								<h3 className="text-xl text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-green-500 bg-clip-text">
									Day2: Modern website page (HooBank)
								</h3>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
