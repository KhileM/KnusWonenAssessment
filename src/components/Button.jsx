// Button component with customizable icon, text, and styling.
const Button = ({ buttonIcon, buttonText, className = '', iconClassName = '' }) => {
  return (
    <button
      // Default styles with optional additional classes for customization.
      className={`flex items-center gap-1 text-sm p-1 rounded-lg bg-white text-[#39468C] ${className}`}
    >
      {buttonIcon && (
        <span>
          {/* Conditionally render the icon with customizable size and classes. */}
          <img src={buttonIcon} alt="button icon" className={`w-4 ${iconClassName}`} />
        </span>
      )}
      {buttonText}
    </button>
  );
};


export default Button;
