const Header = () => {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto border-b border-gray-300 py-2 max-lg:hidden">
      <ul className="flex items-center font-semibold gap-8 text-gray-800">
        <li className="text-[14px] relative cursor-pointer group">
          <span className="pb-1 group-hover:text-gray-900">photo service</span>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="text-[14px] relative cursor-pointer group">
          <span className="pb-1 group-hover:text-gray-900">
            tickets & deals
          </span>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="text-[14px] relative cursor-pointer group">
          <span className="pb-1 group-hover:text-gray-900">insurances</span>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="text-[14px] relative cursor-pointer group">
          <span className="pb-1 group-hover:text-gray-900">inspiration</span>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
      </ul>
      <ul className="flex items-center font-semibold gap-8 text-gray-800">
        <li className="text-[14px] relative cursor-pointer group">
          <span className="pb-1 group-hover:text-gray-900">shops</span>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="text-[14px] relative cursor-pointer group">
          <span className="pb-1 group-hover:text-gray-900">customer card</span>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
        <li className="text-[14px] relative cursor-pointer group">
          <span className="pb-1 group-hover:text-gray-900">
            customer service
          </span>
          <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-400 transition-all duration-300 group-hover:w-full"></div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
