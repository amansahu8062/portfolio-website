function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-indigo-400 font-semibold text-lg mb-4 tracking-widest uppercase">
          Hello, I am
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Aman Kumar
          <span className="text-indigo-400"> Sahu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-6">
          Frontend Developer
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          I build beautiful, responsive web applications using
          <span className="text-indigo-400 font-semibold"> React.js </span>
          and
          <span className="text-indigo-400 font-semibold"> JavaScript</span>.
          Passionate about creating clean code and great user experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-indigo-600 text-indigo-400 px-8 py-3 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/amansahu8062"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aman-kumar-13a5222a8"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=amansahu8062@gmail.com"
            className="text-gray-400 hover:text-indigo-400 transition-colors font-medium"
          >
            Email
          </a>
        </div>
        <div className="mt-16 animate-bounce">
          <p className="text-gray-600 text-sm">scroll down</p>
          <p className="text-gray-600 text-xl">v</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
