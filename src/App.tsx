import { useState, useEffect } from 'react';
import { Github, Mail, MapPin, Database, Smartphone, Globe, Brain, ExternalLink, ChevronDown, Menu, X, BookOpen, Linkedin } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    { name: 'C# / .NET', icon: '🔷' },
    { name: 'React / TypeScript', icon: '⚛️' },
    { name: 'Flutter / Dart', icon: '📱' },
    { name: 'Electron', icon: '💻' },
    { name: 'SQL / Bazy Danych', icon: '🗄️' },
    { name: 'Git / GitHub', icon: '🔧' }
  ];

  const projects = [
    {
      title: 'FrocarWeb',
      description: 'Aplikacja webowa do zarządzania flotą pojazdów z zaawansowanym systemem trackingu i raportowania.',
      tech: ['React', 'TypeScript', '.NET', 'SQL Server'],
      github: 'https://github.com/dawid-skowronski/FrocarWeb',
      features: ['Śledzenie w czasie rzeczywistym', 'Raporty i analityka', 'Panel administracyjny', 'REST API']
    },
    {
      title: 'Tetris Q-Learning',
      description: 'Implementacja gry Tetris z zastosowaniem algorytmu Q-Learning do automatycznego rozgrywania.',
      tech: ['Python', 'Q-Learning', 'AI/ML', 'Pygame'],
      github: 'https://github.com/JKozubekINF1/Tetris-Q_learing',
      features: ['Sztuczna inteligencja', 'Reinforcement Learning', 'Analiza wydajności', 'Wizualizacja procesu uczenia']
    },
    {
      title: 'Projekt Grupa G',
      description: 'Projekt zespołowy realizowany w ramach studiów z zastosowaniem nowoczesnych technologii webowych.',
      tech: ['React', 'TypeScript', '.NET', 'SQL Server'],
      github: 'https://github.com/dawid-skowronski/Projekt_grupa_G',
      features: ['Praca zespołowa', 'Metodyki Agile', 'Full-stack development', 'Responsive design']
    }
  ];

  const education = [
    {
      university: 'Collegium Witelona w Legnicy',
      faculty: 'Wydział nauk technicznych i ekonomicznych',
      fieldOfStudy: 'Informatyka',
      specialization: 'Programowanie Aplikacji Mobilnych i Internetowych',
      period: '2022 - obecnie',
      level: 'Inżynierskie'
    },
    {
      university: 'Zespół Szkół Nr 1 im. prof. Bolesława Krupińskiego',
      fieldOfStudy: 'Technik informatyk',
      period: '2018 - 2022',
      level: 'Technikum'
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Rest of your JSX remains unchanged */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
             style={{
               left: mousePosition.x / 10 + 'px',
               top: mousePosition.y / 10 + 'px',
               transform: 'translate(-50%, -50%)'
             }}></div>
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
             style={{
               right: mousePosition.x / 15 + 'px',
               bottom: mousePosition.y / 15 + 'px',
               transform: 'translate(50%, 50%)'
             }}></div>
      </div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400 border-b-2 border-purple-400' : ''
                  }`}
                >
                  {section === 'home' && 'Start'}
                  {section === 'about' && 'O mnie'}
                  {section === 'education' && 'Edukacja'}
                  {section === 'projects' && 'Projekty'}
                  {section === 'contact' && 'Kontakt'}
                </button>
              ))}
            </div>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize block w-full text-left px-3 py-2 hover:text-purple-400"
                >
                  {section === 'home' && 'Start'}
                  {section === 'about' && 'O mnie'}
                  {section === 'education' && 'Edukacja'}
                  {section === 'projects' && 'Projekty'}
                  {section === 'contact' && 'Kontakt'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="text-center z-10">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold shadow-2xl">
              JK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Jakub Kozubek
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Student Informatyki | Mobile & Web Developer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Zobacz Projekty
            <ChevronDown className="ml-2 animate-bounce" size={20} />
          </button>
        </div>
      </section>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            O Mnie
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Jestem studentem 3. roku informatyki na specjalności <strong>Programowanie Aplikacji Mobilnych i Internetowych</strong>.
                Pasjonuję się tworzeniem nowoczesnych aplikacji wykorzystujących najnowsze technologie.
              </p>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Specjalizacje:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="text-blue-400" size={20} />
                    <span>Web Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Smartphone className="text-green-400" size={20} />
                    <span>Mobile Apps</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Database className="text-orange-400" size={20} />
                    <span>Backend Systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="text-pink-400" size={20} />
                    <span>Machine Learning</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-purple-400">Technologie</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div key={tech.name} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Edukacja
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {education.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <h3 className="text-xl font-bold mb-2 text-blue-400 flex items-center">
                  <BookOpen className="mr-3" size={24} />
                  {item.fieldOfStudy} ({item.level})
                </h3>
                <p className="text-gray-300 text-sm mb-1">{item.university}</p>
                {item.specialization && <p className="text-gray-400 text-xs mb-3">Specjalność: {item.specialization}</p>}
                <p className="text-gray-500 text-xs">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projekty
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-2 py-1 rounded text-xs border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Kluczowe funkcje:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-1">
                        <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">Zobacz kod</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Kontakt
          </h2>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 mb-8">
              Szukasz developera do realizacji projektów mobilnych lub webowych?
              Skontaktuj się ze mną!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <a
                href="mailto:kozubekdawidjakub@gmail.com"
                className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="text-purple-400" size={20} />
                <span>kozubekdawidjakub@gmail.com</span>
              </a>

              <a
                href="https://github.com/JKozubekINF1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <Github className="text-purple-400" size={20} />
                <span>Profil GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jakub-kozubek-383449357/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="text-purple-400" size={20} />
                <span>Profil LinkedIn</span>
              </a>

              <div className="flex items-center space-x-3 bg-white/10 px-6 py-3 rounded-lg">
                <MapPin className="text-purple-400" size={20} />
                <span>Polska</span>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              Otwarty na nowe możliwości i ciekawe projekty - napisz!
            </p>
          </div>
        </div>
      </section>
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2025 Jakub Kozubek - Mobile & Web Developer
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
