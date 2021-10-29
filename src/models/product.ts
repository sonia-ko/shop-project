class Product {
  id: string;
  description: string;
  price: number;
  picture: string;
  constructor(description: string, price: number, picture: string) {
    this.description = description;
    this.id = new Date().toISOString();
    this.price = price;
    this.picture = picture;
  }
}

export default Product;
