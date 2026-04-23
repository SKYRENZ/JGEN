const ministries = [
  {
    title: 'Spiritual Ministries',
    image: '/src/assets/ministries1.png'
  },
  {
    title: 'Creative & Media Ministries',
    image: '/src/assets/ministtries2.png'
  },
  {
    title: 'Service Ministries',
    image: '/src/assets/ministries3.png'
  },
  {
    title: 'Leadership & Development',
    image: '/src/assets/ministries4.png'
  }
]

function MinistrySection() {
  return (
    <section id="ministries" className="w-full h-screen relative overflow-hidden bg-black/20">
      {/* 4 Image Background - No Gaps */}
      <div className="flex h-full">
        {ministries.map((ministry) => (
          <div 
            key={ministry.title}
            className="w-1/4 flex-shrink-0 relative group hover:scale-105 hover:brightness-110 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
            style={{
              backgroundImage: `url(${ministry.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:bg-black/20 transition-all duration-300 ease-in-out" />
            
          
            <div className="absolute inset-0 p-6 md:p-8 text-center z-20 flex flex-col items-center justify-end pb-24 md:pb-32 lg:pb-40 space-y-4">

              <h4 className="text-white text-base md:text-lg lg:text-xl xl:text-2xl font-display uppercase tracking-wide drop-shadow-2xl font-bold leading-tight">
                {ministry.title}
              </h4>
              
              
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-4 md:px-6 py-2 rounded-full border border-white/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-xs">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="absolute top-40 md:top-44 lg:top-48 left-1/2 transform -translate-x-1/2 text-center z-10 max-w-2xl px-4 py-8 pt-12">
        <p className="text-[var(--accent)] text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 inline-block bg-black/40 px-6 py-2 rounded-full backdrop-blur-sm shadow-lg">
          OUR MINISTRIES
        </p>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] leading-tight mb-6 mx-2">
          How We Serve
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary-mid)] to-[var(--accent)] mx-auto mb-6 shadow-md"></div>
        <p className="text-lg md:text-xl text-white/90 drop-shadow-lg max-w-lg mx-auto leading-relaxed bg-black/30 px-8 py-4 rounded-2xl backdrop-blur-sm">
          JGen Youth operates through dedicated ministry teams serving different aspects of our mission.
        </p>
      </div>
    </section>
  )
}

export default MinistrySection

