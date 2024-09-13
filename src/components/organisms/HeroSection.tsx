import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary min-h-screen w-full flex">
      {/* Headline */}
      <div className="w-1/2 flex flex-col justify-center">
        <h1 className="text-[#ffe5af] text-2xl font-bold">SatuRuang: Obrolan Acak di Ruang Virtual</h1>
        <p className="text-white text-5xl font-bold w-10/12 mb-16">Bertemu, Mengobrol, dan Terhubung di SatuRuang</p>
        <button className="bg-primary border-white border-2 w-fit py-2 px-4 rounded-lg text-white">Mulai Ngobrol Sekarang</button>
      </div>

      {/* Vector Hero Section */}
      <div className="flex w-1/2 items-center justify-center">
        <img src="./chat-1.webp" alt="vector-chat"></img>
      </div>
    </section>
  );
}

export default HeroSection;