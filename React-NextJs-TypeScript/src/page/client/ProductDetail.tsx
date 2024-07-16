import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "src/component/Loading";
import { Product } from "src/type/Product";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);


  //function: callapi: getAllProduct
  const getDetailProduct = async (id: string) => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // useffect
  useEffect(() => {
    if (!id) return;
    getDetailProduct(id);
  }, [id]);

  return (
    <>
      <Container sx={{ marginTop: 10 }}>
        {loading ? (
          <Loading isShow={loading} />
        ) : product ? (
          <>
            <Grid container spacing={4}>
              {/* Left side - Product images */}
              <Grid item xs={12} md={6}>
                <Paper elevation={3}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Paper>
              </Grid>

              {/* Right side - Product details */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" component="h1" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Mô tả: {product.description}
                </Typography>
                <Typography color={"red"} variant="h6" gutterBottom>
                  Price: ${product.price}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Category: {product.category?.name || "No category"}
                </Typography>
                <Box mt={2}>
                  <Button variant="contained" disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : "Add to Cart"}
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            {/* Product specifications */}
            <Box mt={4}>
              <Typography variant="h5" component="h2" gutterBottom>
                Thông tin sản phẩm
              </Typography>
              <Paper elevation={1} sx={{ p: 2 }}>
                {/* <Typography variant="body1">Screen: {product.screen}</Typography>
                  <Typography variant="body1">Processor: {product.processor}</Typography>
                  <Typography variant="body1">RAM: {product.ram}</Typography>
                  <Typography variant="body1">Storage: {product.storage}</Typography>
                  <Typography variant="body1">Battery: {product.battery}</Typography> 
                */}
              </Paper>
            </Box>
          </>
        ) : (
          <Typography variant="h6">Không có sản phẩm</Typography>
        )}
      </Container>
    </>
  );
};

export default ProductDetail;
