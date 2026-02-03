import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-2 sm:px-3 bg-transparent">
      <div
        className="
          w-full
          grid
          grid-cols-3
          items-center
          rounded-xl
          px-2
          py-1.5
          sm:px-3
          sm:py-2
          bg-white/10
          backdrop-blur-xs
          border
          border-white/20
          shadow-md
        "
      >
        <div className="flex items-center justify-start">
          <img
            src="https://res.cloudinary.com/ddpdocy8k/image/upload/dpr_auto,f_auto,q_auto:best/v1770139373/IGIT-Conference-2021-removebg-SOLID_COLOR_hfwzdd.png"
            alt="IGIT Logo"
            className="h-7 sm:h-8 md:h-9 w-auto object-contain"
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="hidden md:flex gap-5 lg:gap-7">
            <button className="text-white/90 hover:text-white transition text-sm lg:text-base">
              Home
            </button>
            <button className="text-white/90 hover:text-white transition text-sm lg:text-base">
              About
            </button>
            <button className="text-white/90 hover:text-white transition text-sm lg:text-base">
              Event
            </button>
            <button className="text-white/90 hover:text-white transition text-sm lg:text-base">
              Merch
            </button>
          </div>

          <button
            className="md:hidden text-white text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        <div className="flex items-center justify-end">
          <img
            src="https://res.cloudinary.com/ddpdocy8k/image/upload/dpr_auto,f_auto,q_auto:best/v1770139420/Asset_4_4x_2_ly7wkb.png"
            alt="Horizon Logo"
            className="h-7 sm:h-8 md:h-9 w-auto object-contain"
          />
        </div>
      </div>

      {open && (
        <div
          className="
            mt-2
            rounded-xl
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            shadow-md
            flex
            flex-col
            items-center
            py-3
            gap-3
            md:hidden
          "
        >
          <button className="text-white/90 hover:text-white transition">
            Home
          </button>
          <button className="text-white/90 hover:text-white transition">
            About
          </button>
          <button className="text-white/90 hover:text-white transition">
            Event
          </button>
          <button className="text-white/90 hover:text-white transition">
            Merch
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
