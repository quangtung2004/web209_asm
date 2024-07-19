import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from "react-router-dom";
import { Product } from 'src/type/Product';
type ProductCardProps = {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="210"
        image={product.image}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary">Detail</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProductCard