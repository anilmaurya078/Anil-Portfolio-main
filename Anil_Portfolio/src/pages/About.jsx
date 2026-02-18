import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Header */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* Description */}
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)" }}>
          Hi, I’m <strong>Anil Maurya</strong> — an aspiring{" "}
          <strong>Computer Science Engineer</strong> and{" "}
          <strong>Java Developer</strong> who enjoys transforming ideas into
          scalable and efficient software solutions. I’m passionate about
          building robust backend systems and exploring how technology can
          improve real-world applications.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          Beyond code, I enjoy exploring design, motion, and interaction,
          blending <strong>artistic creativity</strong> with{" "}
          <strong>technical precision</strong>. My goal is to build solutions
          that not only perform — but also inspire.
        </p>

        <p style={{ color: "rgba(255,255,255,0.8)" }}>
          Java Developer with hands-on experience in Spring Boot, REST APIs,
          databases, and secure authentication systems. Strong background in
          backend development, microservices, and scalable application design.
        </p>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>

            {/* BTech */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={cardStyle}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4 style={titleStyle}>B.Tech in Computer Science & Engineering</h4>
                <p style={textStyle}>
                  <strong>Ambalika Institute of Management & Technology</strong> — Lucknow, UP
                </p>
                <p style={subText}>Expected Graduation: 2028</p>
              </div>
            </motion.div>

            {/* Diploma */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={cardStyle}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4 style={titleStyle}>Diploma in Computer Science Engineering</h4>
                <p style={textStyle}>
                  <strong>Government Polytechnic Rajgarh, Mirzapur</strong>
                </p>
                <p style={subText}>2019 – 2022 | 72%</p>
              </div>
            </motion.div>

            {/* 12th */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }}
              transition={{ duration: 0.3 }}
              style={cardStyle}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4 style={titleStyle}>Higher Secondary (12th)</h4>
                <p style={textStyle}>
                  <strong>A.S.J. Inter College</strong> — Mirzapur, UP
                </p>
                <p style={subText}>Completed 2018 | 75%</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const cardStyle = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "14px",
  padding: "1.5rem 2rem",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "0 0 15px rgba(0,255,200,0.05)",
  display: "flex",
  alignItems: "center",
  gap: "1.2rem",
};

const titleStyle = {
  color: "var(--accent)",
  marginBottom: "0.4rem",
  fontSize: "1.25rem",
};

const textStyle = {
  color: "rgba(255,255,255,0.85)",
  marginBottom: "0.2rem",
};

const subText = {
  color: "rgba(255,255,255,0.7)",
};

export default AboutMe;

