import React, { createContext, useMemo, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CommonLayout from './layout/CommonLayout'
import Home from './pages/Home'
import BookingDetailsPage from './pages/BookingDetails'
import BookingForm from './components/BookingForm'


export const BookingContext = createContext();

function App(){

  const [isModalOpen, setIsModalOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen
    }),
    [isModalOpen] // only re-create when these states change
  );

  return (
    <BookingContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/" 
            element = {
              <CommonLayout />
            }
          >
            <Route index element={<Home />} />
            <Route path='/bookings' element={<BookingDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>



      <BookingForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </BookingContext.Provider>
  )
}


export default  App