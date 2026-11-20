// The products in the shop. Each one has a name, price and image URL.
// The photos are stored in public/images, so they work locally and on GitHub Pages.
// Photos from Unsplash (credited in the footer).

const imageUrl = (file) => `${process.env.PUBLIC_URL}/images/${file}`;

const products = [
  { id: 1, name: "Study Notebook", price: 4500, image: imageUrl("notebook.jpg") },
  { id: 2, name: "Wireless Headphones", price: 39000, image: imageUrl("headphones.jpg") },
  { id: 3, name: "Campus Backpack", price: 32000, image: imageUrl("backpack.jpg") },
  { id: 4, name: "Water Bottle", price: 12000, image: imageUrl("bottle.jpg") },
  { id: 5, name: "Desk Lamp", price: 25000, image: imageUrl("lamp.jpg") },
  { id: 6, name: "Calligraphy Pen Set", price: 15000, image: imageUrl("pens.jpg") },
];

export default products;
