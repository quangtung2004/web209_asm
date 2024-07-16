import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from "react-router-dom";
import { Product } from 'src/type/Product';
type ProductCardProps = {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={product.image}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="red">
        Price: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/product/${product._id}`}>Detail</Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard