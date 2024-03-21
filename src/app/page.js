import ColorThemes from "./components/ColorThemes";
import TemplateOne from "./components/Templates/TemplateOne";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 pt-8 md:container md:mx-auto bg-slate-50">
      {/* <TemplateOne /> */}
      <ColorThemes />
    </main>
  );
}
