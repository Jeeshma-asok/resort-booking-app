import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import { BookingContext } from '../App'
import Button from '../components/Botton'

function Home(){
  const { setIsModalOpen } = useContext(BookingContext)
  return (
    <>
      <Hero />
      <main>
        <Services />
        <Gallery />
        <section id="booking" className="py-12 bg-gradient-to-r from-amber-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to book your stay?</h2>
            <p className="text-gray-600 mb-6">Select your dates and room — secure your slice of paradise in seconds.</p>
            <div className="flex items-center justify-center gap-3">
              <Button 
                text={"Book Now"}
                variant='Orange'
                className="rounded-md px-4 py-2 font-medium"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


export default  Home