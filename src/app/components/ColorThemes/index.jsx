import { colorCombinations } from "../../utils/colors.js";

const ColorThemes = () => {
  return (
    <section className="flex flex-col gap-8 mx-auto">
      <h1 className="text-5xl font-bold text-center">Color Themes</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {colorCombinations.map((colorCombination, index) => {
          const colorName = Object.keys(colorCombination)[0];
          const colors = Object.values(colorCombination)[0];
          return (
            <div
              className="flex flex-col gap-4 border-2 border-slate-400 p-3 rounded-lg"
              key={index}
            >
              <span className="text-lg font-bold text-center">{colorName}</span>
              <div
                className="flex items-center justify-center p-6 rounded-lg cursor-pointer"
                style={{ backgroundColor: colors.primary }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: colors.secondary,
                  }}
                >
                  Rezervasyon Yap
                </span>
              </div>
              <div
                className="flex items-center justify-center p-6 rounded-lg cursor-pointer"
                style={{ backgroundColor: colors.secondary }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    color: colors.primary,
                  }}
                >
                  Rezervasyon Yap
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ColorThemes;
