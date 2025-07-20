import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Biki Balami - Developer and Graphic Designer Portfolio",
	description:
		"Developer and Graphic Designer Portfolio of Biki Balami. Front-end developer specializing in React, JavaScript, and UI/UX design.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
