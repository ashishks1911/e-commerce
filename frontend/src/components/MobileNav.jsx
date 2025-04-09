import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button variant="ghost" size="icon" onClick={() => setOpen(true)}>
        <HiBars3 className='h-6 w-6' />
        <span className="sr-only">Toggle menu</span>
      </button>
      {open && (
        <div className="fixed inset-0 z-50  backdrop-blur-sm">
          <div className="fixed left-0 top-0 h-full w-3/4 bg-blue-100/80 shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold">BookHaven</span>
              <button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <IoClose  className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="grid gap-2 p-4">
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                Books
              </Link>
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                Categories
              </Link>
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                Bestsellers
              </Link>
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                New Releases
              </Link>
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                Deals
              </Link>
              <div className="border-t my-2"></div>
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                My Account
              </Link>
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                Wishlist
              </Link>
              <Link href="#" className="flex items-center py-2 text-lg font-medium" onClick={() => setOpen(false)}>
                Cart
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>

  )
}

export default MobileNav
