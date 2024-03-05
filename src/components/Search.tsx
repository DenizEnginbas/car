import ButtonPrimary from './ButttonPrimary';

const Search = () => {
  return (
    <div className=" flex w-full flex-col items-center rounded-e-md rounded-bl-md bg-white p-2 md:flex-row">
      <div className="location border-b border-gray-300 px-1.5 py-3 md:w-[21%] md:border-b-0 md:border-r md:px-3 md:py-0">
        <div className="">
          <div className="text-sm text-gray-500">Pick up address</div>
          <input
            id="address"
            type="text"
            className="w-full border-transparent bg-transparent p-0 text-sm ring-transparent placeholder:text-sm placeholder:text-black focus:border-transparent focus:ring-transparent"
            placeholder="From address..."
          />
        </div>
      </div>
      <div className="when border-b border-gray-300 px-1.5 py-3 md:w-[21%] md:border-b-0  md:border-r md:px-3 md:py-0">
        <div className="">
          <div className="text-sm text-gray-500">Drop off address</div>
          <input
            type="text"
            className="w-full border-transparent bg-transparent p-0 text-sm ring-transparent placeholder:text-sm placeholder:text-black focus:border-transparent focus:ring-transparent"
            placeholder="From address..."
          />
        </div>
      </div>
      <div className="price border-b border-gray-300 px-1.5 py-3 md:w-[21%] md:border-b-0 md:border-r md:px-3 md:py-0">
        <div className="">
          <div className="text-sm text-gray-500">Pick up date</div>
          <input
            type="text"
            className="w-full border-transparent bg-transparent p-0 text-sm ring-transparent placeholder:text-sm placeholder:text-black focus:border-transparent focus:ring-transparent"
            placeholder="15-08-23"
          />
        </div>
      </div>
      <div className="property-type border-b border-gray-300 px-1.5 py-3 md:w-[21%] md:border-b-0 md:border-r md:px-3 md:py-0">
        <div className="">
          <div className="text-sm text-gray-500">Pick up now</div>
          <input
            type="text"
            className="w-full border-transparent bg-transparent p-0 text-sm ring-transparent placeholder:text-sm placeholder:text-black focus:border-transparent focus:ring-transparent"
            placeholder="16:45"
          />
        </div>
      </div>
      <div className="pl-2 pt-3 md:w-[16%] md:pt-0">
        <ButtonPrimary
          text="Search"
          classCustom="text-sm rounded-md px-7 md:px-0 py-3 w-full"
        />
      </div>
    </div>
  );
};

export default Search;
