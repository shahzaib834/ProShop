import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Components/Product';
import { Row, Col } from 'react-bootstrap';
import Loader from '../Components/Loader';
import Message from '../Components/Message';
import { listProducts } from '../store/actions/productsActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>LATEST PRODUCTS</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{'Something went wrong'}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product key={product?._id} product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
