import Card from "../components/Card";
import ArrowIcon from "../components/ArrowIcon";
import { CardData } from "../utils/Data.mjs";

// Updates component displaying news cards and a link to view all news.
const Updates = () => {
  return (
    <div className="bg-[#9AA4D9] text-[#39468C] mb-8 flex-col flex items-center lg:mb-16 lg:py-16">
      {/* Section title */}
      <div className="py-3">
        <h2 className="font-overlock text-2xl sm:text-3xl leading-10 mb-6 text-tertiary font-bold lg:text-3xl lg:text-left">
          Laatste nieuws
        </h2>
        {/* Render cards from CardData */}
        <div className="justify-center lg:text-left lg:flex sm:gap-6">
          {CardData.map((item, index) => (
            <div key={index}>
              <Card
                image={item.image}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        {/* Link to view all news with ArrowIcon */}
        <div className="flex justify-center md:justify-end">
          <p className="flex items-center gap-1 text-left text-sm font-medium text-tertiary lg:mt-1 leading-5">
            Bekijk alle nieuwsberichten
            <span>
              <ArrowIcon />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Updates;