"use client";

import React from "react";
import styles from "./TechIcons.module.css";

interface TechIconsProps {
	skillType: {
		techIcons: Array<{ title: string; icon: string }>;
	};
}

const TechIcons = ({ skillType }: TechIconsProps) => {
	return (
		<div className={styles.techIcons}>
			{skillType.techIcons.map((tech) => {
				return (
					<div className={styles.eachTech} key={tech.title}>
						<div className={styles.techIconWrapper}>
							<img src={tech.icon} alt={tech.title} />
						</div>
						<p>{tech.title}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TechIcons;
