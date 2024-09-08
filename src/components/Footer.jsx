import { FooterData } from '../utils/Data.mjs';

// Footer component displaying dynamic footer data and links.
const Footer = () => {
  return (
    <>
      {/* Main footer section with dynamic content mapped from FooterData. */}
      <div className="flex flex-col items-center gap-6 py-5 bg-[#E5E5E5] text-[#1E1E1E] lg:flex-row lg:justify-center lg:py-16 lg:px-14 xl:px-36">
        {FooterData.map((item, index) => (
          // Each item displays a title, text, and optional social media icons.
          <div key={index} className="w-3/4">
            <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
            <p>{item.text}</p>
            <div className="flex gap-3">
              {item.FacebookIcon && <img src={item.FacebookIcon} alt="Facebook Icon" />}
              {item.LinkedInIcon && <img src={item.LinkedInIcon} alt="LinkedIn Icon" />}
            </div>
          </div>
        ))}
      </div>

      {/* Secondary footer with links and copyright notice. */}
      <div className="flex flex-col items-center py-2 bg-white lg:flex-row lg:justify-between lg:px-36">
        <div className="flex gap-2 underline lg:gap-6">
          <a href="#">Privacy</a>
          <a href="#">Cookieverklaring</a>
          <a href="#">Disclaimer</a>
        </div>
        <div>© KnusWonen 2024</div>
      </div>
    </>
  );
};


export default Footer;
