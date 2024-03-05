import TabsComponent from './Tab';

function Heading() {
  return (
    <div className="container-custom h-screen md:h-[50vh] lg:h-screen 2xl:h-[95vh]">
      <div className="relative h-full">
        <div className="absolute bottom-5 flex flex-col space-y-10 md:items-center 2xl:space-y-14">
          <div className="items-end md:flex md:justify-between">
            <div className="space-y-2 text-3xl text-white md:w-[40%] lg:text-5xl">
              <h1 style={{ fontFamily: 'Sequel-semibold' }}>Premium Car</h1>
              <h1 style={{ fontFamily: 'Sequel-semibold' }}>Rental</h1>
            </div>
            <div className="hidden w-[40%] text-xs text-gray-200 md:block lg:w-[30%] lg:text-sm">
              We want you to have a stress free rental experience, so we make it
              easy to hire a car - by providing simple search tools, customer
              reviews and plenty of pick up locations across the city.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <TabsComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
