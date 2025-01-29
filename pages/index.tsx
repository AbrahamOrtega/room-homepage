import BottomSection from "@/components/BottomSection";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Slider />
      <BottomSection />
    </div>
  );
}
