"use client";

import React from "react";
import CertificationCarousal from "../CertificationCarousal/CertificationCarousal";
import TechIcons from "../TechIcons/TechIcons";
import styles from "./SkillSectionRow.module.css";

interface SkillSectionRowProps {
	skillType: {
		id: number;
		title: string;
		description: string;
		certificates: Array<{ title: string; image: string }>;
		techIcons: Array<{ title: string; icon: string }>;
	};
}

const SkillSectionRow = ({ skillType }: SkillSectionRowProps) => {
	return (
		<div className={styles.skillRow}>
			<div className={styles.images}>
				<CertificationCarousal skillType={skillType} />
				<TechIcons skillType={skillType} />
			</div>
			<div className={styles.description}>
				<h2>{skillType.title}</h2>
				<p>{skillType.description}</p>
			</div>
		</div>
	);
};

export default SkillSectionRow;
