import { useState } from "react";
import "./Projects.css";

export const Projects = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	const projectsData = [
		{
			id: 1,
			title: "React Native Neumorphic Messenger",
			category: "mobile",
			desc: "An advanced, fully secure cross-platform mobile chat application built with React Native and Expo Ecosystem. Features a custom tactical neumorphic user interface with real-time state synchronization.",
			tech: ["React Native", "Expo", "TypeScript", "Neumorphism", "State Management"],
			github: "https://github.com/AslanG92/lets_talk",
			demo: "#",
			figma: null,
		},
		{
			id: 2,
			title: "Next.js E-Commerce Game Store",
			category: "react",
			desc: "A fully responsive e-commerce game store application featuring blistering fast Turbopack builds. Implements advanced filtering by categories, sophisticated cart management, favorites, and real-time complex price calculation.",
			tech: ["Next.js", "React.js", "Turbopack", "Bootstrap 5", "Context API", "Zustand"],
			github: "https://github.com/AslanG92/games_shop_by_aslan",
			demo: "https://games-shop.aslang92.workers.dev/",
			figma: null,
		},
		{
			id: 3,
			title: "Vite-Powered React Flashcard App",
			category: "react",
			desc: "A highly performant educational app for learning programming concepts. Implements simulated user authentication, full CRUD operations via internal states, and automatic system light/dark theme synchronization.",
			tech: ["React.js", "Vite Bundler", "TypeScript", "Theme Sync", "CRUD", "Node.js"],
			github: "https://github.com/AslanG92/first_react_app",
			demo: "https://first-react-app.aslang92.workers.dev/",
			figma: null,
		},
		{
			id: 4,
			title: "Dynamic Movie Web App",
			category: "react",
			desc: "A fluid multimedia application offering movie database lookups and simulated streaming. Features a custom desktop UI built on modern design guidelines, offering a smooth cinematic user experience.",
			tech: ["React.js", "Bootstrap 5", "REST API", "Asynchronous JavaScript"],
			github: "https://github.com/AslanG92/aslan_movies_hub",
			demo: "https://aslang92.github.io/aslan_movies_hub/",
			figma: null,
		},
		{
			id: 5,
			title: "Real-Time Exchange Rate Web App",
			category: "vanilla",
			desc: "A clean financial dashboard integrating directly with the ExchangeRate-API. Parses live JSON structures to provide instant multi-currency translation with precise floating-point mathematical calculations.",
			tech: ["Vanilla JS", "ExchangeRate-API", "Fetch API", "Neumorphic UI"],
			github: "https://github.com/AslanG92/exchange_rates_app",
			demo: "https://aslang92.github.io/exchange_rates_app/",
			figma: null,
		},
		{
			id: 6,
			title: "Full CRUD Users Management Application",
			category: "vanilla",
			desc: "A comprehensive administrative web dashboard with full integration with a Mockapi backend. Allows administrators to create, read, update, and delete user nodes in real-time with automatic database synchronization.",
			tech: ["Vanilla JS", "Mockapi Integration", "REST API", "JSON", "DOM Manipulation"],
			github: "https://github.com/AslanG92/users_manegment",
			demo: "https://aslang92.github.io/users_manegment/",
			figma: null,
		},
		{
			id: 7,
			title: "OOP Architecture TODO Dashboard",
			category: "vanilla",
			desc: "A task manager application built entirely on robust Object-Oriented Programming (OOP) paradigms. Encapsulates item states within custom JS Classes, ensuring modularity and clean, decoupled state updates.",
			tech: ["Vanilla JS", "OOP", "JS Classes", "Encapsulation", "State Management"],
			github: "https://github.com/AslanG92/todo_app_using_oop",
			demo: "https://aslang92.github.io/todo_app_using_oop/",
			figma: null,
		},
		{
			id: 8,
			title: "Persistent LocalStorage TODO App",
			category: "vanilla",
			desc: "A structured lifestyle productivity application focused on offline reliability. Synchronizes all current data mutations to the browser's persistent LocalStorage API, avoiding data loss upon hard reloads.",
			tech: ["Vanilla JS", "LocalStorage API", "Data Persistence", "JSON Sync"],
			github: "https://github.com/AslanG92/test_todo_app",
			demo: "https://aslang92.github.io/test_todo_app/",
			figma: null,
		},
		{
			id: 9,
			title: "Premium Multi-Page Web Layout Template",
			category: "styling",
			desc: "[Figma-Based Canvas] A fully responsive and structured web layout crafted using CSS Grid, SCSS, and BEM methodology for clean, grid-based modern styling.",
			tech: [
				"HTML5",
				"CSS3",
				"Flex-box",
				"SASS / SCSS",
				"BEM Methodology",
				"Grid-box",
				"Responsive Design",
				"Figma Integration",
			],
			github: "https://github.com/AslanG92/live_streaming",
			demo: "https://aslang92.github.io/live_streaming/",
			figma: "https://www.figma.com/design/9rbhEJwFAaKh8UD7XPRD5Y/live-streaming--design---Copy-?node-id=0-1&p=f&t=XRTbqbsMMaHRKK6G-0",
		},
		{
			id: 10,
			title: "Advanced BEM Modular Layout",
			category: "styling",
			desc: "[Figma-Based Canvas] A fully responsive web layout built with HTML5 and CSS Flexbox, featuring a custom mobile navigation menu and fluid adaptivity.",
			tech: ["HTML5", "BEM Methodology", "Flex-box", "Modular Architecture", "Responsive Design", "Figma Integration"],
			github: "https://github.com/AslanG92/alivio",
			demo: "https://aslang92.github.io/alivio/",
			figma: "https://www.figma.com/design/cXuqOgikStyU2vTABQlvF6/Alivio_stress_overcome--Copy-?t=XRTbqbsMMaHRKK6G-0",
		},
		{
			id: 11,
			title: "Simple Web Layout 'My first steps in frontend' ",
			category: "styling",
			desc: "[Figma-Based Canvas] A modern responsive web interface created with HTML5 and CSS Flexbox, featuring seamless mobile responsiveness and clean UI elements.",
			tech: ["HTML5", "Flex-box", "Modular Architecture", "Responsive Design", "Figma Integration"],
			github: "https://github.com/AslanG92/Augustus_page",
			demo: "https://aslang92.github.io/Augustus_page/",
			figma: "https://www.figma.com/design/iyEMu1QmbJFvKSGzNDWAJC/Landing_Aivazovski--Copy-?t=XRTbqbsMMaHRKK6G-0",
		},
	];

	const filteredProjects =
		activeFilter === "all" ? projectsData : projectsData.filter((project) => project.category === activeFilter);

	return (
		<div className="projects-container">
			<div className="filter-bar">
				<button className={`filter-btn ${activeFilter === "all" ? "active" : ""}`} onClick={() => setActiveFilter("all")}>
					All Projects
				</button>
				<button
					className={`filter-btn ${activeFilter === "react" ? "active" : ""}`}
					onClick={() => setActiveFilter("react")}
				>
					React & Next.js
				</button>
				<button
					className={`filter-btn ${activeFilter === "mobile" ? "active" : ""}`}
					onClick={() => setActiveFilter("mobile")}
				>
					Mobile (React Native)
				</button>
				<button
					className={`filter-btn ${activeFilter === "vanilla" ? "active" : ""}`}
					onClick={() => setActiveFilter("vanilla")}
				>
					Vanilla JS Core
				</button>
				<button
					className={`filter-btn ${activeFilter === "styling" ? "active" : ""}`}
					onClick={() => setActiveFilter("styling")}
				>
					Advanced CSS / Layouts
				</button>
			</div>

			<div className="projects-grid">
				{filteredProjects.map((project) => (
					<div className="project-card" key={project.id}>
						<div className="project-header">
							<h3>{project.title}</h3>
							<p className="project-desc">{project.desc}</p>
						</div>

						<div className="project-tech-tags">
							{project.tech.map((techItem, index) => (
								<span className="tech-tag" key={index}>
									{techItem}
								</span>
							))}
						</div>

						<div className="project-links">
							<a href={project.github} target="_blank" rel="noreferrer" className="project-link">
								<i className="bi bi-github"></i> GitHub
							</a>

							{project.figma && (
								<a href={project.figma} target="_blank" rel="noreferrer" className="project-link figma-link">
									<i className="bi bi-bezier2"></i> Figma
								</a>
							)}

							<a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
								<i className="bi bi-box-arrow-up-right"></i>{" "}
								{project.category === "mobile" ? "Expo Build" : "Live Demo"}
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
