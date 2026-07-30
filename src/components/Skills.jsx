function Skills() {
  const skills = [
    { name: "JavaScript", level: 85, icon: "JS" },
    { name: "React.js", level: 80, icon: "Re" },
    { name: "HTML5", level: 90, icon: "HT" },
    { name: "CSS3", level: 85, icon: "CS" },
    { name: "Tailwind CSS", level: 85, icon: "TW" },
    { name: "Git & GitHub", level: 75, icon: "Gi" },
    { name: "REST APIs", level: 80, icon: "AP" },
    { name: "Responsive Design", level: 85, icon: "RD" },
  ]

  const tools = [
    "VS Code", "Vite", "Vercel", "localStorage",
    "React Router", "React Hooks", "Flexbox", "CSS Grid"
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold tracking-widest uppercase mb-2">What I know</p>
          <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-gray-800 rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold text-sm bg-gray-700 px-2 py-1 rounded">{skill.icon}</span>
                  <span className="text-white font-semibold">{skill.name}</span>
                </div>
                <span className="text-indigo-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-indigo-500 h-2 rounded-full"
                  style={{ width: skill.level + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-gray-400 font-semibold mb-6 uppercase tracking-widest text-sm">
            Tools and Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-gray-800 text-indigo-400 border border-indigo-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-900 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
