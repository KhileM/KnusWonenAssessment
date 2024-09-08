import Icon from './../assets/arrow.svg';

// ArrowIcon component renders an SVG icon with customizable size and class.
const ArrowIcon = ({ className = '', alt = 'arrow icon' }) => {
  // Render the icon with default size and optional className for additional styling.
  return <img src={Icon} alt={alt} className={`w-6 h-6 ${className}`} />;
};


export default ArrowIcon;

