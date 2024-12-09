const books = [
    {
      id: 1,
      name: "To Kill a Mockingbird",
      description: "A novel by Harper Lee, addressing racial injustice and moral growth.",
      image: "https://img.freepik.com/free-photo/stack-vintage-hardcover-books_23-2148213841.jpg?semt=ais_hybrid",
      category: true,
      price: 15.99
    },
    {
      id: 2,
      name: "1984",
      description: "George Orwell's dystopian social science fiction novel.",
      image: "https://img.freepik.com/free-photo/front-view-stack-books-with-one-open_23-2148827193.jpg?semt=ais_hybrid",
      category: true,
      price: 12.99
    },
    {
      id: 3,
      name: "Pride and Prejudice",
      description: "Jane Austen's romantic novel focusing on the development of Elizabeth Bennet.",
      image: "https://img.freepik.com/free-photo/front-view-stack-books-with-vase-flowers_23-2148827194.jpg?semt=ais_hybrid",
      category: true,
      price: 10.99
    },
    {
      id: 4,
      name: "The Great Gatsby",
      description: "F. Scott Fitzgerald's classic American novel.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 13.99
    },
    {
      id: 5,
      name: "The Catcher in the Rye",
      description: "J. D. Salinger's novel about adolescent alienation.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 14.99
    },
    {
      id: 6,
      name: "The Hobbit",
      description: "J.R.R. Tolkien's fantasy adventure.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 17.99
    },
    {
      id: 7,
      name: "Harry Potter and the Philosopher's Stone",
      description: "The first book in J.K. Rowling's Harry Potter series.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 19.99
    },
    {
      id: 8,
      name: "The Book Thief",
      description: "Markus Zusak's novel set in Nazi Germany, narrated by Death.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 14.99
    },
    {
      id: 9,
      name: "Moby Dick",
      description: "Herman Melville's epic tale of the hunt for the white whale.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 11.99
    },
    {
      id: 10,
      name: "The Adventures of Sherlock Holmes",
      description: "A collection of detective stories by Arthur Conan Doyle.",
      image: "https://img.freepik.com/free-psd/books-stacked-isolated-transparent-background_191095-17350.jpg?t=st=1729352883~exp=1729356483~hmac=93665ad93ed84c8cc5bf93b957b78ac2c68c8f784a129641c09790dbed2e2f76&w=740",
      category: false,
      price: 0.00
    },
    {
      id: 11,
      name: "Little Women",
      description: "Louisa May Alcott's novel about the March sisters.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 9.99
    },
    {
      id: 12,
      name: "Brave New World",
      description: "Aldous Huxley's dystopian social science fiction novel.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 13.99
    },
    {
      id: 13,
      name: "Jane Eyre",
      description: "Charlotte Brontë's novel about the life of an orphan girl.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 10.99
    },
    {
      id: 14,
      name: "Wuthering Heights",
      description: "Emily Brontë's novel about the intense love between Catherine and Heathcliff.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 12.99
    },
    {
      id: 15,
      name: "The Lord of the Rings",
      description: "J.R.R. Tolkien's epic fantasy trilogy.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 22.99
    },
    {
      id: 16,
      name: "Anne of Green Gables",
      description: "Lucy Maud Montgomery's novel about an imaginative red-haired orphan.",
      image: "https://img.freepik.com/free-psd/books-stacked-isolated-transparent-background_191095-17350.jpg?t=st=1729352883~exp=1729356483~hmac=93665ad93ed84c8cc5bf93b957b78ac2c68c8f784a129641c09790dbed2e2f76&w=740",
      category: true,
      price: 0.00
    },
    {
      id: 17,
      name: "Frankenstein",
      description: "Mary Shelley's novel about the scientist who creates a monster.",
      image: "https://img.freepik.com/free-psd/books-stacked-isolated-transparent-background_191095-17350.jpg?t=st=1729352883~exp=1729356483~hmac=93665ad93ed84c8cc5bf93b957b78ac2c68c8f784a129641c09790dbed2e2f76&w=740",
      category: false,
      price: 0.00
    },
    {
      id: 18,
      name: "The Chronicles of Narnia",
      description: "C.S. Lewis's series of seven fantasy novels.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 18.99
    },
    {
      id: 19,
      name: "Dracula",
      description: "Bram Stoker's gothic horror novel introducing Count Dracula.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 10.99
    },
    {
      id: 20,
      name: "The Alchemist",
      description: "Paulo Coelho's novel about a young Andalusian shepherd in search of his personal legend.",
      image: "https://img.freepik.com/free-photo/creative-assortment-world-book-day_23-2148883758.jpg?semt=ais_hybrid",
      category: true,
      price: 12.99
    }
  ];
export default books;  