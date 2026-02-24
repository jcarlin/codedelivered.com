'use client'

export default function BackgroundImage() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10"
    >
      {/* Mobile background */}
      <img
        src="/projects/desktop-background-mobile.jpg?v=5"
        alt=""
        className="block md:hidden w-full h-full object-cover"
      />
      {/* Desktop background */}
      <img
        src="/projects/desktop-background-desktop.jpg?v=3"
        alt=""
        className="hidden md:block w-full h-full object-cover object-[center_10%]"
      />
    </div>
  )
}
