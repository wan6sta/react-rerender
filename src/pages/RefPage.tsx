import { useState, useCallback, useRef, useLayoutEffect, memo } from "react";

export const useLatest = <T,>(value: T) => {
  const ref = useRef(value);

  ref.current = value;

  // useLayoutEffect(() => {
  //   ref.current = value;
  // }, [value]);

  return ref;
};

const Button = memo(({ handle }: { handle: () => void }) => {
  console.log("render btn");

  return (
    <button className="bg-lime-500 p-3 text-gray-50" onClick={handle}>
      Handle
    </button>
  );
});

export const RefPage = () => {
  const [value, setValue] = useState("");
  const valueRef = useLatest(value);

  console.log("render RefPage");

  const handle = useCallback(() => {
    console.log(valueRef.current);
  }, []);

  return (
    <div className="text-2xl w-100 flex flex-col items-center pt-16">
      <h1 className="text-3xl mb-16">useRef</h1>
      <div className="flex gap-10 justify-center items-center">
        <input
          className="outline-slate-800 bg-slate-700 text-gray-50 p-3"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <Button handle={handle} />
      </div>
    </div>
  );
};
