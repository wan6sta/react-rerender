import { useReducer, useMemo, memo, ReactNode } from "react";

const ComponentWithChildren = memo(({ children }: { children: ReactNode }) => {
  console.log("render ComponentWithChildren");

  return <div>{children}</div>;
});

export const ExamplePage5 = () => {
  const [, forceUpdate] = useReducer((i) => i + 1, 0);

  console.log("render ExamplePage5");

  // const div = useMemo(() => <div>123</div>, []);

  return (
    <div className="text-2xl w-100 flex flex-col items-center pt-16">
      <h1 className="text-3xl mb-16">Memo, useMemo, useCallback</h1>
      <div className="flex gap-10 justify-center items-center">
        <button className="bg-red-600 text-gray-50  p-3" onClick={forceUpdate}>
          Обновить
        </button>
        <ComponentWithChildren>
          <div>123</div>
        </ComponentWithChildren>
      </div>
    </div>
  );
};
