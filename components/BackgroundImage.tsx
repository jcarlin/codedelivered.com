'use client'

export default function BackgroundImage() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10"
    >
      {/* Mobile background */}
      <img
        src="/projects/desktop-background-mobile.jpg"
        alt=""
        className="block md:hidden w-full h-full object-cover"
      />
      {/* Desktop background */}
      <img
        src="/projects/desktop-background-desktop.jpg"
        alt=""
        className="hidden md:block w-full h-full object-cover object-[center_10%]"
      />
    </div>
  )
}
