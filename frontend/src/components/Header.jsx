import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import { IoCartOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5'
import { FiHeart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky top-0 px-8 z-40 w-full border-b bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">BookHaven</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6 ml-4">
          <nav className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Books
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Categories
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Bestsellers
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              New Releases
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Deals
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex md:flex-1 items-center justify-center px-2">
          <div className="relative w-full max-w-md">
            {/* <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> */}
            <IoSearchOutline className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input type="search" placeholder="Search for books, authors, or ISBN..." className="w-full pl-8 pr-24 py-2 focus:outline-none border border-white border-thin" />
            <button size="sm" className="absolute right-1 top-1 h-8 bg-yellow-400 rounded text-black px-5">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-1">
            {/* <Heart className="h-5 w-5" /> */}
            <FiHeart className="h-5 w-5" />
            <span className="hidden md:inline text-sm">Wishlist</span>
          </Link>
          <Link href="#" className="flex items-center gap-1">
            {/* <User className="h-5 w-5" /> */}
            <IoPersonOutline className="h-5 w-5" />
            <span className="hidden md:inline text-sm">Account</span>
          </Link>
          <Link href="#" className="flex items-center gap-1">
            {/* <ShoppingCart className="h-5 w-5" /> */}
            <IoCartOutline className="h-5 w-5" />
            <span className="hidden md:inline text-sm">Cart</span>
            {/* <Badge className="ml-1 bg-primary text-primary-foreground">3</Badge> */}
          </Link>
        </div>
      </div>
      <div className="md:hidden container py-2">
        <div className="relative w-full">
          <IoSearchOutline className="absolute left-2 top-2.5 h-4 w-4" />
          <input type="search" placeholder="Search books..." className="w-full pl-8 pr-12 focus:outline-none py-1" />
          <button size="sm" className="absolute right-1 top-1 h-7 bg-blue-400 rounded-md text-white px-4">
            Search
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
