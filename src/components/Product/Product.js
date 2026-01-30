import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import styles from './Product.module.scss';
import React, { useState } from 'react';

const Product = (props) => {
	const [currentColor, setCurrentColor] = useState(props.colors[0]);
	const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
	const handleColorChange = (color) => {
		setCurrentColor(color);
	};

	const handleSizeChange = (size) => {
		setCurrentSize(size);
	};

	const getPrice = () => {
		const selectedSize = props.sizes.find((size) => size.name === currentSize);
		const additionalPrice = selectedSize ? selectedSize.additionalPrice : 0;
		const totalPrice = props.basePrice + additionalPrice;
		return totalPrice;
	};

	const handleAddToCart = (event) => {
		event.preventDefault();
		console.log('Clicked addToCart button!');
		console.log('Name:', props.title);
		console.log('Price:', getPrice());
		console.log('Size:', currentSize);
		console.log('Color:', currentColor);
	};

	return (
		<article className={styles.product}>
			<ProductImage
				name={props.name}
				title={props.title}
				currentColor={currentColor}
			/>
			<ProductForm
				basePrice={props.basePrice}
				name={props.title}
				currentColor={currentColor}
				currentSize={currentSize}
				colors={props.colors}
				sizes={props.sizes}
				handleColorChange={handleColorChange}
				handleSizeChange={handleSizeChange}
				handleAddToCart={handleAddToCart}
				getPrice={getPrice}
			/>
		</article>
	);
};

export default Product;
