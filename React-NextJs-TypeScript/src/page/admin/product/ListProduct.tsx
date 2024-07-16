import {
  Button,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "src/component/ConfirmDialog";
import Flash from "src/component/Flash";
import Loading from "src/component/Loading";
import { Product } from "src/type/Product";

const ListProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showFlash, setshowFlash] = useState(false);
  const [confirm, setconfirm] = useState(false);
  const [idDelete, setIdDelete] = useState<string | null>(null);

  //function: callapi: getAllProduct
  const getAllProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  // useffect
  useEffect(() => {
    getAllProduct();
  }, []);

  const handleConfirm = (id: string) => {
    setconfirm(true);
    setIdDelete(id);
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/products/" + idDelete);
      setshowFlash(true);
      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  };
  //render Ui : map
  return (
    <>
      <Container>
        <Flash isShow={showFlash} />
        <Loading isShow={loading} />
        <Stack gap={2}>
          <Typography variant="h2" textAlign="center">
            Products List
          </Typography>
          <Link to={"/admin/products/add"}>
            <Button>Thêm sản phẩm</Button>
          </Link>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{product._id}</TableCell>
                    <TableCell align="right">{product.title}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.description}</TableCell>
                    <TableCell align="right">{product.image}</TableCell>
                    <TableCell align="right">
                      {product.category?.name}
                    </TableCell>
                    <TableCell align="right">
                      <Stack
                        direction={"row"}
                        gap={3}
                        justifyContent={"center"}
                      >
                        <Link to={""}>
                          <Button>Edit</Button>
                        </Link>
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "red" }}
                          onClick={() => handleConfirm(product._id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ConfirmDialog
              confirm={confirm}
              onConfirm={setconfirm}
              onDelete={handleDelete}
            />
          </TableContainer>
        </Stack>
      </Container>
    </>
  );
};

export default ListProduct;
