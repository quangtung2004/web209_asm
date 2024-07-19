import { Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormProduct from "src/component/FormProduct";
import { useFlash } from "src/contexts/Flash";
import { ProductForm } from "src/type/Product";

function EditProduct() {
  const nav = useNavigate();
  const { setFlash } = useFlash();
  const { id } = useParams();
  const [product, setProduct] = useState<ProductForm | undefined>();

  const getProduct = async (id: string) => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getProduct(id);
  }, [id]);

  const onSubmit = async (values: ProductForm) => {
    try {
      await axios.put(`/products/${id}`, values);
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
            Edit Product
          </Typography>
          <FormProduct onSubmit={onSubmit} initialValues={product} />
        </Stack>
      </Container>
    </>
  );
}

export default EditProduct;
