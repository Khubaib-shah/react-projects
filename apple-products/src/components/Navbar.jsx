import { navBottomLinks, navItems } from "../data";

const Navbar = ({ activePage, handleNavPage }) => {
  return (
    <div className="2xl:w-80 xl:w-52 w-44 h-full bg-[#f8f8f8] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0">
      <a
        href="/"
        className="2xl:text-2xl xl:text-xl font-light text-red-600 mb-14 tracking-wider"
      >
        Apple Products
      </a>
      <div className="flex flex-col flex-grow ">
        {navItems.map((item, index) => (
          <a
            href="#"
            key={index}
            className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer"
            onClick={() => handleNavPage(index)}
          >
            <i className={`text-lg text-pink-400 ${item.icon}`} />
            <span className="text-sm text-gray-500 mr-auto mx-2.5 tracking-wider">
              {item.label}
            </span>
            <i
              className={`text-lg text-yellow-400 ${
                activePage === index ? item.activeIcon : item.inactiveIcon
              }`}
            />
          </a>
        ))}
      </div>
      <div className="flex items-center justify-between pr-6 pb-2">
        {navBottomLinks.map((bottomItem) => (
          <a href={bottomItem.Link} target="_blank">
            <i className={`${bottomItem.icon} text-2xl text-red-600`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
