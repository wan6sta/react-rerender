import { Link, LinkProps } from "react-router-dom";

const links: LinkProps[] = [
  {
    title: "Пример 1",
    to: "/example1",
  },
  {
    title: "Пример 2",
    to: "/example2",
  },
  {
    title: "Пример 3",
    to: "/example3",
  },
  {
    title: "Пример 4",
    to: "/example4",
  },
  {
    title: "Пример 5",
    to: "/example5",
  },
  {
    title: "useRef",
    to: "/use-ref",
  },
  {
    title: "ContextPage",
    to: "/context",
  },
  {
    title: "ReduxPage",
    to: "/redux",
  },
  {
    title: "Ссылки",
    to: "/links",
  },
];

export const Header = () => {
  const items = links.map((link) => (
    <Link to={link.to} key={link.title} className="text-slate-50 text-lg">
      {link.title}
    </Link>
  ));

  return (
    <div className="flex items-center justify-around h-14 bg-gray-800 px-3">
      <div className="flex items-center gap-2.5">{items}</div>
      <a
        className="text-slate-50 text-lg"
        target="_blank"
        href="https://github.com/wan6sta/react-rerender"
      >
        GitHub
      </a>
    </div>
  );
};
