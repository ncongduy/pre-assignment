import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Content.module.scss';

const data = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
		geo: {
			lat: '-37.3159',
			lng: '81.1496',
		},
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets',
	},
};

export default function Content() {
	return (
		<div>
			<Container className={styles.content}>
				<Row>
					<Col>
						<Card
							style={{ width: '18rem' }}
							className={styles.card}
						>
							<div className={styles.circle}>
								<p>L</p>
							</div>
							<Card.Body>
								<Card.Title>Leanne Graham</Card.Title>
								<Card.Text>@Bret</Card.Text>
								<Card.Text>
									<a href='http://hildegard.org'>
										http://hildegard.org
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
				</Row>
			</Container>
		</div>
	);
}
