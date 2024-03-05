function BookTesla() {
  return (
    <div className="container-custom h-[65vh] md:h-[60vh] lg:h-[80vh]">
      <div className="relative h-full">
        <div className="absolute top-20 flex w-full flex-col items-center space-y-10 2xl:space-y-14">
          <div className="flex w-full flex-col items-start gap-10 md:flex-row md:justify-between md:gap-0">
            <div className="space-y-4 lg:space-y-8">
              <div className="space-y-2 text-2xl text-white md:text-3xl lg:text-5xl">
                <h1 style={{ fontFamily: 'Sequel-semibold' }}>
                  Book a Tesla with
                </h1>
                <h1 style={{ fontFamily: 'Sequel-semibold' }}>
                  a big discount
                </h1>
              </div>
              <button
                type="button"
                className="rounded-full bg-blue-600 px-6 py-4 text-sm text-white"
              >
                Book Now
              </button>
            </div>
            <div className="flex justify-center bg-blue-600 p-5 text-white">
              <div className="space-y-3">
                <p style={{ fontFamily: 'Sequel-bold' }} className="text-5xl">
                  50%
                </p>
                <div>
                  <p
                    style={{ fontFamily: 'Sequel-normal' }}
                    className="text-lg"
                  >
                    For every one
                  </p>
                  <p
                    style={{ fontFamily: 'Sequel-normal' }}
                    className="text-lg"
                  >
                    Tesla cars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTesla;
