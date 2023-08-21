import { useState } from "react";

const StaticCounter = () => {
  console.log("render StaticCounter");

  return <div>Static</div>;
};

const Counter1 = (props: { value: number }) => {
  console.log("render Counter1");

  return props.value;
};

const Counter2 = (props: { value: number }) => {
  console.log("render Counter2");

  return props.value;
};

export const ExamplePage2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = () => {
    setCount1((prev) => prev + 1);
  };

  const increment2 = () => {
    setCount2((prev) => prev + 1);
  };

  console.log("render ExamplePage2");

  return (
    <div className="text-2xl w-100 flex flex-col items-center pt-16">
      <h1 className="text-3xl mb-16">Состояние, Родитель, Props</h1>
      <div className="flex gap-10 justify-center items-center">
        <div>
          <button onClick={increment1}>+</button>
          <Counter1 value={count1} />
        </div>
        <div>
          <button onClick={increment2}>+</button>
          <Counter2 value={count2} />
        </div>
        <StaticCounter />
      </div>
    </div>
  );
};
