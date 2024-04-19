import Button from "./Button";

export function DoctorCard({ doctorDetails }) {
    const {
      name,
      rating,
      profileImgSrc,
      consultationOptions,
      buttonText1,
      buttonText2,
    } = doctorDetails;
  
    return (
      <div className="bg-[#FFF7E2] flex items-center flex-col gap-y-4 justify-center border-[#E3E3E3] border-[1px] px-10 py-5 rounded-3xl shadow-shadow hover:bg-[#fff5d7] transition duration-300">
        <div className="rounded-full flex flex-col justify-center items-center">
          <img src={profileImgSrc} className="w-36" alt="Doctor Profile"></img>
          <div className="bg-black text-white flex gap-x-2 max-w-16 px-4 py-1 rounded-full justify-center relative bottom-6">
            <p>{rating}</p>
            <img src="/brand/star.svg" alt="Star Icon"></img>
          </div>
        </div>
        <div className="font-nunito font-bold text-3xl text-[#2E2F2E]">
          {name}
        </div>
  
        <div className="flex gap-x-2">
          {consultationOptions.map((option, index) => (
            <div
              key={index}
              className="border-[#3A643B63] border-[1px] px-3 py-2 items-center rounded-xl flex flex-col hover:bg-[#E3E3E3] transition duration-300"
            >
              <p className="font-nunito font-semibold text-[#3C3C3C]">
                {option.name}
              </p>
              <p className="font-nunito font-bold text-darkGreen">
                ₹{option.price}
              </p>
            </div>
          ))}
        </div>
  
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <Button className="border-darkGreen border-[1px] px-28 py-3 text-darkGreen rounded-lg font-nunito font-semibold bg-white hover:bg-darkGreen hover:text-white transition duration-300">
            {buttonText1}
          </Button>
  
          <Button className="px-20 rounded-lg font-semibold text-lg py-4 bg-darkGreen text-white hover:bg-opacity-80 transition duration-300">
            {buttonText2}
          </Button>
        </div>
      </div>
    );
  }