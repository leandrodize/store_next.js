import React from 'react';
import styles from '@styles/Orders.module.scss';

const Order = () => {
	return (
		<div className={styles.OrderModule}>
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>
	);
}

export default Order;
