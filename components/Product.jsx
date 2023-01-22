import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/client'

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className=''>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])} 
            alt="" 
            width={250}
            height={250}
            className='product-image'
          />
          <p className="produc-name">{name}</p>
          <p className="produc-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product