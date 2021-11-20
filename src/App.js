import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './App.module.scss';
import { Navbar, HomePage, UserPage } from './components';

function App() {
	const [data, setData] = useState([]);

	// fetch data from external API
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((data) => data.json())
			.then((data) => setData(data))
			.catch((error) => alert(error));
	}, []);

	return (
		<Container>
			<div className={styles.App}>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage data={data} />} />
					<Route
						path='/user/:username'
						element={<UserPage data={data} />}
					/>
				</Routes>
			</div>
		</Container>
	);
}

export default App;
