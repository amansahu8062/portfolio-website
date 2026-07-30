function Projects() {
  const projects = [
    {
      title: "E-commerce Product Page",
      description: "A fully functional e-commerce app with product listing, filter by category, sort by price, add to cart, and real-time cart total calculation.",
      tech: ["React.js", "Tailwind CSS"],
      live: "https://ecommerce-app-swart-psi.vercel.app",
      github: "https://github.com/amansahu8062/ecommerce-app",
      emoji: "Cart",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Weather App",
      description: "Real-time weather app using OpenWeatherMap API. Features live search, search history, dark/light mode, temperature, humidity and wind speed.",
      tech: ["React.js", "OpenWeatherMap API", "Tailwind CSS"],
      live: "https://weather-app-27vu.vercel.app",
      github: "https://github.com/amansahu8062/weather-app",
      emoji: "Weather",
      color: "from-cyan-600 to-blue-600",
    },
    {
      title: "Task Manager App",
      description: "Full-featured task manager with add, complete, delete tasks. Filter by status and priority. Tasks persist using localStorage with stats dashboard.",
      tech: ["React.js", "Tailwind CSS", "localStorage"],
      live: "https://todo-task-manager-225v6140i-alon14.vercel.app",
      github: "https://github.com/amansahu8062/TODO-task-manager-",
      emoji: "Tasks",
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Movie Search App",
      description: "Search any movie and get full details including plot, cast, director, ratings, awards and box office. Features dark/light mode and year filter.",
      tech: ["React.js", "OMDB API", "Tailwind CSS"],
      live: "https://movie-search-q4nuzbupr-alon14.vercel.app",
      github: "https://github.com/amansahu8062/movie-search",
      emoji: "Movies",
      color: "from-yellow-600 to-orange-600",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase mb-2">What I built</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className={"bg-gradient-to-r " + project.color + " p-6 flex items-center gap-4"}>
                <span className="text-white font-bold text-lg bg-white bg-opacity-20 px-3 py-1 rounded-lg">{project.emoji}</span>
                <h3 className="text-white font-bold text-xl">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-gray-800 text-indigo-400 text-xs px-3 py-1 rounded-full border border-indigo-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-indigo-600 text-white text-center py-2 rounded-xl font-semibold hover:bg-indigo-500 transition-colors text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 border border-gray-700 text-gray-400 text-center py-2 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-400 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
