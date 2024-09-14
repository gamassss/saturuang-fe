import { GeistMono } from "geist/font/mono";
import HeroDot from "../atoms/HeroDot";
import { HeroDotProps } from "@/types/root";

const HeroLeftDotItems: HeroDotProps[] = [
  {
    top: "92px",
    left: "480px",
    size: "16px",
    bgColor: "#ffca00",
  },
  {
    top: "340px",
    left: "-64px",
    size: "8px",
    bgColor: "#ffca00",
  },
  {
    top: "600px",
    left: "540px",
    size: "24px",
    bgColor: "#ff9561",
  },
  {
    top: "640px",
    left: "40px",
    size: "12px",
    bgColor: "#00b7cd",
  },
];

const HeroRightDotItems: HeroDotProps[] = [
  {
    top: "240px",
    left: "640px",
    size: "8px",
    bgColor: "#ffca00",
  },
  {
    top: "630px",
    left: "400px",
    size: "8px",
    bgColor: "#ff5e16",
  },
  {
    top: "520px",
    left: "700px",
    size: "16px",
    bgColor: "#00b7cd",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section
      className={`bg-primary pt-16 md:pt-0 min-h-screen w-full flex flex-wrap ${GeistMono.className}`}
    >
      {/* Headline */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-[#ffe5af] text-2xl font-bold">CHAT APP PLATFORM</h1>
        <p className="text-white text-5xl font-bold text-center md:text-left w-9/12 mb-16">
          SatuRuang: Obrolan Acak di Ruang Virtual
        </p>
        <p className="text-white font-light text-2xl text-center md:text-left w-full md:w-9/12 mb-8">
          Bertemu, Mengobrol, dan Terhubung di SatuRuang
        </p>
        <button className="bg-primary border-white border-2 w-fit py-2 px-4 rounded-lg text-white">
          Mulai Ngobrol Sekarang
        </button>

        {HeroLeftDotItems &&
          HeroLeftDotItems.map((heroDot, index) => (
            <HeroDot
              key={index}
              top={heroDot.top}
              left={heroDot.left}
              size={heroDot.size}
              bgColor={heroDot.bgColor}
            />
          ))}
      </div>

      {/* Vector Hero Section */}
      <div className="relative flex w-full md:w-1/2 items-center justify-center">
        <img src="./chat-1.webp" alt="vector-chat"></img>
        {HeroRightDotItems &&
          HeroRightDotItems.map((heroDot, index) => (
            <HeroDot
              key={index}
              top={heroDot.top}
              left={heroDot.left}
              size={heroDot.size}
              bgColor={heroDot.bgColor}
            />
          ))}
      </div>
    </section>
  );
};

export default HeroSection;
