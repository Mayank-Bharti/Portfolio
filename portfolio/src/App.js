import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Mayank Bharti</h1>
        <p>
          +91 9142673771 | <a href="mailto:mayankbharti349@gmail.com">mayankbharti349@gmail.com</a> |
          <a href="mailto:22cs3039@rgipt.ac.in">22cs3039@rgipt.ac.in</a>
        </p>
        <div className="links">
          <a href="https://www.linkedin.com/in/mayank-bharti-839b07261" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Mayank-Bharti" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/mayankbharti349" target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a href="https://www.geeksforgeeks.org/user/mayankbhf67o" target="_blank" rel="noopener noreferrer">GFG</a>
        </div>
      </header>

      <section className="education">
        <h2>Education</h2>
        <p><strong>Rajiv Gandhi Institute of Petroleum Technology</strong>, Amethi, Uttar Pradesh</p>
        <p>B.Tech in Computer Science and Engineering (2022 - 2026)</p>
        <p><strong>CPI:</strong> 8.25/10</p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div>
          <h3>Software Development Extern</h3>
          <p><strong>AlgoUniversity</strong> (May 2024 – July 2024)</p>
          <ul>
            <li>Architected a scalable Online Judge Platform using MERN stack and Docker.</li>
            <li>Implemented advanced system design with message queuing and load balancing.</li>
            <li>Achieved 99.9% platform reliability through fault-tolerant architecture.</li>
            <li>Optimized database queries, reducing response time by 40%.</li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div>
          <h3>Flipkart Grid 6.0 Robotics</h3>
          <ul>
            <li>Fine-tuned EfficientNet V2 model to predict freshness and expiry of products.</li>
            <li>Developed an OCR solution using EasyOCR and OpenCV for label extraction.</li>
            <li>Built a scalable solution with React.js, Flask, MongoDB, TensorFlow, and OpenCV.</li>
          </ul>
        </div>
        <div>
          <h3>Walmart Sparkthon 2024</h3>
          <ul>
            <li>Integrated a BERT-based model for customer feedback classification.</li>
            <li>Designed a Chrome extension for colorblind accessibility.</li>
            <li>Implemented a donation system, increasing contributions by 35%.</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming and Web Development:</strong> C++, Python, JavaScript, React.js, Node.js</li>
          <li><strong>Systems and Databases:</strong> OS fundamentals, SQL, MongoDB</li>
          <li><strong>Algorithms and Tools:</strong> Docker, Git, Firebase, Render</li>
        </ul>
      </section>

      <section className="achievements">
        <h2>Algorithmic Competitions & Achievements</h2>
        <ul>
          <li>Cleared Flipkart Grid 6.0 Robotics Round-2 with innovative robotics solutions.</li>
          <li>Ranked in top 3 among 400+ participants in Coderush 2024 Coding Challenge.</li>
          <li>Solved 200+ algorithmic problems, showcasing strong analytical skills.</li>
          <li>JEE Advanced 2022 AIR 26639 (top 2.6%).</li>
        </ul>
      </section>
    </div>
  );
};

export default App;
