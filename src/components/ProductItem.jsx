import React, { useContext } from 'react';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item)
	}

	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt={product.title} width={240} height={240}/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} >
					{  state.cart.includes(product) ? <Image className={styles['disabled add-to-cart-btn']} src={addedToCartImage} alt="added to cart" />  : <img className="add-to-cart-btn pointer" src={addToCartImage} alt="add to cart" /> }
					
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
