// import Propertycard from 'components/PropertyCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function Property({ posts: properties }) {
    const router = useRouter();
    console.log('property ID = ', router.query.id);
    
      
  return (
    <div>
        <h1>lalala</h1>
        { router.query.id}
    </div>
  )
}

export default Property