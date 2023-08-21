export const ExamplePage1 = () => {
  let i = 0;

  const increment = () => {
    i++;
    console.log(i);
  };

  return (
    <div className="text-2xl w-100 flex justify-center h-screen items-center">
      <div className="flex gap-10">
        <button onClick={increment}>+</button>
        {i}
      </div>
    </div>
  );
};
