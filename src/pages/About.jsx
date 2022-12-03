import React from "react";
import { Link } from "react-router-dom";
import Profession from "../components/Profession";

function About() {
  return (
    <>
      {/* Title */}
      <section className="title bg-color-white-light">
        <div className="container px-3 mx-auto">
          <div className="py-16">
            <h2 className="text-[32px] mb-4">About</h2>
            <div className="flex text-[14px]">
              <Link to={"/"} className="text-color-gray">
                Home
              </Link>
              &nbsp; &nbsp;
              <span className="text-color-orange">{`>`}</span>
              &nbsp; &nbsp;
              <Link to={"/about"} className="text-color-gray">
                About
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are Virtual Section */}
      <section className="who-are-virtual">
        <div className="container px-3 mx-auto">
          <div className="flex flex-col items-center gap-20 md:flex md:flex-row md:items-center">
            <div className="md:w-[600px]">
              <h2 className="text-[#222F3E] text-[24px] pt-24 pb-2 md:pt-0">
                Who Are Virtual Experts?
              </h2>
              <div className="w-[30px] h-[3px] bg-color-orange mb-4"></div>
              <p className="text-color-gray text-[14px] text-justify leading-7">
                <Link to={"/"} className="text-color-orange">
                  Virtual Experts
                </Link>{" "}
                is a well-known USA-based Digital Marketing Agency. Who works to
                promote your Amazon products/brands and improves your product
                brand value Online. Virtual Experts Ltd. has more than 6 Years
                of experience at this service. We have more than 50 employees
                and they are qualified enough. If you want to improve your
                product sales and branding, then you can check our services
                here. We are always here to help you guys.
              </p>
            </div>
            <div>
              <img
                className="pt-4 pb-20 md:mt-10"
                src="virtual-experts/images/amazon-fba-consultant-about-virtual-experts.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Place Order Section */}
      <section className="place-order bg-color-white-light ">
        <div className="container px-3 mx-auto md:max-w-[1310px] md:mx-auto">
          <div className="flex flex-col pb-6 md:flex md:flex-row md:gap-20">
            <div>
              <img
                className="pt-24 pb-2 bg-color-white-light md:w-[3550px] md:mt-10"
                src="virtual-experts/images/about-virtual-experts-amazon-seo-agency.svg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-color-dark text-[24px] pb-2 md:mt-10">
                Why We Are Unique?
              </h2>
              <span className="w-[30px] h-[3px] bg-color-orange mb-10"></span>
              <p className=" text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-[#FF9F26] before:top-[6px] before:right-[8px] before:-z-10">
                  01&nbsp;
                </span>
                We are always up to date with Amazon Terms & Conditions.
              </p>
              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  02&nbsp;
                </span>
                We have the option of half-payment for new clients.
              </p>
              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  03&nbsp;
                </span>
                So, there is NO Risk of Cookies. Free advice & 24/7 customer
                support.
              </p>
              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  04&nbsp;
                </span>
                We always Exchange Browsers & Delete Cookies.
              </p>

              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  05&nbsp;
                </span>
                We will give you 100% Privacy & Protection by never sharing your
                identity with anyone else.
              </p>

              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  06&nbsp;
                </span>
                We have 50+ Real Employee who has enough expertise and
                capability to work perfectly.
              </p>

              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  07&nbsp;
                </span>
                We use PayPal, Payoneer, Skrill & Bitcoin for a smooth
                transaction.
              </p>

              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  08&nbsp;
                </span>
                Our work is 100% compatible with the Amazon A10 algorithm. So,
                it is safe..
              </p>

              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                  09&nbsp;
                </span>
                We have 50+ different computers with Different MAC & IP
                addresses.
              </p>

              <p className="text-[14px] text-color-gray inline-block mb-8">
                <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[8px] before:-z-10">
                  10&nbsp;
                </span>
                We always use 100% Verified Amazon Accounts with real addresses
                & purchases history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team Section */}
      <section className="relative pt-20 meet-the-team">
        <div className="why-choose-container flex flex-col my-4 mx-3 max-w-[1311px] items-center md:mx-auto">
          <h2 className="relative z-100 text-[24px] pt-5 pb-2 px-14">
            Meet The Team
            <div className="w-[30px] h-[3px] bg-color-orange mt-1 m-auto"></div>
          </h2>
          <p className="text-color-gray text-center text-[14px] mt-14 leading-7 md:px-[260px]">
            Virtual Experts has around 7 years of experience in Amazon
            FBA/Kindle business model and Digital Marketing consultancy. We also
            sell products on Amazon besides being a marketing agency.
          </p>

          <div className="md:flex md:gap-10">
            <div className="flex flex-col items-center mt-20 cursor-pointer team-images">
              <img
                className="w-[428px] h-[500px]"
                src="virtual-experts/images/richard-founder-virtual-experts.svg"
                alt=""
              />
              <div className="z-10 w-[3px] h-[25px] bg-color-orange rounded-[2px]"></div>
              <div>
                <h3 className="pb-4 font-medium text-center">Richard</h3>
                <p className="text-[14px] text-color-gray text-center">
                  Founder & CEO
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-20 cursor-pointer team-images">
              <img
                className="w-[428px] h-[500px]"
                src="virtual-experts/images/sid-amazon-fba.svg"
                alt=""
              />
              <div className="z-10 w-[3px] h-[25px] bg-color-orange rounded-[2px]"></div>
              <div>
                <h3 className="pb-4 font-medium text-center">Sid</h3>
                <p className="text-[14px] text-color-gray text-center">
                  Amazon FBA/Kindle Analist
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mt-20 cursor-pointer mb-14 team-images">
              <img
                className="w-[428px] h-[500px]"
                src="virtual-experts/images/lisa-amazon-seo-consultant.svg"
                alt=""
              />
              <div className="z-10 w-[3px] h-[25px] bg-color-orange rounded-[2px]"></div>
              <div>
                <h3 className="pb-4 font-medium text-center">Lisa</h3>
                <p className="text-[14px] text-color-gray text-center">
                  SEO Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Profession */}
      <Profession />
    </>
  );
}

export default About;
