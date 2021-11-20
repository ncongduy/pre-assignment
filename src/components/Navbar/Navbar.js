import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import styles from './Navbar.module.scss';
import globalStyles from '../../App.module.scss';

export default function Navbar() {
	return (
		<div className={styles.navbar}>
			<Link to='/' className={globalStyles.link}>
				<div className={styles.wrapper}>
					<HomeIcon className={styles.icon} />
					<p>Home</p>
				</div>
			</Link>
		</div>
	);
}
