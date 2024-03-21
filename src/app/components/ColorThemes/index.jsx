import { colorCombinations } from "../../utils/colors.js";

const ColorThemes = () => {
  return (
    <section className="flex flex-col gap-8">
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
              <div
                key={index}
                className="flex flex-col justify-center items-center p-8 rounded-lg h-56"
                style={{
                  backgroundColor: colors.primary,
                  color: colors.secondary,
                }}
              >
                <h2 className="text-3xl font-bold mb-4 text-center">
                  {colorName}
                </h2>
              </div>
              <div
                key={index}
                className="flex flex-col justify-center items-center p-8 rounded-lg h-56"
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.primary,
                }}
              >
                <h2 className="text-3xl font-bold mb-4 text-center">
                  {colorName}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ColorThemes;
