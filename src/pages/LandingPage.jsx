import waveImage from '../assets/wave.svg';
import orangeTopImage from '../assets/topbobble.svg';
import greenBottomImage from '../assets/green.svg';
import Button from '../components/Button';
import { buttonData } from '../utils/Data.mjs';

// LandingPage component showcasing a hero section with background images and buttons.
const LandingPage = () => {
    return (
        <div className="relative hero mb-8 bg-hero bg-cover bg-no-repeat bg-center h-48 md:h-[300px] lg:h-[450px] xl:h-[560px] lg:mb-16">
            {/* Decorative top image positioned absolutely */}
            <div className='absolute w-10 lg:w-20 xl:w-full'>
                <img src={orangeTopImage} alt="orange-top-image" />
            </div>
            {/* Decorative bottom image positioned absolutely */}
            <div className='absolute right-0 w-14 bottom-0 md:w-16 lg:w-24 xl:w-52'>
                <img src={greenBottomImage} alt="green-bottom-image" />
            </div>
            {/* Main content with title and buttons */}
            <div className="flex relative flex-col h-full justify-end sm:items-center">
                <div className='z-10 sm:w-8/12 lg:w-7/12 xl:w-[912px] pb-2 lg:pb-6'>
                    <div className='sm:text-left'>
                        <h1 className='xl:text-2xl mb-1 sm:mb-1 text-[#39468C] sm:text-white font-medium lg:mb-4'>
                            Waarmee kunnen we je helpen?
                        </h1>
                    </div>
                    <div className="flex flex-col items-center w-full justify-center gap-2 sm:flex-row sm:justify-center lg:gap-4 xl:gap-6">
                        {/* Render buttons from buttonData */}
                        {buttonData.map((item, index) => (
                            <Button key={index} buttonText={item.text} buttonIcon={item.icon} />
                        ))}
                    </div>
                </div>
                {/* Decorative wave image positioned absolutely */}
                <div className='absolute w-3/4 xl:w-3/4 lg:w-9/12 self-center'>
                    <img src={waveImage} alt="wave-image" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;