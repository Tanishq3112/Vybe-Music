import { motion } from "framer-motion";
import {
  Home,
  Search,
  Library,
  ListMusic,
  Sparkles,
  Settings,
  User,
  Play,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#08070b] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-purple-900/20 blur-[130px]" />

        <div className="absolute right-[-100px] top-[20%] h-[400px] w-[400px] rounded-full bg-pink-900/15 blur-[130px]" />
      </div>

      <div className="relative flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-white/[0.025] p-6 backdrop-blur-2xl md:block">

          <div className="mb-12">
            <h1 className="text-2xl font-bold tracking-tight">
              VYBE<span className="text-pink-400">.</span>
            </h1>

            <p className="mt-1 text-xs text-white/35">
              Your sound. Your mood.
            </p>
          </div>

          <nav className="space-y-2">

            <NavItem
              icon={<Home size={19} />}
              label="Home"
              active
            />

            <NavItem
              icon={<Search size={19} />}
              label="Discover"
            />

            <NavItem
              icon={<Library size={19} />}
              label="Library"
            />

            <NavItem
              icon={<ListMusic size={19} />}
              label="Playlists"
            />

            <NavItem
              icon={<Sparkles size={19} />}
              label="AI Studio"
            />

          </nav>

          <div className="absolute bottom-6 left-6 right-6 space-y-2">

            <NavItem
              icon={<Settings size={18} />}
              label="Settings"
            />

            <NavItem
              icon={<User size={18} />}
              label="Profile"
            />

          </div>

        </aside>

        {/* MAIN CONTENT */}
        <main className="min-w-0 flex-1">

          {/* HEADER */}
          <header className="flex items-center justify-between px-6 py-7 md:px-10">

            <div>
              <p className="text-sm text-white/35">
                Your personal music space
              </p>

              <h2 className="mt-1 text-3xl font-semibold tracking-tight">
                Good evening, Tanishq
              </h2>
            </div>

            <button className="rounded-full border border-white/10 bg-white/[0.05] p-3 backdrop-blur-xl transition hover:bg-white/10">
              <User size={20} />
            </button>

          </header>

          {/* CONTENT */}
          <div className="space-y-12 px-6 pb-32 md:px-10">

            {/* AI HERO */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-900/30 via-white/[0.04] to-pink-900/20 p-8 backdrop-blur-2xl md:p-12"
            >

              <div className="relative z-10 max-w-2xl">

                <div className="mb-5 flex items-center gap-2 text-sm font-medium text-pink-300">
                  <Sparkles size={16} />
                  AI MUSIC STUDIO
                </div>

                <h3 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Tell us what you
                  <span className="text-white/35">
                    {" "}want to feel.
                  </span>
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/45 md:text-base">
                  Create personalized playlists using your mood,
                  activity, genre or simply describe what you're looking for.
                </p>

                <button className="mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.03]">
                  <Sparkles size={17} />
                  Create with AI
                </button>

              </div>

              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-pink-500/20 blur-[110px]" />

            </motion.section>

            {/* RECENTLY PLAYED */}
            <section>

              <SectionTitle title="Recently Played" />

              <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">

                {[
                  "Midnight Drive",
                  "After Hours",
                  "Lost in Tokyo",
                  "Late Night",
                  "Dreamscape",
                ].map((song, index) => (

                  <motion.div
                    key={song}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >

                    <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">

                      <div
                        className={`absolute inset-0 ${
                          index % 2 === 0
                            ? "bg-gradient-to-br from-purple-500/40 to-pink-900/60"
                            : "bg-gradient-to-br from-pink-500/30 to-purple-950/70"
                        }`}
                      />

                      <button className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-xl transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <Play size={17} fill="currentColor" />
                      </button>

                    </div>

                    <h4 className="mt-3 truncate text-sm font-medium">
                      {song}
                    </h4>

                    <p className="mt-1 text-xs text-white/35">
                      VYBE Sessions
                    </p>

                  </motion.div>

                ))}

              </div>

            </section>

            {/* MOOD */}
            <section>

              <SectionTitle title="What's your mood?" />

              <div className="mt-5 flex gap-3 overflow-x-auto pb-2">

                {[
                  "Focus",
                  "Chill",
                  "Workout",
                  "Romantic",
                  "Happy",
                  "Late Night",
                ].map((mood) => (

                  <button
                    key={mood}
                    className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-white/65 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    {mood}
                  </button>

                ))}

              </div>

            </section>

          </div>

        </main>

      </div>

      {/* GLOBAL MUSIC PLAYER */}
      <div className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-white/10 bg-[#151018]/85 p-3 shadow-2xl backdrop-blur-2xl md:left-72">

        <div className="flex items-center justify-between">

          <div className="flex min-w-0 items-center gap-3">

            <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500" />

            <div className="hidden min-w-0 sm:block">

              <p className="truncate text-sm font-medium">
                Nothing playing
              </p>

              <p className="text-xs text-white/35">
                Choose a song to begin
              </p>

            </div>

          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
            <Play size={18} fill="currentColor" />
          </button>

        </div>

      </div>

    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
        active
          ? "bg-white/10 text-white"
          : "text-white/40 hover:bg-white/[0.05] hover:text-white"
      }`}
    >
      {icon}

      {label}
    </button>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-between">

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <button className="text-xs text-white/35 transition hover:text-white">
        See all
      </button>

    </div>
  );
}

export default App;