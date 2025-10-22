import React from "react"

const GALLERY = [
  'https://www.cheraibeachresorts.com/images/ind-slide-doc.jpg',
  'https://www.cheraibeachresorts.com/images/ind-slide-sunrise-new.jpg',
  'https://www.cheraibeachresorts.com/images/ind-slide-sunrise-new.jpg'
]



function Gallery(){
  return (
    <section id="gallery" className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {GALLERY.map((src,i)=> (
            <div key={i} className="overflow-hidden rounded-xl shadow-md">
              <img src={src} alt={`Resort ${i+1}`} className="w-full h-64 object-cover transform hover:scale-105 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery