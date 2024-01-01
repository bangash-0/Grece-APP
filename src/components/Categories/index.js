import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard'

const Categories = () => {
  const cards= ["Free Shipping", "24/7 Support", "30 Days Return", "100% Payment Secure"]

  return (
      <FeatureCard cards={cards}/>
  )
}

export default Categories