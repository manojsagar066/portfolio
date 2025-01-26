import { User } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons from react-icons
import "./About.css";
import { useState } from "react"; // Import useState for feedback message

export function About() {
  const [isCopied, setIsCopied] = useState(false); // State to track if text is copied
  const [copiedText, setCopiedText] = useState(""); // State to store the copied text

  // Generic function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true); // Set copied state to true
        setCopiedText(text); // Store the copied text
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">
        <User className="icon" />
        About Me
      </h2>
      <div className="about-content">
        <div className="profile-image-container">
          <div className="profile-image">
            <img src="/profile.jpeg" alt="Profile" />
          </div>
        </div>
        <div className="about-text">
          <p className="about-paragraph">
            Hello! I'm a passionate software developer with a love for creating
            elegant solutions to complex problems. My journey in tech started
            when I built my first "Hello, World!" program, and I've been hooked
            ever since.
          </p>
          <p className="about-paragraph">
            I have over 2 years of experience in software development, with
            extensive knowledge and hands-on expertise in pub-sub architecture.
            I have worked in the web data extraction domain for more than 2
            years and possess in-depth knowledge of distributed queue systems
            like Celery. My skill set includes Python, JavaScript, TypeScript,
            backend engineering, Flask, Node.js, MongoDB, Airflow, Celery, AWS,
            Docker, Jenkins, Prometheus, Grafana, and design principles.
          </p>
          <p className="about-paragraph">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, enjoying a good sci-fi movie,
            playing guitar, or riding a bike in the mountains. I believe in
            continuous learning and pushing the boundaries of what's possible
            with code.
          </p>
          <div className="social-links">
            {/* GitHub Link */}
            <a
              href="https://github.com/manojsagar066"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>

            {/* Email Link */}
            <div
              className="social-link"
              onClick={() => copyToClipboard("b.b.manoj28@gmail.com")} // Replace with your email
              style={{ cursor: "pointer" }}
            >
              <FaEnvelope className="social-icon" />
            </div>

            {/* Phone Link (Optional) */}
            <div
              className="social-link"
              onClick={() => copyToClipboard("+916361838190")} // Replace with your phone number
              style={{ cursor: "pointer" }}
            >
              <FaPhone className="social-icon" />
            </div>

            {/* Feedback Message */}
            {isCopied && (
              <span className="copy-feedback">Copied: {copiedText}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
