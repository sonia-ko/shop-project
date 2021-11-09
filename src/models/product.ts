interface Product {
  id: number;
  title: string; // Pizza Caesare
  exendedDescription: string;
  shortDescription: string;
  mainPicture: string;
  pictures: string[];
  rating: boolean[];
  specialMarks?: string[]; // like 'Free delivery' or '30%- off'
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
  questions: string[]; // How do I order?
  farm: string;
  freshness: string; // New
}
//class Product {
//   id: string;
//   title: string; // Pizza Caesare
//   exendedDescription: string;
//   shortDescription: string;
//   mainPicture: string;
//   pictures: string[];
//   rating: boolean[];
//   specialMarks?: string[]; // like 'Free delivery' or '30%- off'
//   price: number;
//   country: number;
//   category: string; // like 'pizza'
//   stock: boolean; // in stock / not in stock
//   stockNumber: string; // 30 pcs
//   color: string; // No specified color
//   size: string; // small, big, all sizes, 50x50 cm
//   specialProduct: string; // Free delivery
//   buyBy: string[]; // [pcs, kgs, box, pack]
//   deliveryTime: number; // in X days
//   deliveryArea: string; // Europe
//   origins: string;
//   howToCook: string; // The product does not require cooking
//   reviews: string[];
//   questions: string[];
//   farm: string;
//   freshness: string; // New

//   constructor(
//     id: string,
//     title: string,
//     exendedDescription: string,
//     shortDescription: string,
//     mainPicture: string,
//     pictures: string[],
//     rating: boolean[],
//     specialMarks: string[],
//     price: number,
//     country: number,
//     category: string,
//     stock: boolean, // in stock / not in stock
//     stockNumber: string, // 30 pcs
//     color: string,
//     size: string,
//     specialProduct: string,
//     buyBy: string[], // [pcs, kgs, box, pack]
//     deliveryTime: number, // in X days
//     deliveryArea: string, // Eurrope
//     origins: string, // like long description of the product
//     howToCook: string,
//     reviews: string[],
//     questions: string[],
//     farm: string,
//     freshness: string
//   ) {
//     this.title = title;
//     this.id = id;
//     this.exendedDescription = exendedDescription;
//     this.shortDescription = shortDescription;
//     this.mainPicture = mainPicture;
//     this.pictures = pictures;
//     this.rating = rating;
//     this.specialMarks = specialMarks;
//     this.price = price;
//     this.country = country;
//     this.category = category;
//     this.stock = stock;
//     this.stockNumber = stockNumber;
//     this.color = color;
//     this.size = size;
//     this.specialProduct = specialProduct;
//     this.buyBy = buyBy;
//     this.deliveryTime = deliveryTime;
//     this.deliveryArea = deliveryArea;
//     this.origins = origins;
//     this.howToCook = howToCook;
//     this.reviews = reviews;
//     this.questions = questions;
//     this.farm = farm;
//     this.freshness = freshness;
//   }
// }

export default Product;

// export default interface ITutorialData {
//   key?: string | null;
//   title: string;
//   description: string;
//   published?: boolean;
// }
