export default function FatedWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-700/30 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-96 h-96 bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
          <img
  src="/Perfis_FATED_1.png"
  alt="Fated Logo"
  className="w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
/>
            <h1 className="text-2xl font-bold tracking-wider">FATED TESTE</h1>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
            <a href="#sobre" className="hover:text-purple-400 transition">Sobre</a>
            <a href="#equipe" className="hover:text-purple-400 transition">Equipe</a>
            <a href="#jogos" className="hover:text-purple-400 transition">Jogos</a>
            <a href="#recrutamento" className="hover:text-purple-400 transition">Entrar</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl animate-in fade-in zoom-in duration-700">
          <div className="inline-block px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm mb-6">
            Organização Competitiva de Games
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
            Welcome to <span className="text-purple-500">Fated</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Uma organização focada em competitividade, comunidade e evolução nos jogos online.
            Atualmente no Valorant, futuramente expandindo para League of Legends e outros cenários.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">

  <a
    href="https://www.instagram.com/fatedesportsbr/"
    target="_blank"
    className="px-8 py-4 rounded-2xl border border-purple-500/40 hover:bg-purple-500/10 transition font-semibold"
  >
    Instagram
  </a>

  <a
    href="#recrutamento"
    className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition font-semibold shadow-xl shadow-purple-700/30"
  >
    Entrar na Fated
  </a>

  <a
    href="https://discord.gg/7aAqb797qk"
    target="_blank"
    className="px-8 py-4 rounded-2xl border border-purple-500/40 hover:bg-purple-500/10 transition font-semibold"
  >
    Discord
  </a>

</div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Sobre a <span className="text-purple-500">Fated</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              A Fated nasceu com o objetivo de criar uma comunidade competitiva forte,
              organizada e unida dentro dos jogos online.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Nosso foco atual está no Valorant, buscando evolução constante,
              campeonatos, criação de conteúdo e desenvolvimento de novos talentos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-700/20 to-black border border-purple-500/20 rounded-3xl p-8 shadow-2xl shadow-purple-900/20">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-5xl font-black text-purple-400">2026</h3>
                <p className="text-gray-400 mt-2">Ano de fundação</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-purple-400">2+</h3>
                <p className="text-gray-400 mt-2">Jogos planejados</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-purple-400">24/7</h3>
                <p className="text-gray-400 mt-2">Comunidade ativa</p>
              </div>

              <div>
                <h3 className="text-5xl font-black text-purple-400">∞</h3>
                <p className="text-gray-400 mt-2">Evolução constante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jogos */}
      <section id="jogos" className="py-28 bg-zinc-950 border-y border-purple-500/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Jogos da <span className="text-purple-500">Organização</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-purple-500/20 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl shadow-purple-900/10">
              <h3 className="text-3xl font-bold mb-4">Valorant</h3>
              <p className="text-gray-400 leading-relaxed">
                Competitividade, estratégia e evolução constante no cenário tático.
              </p>
            </div>

            <div className="bg-black border border-purple-500/20 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl shadow-purple-900/10">
              <h3 className="text-3xl font-bold mb-4">League of Legends</h3>
              <p className="text-gray-400 leading-relaxed">
                Expansão futura para o cenário MOBA competitivo.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Equipe */}
<section id="equipe" className="max-w-6xl mx-auto px-6 py-28">
  <h2 className="text-4xl font-bold text-center mb-16">
    Nossa <span className="text-purple-500">Equipe</span>
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* CEO */}
    <div className="bg-zinc-950 border border-purple-500/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

      <img
        src="/ceo.png"
        alt="CEO"
        className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-purple-500 shadow-lg shadow-purple-700/30"
      />

      <h3 className="text-2xl font-bold">João Dias</h3>
      <p className="text-purple-400 mt-2">CEO</p>
    </div>

    {/* Capitão */}
    <div className="bg-zinc-950 border border-purple-500/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

      <img
        src="/capitao.png"
        alt="Capitão"
        className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-purple-500 shadow-lg shadow-purple-700/30"
      />

      <h3 className="text-2xl font-bold">Arthur Santos</h3>
      <p className="text-purple-400 mt-2">Capitão</p>
    </div>

    {/* Social Media */}
    <div className="bg-zinc-950 border border-purple-500/20 rounded-3xl p-8 text-center hover:scale-105 transition duration-300">

      <img
        src="/social.png"
        alt="Social Media"
        className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-2 border-purple-500 shadow-lg shadow-purple-700/30"
      />

      <h3 className="text-2xl font-bold">Carol Drummond</h3>
      <p className="text-purple-400 mt-2">Social Media</p>
    </div>

  </div>
</section>
      {/* Recrutamento */}
      <section id="recrutamento" className="py-28 bg-zinc-950 border-t border-purple-500/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Faça Parte da <span className="text-purple-500">Fated</span>
          </h2>

          <p className="text-gray-400 mb-10">
            Procuramos jogadores comprometidos, competitivos e focados em evolução.
          </p>

          <form
  action="https://formspree.io/f/xpqbnzlg"
  method="POST"
  className="bg-black border border-purple-500/20 rounded-3xl p-8 space-y-5 text-left shadow-2xl shadow-purple-900/10"
>
            <input
            name="nick"
              type="text"
              placeholder="Seu nick"
              className="w-full bg-zinc-900 border border-purple-500/20 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
            />

            <input
            name="elo"
              type="text"
              placeholder="Seu elo"
              className="w-full bg-zinc-900 border border-purple-500/20 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
            />

            <input
            name="contato"
              type="text"
              placeholder="Discord ou Instagram"
              className="w-full bg-zinc-900 border border-purple-500/20 rounded-xl px-4 py-4 outline-none focus:border-purple-500"
            />

            <button className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 transition font-bold shadow-xl shadow-purple-700/30">
              Enviar inscrição
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 py-10 text-center text-gray-500 text-sm">
        © 2026 Fated Organization — Todos os direitos reservados.
      </footer>
    </div>
  )
}
