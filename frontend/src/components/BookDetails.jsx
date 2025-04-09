import React, { useState } from 'react'
import { FaMinus, FaPlus, FaShare, FaStar } from 'react-icons/fa6';
import { FiHeart } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const book = {
  id: 1,
  title: "Think and Grow Rich",
  author: "Napoleon Hill",
  price: 14.99,
  originalPrice: 17.99,
  discount: 15,
  rating: 4.5,
  reviewCount: 1842,
  availability: "in_stock",
  stockCount: 24,
  publisher: "Fingerprint! Publishing",
  publicationDate: "1 March 2020",
  language: "English",
  pages: 304,
  isbn: "978-9389931525",
  isbn10: "9389931525",
  dimensions: "2 x 12.8 x 19.6 cm",
  weight: "12.8 ounces",
  format: "Hardcover",
  edition: "First Edition",
  images: [
    "https://m.media-amazon.com/images/I/61bfj+-wArL._SY425_.jpg",
    "https://m.media-amazon.com/images/I/81Upwv7LY6L._SX606_.jpg",
    "https://m.media-amazon.com/images/I/71EFZu6USsL._SY425_.jpg",
    "https://m.media-amazon.com/images/I/71LNFbYmE9L._SL1500_.jpg",
  ],
  description:
    "Since its publication in 1937, Napoleon Hill’s seminal Think and Grow Rich has inspired generations of readers to develop their skills and become masters at anything to do. Inspired by Andrew Carnegie himself, Hill’s easy-to-follow guidebook to success is based on thirteen simple ‘steps’: 1. Desire 2. Faith 3. Autosuggestion 4. Specialized Knowledge 5. Imagination 6. Organized Planning 7. Decision 8. Persistence 9. Power of the Master Mind 10. The Mystery of Sex Transmutation 11. The Subconscious Mind 12. The Brain 13. The Sixth Sense Through a mixture of sound advice, income management methods, and personal anecdotes, Hill delivers the ultimate motivational message in Think and Grow Rich—and probably the only one you’ll ever need. Discover for yourself what makes this guidebook to better living one of the bestselling books of all time!",
  descriptionExtended:
    "",
  authorBio:
    `Napoleon Hill was born in Wise County, Virginia. He began his writing career at age 13 as a "mountain reporter" for small town newspapers and went on to become America's most beloved motivational author. His work stands as a monument to individual achievement and is the cornerstone of modern motivation. His most famous work, Think and Grow Rich, is one of the best-selling books of all time. Hill established the Foundation as a nonprofit educational institution whose mission is to perpetuate his philosophy of leadership, self-motivation, and individual achievement. 

 "www.naphill.org`,
  authorImage: "https://m.media-amazon.com/images/I/517LznLEhnL._SX300_CR0%2C0%2C300%2C300_.jpg",
  isNew: true,
  ratingDistribution: {
    5: 1200,
    4: 400,
    3: 150,
    2: 60,
    1: 32,
  },
  reviews: [
    {
      "name": "Sarah Johnson",
      "date": "January 15, 2023",
      "rating": 5,
      "title": "A life-changing read",
      "content": "This book completely changed my perspective on life and the choices we make. The concept is brilliant and the execution is flawless. I couldn't put it down and finished it in one sitting.",
      "helpfulCount": 42
    },
    {
      "name": "David Miller",
      "date": "March 3, 2023",
      "rating": 4,
      "title": "Motivating and insightful",
      "content": "A must-read for anyone interested in self-improvement and financial success. Some parts felt repetitive, but the principles are timeless and powerful.",
      "helpfulCount": 29
    },
    {
      "name": "Anita Desai",
      "date": "June 21, 2023",
      "rating": 5,
      "title": "Timeless wisdom",
      "content": "Napoleon Hill’s principles are just as relevant today as when they were first written. It’s not just about getting rich—it’s about mastering your mindset. Highly recommended!",
      "helpfulCount": 37
    },
  ],
}

const BookDetails = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState('description')

  const decreaseQuantity = () => {
    quantity !== 0 && setQuantity((prev) => prev - 1);
  }

  const increaseQuantity = () => {
    quantity !== 0 && setQuantity((prev) => prev + 1);
  }


  return (
    <div>
      <section className="px-12 py-6 md:py-10 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 bg-gradient-to-br from-blue-50 to-purple-50">
          {/* Book Images */}
          <div className="space-y-4">
            <div className="relative flex aspect-[4/5] justify-center overflow-hidden rounded-lg border">
              <img
                src={book.images[selectedImage] || "/placeholder.svg"}
                alt={book.title}
                fill
                className="object-contain text-center"
                priority
              />
              {book.discount && <div className="absolute top-4 left-4 text-white bg-yellow-600 px-3 rounded-lg">{book.discount}% OFF</div>}
            </div>
            <div className="flex space-x-2 overflow-auto pb-2">
              {book.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative h-20 w-16 flex-shrink-0 overflow-hidden rounded-md border ${selectedImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${book.title} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Book Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2">
                <div variant="outline" className="text-xs">
                  {book.format}
                </div>
                {book.isNew && <div className="text-xs bg-yellow-600 p-2 text-white">New Release</div>}
              </div>
              <h1 className="mt-2 text-2xl font-bold text-left md:text-3xl">{book.title}</h1>
              <div className="mt-2 flex items-center">
                <p className="text-lg">
                  by{" "}
                  <Link href="#" className="font-medium hover:underline">
                    {book.author}
                  </Link>
                </p>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(book.rating) ? "text-yellow-500" : "text-slate-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{book.rating}</span>
                <hr orientation="vertical" className="h-4" />
                <Link href="#reviews" className="text-sm text-muted-foreground hover:text-foreground">
                  {book.reviewCount} reviews
                </Link>
              </div>
            </div>
            <div className="my-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-pink-600">${book.price.toFixed(2)}</span>
                {book.originalPrice && (
                  <span className="text-lg line-through text-gray-500">${book.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <p className="text-sm text-center">
                {book.availability === "in_stock" ? (
                  <span className="text-green-600 font-medium">In Stock</span>
                ) : book.availability === "low_stock" ? (
                  <span className="text-amber-600 font-medium">Low Stock - Only {book.stockCount} left</span>
                ) : (
                  <span className="text-red-600 font-medium">Out of Stock</span>
                )}
              </p>
            </div>

            <hr />

            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Format</h3>
                <div defaultValue="paperback" className="mt-2 grid grid-cols-2 gap-2">
                  <div>
                    <div value="hardcover" id="hardcover" className="peer sr-only" />
                    <label
                      htmlFor="hardcover"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 bg-transparent p-3 border-purple-300 hover:bg-purple-100 peer-data-[state=checked]:border-primary"
                    >
                      Hardcover
                    </label>
                  </div>
                  <div>
                    <div value="paperback" id="paperback" className="peer sr-only" />
                    <label
                      htmlFor="paperback"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted border-green-300 hover:bg-green-100 bg-transparent p-3"
                    >
                      Paperback
                    </label>
                  </div>
                  {/* <div>
                    <div value="ebook" id="ebook" className="peer sr-only" />
                    <label
                      htmlFor="ebook"
                      className="flex cursor-pointer items-center justify-between rounded-md border-2 border-muted bg-transparent p-3 hover:bg-muted peer-data-[state=checked]:border-primary"
                    >
                      eBook
                    </label>
                  </div> */}
                </div>
              </div>

              <div className="flex items-center space-x-4 my-4">
                <div className="flex items-center">
                  <button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1}>
                    <FaMinus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button variant="outline" size="icon" onClick={increaseQuantity}>
                    <FaPlus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </button>
                </div>
                <button className="flex-1 flex justify-center items-center bg-gray-500 text-white p-2 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded" size="lg">
                  <IoCartOutline className="h-4 w-4 mr-2" />
                  Add to Cart
                </button>
                <button variant="outline" size="icon">
                  <FiHeart className="h-5 w-5" />
                  <span className="sr-only">Add to wishlist</span>
                </button>
              </div>
            </div>

            <hr />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Publisher</span>
                <span>{book.publisher}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Publication Date</span>
                <span>{book.publicationDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Pages</span>
                <span>{book.pages}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">ISBN-13</span>
                <span>{book.isbn}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Dimensions</span>
                <span>{book.dimensions}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className='flex justify-center items-center p-3 border border-gray-400 rounded-xl bg-white'>
                <FaShare className="mr-2 h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div defaultValue="description">
          <div className="w-full flex justify-start gap-4 rounded-none h-auto p-0">
            <div
              value="description"
              onClick={() => setTab('description')}
              className={`rounded-none py-3 px-2 cursor-pointer ${tab == 'description' ? 'text-pink-500 border-b' : ''}`}
            >
              Description
            </div>
            <div
              value="details"
              onClick={() => setTab('details')}
              className={`rounded-none py-3 px-2  cursor-pointer ${tab == 'details' ? 'text-pink-500 border-b' : ''}`}

            >
              Details
            </div>
            <div
              value="reviews"
              onClick={() => setTab('reviews')}
              className={`rounded-none py-3 px-2  cursor-pointer ${tab == 'reviews' ? 'text-pink-500 border-b' : ''}`}

              id="reviews"
            >
              Reviews ({book.reviewCount})
            </div>
          </div>
          <div className={`${tab === 'description' ? 'block' : 'hidden'} p-6`} >
            <div className="prose max-w-none">
              <h3 className='font-bold text-2xl text-left py-2'>About the Book</h3>
              <p className='text-left'>{book.description}</p>
              <p className='text-left'>{book.descriptionExtended}</p>
              <h3 className='font-bold text-2xl text-left py-2'>About the Author</h3>
              <div className="flex flex-col md:flex-row gap-4 flex-start">
                <div className="flex-shrink-0">
                  <img
                    src={book.authorImage || "/placeholder.svg"}
                    alt={book.author}
                    width={150}
                    height={150}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <p className='text-justify'>{book.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${tab === 'details' ? 'block' : 'hidden'} p-6`} >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Book Details</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Title</span>
                      <span>{book.title}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Author</span>
                      <span>{book.author}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Publisher</span>
                      <span>{book.publisher}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Publication Date</span>
                      <span>{book.publicationDate}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Language</span>
                      <span>{book.language}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Pages</span>
                      <span>{book.pages}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Product Details</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">ISBN-10</span>
                      <span>{book.isbn10}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">ISBN-13</span>
                      <span>{book.isbn}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Dimensions</span>
                      <span>{book.dimensions}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Weight</span>
                      <span>{book.weight}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Format</span>
                      <span>{book.format}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Edition</span>
                      <span>{book.edition}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={`${tab === 'reviews' ? 'block' : 'hidden'} p-6`}>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold">{book.rating}</div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(book.rating) ? "fill-primary text-primary" : "fill-muted text-muted"
                            }`}
                        />
                      ))}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">Based on {book.reviewCount} reviews</div>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center">
                        <div className="w-10 text-sm text-right">{star} star</div>
                        <div className="flex-1 mx-3 h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-blue-200"
                            style={{
                              width: `${(book.ratingDistribution[star] / book.reviewCount) * 100}%`,
                            }}
                          />
                        </div>
                        <div className="w-10 text-sm">{book.ratingDistribution[star]}</div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 py-2 text-white">Write a Review</button>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-medium text-3xl mb-4">Customer Reviews</h3>
                  <div className="space-y-6">
                    {book.reviews.map((review, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="font-medium">{review.name}</div>
                            <div className="text-sm text-muted-foreground">{review.date}</div>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <FaStar
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-500" : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                        <h4 className="font-medium md:text-left">{review.title}</h4>
                        <p className="text-sm md:text-left">{review.content}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <button className="text-muted-foreground hover:text-foreground">
                            Helpful ({review.helpfulCount})
                          </button>
                          <button className="text-muted-foreground hover:text-foreground">Report</button>
                        </div>
                        {index < book.reviews.length - 1 && <hr className="my-4" />}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <button variant="outline" className="w-full border border-gray-400 py-1 rounded-md">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 px-6">
        <h2 className="text-3xl font-bold mb-6 text-pink-500">You May Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {relatedBooks.map((book) => (
            <div key={book.id} className="overflow-hidden bg-white shadow-lg rounded">
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={book.cover || "/placeholder.svg"}
                  alt={book.title}
                  fill
                  className="transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="space-y-1">
                  <div className='text-left'>
                    <h3 className="font-medium leading-tight line-clamp-1">{book.title}</h3>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">${book.price.toFixed(2)}</span>
                    {book.discount && (
                      <div variant="outline" className="text-xs">
                        {book.discount}% OFF
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Top */}
      <div className="container p-6">
        <Link href="/" className="inline-flex items-center text-lg font-medium ">
          {/* <ArrowLeft className="mr-2 h-4 w-4" /> */}
          Back to Books
        </Link>
      </div>

    </div>
  )
}

export default BookDetails

const relatedBooks = [
  {
    id: 1,
    title: "How to Stop Time",
    author: "Matt Haig",
    price: 15.99,
    discount: null,
    cover: "https://m.media-amazon.com/images/I/817xUFQJhQL._SY425_.jpg",
  },
  {
    id: 2,
    title: "The Humans",
    author: "Matt Haig",
    price: 13.99,
    discount: 10,
    cover: "https://m.media-amazon.com/images/I/71NxLCVhebL._SY425_.jpg",
  },
  {
    id: 3,
    title: "Reasons to Stay Alive",
    author: "Matt Haig",
    price: 12.99,
    discount: null,
    cover: "https://m.media-amazon.com/images/I/71sQOfyYIaL._SY385_.jpg",
  },
  {
    id: 4,
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    price: 18.99,
    discount: 15,
    cover: "https://m.media-amazon.com/images/I/91Ql48Y0mqL._SY385_.jpg",
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 16.99,
    discount: null,
    cover: "https://m.media-amazon.com/images/I/81zD9kaVW9L._SY425_.jpg",
  },
]

