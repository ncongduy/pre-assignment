import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './HomePage.module.scss';

export default function HomePage({ data }) {
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
									<Link
										to={`/user/${dt.username}`}
										className={styles.link}
									>
										<Button
											variant='primary'
											className={styles.widthButton}
										>
											More Details
										</Button>
									</Link>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
}