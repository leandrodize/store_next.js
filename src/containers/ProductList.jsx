import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = process.env.API_URL;

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className={styles.ProductListModule}>
			<div className={styles.ProductList}>
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
