import React from "react";

function profession() {
  return (
    <section className="our-profession">
      <div className="container px-3 mx-auto bg-color-white-light max-w-[95%] rounded-[10px] md:max-w-[1224px]">
        <div className="flex flex-col items-center mt-8 mb-16">
          <h2 className="text-[21px] leading-10 text-center pt-10 pb-6 md:text-[24px] md:px-60 md:pt-12">
            Our professional Amazon Marketing Service team has helped{" "}
            <span className="text-color-orange">5000+ </span>
            Amazon sellers to gain potential sales
          </h2>
          <button className="mt-[8px] mb-12 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-normal md:mb-16">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </section>
  );
}

export default profession;
