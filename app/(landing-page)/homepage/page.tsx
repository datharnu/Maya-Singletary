import React, { useState } from 'react'
import HeroPage from '../heropage/page'
import Header from '../../../components/shared/Header'
import CareerHighlights from './components/HIghlight'
import Footer from '../../../components/shared/Footer'
import PreLoader from '../../../components/shared/PreLoader'


export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Show preloader while loading */}
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      
      {/* Show main content after loading */}
      {!loading && (
        <div>
          <Header/>
          <HeroPage/>
          <CareerHighlights/>
          <Footer/>
        </div>
      )}
    </>
  )
}