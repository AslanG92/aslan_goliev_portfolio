import { useState } from "react";
import "./Overview.css";
import render1 from "../assets/render1.webp";
import render2 from "../assets/render2.webp";
import anim1 from "../assets/anim1.mp4";
import anim2 from "../assets/anim2.mp4";

export const Overview = () => {
	const [activeMedia, setActiveMedia] = useState(null);

	return (
		<div className="overview-container">
			<div className="content-widget about-box">
				<h1>Building Digital Experiences with Grit & Precision </h1>

				<div className="bio-text">
					<p>
						My journey into technology began with a fascination for complex worlds—specifically, watching the
						behind-the-scenes engineering of <em>God of War</em>. Driven by a passion for exact sciences, I earned my
						degree in <strong>Applied Mathematics & Systems Programming</strong>. Life, however, required immediate
						action: as the sole provider for my family, I spent years working intense roles in construction and
						logistics, eventually rising to Warehouse Manager and Team Lead.
					</p>

					<p>
						But a dream deferred is not a dream forgotten. After ensuring my family’s stability, I bought my first
						MacBook and fully committed to mastering modern software engineering. Today, I combine my rigorous
						mathematical foundation with an intense passion for UI/UX aesthetics.
					</p>

					<p>
						I specialize in building performant web applications using <strong>React and Next.js</strong>, alongside
						cross-platform mobile apps with <strong>React Native</strong>. My hallmark is my obsession with{" "}
						<strong>Neumorphic UI (Soft Design)</strong>—a style I elevate by ensuring it meets strict accessibility
						standards. When I am not writing clean code, I craft 3D assets in <strong>Blender</strong>, bridging the
						gap between mathematical logic, beautiful interfaces, and spatial design.
					</p>
				</div>
			</div>

			<div className="content-widget blender-box">
				<h2>Creative Space: 3D Artwork & Animation</h2>

				<p className="blender-desc">
					For the soul, I dive into 3D modeling and motion design. Understanding spatial awareness, physics, and
					timeline mechanics in Blender helps me build advanced, smooth fluid layouts and custom animations in code.
					Click to view full scale:
				</p>

				<div className="render-gallery">
					<div className="render-card clickable" onClick={() => setActiveMedia({ type: "video", src: anim1 })}>
						<video src={anim1} autoPlay loop muted playsInline className="gallery-video" />

						<span className="render-tag video-tag">
							<i className="bi bi-play-btn-fill"></i> 3D Motion
						</span>
					</div>

					<div className="render-card clickable" onClick={() => setActiveMedia({ type: "video", src: anim2 })}>
						<video src={anim2} autoPlay loop muted playsInline className="gallery-video" />

						<span className="render-tag video-tag">
							<i className="bi bi-play-btn-fill"></i> Animation
						</span>
					</div>

					<div className="render-card clickable" onClick={() => setActiveMedia({ type: "image", src: render1 })}>
						<img src={render1} alt="Blender Render 1" />

						<span className="render-tag">3D Render</span>
					</div>

					<div className="render-card clickable" onClick={() => setActiveMedia({ type: "image", src: render2 })}>
						<img src={render2} alt="Blender Render 2" />

						<span className="render-tag">Modeling</span>
					</div>
				</div>
			</div>

			{activeMedia && (
				<div className="photo-modal" onClick={() => setActiveMedia(null)}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close-btn" onClick={() => setActiveMedia(null)}>
							<i className="bi bi-x-lg"></i>
						</button>

						<div className="modal-image-wrapper-blender">
							{activeMedia.type === "image" ? (
								<img src={activeMedia.src} alt="Enlarged Blender Render" className="modal-img-blender" />
							) : (
								<video
									src={activeMedia.src}
									autoPlay
									loop
									muted
									playsInline
									controls
									className="modal-video-blender"
								/>
							)}
						</div>
					</div>
				</div>
			)}

			<div className="stats-grid">
				<div className="content-widget stat-card">
					<div className="stat-icon">
						<i className="bi bi-folder-check"></i>
					</div>

					<h3>10+ Production-Ready Projects</h3>

					<p>Full-stack web & mobile apps deployed on GitHub.</p>
				</div>

				<div className="content-widget stat-card">
					<div className="stat-icon">
						<i className="bi bi-palette-fill"></i>
					</div>

					<h3>UI/UX Driven</h3>

					<p>Deep expertise in Neumorphism, Native CSS Nesting, and SASS/BEM.</p>
				</div>

				<div className="content-widget stat-card">
					<div className="stat-icon">
						<i className="bi bi-lightning-charge-fill"></i>
					</div>

					<h3>Mathematical Mindset</h3>

					<p>Systems thinking, robust OOP architecture, and complex problem-solving.</p>
				</div>

				<div className="content-widget stat-card">
					<div className="stat-icon">
						<i className="bi bi-people-fill"></i>
					</div>

					<h3>Leadership & Grit</h3>

					<p>Proven background in team management and high-pressure environments.</p>
				</div>
			</div>
		</div>
	);
};
