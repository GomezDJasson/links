import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaXTwitter,
  FaThreads,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa6'
import { ArrowUpRight, Mail, ShoppingBag, Sparkles } from 'lucide-react'

const socials = [
  { name: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/nerdybles/', tone: 'instagram' },
  { name: 'Facebook', Icon: FaFacebookF, href: 'https://www.facebook.com/nerdybles', tone: 'facebook' },
  { name: 'TikTok', Icon: FaTiktok, href: 'https://www.tiktok.com/@juliethmar8', tone: 'tiktok' },
  { name: 'X', Icon: FaXTwitter, href: 'https://x.com/nerdybles', tone: 'x' },
  { name: 'YouTube', Icon: FaYoutube, href: 'https://www.youtube.com/@nerdybles', tone: 'youtube' },
  { name: 'Threads', Icon: FaThreads, href: 'https://www.threads.net/@nerdybles', tone: 'threads' },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050510] text-white">
      <div className="scene" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="spark spark-one" />
        <div className="spark spark-two" />
        <div className="spark spark-three" />
        <div className="spark spark-four" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 py-10 sm:px-8">
        <header className="text-center">
          <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-fuchsia-400/70 bg-black/50 shadow-[0_0_55px_rgba(168,85,247,.45)] backdrop-blur-md sm:h-32 sm:w-32">
            <div className="flex h-[88%] w-[88%] items-center justify-center rounded-full border border-cyan-300/40 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20">
              <span className="text-5xl drop-shadow-[0_0_18px_rgba(168,85,247,.9)]">
                <img
                  src="./assets/nerdbot-logo.jpg"
                  alt="Nerdybles"
                  className="h-full w-full rounded-full object-contain"
                />
              </span>
            </div>
          </div>

          <p className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Nerdy<span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">bles</span>
          </p>
          <h1 className="text-xs font-semibold uppercase tracking-[0.42em] text-slate-300 sm:text-sm">Tienda de coleccionables</h1>
          <p className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2 text-sm text-slate-400 sm:text-base">
            <Sparkles size={15} className="text-fuchsia-400" />
            Figuras <span>·</span> Coleccionables <span>·</span> Cultura Pop
          </p>
        </header>

        <section aria-label="Redes sociales" className="relative mx-auto mt-14 w-full max-w-2xl">
          <div className="social-orbit" aria-hidden="true" />
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 sm:gap-10">
            {socials.map(({ name, Icon, href, tone }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir ${name}`}
                className={`social-tile social-${tone} ${name === 'Instagram' ? 'sm:-translate-y-3' : ''} ${name === 'YouTube' ? 'sm:translate-y-3' : ''}`}
              >
                <span className="social-icon"><Icon /></span>
                <span className="mt-3 text-sm font-medium text-slate-200">{name}</span>
                <span className="social-line" />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="shopping-title">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="section-line" />
            <h2 id="shopping-title" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.38em] text-slate-300">
              <ShoppingBag size={16} className="text-fuchsia-400" /> Compras
            </h2>
            <span className="section-line" />
          </div>

          <a
            href="https://stefastore.com/nerdybles"
            target="_blank"
            rel="noreferrer"
            className="shop-card group"
          >
            <span className="shop-art"><ShoppingBag size={42} strokeWidth={1.5} /></span>
            <span className="min-w-0 flex-1">
              <strong className="block text-lg font-bold text-white sm:text-xl">Nuestra Tienda</strong>
              <span className="mt-1 block text-sm text-slate-400">Descubre todo lo que tenemos para ti.</span>
            </span>
            <span className="shop-arrow"><ArrowUpRight size={22} /></span>
          </a>
        </section>

        <section className="mt-12 text-center" aria-labelledby="contact-title">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="section-line max-w-24" />
            <h2 id="contact-title" className="text-lg font-semibold text-slate-200 sm:text-xl">¿Quieres hablar con nosotros?</h2>
            <span className="section-line max-w-24" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a className="contact-pill contact-whatsapp" href="https://api.whatsapp.com/send?phone=+573156679984" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a className="contact-pill contact-telegram" href="https://t.me/nerdybles" target="_blank" rel="noreferrer">
              <FaTelegram /> Telegram
            </a>
          </div>
          <a className="contact-mail" href="mailto:nerdybles@gmail.com">
            <Mail size={17} /> Contáctanos
          </a>
        </section>

        <footer className="mt-auto pt-16 text-center text-xs text-slate-500">
          <div className="mx-auto mb-5 h-px max-w-sm bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
          <p>© {new Date().getFullYear()} Nerdybles. Todos los derechos reservados.</p>
          <p className="mt-1">Diseñado por <a className="text-slate-300 underline decoration-violet-500/70 underline-offset-2" href="https://gomezdjasson.github.io/portafolio/">Gomez D. Jasson</a></p>
        </footer>
      </div>
    </main>
  )
}

export default App
