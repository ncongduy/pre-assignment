import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<Link to='/' className={styles.link}>
				<HomeIcon className={styles.icon} />
				<p>Home</p>
			</Link>
		</div>
	);
}
