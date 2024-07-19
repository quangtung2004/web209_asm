import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormProduct from "src/component/FormProduct";
import { useFlash } from "src/contexts/Flash";

import { ProductForm } from "src/type/Product";

function AddProduct() {
  const nav = useNavigate();

  const { setFlash } = useFlash();

  const onSubmit = async (values: ProductForm) => {
    try {
      await axios.post("/products", values);
      setFlash(true);
      nav("/admin/products/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Stack gap={2}>
          <Typography variant="h3" textAlign={"center"}>
            Add Product
          </Typography>
          <FormProduct onSubmit={onSubmit} initialValues={{ isShow: true }} />
        </Stack>
      </Container>
    </>
  );
}

export default AddProduct;
