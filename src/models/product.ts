class Product {
  id: string;
  description: string;
  price: number;
  category: string;
  specialProduct: string;
  picture: string;
  constructor(
    description: string,
    price: number,
    picture: string,
    category: string,
    specialProduct: string
  ) {
    this.description = description;
    this.id = new Date().toISOString();
    this.price = price;
    this.picture = picture;
    this.category = category;
    this.specialProduct = specialProduct;
  }
}

export default Product;
