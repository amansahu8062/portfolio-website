function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-indigo-400 font-semibold tracking-widest uppercase mb-2">Get in touch</p>
        <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-400 text-lg mb-12">
          I am currently looking for opportunities. Whether you have a question,
          a project, or just want to say hi, my inbox is always open!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&to=amansahu8062@gmail.com"
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-indigo-600"
          >
            <p className="text-white font-bold text-2xl mb-3">@</p>
            <p className="text-white font-semibold mb-1">Email</p>
            <p className="text-indigo-400 text-sm">amansahu8062@gmail.com</p>
          </a>
          <a
            href="https://linkedin.com/in/aman-kumar-13a5222a8"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-indigo-600"
          >
            <p className="text-white font-bold text-2xl mb-3">in</p>
            <p className="text-white font-semibold mb-1">LinkedIn</p>
            <p className="text-indigo-400 text-sm">aman-kumar-13a5222a8</p>
          </a>
          <a
            href="https://github.com/amansahu8062"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-indigo-600"
          >
            <p className="text-white font-bold text-2xl mb-3">GH</p>
            <p className="text-white font-semibold mb-1">GitHub</p>
            <p className="text-indigo-400 text-sm">amansahu8062</p>
          </a>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&to=amansahu8062@gmail.com"
          className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-500 transition-all hover:scale-105"
        >
          Say Hello
        </a>
        <p className="text-gray-600 text-sm mt-16">
          Designed and Built by Aman Kumar Sahu 2026
        </p>
      </div>
    </section>
  )
}

export default Contact
