import Notion from "./components/Notion";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl flex flex-col items-center mx-auto p-8 gap-8">
      <Timer />
      <Notion />
      <h1 className="text-3xl font-bold mb-6">
        Test des coulergeeurs Catppuccin
      </h1>

      {/* Texte avec couleurs Catppuccin */}
      <div className="space-y-2">
        <p className="text-red">Texte en rouge (Red)</p>
        <p className="text-ctp-blue">Texte en bleu (Blue)</p>
        <p className="text-ctp-green">Texte en vert (Green)</p>
        <p className="text-ctp-pink">Texte en rose (Pink)</p>
        <p className="text-ctp-mauve">Texte en mauve (Mauve)</p>
        <p className="text-ctp-teal">Texte en turquoise (Teal)</p>
      </div>

      {/* Arrière-plans avec couleurs Catppuccin */}
      <div className="mt-6 space-y-2">
        <div className="bg-ctp-red p-2 text-white">
          Arrière-plan rouge (Red)
        </div>
        <div className="bg-ctp-blue p-2 text-white">
          Arrière-plan bleu (Blue)
        </div>
        <div className="bg-ctp-green p-2 text-white">
          Arrière-plan vert (Green)
        </div>
        <div className="bg-ctp-pink p-2 text-white">
          Arrière-plan rose (Pink)
        </div>
        <div className="bg-ctp-mauve p-2 text-white">
          Arrière-plan mauve (Mauve)
        </div>
        <div className="bg-ctp-teal p-2 text-white">
          Arrière-plan turquoise (Teal)
        </div>
      </div>

      {/* Test des surfaces (base, mantle, crust) */}
      <div className="mt-6 space-y-2">
        <div className="bg-ctp-base p-2">Surface Base</div>
        <div className="bg-ctp-mantle p-2">Surface Mantle</div>
        <div className="bg-ctp-crust p-2">Surface Crust</div>
      </div>
    </div>
  );
}
