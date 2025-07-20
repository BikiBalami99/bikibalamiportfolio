"use client";

import React, { useEffect, useRef, useState } from "react";
import SkillsCarousel from "../../../helperComponents/Carousel/SkillsCarousel";
import styles from "./CertificationCarousall.module.css";

interface CertificationCarousalProps {
	skillType: {
		certificates: Array<{ title: string; image: string }>;
	};
}

const CertificationCarousal = ({
	skillType: { certificates },
}: CertificationCarousalProps) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	function openDialog() {
		setIsDialogOpen(true);
	}

	function closeDialog() {
		setIsDialogOpen(false);
	}

	useEffect(() => {
		if (isDialogOpen && dialogRef.current) {
			dialogRef.current.showModal();
		} else if (dialogRef.current) {
			dialogRef.current.close();
		}
	}, [isDialogOpen]);

	return (
		<div>
			<div className={styles.carouselContainer}>
				<SkillsCarousel arrayOfObjects={certificates} />
				<button onClick={openDialog} className={styles.expandButton}>
					<img src="/assets/icons/expandIcon.svg" alt="expandIcon" />
				</button>
			</div>
			{isDialogOpen && (
				<dialog ref={dialogRef} className={styles.modal}>
					<div>
						<SkillsCarousel arrayOfObjects={certificates} />
					</div>
					<form method="dialog">
						<button
							className={`circleButton ` + styles.modalCloseButton}
							type="button"
							onClick={closeDialog}
							style={{ width: "40px" }}
							// Overwriting the default width of the button cause this looks better smaller.
						>
							<p> &times;</p>
						</button>
					</form>
				</dialog>
			)}
		</div>
	);
};

export default CertificationCarousal;
