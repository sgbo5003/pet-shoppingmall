import React from "react";

const ProductCheckOut = () => {
  return (
    <div className="relative w-full mx-auto my-0">
      <div className="max-w-[1240px] mx-auto my-0">
        <div>
          <form className="xl:gap-x-16 lg:gap-x-12 lg:grid-cols-2 lg:grid">
            <div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Contact information
                </h2>
                <div className="mt-[1rem]">
                  <label
                    htmlFor="emailAdress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-[0.25rem]">
                    <input
                      type="email"
                      name="emailAdress"
                      id="emailAdress"
                      autoComplete="email"
                      className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-[2.5rem] border-gray-200 border-t mt-[2.5rem]">
                <h2 className="text-lg font-medium text-gray-900">
                  Shipping information
                </h2>
                <div className="sm:gap-x-4 sm:grid-cols-2 gap-y-6 grid-cols-1 grid mt-[1rem]">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      first Name
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      last Name
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <div className="mt-[0.25rem]">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="block w-full border-gray-300 rounded-md shadow-sm sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckOut;
