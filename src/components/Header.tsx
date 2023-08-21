import { Link, LinkProps } from "react-router-dom";

const links: LinkProps[] = [
  {
    title: "useState",
    to: "/use-state",
  },
  {
    title: "memo",
    to: "/memo",
  },
];

export const Header = () => {
  const items = links.map((link) => (
    <Link to={link.to} key={link.title} className="text-slate-50 text-lg">
      {link.title}
    </Link>
  ));

  return (
    <div className="h-14 bg-gray-800 flex items-center gap-2.5 px-3">
      <div>{items}</div>
      <a target="_blank">GitHub</a>
    </div>
  );
};
