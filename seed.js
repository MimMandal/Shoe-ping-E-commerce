const mongoose = require("mongoose");
const Product = require("./models/Products");

const products = [
  {
    name: "Nike Legend Essential 2",
    img: "https://images.unsplash.com/photo-1605408499391-6368c628ef42?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "",
    price: "7999",
  },
  {
    name: "Nike Runners 5",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "",
    price: "4999",
  },
  {
    name: "Nike Black and White Basketball Shoe",
    img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "",
    price: "3999",
  },
  {
    name: "Nike Runners 4",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "",
    price: "3499",
  },
  {
    name: " Fila Disruptor White sneakers",
    img: "https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "",
    price: "1499",
  },
  {
    name: "Puma Low Dunk",
    img: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "",
    price: "2999",
  },
];

//to seed the data using a function

async function seedDB() {
  await Product.insertMany(products);
  console.log("Data seeded");
}

module.exports=seedDB;