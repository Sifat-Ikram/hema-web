import logo from "../assets/logo/logo.svg";
import nothing from "../assets/logo/nix-18.webp";
import shop from "../assets/logo/secured-shopping.webp";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto my-16 md:my-24 lg:my-32">
      <div className="border-y-[1px] py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-14">
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="logo" className="h-16 w-16 md:h-20 md:w-20" />
        </div>
        <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-0">
          <li className="border-r-[2px] px-[10px] md:px-[14px] text-gray-600 text-xs md:text-sm font-semibold">
            privacy statement
          </li>
          <li className="border-r-[2px] px-[10px] md:px-[14px] text-gray-600 text-xs md:text-sm font-semibold">
            disclaimer
          </li>
          <li className="border-r-[2px] px-[10px] md:px-[14px] text-gray-600 text-xs md:text-sm font-semibold">
            security
          </li>
          <li className="border-r-[2px] px-[10px] md:px-[14px] text-gray-600 text-xs md:text-sm font-semibold">
            copyright
          </li>
          <li className="border-r-[2px] px-[10px] md:px-[14px] text-gray-600 text-xs md:text-sm font-semibold">
            general terms and conditions
          </li>
          <li className="border-r-[2px] px-[10px] md:px-[14px] text-gray-600 text-xs md:text-sm font-semibold">
            cookies
          </li>
          <li className="border-r-[2px] px-[10px] md:px-[14px] text-gray-600 text-xs md:text-sm font-semibold flex items-center gap-2">
            nothing 18 <img src={nothing} className="h-3 md:h-4" />
          </li>
          <li className="flex items-center text-gray-600 pl-[10px] md:pl-[14px] text-xs md:text-sm font-semibold gap-2">
            home shopping guarantee{" "}
            <img src={shop} className="h-4 md:h-5 w-4 md:w-5" />
          </li>
        </ul>
      </div>
      <div className="text-center py-6 md:py-10">
        <p className="text-xs md:text-sm">
          HEMA BV, NDSM-straat 10,1033 SB Amsterdam <br /> Chamber of Commerce
          number: 34215639 <br /> IBAN: HEMA NL67INGB0651607663 <br /> VAT
          identification number: NL814217412B01 <br /> Customer service email
          address: hemaklantenservice@hema.nl
        </p>
      </div>
    </div>
  );
};

export default Footer;
