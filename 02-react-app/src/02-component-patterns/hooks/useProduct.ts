import { useState, useEffect, useRef } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);
	const isMounted = useRef(false);

	console.log('initial', initialValues)

	const increaseBy = (value: number) => {
	  let newValue = Math.max(counter + value, 0);
	  newValue = Math.min(newValue, initialValues?.maxCount || newValue);
	  setCounter(newValue);
	  onChange && onChange({ count: newValue, product});
	};

	useEffect(() => {
		if (!isMounted.current) return
		setCounter(value);
	}, [value, setCounter]);

	useEffect(() => {
		isMounted.current = true;
	}, [])

	const reset = () => {
		setCounter(initialValues?.count || 0);
	}

	return {
		counter,
		increaseBy,
		isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount,
		reset
	};
}
