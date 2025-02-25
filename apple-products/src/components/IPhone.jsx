import { iPhoneModel } from "../data";

const IPhone = () => {
  return (
    <div className="w-full h-full flex flex-col flex-grow items-center justify-around">
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold mb-8 text-gray-800">
        Which iPhone is right for you
      </h3>
      <div className="flex justify-between w-full">
        {iPhoneModel.map((iphone, index) => (
          <div
            key={index}
            className="flex flex-col justify-around items-center"
          >
            <img
              src={iphone.img}
              alt={iphone.name}
              className="2xl:w-72 lg:w-64 sm:w-48  md:h-64 sm:h-48"
            />
            <a
              href=""
              className="2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold text-gray-800 mt-4"
            >
              {iphone.name}
            </a>
            <p className="2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2">
              {iphone.description}
            </p>
            <span className="2xl:text-base xl:text-sm lg:text-sm text-blue-400 mt-2">
              {iphone.price}
            </span>
            <button className="text-sm bg-blue-600 text-white rounded-full mt-2 px-4 py-2">
              buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IPhone;
