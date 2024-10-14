import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  list: { name: string; route: string }[];
}
const FooterLinks: FC<Props> = ({ name, list }) => {
  return (
    <div>
      <p className="text-white">{name}</p>
      <ul className="grid gap-2 mt-3">
        {list.map((item) => (
          <li>
            <Link to={item.route} className="text-[#848181]">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
