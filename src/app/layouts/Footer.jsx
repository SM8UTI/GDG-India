import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { footerLinks, socialMediaLinks } from "../../data/Links";

const Footer = () => {
  return (
    <div className="py-12">
      <Wrapper>
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-3 gap-4">
            {socialMediaLinks.map((item, index) => (
              <Link
                to={item.url}
                key={index}
                className={`flex items-center justify-center gap-2 border-2 border-black py-6 font-primary text-base rounded-full shadow-[0px_10px_0px_0px_#000000]  first:shadow-[-10px_10px_0px_0px_#000000] last:shadow-[10px_10px_0px_0px_#000000] bg-white`}
              >
                <div className="text-lg">{item.icon}</div>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-row items-center justify-between gap-8 border-2 border-black shadow-[-10px_10px_0px_0px_#000000] py-9 px-12 rounded-full bg-white">
            <div className="flex flex-row items-center gap-2 font-primary text-base text-text">
              <img
                src="/assets/logo.svg"
                alt="Google Developers Group India"
                className="size-[25px] object-contain"
              />
              <span>Google Developers Group India</span>
            </div>
            <div className="flex flex-row items-center gap-12">
              <span>{new Date().getFullYear()}</span>
              <div className="flex flex-row items-center gap-12">
                {footerLinks.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="text-base font-primary text-text border-b-2 border-black pb-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
