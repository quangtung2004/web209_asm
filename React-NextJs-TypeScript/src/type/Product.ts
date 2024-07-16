export type Product = {
  _id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  category: Category;
  isShow: boolean;
};
export type Category = {
  _id: number;
  name: string;
  description: string;
};
export type ProductForm = {
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  isShow: boolean;
}
