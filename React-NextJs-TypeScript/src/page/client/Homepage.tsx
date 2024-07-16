import { useEffect, useState } from 'react';

import { Stack } from '@mui/material';
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
      <Loading isShow={loading}/>
      <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3} // 24px
          sx={{ marginTop: 10 }}
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Stack>
      </>
    );
}

export default Homepage