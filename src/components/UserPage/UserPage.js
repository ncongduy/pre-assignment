import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Alert } from 'react-bootstrap';
import styles from './UserPage.module.scss';

export default function UserPage({ data }) {
	const { username } = useParams();
	const dataRender = data.filter((dt) => dt.username === username)[0];

	return (
		<Container>
			<Alert variant={'info'} className={styles.content}>
				<p>Name: {dataRender.name}</p>
				<p>Username: {dataRender.username}</p>
				<p>Email: {dataRender.email}</p>
				<p>Phone: {dataRender.phone}</p>
				<p>Company: {dataRender.company.name}</p>
				<p>Website: http://{dataRender.website}</p>
				<p>Address:</p>
				<ul>
					<li>Street: {dataRender.address.street}</li>
					<li>Suite: {dataRender.address.suite}</li>
					<li>City: {dataRender.address.city}</li>
					<li>Zipcode: {dataRender.address.zipcode}</li>
				</ul>
			</Alert>
		</Container>
	);
}
