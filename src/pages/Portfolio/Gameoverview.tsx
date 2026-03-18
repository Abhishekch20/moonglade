

export default function Gameoverview() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden px-6 py-28">
     
      <div className="relative max-w-7xl mx-auto">
        {/* TITLE */}
        <h1 className="font-display tracking-wide text-5xl lg:text-6xl sm:text-4xl md:text-5xl mb-16">
          HEAVENLY DRAGONS
        </h1>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start ">
          {/* OVERVIEW CARD */}
          <div className="lg:col-span-2 ">
           <div className="
                panel-cut
                p-8 sm:p-10 
                bg-stone-950
                bg-gradient-to-br from-white/10 via-transparent to-transparent

                border border-purple-900
                lg:min-h-[380px]
              ">

              <h2 className="text-3xl tracking-widest mb-6">OVERVIEW</h2>

              <p className="text-gray-300 leading-relaxed lg:text-2xl sm:text-base">
                This is a sample placeholder description used to represent
                content in a game overview section. It describes a fantasy
                themed slot set in a magical environment with visual elements,
                characters, and animations. The layout, effects, bonus flow,
                and UI elements mentioned here are only for demonstration
                purposes and help visualize how real content will appear once
                finalized.
              </p>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="space-y-8">
            <h3 className="text-slate-400 tracking-widest text-lg">
              GAME TECH STACK
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {["Adobe Photoshop", "Procreate", "Midjourney", "GPT", "Spine"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="border border-purple-600 text-center py-3 text-sm tracking-wide  hover:bg-purple-600/10 transition"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CUT CORNER STYLE */}
      
    </section>
  );
}
