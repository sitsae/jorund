import { NavLink } from "react-router";
import logo from "../content/media/ChatGPT Logo design Jan 12 2026.png";
import forsidebilde from "../content/media/forsidebilde.jpeg";

export default function Velkommen() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen grid md:grid-cols-2 items-center overflow-hidden">
        {/* Left - Centered Logo */}
        <div className="flex items-center justify-center">
          <img src={logo} alt="JKM Logo" className="w-64 md:w-96 h-auto" />
        </div>

        {/* Right - Full-height Image */}
        <div className="relative h-full">
          <img
            src={forsidebilde}
            alt="Forsidebilde"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-6">Om Oss</h2>
            <p className="text-xl leading-relaxed">
              På denne nettsiden får du god og tydelig informasjon om Jørund
              Knudsen Midtgarden.
            </p>
            <p className="text-xl leading-relaxed">
              Gjennom bilder og tekst vil du kunne trykke deg frem til hvem
              Jørund er og hvorfor han passer perfekt i Stine Sofie Stiftelsen.
            </p>
            <p className="text-xl leading-relaxed">
              La nysgjerrigheten våkne og ta et dykk inn i Jørunds liv.
            </p>
          </div>

          {/* Right - Quote Section */}
          <div className="flex items-center justify-center">
            <blockquote className="text-2xl md:text-2xl lg:text-4xl font-serif italic text-center leading-relaxed">
              "For at hjelpetilbud i Norge skal fungere, trenger vi god
              kommunikasjon og samarbeid på tvers av sektorer og at vi alle ser
              helheten"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 flex justify-center">
        <NavLink to="/innhold" className="hover:cursor-pointer">
          <button className="bg-green-700 hover:cursor-pointer hover:bg-green-800 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl ">
            Bli bedre kjent med meg
          </button>
        </NavLink>
      </section>
    </div>
  );
}
