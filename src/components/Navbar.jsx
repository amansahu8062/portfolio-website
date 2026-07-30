import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-400">
          &lt;AmanKumar /&gt;
        </h1>
        <div className="hidden md:flex gap-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="/Aman_Kumar_Sahu_Resume.pdf"
          download
          className="hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition-colors font-semibold text-sm"
        >
          Resume
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 text-2xl"
        >
          {menuOpen ? 'X' : 'Menu'}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 flex flex-col gap-4 border-t border-gray-800">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="/Aman_Kumar_Sahu_Resume.pdf"
            download
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center font-semibold text-sm"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
