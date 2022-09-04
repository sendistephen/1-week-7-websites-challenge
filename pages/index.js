import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="bg-gray-900 h-screen">
			<div className="max-w-5xl lg:max-w-lg mx-auto pt-10">
				<h1 className="font-bold text-3xl sm:text-4xl mb-4 text-center text-transparent leading-relaxed bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text">
					Create 7 Websites in 1 Week Challenge
				</h1>
				<div className="text-gray-400">
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
				<div className="mt-4 text-center">
					<Link href="/udemy-clone" className="cursor-pointer">
						<a>
							<div className="p-2 bg-blue-900 rounded">
								<h3 className="text-xl text-transparent bg-gradient-to-r from-blue-500  via-red-500 to-violet-500 bg-clip-text">
									Day1: Udemy Landing Page Clone
								</h3>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
