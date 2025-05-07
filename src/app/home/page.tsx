'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#1a1a1a] text-white font-sans flex items-center justify-center px-6 overflow-hidden">
      
      {/* Full Background (Optional) */}
      {/* Uncomment below to use the image as background */}
      {/* 
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/nature-cover.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      */}

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-neutral-100">
            Blvck <br /> Tumbler
          </h1>
          <p className="text-neutral-400 max-w-md">
            Black Lifestyle Lovers. <br />
            Experience full minimal elegance through the iconic Blvck
            collection, including this matte black tumbler.
          </p>
        </div>

        {/* Center Image */}
        <div className="md:w-1/3 relative h-[400px] w-full">
          <Image
            src="/images/nature-cover.jpg"
            alt="Nature Cover"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute -top-8 -right-8 w-16 h-16 border-8 border-orange-500 rounded-full"></div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/6 space-y-4 text-neutral-400">
          <h2 className="text-lg font-semibold text-white">The design.</h2>
          <p>
            A bold minimalist style tumbler made for those who value simplicity.
          </p>
          <div className="text-orange-500 text-2xl">&rarr;</div>
        </div>
      </div>
    </main>
  );
}
