import ColorThemes from "./components/ColorThemes";
import HeroVideo from "./components/HeroVideo";
import MapBox from "./components/MapBox";
import Maps from "./components/Maps";
import TemplateOne from "./components/Templates/TemplateOne";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 pt-8 md:container md:mx-auto bg-slate-50">
      <HeroVideo videoUrl="/videos/hero-1.mp4" />
      <MapBox
        title="Gold Twins Relax Hotel"
        position={{ lat: 36.501613, lng: 32.093304 }}
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        color="#b91c1c"
      />
    </main>
  );
}
