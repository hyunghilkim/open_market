import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {productDetails} from '../actions/productAction';

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state?.productDetails?.product);

  console.log(product && product);
  useEffect(() => {
    dispatch(productDetails('1'));
  }, [dispatch]);
  return (
    <>
      <div>Product</div>
      <div>Product</div>
    </>
  );
};

export default Product;
