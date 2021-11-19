import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<span>
				<HomeIcon className={styles.icon} />
				<p>Home</p>
			</span>
		</div>
	);
}
