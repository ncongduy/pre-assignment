import { useState, useEffect } from 'react';
import { Navbar, Content } from './components';

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
		<div>
			<Navbar />
			<Content />
		</div>
	);
}

export default App;
