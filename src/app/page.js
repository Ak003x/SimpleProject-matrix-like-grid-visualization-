"use client";
import globalcss from "./globals.css";
const images = [
  "https://picsum.photos/300?random=1",
  "https://picsum.photos/300?random=2",
  "https://picsum.photos/300?random=3",
  "https://picsum.photos/300?random=4",
  "https://picsum.photos/300?random=5",
  "https://picsum.photos/300?random=6",
  "https://picsum.photos/300?random=7",
  "https://picsum.photos/300?random=8",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Vibrant Professional Header */}
      <header className="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Simple Image Gallery with grid visualization
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto">
              Where Professional Excellence Meets Vibrant Creativity
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"></div>
      </header>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {images.map((src, index) => (
              <article
                key={`image-${index}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <img
                    src={src}
                    alt={`Creative photograph ${index + 1}`}
                    className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/300';
                      e.currentTarget.alt = 'Image temporarily unavailable';
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Image {index + 1}
                    </h2>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800">
                      Featured
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <p className="text-gray-600">Premium Collection</p>
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-lg">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
{/* Footer */}
      <footer className="bg-white border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12">

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-purple-100 text-center">
              <p className="text-gray-600">
                © {new Date().getFullYear()}Grid visualization. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}