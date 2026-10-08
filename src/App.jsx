import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./App.css";
import myPhoto from "./assets/me.webp";
import { Overview } from "./sections/Overview";
import { TechStack } from "./sections/TechStack";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";

export default function App() {
	const [theme, setTheme] = useState(() => {
		const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const initialTheme = systemPrefersDark ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", initialTheme);
		return initialTheme;
	});

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [activeTab, setActiveTab] = useState("overview");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleTheme = () => {
		const nextTheme = theme === "light" ? "dark" : "light";
		setTheme(nextTheme);
		document.documentElement.setAttribute("data-theme", nextTheme);
	};

	const tabComponents = {
		overview: <Overview />,
		tech: <TechStack />,
		projects: <Projects />,
		contact: <Contact />,
	};

	return (
		<div className="dashboard-container">
			<div className="top-control-bar">
				<button
					className={`sidebar-toggle-btn tile-btn ${isSidebarOpen ? "active" : ""}`}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				>
					<i className={isSidebarOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
				</button>
			</div>

			<aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
				<div className="sidebar-top-actions">
					<button className="sidebar-close-tile" onClick={() => setIsSidebarOpen(false)}>
						<i className="bi bi-chevron-left"></i>
					</button>

					<button className="sidebar-theme-tile" onClick={toggleTheme}>
						<i className={theme === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill"}></i>
					</button>
				</div>

				<div className="sidebar-profile">
					<div className="avatar-container clickable" onClick={() => setIsModalOpen(true)}>
						<img src={myPhoto} alt="Aslan Goliev" className="avatar-img" />
					</div>

					<h2>Aslan Goliev</h2>

					<p className="role">Frontend & React Native Developer</p>

					<a href="/Aslan_Goliev_CV.pdf" download="Aslan_Goliev_CV.pdf" className="sidebar-cv-btn">
						<i className="bi bi-file-earmark-arrow-down-fill"></i> Download CV
					</a>
				</div>

				<nav className="sidebar-nav">
					<button
						className={`nav-item ${activeTab === "overview" ? "active" : ""}`}
						onClick={() => {
							setActiveTab("overview");
							setIsSidebarOpen(false);
						}}
					>
						<i className="bi bi-grid-1x2-fill"></i> Overview
					</button>
					<button
						className={`nav-item ${activeTab === "tech" ? "active" : ""}`}
						onClick={() => {
							setActiveTab("tech");
							setIsSidebarOpen(false);
						}}
					>
						<i className="bi bi-cpu-fill"></i> Tech Stack
					</button>
					<button
						className={`nav-item ${activeTab === "projects" ? "active" : ""}`}
						onClick={() => {
							setActiveTab("projects");
							setIsSidebarOpen(false);
						}}
					>
						<i className="bi bi-folder-fill"></i> Projects
					</button>
					<button
						className={`nav-item ${activeTab === "contact" ? "active" : ""}`}
						onClick={() => {
							setActiveTab("contact");
							setIsSidebarOpen(false);
						}}
					>
						<i className="bi bi-envelope-fill"></i> Contact
					</button>
				</nav>

				<div className="sidebar-footer">
					<a href="https://github.com" target="_blank" rel="noreferrer" className="sidebar-github-tile">
						<i className="bi bi-github"></i> Open My GitHub
					</a>
				</div>
			</aside>

			{isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}

			{isModalOpen && (
				<div className="photo-modal" onClick={() => setIsModalOpen(false)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
							<i className="bi bi-x-lg"></i>
						</button>
						<div className="modal-image-wrapper">
							<img src={myPhoto} alt="Aslan Goliev" className="modal-img-large" />
						</div>
					</div>
				</div>
			)}

			<main className="main-content">{tabComponents[activeTab]}</main>
		</div>
	);
}
