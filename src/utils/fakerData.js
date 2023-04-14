import {faker} from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';

 const generateProducts = (quantity) => {
  const products = [];
  for (let i = 0; i < quantity; i++) {
    const product = {
      id: uuidv4(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(300,300,"clothes",true),
      isWishlisted: false
    };
    products.push(product);
  }
  return products;
};

export default generateProducts;