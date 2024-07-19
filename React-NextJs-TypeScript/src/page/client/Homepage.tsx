import { useEffect, useState } from 'react';

import { Container, Grid, Stack } from '@mui/material';
import axios from 'axios';
import Loading from 'src/component/Loading';
import ProductCard from 'src/component/ProductCard';
import { Product } from 'src/type/Product';

const Homepage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
  
    //function: callapi: getAllProduct
    const getAllProduct = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    // useffect
    useEffect(() => {
      getAllProduct();
      
    }, []);
    
    //render Ui : map
    return (
      <>
      <Loading isShow={loading} />
      <Container sx={{ marginTop: 10 }}>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
      </>
    );
}

export default Homepage