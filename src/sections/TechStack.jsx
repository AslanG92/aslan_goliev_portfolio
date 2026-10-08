import "./TechStack.css";

export const TechStack = () => {
	return (
		<div className="tech-stack-container">
			<div className="tech-category-panel">
				<h2>
					<i className="bi bi-code-slash"></i> Core Languages & Styling
				</h2>

				<div className="tech-grid">
					<button className="tech-tile">
						<i className="bi bi-filetype-tsx"></i> TypeScript
					</button>
					<button className="tech-tile">
						<i className="bi bi-filetype-js"></i> JavaScript ES6+
					</button>
					<button className="tech-tile">
						<i className="bi bi-filetype-html"></i> HTML5 Canvas
					</button>
					<button className="tech-tile">
						<i className="bi bi-filetype-css"></i> CSS3 & Nesting
					</button>
					<button className="tech-tile">
						<i className="bi bi-filetype-sass"></i> SASS / SCSS
					</button>
					<button className="tech-tile">
						<i className="bi bi-layers-half"></i> BEM Methodology
					</button>
				</div>
			</div>

			<div className="tech-category-panel">
				<h2>
					<i className="bi bi-cpu-fill"></i> Frameworks & Runtimes
				</h2>

				<div className="tech-grid">
					<button className="tech-tile">
						<i className="bi bi-react"></i> React.js
					</button>
					<button className="tech-tile">
						<i className="bi bi-box-arrow-up-right"></i> Next.js
					</button>
					<button className="tech-tile">
						<i className="bi bi-nut-fill"></i> Node.js
					</button>
					<button className="tech-tile">
						<i className="bi bi-fire"></i> Bun Runtime
					</button>
					<button className="tech-tile">
						<i className="bi bi-lightning-charge-fill"></i> Vite Bundler
					</button>
					<button className="tech-tile">
						<i className="bi bi-box-fill"></i> Turbopack (Rust)
					</button>
					<button className="tech-tile">Zustand</button>
				</div>
			</div>

			<div className="tech-category-panel">
				<h2>
					<i className="bi bi-box-seam-fill"></i> Mobile, Tools & Creative
				</h2>

				<div className="tech-grid">
					<button className="tech-tile">
						<i className="bi bi-phone-fill"></i> React Native
					</button>
					<button className="tech-tile">
						<i className="bi bi-triangle-fill"></i> Expo Ecosystem
					</button>
					<button className="tech-tile">
						<i className="bi bi-git"></i> Git Version Control
					</button>
					<button className="tech-tile">
						<i className="bi bi-bezier2"></i> Blender 3D
					</button>
					<button className="tech-tile">
						<i className="bi bi-diagram-3-fill"></i> Robust OOP
					</button>
					<button className="tech-tile">
						<i className="bi bi-cloud-arrow-down-fill"></i> REST API / Fetch
					</button>
					<button className="tech-tile">
						<i className="bi bi-database-fill"></i> LocalStorage
					</button>
				</div>
			</div>
		</div>
	);
};
