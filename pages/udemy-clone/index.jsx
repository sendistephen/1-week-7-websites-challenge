import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/bg-hero.png";
import InstructorImage from "../../assets/instructor-2x-v3.jpeg";
import Logo from "../../assets/logo-udemy.svg";
import UdemyBusinessPerson from "../../assets/ub-2x-v3.jpeg";
import UdemyBusinessPerson2 from "../../assets/transform-2x-v3.jpeg";
import UdemyBusinessLogo from "../../assets/logo-ub.svg";
import UdemyLogoInv from "../../assets/logo-udemy-inverted.svg";
import {
	HiGlobeAlt,
	HiOutlineShoppingCart,
	HiOutlineX,
	HiSearch,
} from "react-icons/hi";
import Categories from "../../components/Categories";
import Featured from "../../components/Featured";
import Trusties from "./Trusties";

function index() {
	return (
		<main>
			<div className="bg-[#ffee56] p-4 md:text-center">
				<div className="flex justify-between">
					<div className="w-80 md:w-full md:mx-auto">
						<p className="font-light">
							<span className="font-extrabold">Extra day of saving</span> |
							It&apos;s not too late to stock up on learing with courses from{" "}
							<span className="font-extrabold">$9.99</span>. Ends today.
						</p>
					</div>
					<div>
						<HiOutlineX className="h-6 w-6" />
					</div>
				</div>
			</div>
			<div className="px-8  mx-auto shadow-lg">
				<header className="py-1 pb-4 w-full text-sm my-4 md:flex md:items-center md:space-x-4">
					<div>
						<Image className="h-8 w-8" src={Logo} alt="Udemy Logo" />
					</div>
					<div className="md:flex md:grow md:items-center space-x-4">
						<span>Categories</span>
						<div className="md:grow">
							<div className="relative">
								<HiSearch className="absolute top-3.5 left-4 h-6 w-6 text-gray-500" />
								<input
									className="w-full py-3 px-12 border border-black rounded-full placeholder:text-xs focus:ring-0 focus:outline-none"
									type="text"
									placeholder="Search for anything"
								/>
							</div>
						</div>
						<span>Udemy Business</span>
						<span>Teach on Udemy</span>
						<div>
							<HiOutlineShoppingCart className="w-6 h-6" />
						</div>
						<button className="px-5 py-3 border border-black text-black font-bold hover:bg-gray-100">
							Log in
						</button>
						<button className="px-5 py-3 bg-black border border-black text-white font-bold">
							Sign up
						</button>
						<button className="p-2.5 border border-black">
							<HiGlobeAlt className="w-6 h-6" />
						</button>
					</div>
				</header>
			</div>
			<div className="container mx-auto">
				<section id="hero" className="relative">
					<Image src={HeroImage} alt="hero banner" className="w-full" />
					<div className="absolute top-10 left-10 shadow w-96 p-4 bg-white rounded-sm">
						<h1 className="text-3xl font-extrabold text-black mb-2">
							Need an extra day to shop the sale?
						</h1>
						<p>
							We&apos;ve got you. Pile on the savings with courses for as little
							as $9.99. Ends today.
						</p>
					</div>
				</section>
				<section id="courses" className="mt-10">
					<h1 className="text-3xl font-extrabold text-black mb-2">
						A broad selection of courses
					</h1>
					<p className="text-gray-700">
						Choose from 204,000 online video courses with new additions
						published every month{" "}
					</p>
					<div className="mt-4">
						<div className="md:flex space-x-4 text-sm mb-4">
							<span className="font-bold">Python</span>
							<span>Excel</span>
							<span>Web Development</span>
							<span>Javascript</span>
							<span>Data Science</span>
							<span>AWS Certification</span>
							<span>Drawing</span>
						</div>
					</div>
					<div id="python">
						<h1 className="font-bold mb-2">
							Expand your career opportunities with Python
						</h1>
						<p className="text-gray-700 mb-4 max-w-4xl">
							Take one of Udemy’s range of Python courses and learn how to code
							using this incredibly useful language. Its simple syntax and
							readability makes Python perfect for Flask, Django, data science,
							and machine learning. You’ll learn how to build everything from
							games to sites to apps. Choose from a range of courses that will
							appeal to{" "}
						</p>
						<button className="px-5 py-3 border border-black text-black font-bold hover:bg-gray-100">
							Explore Python
						</button>
					</div>
					{/* <div id="Excel">
						<h1>Analyze and visualize data with Excel</h1>
						<p>
							Take a Microsoft Excel course from Udemy, and learn how to use
							this industry-standard software. Real-world experts will show you
							the basics like how to organize data into sheets, rows and
							columns, and advanced techniques like creating complex dynamic
							formulas. Both small businesses and large companies use Excel to
						</p>
						<button>Explore Excel</button>
					</div>
					<div id="web-development">
						<h1>Build websites and applications with Web Development</h1>
						<p>
							The world of web development is as wide as the internet itself.
							Much of our social and vocational lives play out on the internet,
							which prompts new industries aimed at creating, managing, and
							debugging the websites and applications that we increasingly rely
							on.
						</p>
						<div>
							<div>
								<p>IMAGE</p>
								<h2>Become a Certified HTML, CSS, JavaScript Web...</h2>
								<span>Tech Learning Network, Mark Lassoff</span>
							</div>
						</div>
						<button>Explore Web Developmet</button>
					</div>
					<div id="javascript">
						<h1>Grow your software development skills with JavaScript</h1>
						<p>
							JavaScript is a text-based computer programming language used to
							make dynamic web pages. A must-learn for aspiring web developers
							or programmers, JavaScript can be used for features like image
							carousels, displaying countdowns and timers, and playing media on
							a webpage. With JavaScript online classes, you can learn to build
						</p>

						<button>Explore Javascript</button>
					</div>
					<div id="data-science">
						<h1>Lead data-driven decisions with Data Science</h1>
						<p>
							Data science application is an in-demand skill in many industries
							worldwide — including finance, transportation, education,
							manufacturing, human resources, and banking. Explore data science
							courses with Python, statistics, machine learning, and more to
							grow your knowledge. Get data science training if you’re into
							research, statistics, and analytics.
						</p>
						<button>Explore Data Science</button>
						<div>
							<div>
								<p>IMAGE</p>
								<h2>Become a Certified HTML, CSS, JavaScript Web...</h2>
								<span>Tech Learning Network, Mark Lassoff</span>
							</div>
						</div>
					</div>
					<div id="aws">
						<h1>Become an expert in cloud computing with AWS Certification</h1>
						<p>
							Prep for your AWS certification with an AWS course on Udemy. Learn
							the fundamentals of AWS such as working with a serverless
							platform, the various frameworks, security and more. With these
							courses, you’ll build the valuable skills you need to implement
							cloud initiatives — and open up new career opportunities. If you
							want to become an AWS developer, we’ve got the course for you.
						</p>
						<button>Explore AWS Certification</button>
						<div>
							<div>
								<p>IMAGE</p>
								<h2>Become a Certified HTML, CSS, JavaScript Web...</h2>
								<span>Tech Learning Network, Mark Lassoff</span>
							</div>
						</div>
					</div>
					<div id="drawing">
						<h1>Expand your creative skillset with Drawing</h1>
						<p>
							Want to start drawing for fun or take your craft to the next
							level? Explore our online drawing classes and learn pencil
							drawing, figure drawing, cartoon drawing, character drawing for
							cartoons and anime, illustration, sketching, shading and more.
							Take an overview course on the fundamentals of drawing or zero in
							on an area you’d like to improve with a specialized course. We’ve
							got tons of options to get — and keep — you going.
						</p>
						<button>Explore Drawing</button>
					</div> */}
				</section>
				<section id="top-categories" className="my-10  px-8">
					<Categories />
				</section>
			</div>
			<section id="featured-topics" className="p-8 md:p-20 bg-slate-50">
				<Featured />
			</section>
			<section id="instructor" className="my-10">
				<div className="px-8 flex flex-col space-y-2 md:flex-row md:justify-center md:items-center md:space-x-12">
					<Image
						src={InstructorImage}
						alt="Instructor"
						layout="fixed"
						width="400"
						height="400"
					/>

					<div className="w-full md:max-w-sm">
						<h1 className="text-3xl text-center  font-extrabold text-black mb-2 md:text-left">
							Become an instructor
						</h1>
						<p className="mb-4 text-center md:text-left">
							Instructors from around the world teach millions of students on
							Udemy. We provide the tools and skills to teach what you love.
						</p>
						<button className="w-full  px-5 py-3 bg-black border border-black text-white font-bold md:w-auto">
							Start teaching today
						</button>
					</div>
				</div>
			</section>
			<section id="trusties" className="px-4 py-6 bg-slate-50">
				<Trusties />
			</section>
			<section id="udemy-business" className="my-10">
				<div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center md:space-x-12">
					<div className="px-8 md:max-w-sm">
						<div className="text-center md:text-left">
							<Image
								src={UdemyBusinessLogo}
								alt="Business Logo"
								width="250"
								height="100"
							/>
						</div>
						<p className="mb-4 items-center md:items-start">
							Instructors from around the world teach millions of students on
							Udemy. We provide the tools and skills to teach what you love.
						</p>
						<button className="w-full px-5 py-3 bg-black border border-black text-white font-bold md:w-auto">
							Get Udemy Business
						</button>
					</div>
					<div className="text-center md:text-left">
						<Image
							src={UdemyBusinessPerson}
							alt="Business Person"
							width="400"
							height="400"
							layout="fixed"
						/>
					</div>
				</div>
				<div className="mt-28">
					<div className="flex flex-col items-center md:flex-row md:justify-center md:items-center md:space-x-12">
						<Image
							src={UdemyBusinessPerson2}
							alt="Instructor"
							width="400"
							height="400"
						/>

						<div className="px-8 w-full md:max-w-sm">
							<h1 className="text-3xl font-extrabold text-black mb-2 text-center md:text-left">
								Transform your life through education
							</h1>
							<p className="mb-4 text-center md:text-left">
								Learners around the world are launching new careers, advancing
								in their fields, and enriching their lives.
							</p>
							<button className="w-full md:w-auto px-5 py-3 bg-black border border-black text-white font-bold">
								Find out how
							</button>
						</div>
					</div>
				</div>
			</section>

			<section id="footer" className="bg-black px-8 py-8 w-full">
				<div className="px-8 space-y-4 md:space-y-0 md:flex md:justify-between ">
					<div className="block md:hidden">
						<button className="flex items-center space-x-1 px-4 py-2 border border-white text-white">
							<HiGlobeAlt className="h-6 w-6" />
							<span className="text-sm text-white">English</span>
						</button>
					</div>
					<div className="text-gray-200 text-sm space-y-10 md:space-y-0 transition-all duration-300 md:grow md:grid md:grid-cols-4">
						<div className="flex flex-col space-y-2">
							<p className="hover:underline">Udemy Business</p>
							<ul className="flex flex-col space-y-2">
								<li className="hover:underline">Teach on Udemy</li>
								<li>Get the app</li>
								<li className="hover:underline">About us</li>
								<li className="hover:underline">Contact us</li>
							</ul>
						</div>
						<div className="flex flex-col space-y-2">
							<p className="hover:underline">Careers</p>
							<ul className="flex flex-col space-y-2">
								<li className="hover:underline">Blog</li>
								<li className="hover:underline">Help and Support</li>
								<li className="hover:underline">Affiliate</li>
								<li className="hover:underline">Investors</li>
							</ul>
						</div>
						<div className="flex flex-col space-y-2">
							<p className="hover:underline">Terms</p>
							<ul className="flex flex-col space-y-2">
								<li className="hover:underline">Privacy policy</li>
								<li className="hover:underline">Cookie settings</li>
								<li className="hover:underline">sitemap</li>
								<li className="hover:underline">Accessiblity statement</li>
							</ul>
						</div>
					</div>
					<div className="hidden md:block">
						<button className="flex items-center space-x-1 px-4 py-2 border border-white text-white">
							<HiGlobeAlt className="h-6 w-6" />
							<span className="text-sm text-white">English</span>
						</button>
					</div>
				</div>
				<div className="px-8 relative text-white mt-20 flex flex-col justify-start space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center ">
					<div>
						<Image
							src={UdemyLogoInv}
							alt="udemy logo"
							className="text-gray-100 fill-current absolute -left-10"
							width="92"
							height="31"
						/>
					</div>
					<p className="text-xs text-gray-100">&copy;2022 Udemy, Inc.</p>
				</div>
			</section>
		</main>
	);
}

export default index;
