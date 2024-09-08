import ArrowIcon from './ArrowIcon';

// Card component that displays an image, date, title, description, and a button with an icon.
const Card = ({ image, date, title, description }) => {
  return (
    <div className="relative mb-5 bg-white rounded-xl max-h-[336px] max-w-72 shadow-md">
      {/* Display the card image with rounded top corners */}
      <img src={image} alt="card" className="w-full h-auto rounded-t-xl" />
      <div className="flex flex-col p-3 h-[180px]">
        {/* Display the date with custom styling */}
        <p className="font-poppins text-[#999999] font-semibold text-sm mb-2">{date}</p>
        {/* Display the card title */}
        <h3 className="font-bold text-xl leading-6 text-tertiary font-overlock mb-2">{title}</h3>
        {/* Display the card description with overflow handling */}
        <p className="text-tertiary overflow-hidden text-sm mb-3">{description}</p>
        <div className="flex items-center justify-end p-3">
          {/* Button with text and ArrowIcon component */}
          <button className="flex items-center gap-[6px] text-tertiary text-sm font-medium font-poppins">
            Lees meer <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
