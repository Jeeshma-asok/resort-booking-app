import React from "react"; 
import { motion } from "framer-motion";


const IconAccommodation = () => {
  return (
    <svg className="w-12 h-12 mb-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 11L12 4l9 7v7a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1v-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
const IconAdventure = () => {
  return (
    <svg className="w-12 h-12 mb-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
const IconWellness = () => {
  return (
    <svg className="w-12 h-12 mb-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 3s4 3 6 6-2 8-6 11c-4-3-8-7-6-11s6-6 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}


function Services(){
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="services" 
      className="py-16 bg-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <article className="p-16 rounded-tl-2xl rounded-br-2xl border border-slate-300 shadow-sm text-center hover:scale-105 transition flex flex-col items-center justify-center">
            <IconAccommodation />
            <h3 className="text-xl font-semibold">Accommodation</h3>
            <p className="mt-2 text-sm text-gray-600">Comfortable rooms, private villas and family suites — designed to make you feel at home.</p>
          </article>

          <article className="p-16 rounded-tl-2xl rounded-br-2xl border border-slate-300 shadow-sm text-center hover:scale-105 transition flex flex-col items-center justify-center">
            <IconAdventure />
            <h3 className="text-xl font-semibold">Adventure Activities</h3>
            <p className="mt-2 text-sm text-gray-600">Guided hikes, water sports, early morning birdwatching and island excursions.</p>
          </article>

          <article className="p-16 rounded-tl-2xl rounded-br-2xl border border-slate-300 shadow-sm text-center hover:scale-105 transition flex flex-col items-center justify-center">
            <IconWellness />
            <h3 className="text-xl font-semibold">Wellness & Spa</h3>
            <p className="mt-2 text-sm text-gray-600">Relax with our signature massages, yoga sessions and a rejuvenating spa experience.</p>
          </article>
        </div>
      </div>
    </motion.section>
  )
}

export default Services;