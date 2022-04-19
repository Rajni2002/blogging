db.products.insertOne({
  _id: 2,
  name: "Pencil",
  price: 0.8,
  stock: 12,
  review: [
    {
      authorName: "James",
      rating: 5,
      review: "Best rubber ever!",
    },
    {
      authorName: "jono",
      rating: 5,
      review: "Awesome ever!",
    }
  ]
})
