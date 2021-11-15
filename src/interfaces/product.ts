export default interface Product {
  id: string;
  title: string; // Pizza Caesare
  exendedDescription: string;
  shortDescription: string;
  mainPicture: string;
  pictures: string[];
  rating: boolean[];
  rate: number;
  specialMarks: string[]; // like 'Free delivery' or '30%- off'
  price: number;
  oldPrice?: number;
  country: number;
  category: string; // like 'pizza'
  stock: boolean; // in stock / not in stock
  stockNumber: string; // 30 pcs
  color: string; // No specified color
  size: string; // small, big, all sizes, 50x50 cm
  specialProduct: string; // Free delivery
  buyBy: string[]; // [pcs, kgs, box, pack]
  deliveryTime: number; // in X days
  deliveryArea: string; // Europe
  origins: string;
  howToCook: string; // The product does not require cooking
  reviews: string[];
  questions: string[];
  farm: string;
  freshness: string; // New
}
