// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route>

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



// Resort Booking App (single-file React component)
// Built for Vite + React + Tailwind CSS
// Usage notes (put these in your project README):
// 1. Create a Vite React project: `npm create vite@latest my-resort -- --template react` or `yarn create vite`.
// 2. Install dependencies: `npm install`.
// 3. Install Tailwind: follow Tailwind docs for Vite (tailwindcss, postcss, autoprefixer) and add the `@tailwind` directives into `src/index.css`.
// 4. Replace src/App.jsx with this file's default export or import the component where needed.
// 5. Run: `npm run dev`.

import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Services from './components/Services'

function App(){
  return (
    <div className="min-h-screen font-sans bg-white text-slate-900">
      <Hero />
      <main>
        <Services />
        <Gallery />
        {/* Booking anchor section (simple placeholder) */}
        <section id="booking" className="py-12 bg-gradient-to-r from-amber-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to book your stay?</h2>
            <p className="text-gray-600 mb-6">Select your dates and room — secure your slice of paradise in seconds.</p>
            <div className="flex items-center justify-center gap-3">
              <input type="date" className="rounded-md px-3 py-2 border" />
              <input type="date" className="rounded-md px-3 py-2 border" />
              <button className="rounded-md bg-amber-500 px-4 py-2 font-medium text-gray-900">Search availability</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


export default  App