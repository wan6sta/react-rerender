import { useReducer, useState, memo, useCallback } from "react";

interface ColorsProps {
  colors: [string, string];
  info: {
    title: string;
  };
  updateColors: () => void;
}

const Colors = memo(({ colors, updateColors, info }: ColorsProps) => {
  const [color1, color2] = colors;

  console.log("render Colors");

  return (
    <div>
      {info.title}
      <div
        onClick={updateColors}
        className="h-16 w-16"
        style={{ background: color1 }}
      ></div>
      <div
        onClick={updateColors}
        className="h-16 w-16"
        style={{ background: color2 }}
      ></div>
    </div>
  );
});

export const ExamplePage3 = () => {
  const [, forceUpdate] = useReducer((i) => i + 1, 0);
  const [colors, setColors] = useState<["red", "yellow"]>(() => [
    "red",
    "yellow",
  ]);

  const updateColors = () => {
    const newColors =
      colors[0] === "red" ? ["yellow", "red"] : ["red", "yellow"];

    setColors(newColors);
  };

  const info = {
    title: "Мои квадратики",
  };

  console.log("render ExamplePage3");

  return (
    <div className="text-2xl w-100 flex flex-col items-center pt-16">
      <h1 className="text-3xl mb-16">Memo, useMemo, useCallback</h1>
      <div className="flex gap-10 justify-center items-center">
        <button className="bg-red-600 text-gray-50  p-3" onClick={forceUpdate}>
          Обновить
        </button>

        <div className="flex flex-col">
          <Colors colors={colors} updateColors={updateColors} info={info} />
        </div>
      </div>
    </div>
  );
};
