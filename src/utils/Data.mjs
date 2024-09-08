import CardImage1 from '../assets/Rectangle6.png'
import CardImage2 from '../assets/Rectangle61.png'
import CardImage3 from '../assets/Rectangle62.png'
import hammerIcon from '../assets/HammerIcon.svg'
import handDepositIcon from '../assets/HandDepositIcon.svg'
import circleChatsIcon from '../assets/ChatsCircle.svg'
import LinkedInIcon from '../assets/LinkedIn.svg' 
import FacebookIcon from '../assets/facebook.svg'

// Array of card data used for news updates
export const CardData = [
    {
        image: CardImage1,
        date: '5 MAART 2024',
        title: 'Telefoonstoring',
        description: 'Update: Telefoonstoring verholpen'
    },
    {
        image: CardImage2,
        date: '17 FEBRUARI 2024',
        title: 'Energiebesparing - Wat doet KnusWonen?',
        description: 'KnusWonen werkt hard aan het energiezuiniger maken van ...'
    },
    {
        image: CardImage3,
        date: '30 JANUARI 2024',
        title: 'Energietoeslag: Heeft u er recht op?',
        description: 'Steeds meer mensen hebben moeite om hun energierekening te ...'
    }
]

// Array of button data for various actions
export const buttonData = [
    {
        icon: hammerIcon,
        text: 'Reparatie melden'
    },
    {
        icon: handDepositIcon,
        text: 'Huur betalen'
    },
    {
        icon: circleChatsIcon,
        text: "Contact"
    }
]

// Array of footer data for contact and social media information
export const FooterData = [
    {
        title: 'Bel of mail ons',
        text: '012 - 345 67 89 klantenservice@knuswonen.nu'
    },
    {
        title: 'Openingstijde',
        text: 'Maandag t/m donderdag van 8:30 tot 16:30 uur. Vrijdag van 8:30 tot 12:00 uur'
    },
    {
        title: 'Kom langs op afspraak',
        text: 'Straatweglaan 123 1234 AB Dorpstad'
    },
    {
        title: 'Volg ons op onze sociale kanalen',
        FacebookIcon, // Added as a key-value pair with key being 'FacebookIcon'
        LinkedInIcon  // Added as a key-value pair with key being 'LinkedInIcon'
    }
]
