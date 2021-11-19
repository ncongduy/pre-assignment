import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Content.module.scss';

export default function Content({ data }) {
	console.log(data);

	return (
		<div>
			<Container className={styles.content}>
				<Row>
					{data.map((dt) => (
						<Col key={dt.id}>
							<Card
								style={{ width: '18rem' }}
								className={styles.card}
							>
								<div className={styles.circle}>
									<p>{dt.name[0]}</p>
								</div>
								<Card.Body>
									<Card.Title>{dt.name}</Card.Title>
									<Card.Text>@{dt.username}</Card.Text>
									<Card.Text>
										<a
											href={`http://${dt.website}`}
											target='blank'
										>
											http://{dt.website}
										</a>
									</Card.Text>
									<Button
										variant='primary'
										className={styles.widthButton}
									>
										More Details
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}
