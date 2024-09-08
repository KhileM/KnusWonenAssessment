import user from '../assets/user.svg';

// Modal component that displays when isOpen is true.
const Modal = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="fixed flex flex-col w-full h-full top-12 right-0 z-20 bg-white text-[#39468C] px-8 gap-6">
        {/* User icon at the top of the modal */}
        <img className="w-10 mb-2" src={user} alt="user icon" />
        {/* Navigation links within the modal */}
        <ul className="flex flex-col gap-14 ml-3 mb-2">
          {['Ik huur', 'Ik zoek', 'Over ons', 'Projecten'].map((text, index) => (
            <li key={index} className="border-b-[1px] hover:text-purple-600">
              <a href="#">{text}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Modal;