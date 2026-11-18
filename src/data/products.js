// The products in the shop. Each one has a name, price and image URL.
// The images are stored in public/images, so they work locally and on GitHub Pages.

const imageUrl = (file) => `${process.env.PUBLIC_URL}/images/${file}`;

const products = [
  { id: 1, name: "Study Notebook", price: 4500, image: imageUrl("notebook.svg") },
  { id: 2, name: "Wireless Headphones", price: 39000, image: imageUrl("headphones.svg") },
  { id: 3, name: "Campus Backpack", price: 32000, image: imageUrl("backpack.svg") },
  { id: 4, name: "Water Bottle", price: 12000, image: imageUrl("bottle.svg") },
  { id: 5, name: "Desk Lamp", price: 25000, image: imageUrl("lamp.svg") },
  { id: 6, name: "Pen Set (3 colours)", price: 6000, image: imageUrl("pens.svg") },
];

export default products;
