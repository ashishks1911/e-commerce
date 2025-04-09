import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
  const categories = [
    { name: "Fiction", image: "fiction.jpg", count: "12,345" },
    { name: "Non-Fiction", image: "non-fiction.jpg", count: "8,765" },
    { name: "Children's", image: "children.jpg", count: "5,432" },
    { name: "Mystery", image: "mystry.jpg", count: "3,210" },
    { name: "Science Fiction", image: "sci-fi.jpg", count: "2,345" },
    { name: "Biography", image: "biography.jpg", count: "1,987" },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container space-y-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold md:text-3xl text-left">Browse Categories</h2>
            <p className="text-left text-xs">Find your next read by category</p>
          </div>
          <Link href="#" className="flex items-center text-xs font-medium text-primary">
            View all categories
            <FaChevronRight className="ml-1 h-4 w-4"/>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href="#" className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="aspect-square object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-medium text-white">{category.name}</h3>
                  <p className="text-xs text-white/80">{category.count} books</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
