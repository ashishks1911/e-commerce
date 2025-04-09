import React from 'react'
import { FaChevronRight, FaStar } from 'react-icons/fa6'
import { FiHeart } from 'react-icons/fi'
import { IoCartOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'

const BestsellerSection = () => {
  const navigate =  useNavigate();
  const books = [
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: "$14.99",
      originalPrice: "$24.99",
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/81JJPDNlxSL._SY425_.jpg",
      badge: "Bestseller",
    },
    {
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: "$12.99",
      originalPrice: "$18.99",
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/81SjX1vUR4L._SY425_.jpg",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: "$16.99",
      originalPrice: "$27.99",
      rating: 4.9,
      image: "https://m.media-amazon.com/images/I/81IL8Dy4vmL._SY425_.jpg",
      badge: "Top Rated",
    },
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: "$13.99",
      originalPrice: "$22.99",
      rating: 4.6,
      image: "https://m.media-amazon.com/images/I/718Q61qxGSL._SL1500_.jpg",
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: "$15.99",
      originalPrice: "$28.99",
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/81zD9kaVW9L._SY425_.jpg",
    },
  ]

  return (
    <section className="w-full py-12">
      <div className="container space-y-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold md:text-3xl text-left">Bestsellers</h2>
            <p className="text-xs">Our most popular books this week</p>
          </div>
          <Link href="#" className="flex items-center text-xs font-medium">
            View all bestsellers
            <FaChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {books.map((book) => (
            <div key={book.title} className="overflow-hidden group shadow-md rounded-md " >
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  
                />
                {book.badge && (
                  <div className="absolute top-2 left-2 bg-primary text-primary-foreground">{book.badge}</div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2" onClick={()=> navigate('/details')}>
                  <button size="sm" variant="secondary" className="flex justify-center items-center rounded-full w-10 h-10 p-0 bg-white">
                    <IoCartOutline className="h-5 w-5" />
                    <span className="sr-only">Add to cart</span>
                  </button>
                  <button size="sm" variant="secondary" className=" flex justify-center items-center rounded-full w-10 h-10 p-0 bg-white">
                    <FiHeart className="h-5 w-5" />
                    <span className="sr-only">Add to wishlist</span>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-1">
                  <h3 className="font-medium line-clamp-1 text-left">{book.title}</h3>
                  <p className="text-sm  text-left">{book.author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{book.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{book.price}</span>
                    {book.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{book.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestsellerSection
