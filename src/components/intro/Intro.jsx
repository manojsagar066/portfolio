import { useState, useEffect } from "react";
import "./Intro.css";
import { useFadeIn } from "../../utilities/animation";

export function Intro() {
  const textList = [
    "Manoj here",
    "I'm a Software Developer",
    "Turning coffee into code since 2018",
  ];
  const [text, setText] = useState(textList[0].charAt(0)); // Initialize with the first character
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(1); // Start from the second character

  // Use the fade-in effect
  useFadeIn();

  useEffect(() => {
    let isTyping = true;
    const currentLine = textList[currentLineIndex];

    const typingEffect = setInterval(() => {
      if (isTyping) {
        if (currentCharIndex < currentLine.length) {
          setText((prev) => prev + currentLine.charAt(currentCharIndex));
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          isTyping = false; // Stop typing and prepare to move to the next line
          setTimeout(() => {
            setText(""); // Clear the text for the next line
            setCurrentLineIndex(
              (prevIndex) => (prevIndex + 1) % textList.length
            ); // Move to the next line
            setCurrentCharIndex(0); // Reset character index for the next line
          }, 1000); // Delay before starting the next line
        }
      }
    }, 75);

    return () => clearInterval(typingEffect);
  }, [currentLineIndex, currentCharIndex]);

  return (
    <section className="intro-section">
      <div className="spiderman-animation">
        <img src="/spiderman.png" alt="Spider-Man Hanging" className="spiderman" />
      </div>
      <h1 className="intro-heading">
        <span className="intro-text">&gt;_</span>
        <br></br>
        <span>Hello World!</span>
      </h1>
      <p className="intro-subtext" style={{ minHeight: "2rem" }}>
        {text}
      </p>
      <div className="intro-buttons">
        <a href="#experience" className="intro-button experience-button">
          Experience
        </a>
        <a href="#projects" className="intro-button projects-button">
          View Projects
        </a>
        <a href="#about" className="intro-button about-button">
          About Me
        </a>
      </div>
    </section>
  );
}
