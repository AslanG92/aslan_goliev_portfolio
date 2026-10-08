import { useState } from "react";
import "./Contact.css";

export const Contact = () => {
	const myPhoneNumber = "79187430929";
	const myEmail = "golieva92@gmail.com";
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const handleGmailSubmit = (e) => {
		e.preventDefault();
		const mailtoUrl = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

		window.location.href = mailtoUrl;

		setSubject("");
		setMessage("");
	};

	return (
		<div className="contact-container">
			<div className="contact-card">
				<div className="contact-header">
					<h2>
						<i className="bi bi-chat-left-heart-fill"></i> Let's Connect!
					</h2>
					<p className="contact-subtitle">
						I am highly motivated to join an international team. Choose the most convenient way to reach me right now
						— chat directly on WhatsApp or drop me a formal email!
					</p>
				</div>

				<div className="quick-contact-actions">
					<a
						href={`https://wa.me/${myPhoneNumber}?text=${encodeURIComponent("Hi Aslan, I saw your portfolio and would like to invite you for an interview!")}`}
						target="_blank"
						rel="noreferrer"
						className="action-contact-btn whatsapp-btn"
					>
						<i className="bi bi-whatsapp"></i> Chat on WhatsApp
					</a>

					<a
						href={`${import.meta.env.BASE_URL}Aslan_Goliev_CV.pdf`}
						download="Aslan_Goliev_CV.pdf"
						className="action-contact-btn cv-btn"
					>
						<i className="bi bi-file-earmark-text-fill"></i> Download CV
					</a>
				</div>

				<div className="contact-divider"></div>

				<form className="contact-form" onSubmit={handleGmailSubmit}>
					<h3>
						<i className="bi bi-envelope-fill"></i> Send a Direct Email
					</h3>

					<div className="form-group">
						<label htmlFor="subject">Subject / Job Title</label>
						<input
							type="text"
							id="subject"
							required
							placeholder="e.g. Frontend Developer Interview"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<label htmlFor="message">Your Message</label>
						<textarea
							id="message"
							required
							placeholder="Hi Aslan, let's schedule a call on Zoom..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>

					<button type="submit" className="submit-btn">
						Open Gmail / Send <i className="bi bi-box-arrow-up-right"></i>
					</button>
				</form>
			</div>
		</div>
	);
};
