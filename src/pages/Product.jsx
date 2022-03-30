import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../actions/productAction';

const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state?.productList?.products);

  console.log(productList && productList);
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <div>Product</div>
      <div>Product</div>
    </>
  );
};

export default Product;
