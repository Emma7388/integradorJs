// Array de productos
const productsData = [
  {
    id: 1,
    name: "Ravioles",
    price: 400,
    category: "pastas",
    cardImg: "./assets/img/products/raviol.png",
  },
  {
    id: 2,
    name: "Milanesa de carne con puré",
    price: 600,
    category: "carnes",
    cardImg: "./assets/img/products/milanga.png",
  },
  {
    id: 3,
    name: "Shawarma",
    price: 1500,
    category: "carnes",
    cardImg: "./assets/img/products/shawarma.png",
  },
  {
    id: 4,
    name: "Canelones",
    price: 500,
    category: "pastas",
    cardImg: "./assets/img/products/canelon.png",
  },
  {
    id: 5,
    name: "Fideos con tuco",
    price: 300,
    category: "pastas",
    cardImg: "./assets/img/products/fideoTuco.png",
  },
  {
    id: 6,
    name: "Emapanada de carne",
    price: 200,
    category: "empanadas",
    cardImg: "./assets/img/products/empanadaCarne.png",
  },
  {
    id: 7,
    name: "Empanada especial",
    price: 300,
    category: "empanadas",
    cardImg: "./assets/img/products/empanadaSpecial.png",
  },
  {
    id: 8,
    name: "Pepperoni",
    price: 500.9,
    category: "pizzas",
    cardImg: "./assets/img/products/peperoni.png",
  },
  {
    id: 9,
    name: "Especial",
    price: 750.8,
    category: "pizzas",
    cardImg: "./assets/img/products/pizzaEspecial.png",
  },
  {
    id: 10,
    name: "Parrillada",
    price: 8.35,
    category: "carnes",
    cardImg: "./assets/img/products/parrillada.png",
  },
  {
    id: 11,
    name: "Licuados",
    price: 8.65,
    category: "postres",
    cardImg: "./assets/img/products/licuados.png",
  },
  {
    id: 12,
    name: "Helados",
    price: 9.29,
    category: "postres",
    cardImg: "./assets/img/products/helado.png",
  },
  {
    id: 13,
    name: "Brownies",
    price: 8.27,
    category: "postres",
    cardImg: "./assets/img/products/brownies.png",
  },
  {
    id: 14,
    name: "Tortas cumpleaños",
    price: 1000.55,
    category: "postres",
    cardImg: "./assets/img/products/tortaCumple.png",
  },
  {
    id: 15,
    name: "Napolitana",
    price: 800,
    category: "pizzas",
    cardImg: "./assets/img/products/pizzaNapo.png",
  },
];

// para hacer la paginación de "ver mas"
const splitProducts = (size) => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size)
    dividedProducts.push(productsData.slice(i, i + size));
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(6), //  [[6],[6],[3]]
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};
