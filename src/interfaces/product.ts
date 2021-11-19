export default interface Product {
  id: string;
  title: string;
  exendedDescription: string;
  shortDescription: string;
  mainPicture: string;
  pictures: string[];
  rate: number;
  price: number;
  oldPrice?: number;
  country: number;
  stock: boolean;
  stockNumber: string;
  color: string;
  size: string;
  shipping: string;
  buyBy: string[];
  deliveryTime: number;
  deliveryArea: string;
  origins: string;
  howToCook: string;
  reviews: string[];
  questions: string[];
  farm: string;
  freshness: string;
  categories: string[];
  productType: string;
}
