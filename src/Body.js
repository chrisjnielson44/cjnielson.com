import React from "react";
import "./Style/Body.css";


function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(false);
	const domRef = React.useRef();
	React.useEffect(() => {
	  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => setVisible(entry.isIntersecting));
	  });
	  observer.observe(domRef.current);
	}, []);
	return (
	  <div
		className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
		ref={domRef}
	  >
		{props.children}
	  </div>
	);
}

function Body() {
	const projects = [
	  {
		title: "Project 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		link: "https://example.com/project1",
	  },
	  {
		title: "Project 2",
		description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		link: "https://example.com/project2",
	  },
	  {
		title: "Project 3",
		description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		link: "https://example.com/project3",
	  },
	];
  
	return (
	<html>
	  <main>
		<section id="resume">
		  <FadeInSection>
			<h1 id="resumeheader"> Resume </h1>
		  </FadeInSection>
		</section>
		
		<section id="projects">
			<h1 id="projectheader"> Github Projects </h1>
			<h2 id="projectdesc">
				Here are some of my projects from my Github
			</h2>
			{projects.map((project, index) => (
				<div key={index} className="project-row">
				<h2>{project.title}</h2>
				<p>{project.description}</p>
				<a href={project.link}>View project</a>
				</div>
			))}
		</section>

		<section id="contact">
		  <FadeInSection>
			<h1 id="contactheader"> Contact Me </h1>
		  </FadeInSection>
		</section>
	  </main>
	</html>
	);
  }
  
export default Body;
