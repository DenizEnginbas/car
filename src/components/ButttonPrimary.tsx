const ButtonPrimary = ({ text, classCustom }: any) => {
  return (
    <button type="button" className={`bg-blue-600 text-white ${classCustom}`}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
