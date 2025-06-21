import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* NAVBAR FIXA */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md border-b border-neutral-800/60">
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
          <span className="text-lg font-bold tracking-tight text-white">
            Frederico Gouveia
          </span>
          <ul className="flex gap-6 text-sm font-medium text-neutral-300">
            <li>
              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Ybt2"
                target="_blank"
                rel="noopener"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0a0a] text-white px-4 pt-32 scroll-smooth">
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-stretch justify-between gap-10 py-24 w-full max-w-7xl text-center md:text-left">
          {/* Informações à esquerda */}
          <div className="flex-1 flex flex-col gap-6 items-center md:items-start justify-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              Frederico Gouveia
            </h1>
            <h2 className="text-lg sm:text-2xl font-medium text-neutral-300 tracking-wide">
              Estudante da Oficina - Escola Profissional
            </h2>
            <p className="text-neutral-400 max-w-xl text-base sm:text-lg leading-relaxed">
              Atualmente interessado por backend e inteligência artificial.Add commentMore actions
              Tenho desenvolvido pequenos projetos para aprender mais sobre servidores, APIs, e redes neurais.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="#projects"
                className="px-7 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition font-semibold shadow-lg text-white"
              >
                Projetos
              </a>
              <a
                href="#contact"
                className="px-7 py-2.5 rounded-full border border-neutral-700 hover:bg-neutral-800/80 transition font-semibold text-white"
              >
                Contato
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Ybt2"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                className="hover:text-blue-400 transition"
              >
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/frederico-gouveia-62b67632b"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition"
              >
                <svg
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Foto à direita */}
          <div className="flex-shrink-0 flex items-stretch h-full">
            <div className="w-[520px] h-full min-h-[320px] max-h-[420px] rounded-2xl overflow-hidden border-4 border-neutral-800 shadow-lg bg-neutral-900 flex items-stretch">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        {/* OUTRAS SEÇÕES */}
        <section id="projects" className="w-full max-w-7xl mx-auto py-20">
          <h3 className="text-2xl font-bold mb-10 text-left">
            Projetos em destaque
          </h3>
          <div className="flex flex-col gap-10">
            {/* Projeto 1 */}
            <div className="flex flex-col md:flex-row bg-gradient-to-br from-neutral-800/90 to-neutral-900/80 rounded-2xl shadow-xl border border-neutral-700/60 hover:scale-[1.01] transition-transform overflow-hidden">
              <div className="md:w-2/5 w-full aspect-video md:aspect-auto bg-black flex items-center justify-center">
                <video controls poster="/thumb-portfolio.jpg" className="w-full h-full object-cover">
                  <source src="/number_video.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
              <div className="flex-1 flex flex-col gap-3 p-6 justify-center">
                <h4 className="text-xl font-semibold mb-1 text-left">Reconhecimento de números</h4>
                <p className="text-neutral-400 text-base">Uma inteligencia artificial treinada com o dataset MNIST para reconhecer números desenhados.</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded text-xs font-mono">#python</span>
                  <span className="bg-cyan-900/40 text-cyan-300 px-2 py-0.5 rounded text-xs font-mono">#tensorflow</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-0.5 rounded text-xs font-mono">#AI</span>
                </div>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <a href="https://github.com/Ybt2/number_recognition" target="_blank" rel="noopener" className="px-4 py-1.5 rounded-full bg-purple-700 hover:bg-purple-900 text-white text-sm font-semibold transition">Ver no Github</a>
                  <a href="/number_recognition.zip" download className="px-4 py-1.5 rounded-full bg-neutral-700 hover:bg-neutral-800 text-white text-sm font-semibold transition">Download código</a>
                </div>
              </div>
            </div>
            {/* Projeto 2 */}
            <div className="flex flex-col md:flex-row bg-gradient-to-br from-neutral-800/90 to-neutral-900/80 rounded-2xl shadow-xl border border-neutral-700/60 hover:scale-[1.01] transition-transform overflow-hidden">
              <div className="md:w-2/5 w-full aspect-video md:aspect-auto bg-black flex items-center justify-center">
                <video controls poster="/thumb-oficina-study.jpg" className="w-full h-full object-cover">
                  <source src="/pitch_oficina_study.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
              <div className="flex-1 flex flex-col gap-3 p-6 justify-center">
                <h4 className="text-xl font-semibold mb-1 text-left">Oficina Study</h4>
                <p className="text-neutral-400 text-base">Projeto feito no ambito de um concurso chamado sitestar, a ideia era fazer uma IA para estudo, que com a implementação de um sistama RAG, não poderia estar errada.</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded text-xs font-mono">#python</span>
                  <span className="bg-cyan-900/40 text-cyan-300 px-2 py-0.5 rounded text-xs font-mono">#backend</span>
                  <span className="bg-purple-900/40 text-purple-300 px-2 py-0.5 rounded text-xs font-mono">#AI</span>
                  <span className="bg-green-900/40 text-green-300 px-2 py-0.5 rounded text-xs font-mono">#Ollama</span>
                </div>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <a href="https://oficinastudy.pt" target="_blank" rel="noopener" className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">Abrir site</a>
                  <a href="https://github.com/franciscom06/oficinastudy" target="_blank" rel="noopener" className="px-4 py-1.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold transition">Ver no Github</a>
                  <a href="/oficinastudy.zip" download className="px-4 py-1.5 rounded-full bg-neutral-700 hover:bg-neutral-800 text-white text-sm font-semibold transition">Download código</a>
                </div>
                
              </div>
            </div>   
            {/* Projeto 3 */}
            <div className="flex flex-col md:flex-row bg-gradient-to-br from-neutral-800/90 to-neutral-900/80 rounded-2xl shadow-xl border border-neutral-700/60 hover:scale-[1.01] transition-transform overflow-hidden">
              <div className="md:w-2/5 w-full aspect-video md:aspect-auto bg-black flex items-center justify-center">
                <video controls poster="/thumb-chatbot.jpg" className="w-full h-full object-cover">
                  <source src="/EcoQuiz.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
              <div className="flex-1 flex flex-col gap-3 p-6 justify-center">
                <h4 className="text-xl font-semibold mb-1 text-left">EcoQuiz</h4>
                <p className="text-neutral-400 text-base">Um pwa feito em HTML, CSS e JS que funciona offline, feito no ambito escolar para o Bgreen</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-red-900/40 text-red-300 px-2 py-0.5 rounded text-xs font-mono">#HTML</span>
                  <span className="bg-green-900/40 text-green-300 px-2 py-0.5 rounded text-xs font-mono">#CSS</span>
                  <span className="bg-yellow-900/40 text-yellow-300 px-2 py-0.5 rounded text-xs font-mono">#JavaScript</span>
                </div>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <a href="https://neon-baklava-703798.netlify.app/" target="_blank" rel="noopener" className="px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition">Abrir site</a>
                  <a href="https://github.com/Ybt2/EcoQuiz" target="_blank" rel="noopener" className="px-4 py-1.5 rounded-full bg-purple-700 hover:bg-purple-900 text-white text-sm font-semibold transition">Ver no Github</a>
                  <a href="/EcoQuiz.zip" download className="px-4 py-1.5 rounded-full bg-neutral-700 hover:bg-neutral-800 text-white text-sm font-semibold transition">Download código</a>
                </div>
              </div>
            </div>   
          </div>
        </section>
        <section id="techstack" className="w-full max-w-7xl mx-auto py-20">
          <h3 className="text-2xl font-bold mb-10 text-left">Tech Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
            {/* Python */}
            <a href="https://www.python.org/" target="_blank" rel="noopener" className="group flex flex-col items-center p-5 bg-neutral-800 rounded-xl shadow hover:scale-105 hover:bg-neutral-700 transition-all duration-200 w-36 h-36">
              <img src="/tech/python.svg" alt="Python" className="w-12 h-12 mb-2 group-hover:brightness-125 transition" />
              <span className="text-base font-medium text-neutral-200 group-hover:text-white">Python</span>
            </a>
            {/* HTML */}
            <a href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener" className="group flex flex-col items-center p-5 bg-neutral-800 rounded-xl shadow hover:scale-105 hover:bg-neutral-700 transition-all duration-200 w-36 h-36">
              <img src="/tech/html.svg" alt="HTML5" className="w-12 h-12 mb-2 group-hover:brightness-125 transition" />
              <span className="text-base font-medium text-neutral-200 group-hover:text-white">HTML5</span>
            </a>
            {/* CSS */}
            <a href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener" className="group flex flex-col items-center p-5 bg-neutral-800 rounded-xl shadow hover:scale-105 hover:bg-neutral-700 transition-all duration-200 w-36 h-36">
              <img src="/tech/css.svg" alt="CSS3" className="w-12 h-12 mb-2 group-hover:brightness-125 transition" />
              <span className="text-base font-medium text-neutral-200 group-hover:text-white">CSS3</span>
            </a>
            {/* JavaScript */}
            <a href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener" className="group flex flex-col items-center p-5 bg-neutral-800 rounded-xl shadow hover:scale-105 hover:bg-neutral-700 transition-all duration-200 w-36 h-36">
              <img src="/tech/javascript.svg" alt="JavaScript" className="w-12 h-12 mb-2 group-hover:brightness-125 transition" />
              <span className="text-base font-medium text-neutral-200 group-hover:text-white">JavaScript</span>
            </a>
            {/* C++ */}
            <a href="https://isocpp.org/" target="_blank" rel="noopener" className="group flex flex-col items-center p-5 bg-neutral-800 rounded-xl shadow hover:scale-105 hover:bg-neutral-700 transition-all duration-200 w-36 h-36">
              <img src="/tech/cpp.svg" alt="C++" className="w-12 h-12 mb-2 group-hover:brightness-125 transition" />
              <span className="text-base font-medium text-neutral-200 group-hover:text-white">C++</span>
            </a>
            {/* SQL */}
            <a href="https://www.w3schools.com/sql/sql_intro.asp" target="_blank" rel="noopener" className="group flex flex-col items-center p-5 bg-neutral-800 rounded-xl shadow hover:scale-105 hover:bg-neutral-700 transition-all duration-200 w-36 h-36">
              <img src="/tech/sql.svg" alt="SQL" className="w-12 h-12 mb-2 group-hover:brightness-125 transition" />
              <span className="text-base font-medium text-neutral-200 group-hover:text-white">SQL</span>
            </a>
            {/* PHP */}
            <a href="https://www.php.net/" target="_blank" rel="noopener" className="group flex flex-col items-center p-5 bg-neutral-800 rounded-xl shadow hover:scale-105 hover:bg-neutral-700 transition-all duration-200 w-36 h-36">
              <img src="/tech/php.svg" alt="PHP" className="w-12 h-12 mb-2 group-hover:brightness-125 transition" />
              <span className="text-base font-medium text-neutral-200 group-hover:text-white">PHP</span>
            </a>
          </div>
        </section>
        <section id="contact" className="w-full max-w-2xl py-20 text-center">
          <h3 className="text-2xl font-bold mb-4">Entre em contato</h3>
          <p className="text-neutral-400 mb-6">
            Tem uma ideia ou quer conversar? Envie um e-mail para{" "}
            <a
              href="mailto:fredericogouveia21@gmail.com"
              className="text-blue-400 hover:underline"
            >
              fredericogouveia21@gmail.com
            </a>
          </p>
          <a
            href="mailto:fredericogouveia21@gmail.com"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition font-semibold shadow-lg text-white"
          >
            Enviar e-mail
          </a>
        </section>
      </main>
    </>
  );
}
