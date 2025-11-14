import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Visitor Pass Management</h1>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-white/80 max-w-2xl">
          Digitize your lobby with pre-registration, QR-based passes, and secure check-in/out. Modern, fast, and role-based.
        </p>
      </div>
    </div>
  )
}
