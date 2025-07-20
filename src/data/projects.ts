interface Project {
	id: number;
	title: string;
	description: string;
	thumbnail: string;
	background: string;
	URL: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Pachiku",
		description: "A text only social media website.",
		thumbnail: "/assets/images/ProjectThumbnails/Pachiku.jpeg",
		background: "#ae5cda",
		URL: "https://pachiku.vercel.app",
	},
];

export default projects;
