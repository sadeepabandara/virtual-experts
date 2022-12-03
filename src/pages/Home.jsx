import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Social from "../components/Social";
import Profession from "../components/Profession";
import { Link } from "react-router-dom";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero bg-color-white-light font-Poppins">
          <div className="container md:max-w-[1310px] px-3 mx-auto">
            <div className="flex flex-col pt-12 items-center gap-[58px] md:flex-row-reverse md:pb-14 md:gap-28 md:items-center">
              <div>
                <img
                  className="md:w-[1136px] md:h-[100%]"
                  src="images/amazon-fba-consultant-virtual-experts.svg"
                  alt=""
                />
              </div>
              <div className="hero-content">
                <h1 className="text-[24px] md:text-[36px]">
                  Amazon FBA/Kindle & Digital Marketing Consultant.
                </h1>
                <p className="my-3 text-[14px] text-color-gray md:text-[15px]">
                  Grow your brands on Amazon!
                </p>
                <button className="mt-[8px] mb-12 border-color-orange border-[1px] text-[14px] px-6 py-1.5">
                  Get Free Quote!
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <Social />

        {/* Why Section */}
        <section className="why">
          <div className="container px-3 mx-auto md:max-w-[1310px]">
            <div className="flex flex-col items-center gap-20 md:flex-row md:py-16 md:items-center md:justify-center">
              <div>
                <img
                  className="w-[404px] h-[297px] mt-14 md:w-[564px] md:h-[415px]"
                  src="images/amazon-marketing-service-virtual-experts-limited.svg"
                  alt=""
                />
              </div>
              <div className="md:w-[660px]">
                <h2 className="text-[#222F3E] text-[24px] pb-2 md:text-[28px]">
                  Why do you need Amazon FBA Consultant?
                </h2>
                <div className="w-[30px] h-[3px] bg-color-orange mb-4"></div>
                <p className="text-color-gray text-[14px] text-justify leading-7 md:text-[15px]">
                  Online Shopping US 2015 report reveals that 70% of Americans
                  shopping online every week. So maximum Products/Brands are
                  already moving to Online Stores. Some of them sell products on
                  various E-commerce sites like Amazon.com. Online-based
                  businesses are growing day by day, those products/brands are
                  requiring Amazon Marketing Services to promote their products
                  Online.
                  <br />
                  <br />
                  Virtual Experts Limited is the well-known USA-based Amazon
                  FBA/Kindle & Digital Marketing Agency. Who works to promote
                  your products & improves your product brand value online. We
                  have different types of Amazon Marketing Services for our
                  clients through which we can advertise their products online
                  and can boost their sales and brand value. We have more than 7
                  years of experience as an Amazon FBA Consultant & Amazon SEO
                  Agency.
                  <br />
                  <br />
                  We are here to promote your brands professionally with our
                  up-to-date Amazon Marketing Strategy. Moreover, our numerous
                  Amazon FBA/FBM & Digital Marketing services can ensure your
                  potential Sales & Growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative pt-20 why-choose bg-color-white-light -z-100">
          <div className="md:container md:mx-auto md:max-w-[1310px] md:flex md:items-center">
            <span className="absolute w-[50px] h-[50px] bg-color-orange top-[145px] left-[22px] md:w-[60px] md:h-[60px] md:left-[458px] md:top-[127px]"></span>
            <span className="absolute w-[50px] h-[50px] border-color-orange border-[4px] rounded-[50px] top-[76px] right-[10px] md:top-[65px] md:right-[430px] md:w-[75px] md:h-[75px] md:border-[6px]"></span>
            <div className="why-choose-container flex flex-col my-4 mx-3 max-w-[1311px] items-center">
              <h2 className="relative bg-color-white-light z-100 text-[24px] border-[1px] border-color-orange pt-5 pb-2 px-14 md:text-[28px] md:pt-4 md:px-16">
                Why Choose Virtual Experts?
                <div className="w-[30px] h-[3px] bg-color-orange mt-4 m-auto"></div>
              </h2>
              <p className="text-color-gray text-center text-[14px] mt-14 leading-7 md:px-[260px]">
                Virtual Experts is the best Amazon FBA Consultant & Amazon SEO
                Agency with 7 years of experience. Virtual Experts provides
                Amazon Marketing Services including Amazon SEO Services with
                Listing Optimization Services & Fight with Worst Amazon Reviews.
              </p>
              <div className="flex-wrap md:flex md:gap-7">
                <div className="w-full p-4 pb-8 mt-8 bg-white box md:w-[408px] md:h-[216px]">
                  <img src="images/home_refund-policy_card_image.svg" alt="" />
                  <h3 className="my-4 font-medium uppercase">PAYMENT POLICY</h3>
                  <p className="text-color-gray leading-8 text-[14px]">
                    We use PayPal, Payoneer, Skrill & Bitcoin for a smooth
                    transaction.
                  </p>
                </div>
                <div className="w-full p-4 pb-8 mt-8 bg-white box md:w-[408px] md:h-[216px]">
                  <img src="images/home_safe_and_secure_image.svg" alt="" />
                  <h3 className="my-4 font-medium uppercase">SAFE & SECURE</h3>
                  <p className="text-color-gray leading-8 text-[14px]">
                    We always keep our client details private & never share them
                    with third parties.
                  </p>
                </div>
                <div className="w-full p-4 pb-8 mt-8 bg-white box md:w-[408px] md:h-[216px]">
                  <img src="images/home_trophy.svg" alt="" />
                  <h3 className="my-4 font-medium uppercase">
                    HIGH-QUALITY SERVICE
                  </h3>
                  <p className="text-color-gray leading-8 text-[14px]">
                    We comply with Amazon TOS and maintain the highest standard.
                  </p>
                </div>
                <div className="w-full p-4 pb-8 mt-8 bg-white box md:w-[408px] md:h-[216px]">
                  <img src="images/home_fast_delivery_image.svg" alt="" />
                  <h3 className="my-4 font-medium uppercase">FAST DELIVERY</h3>
                  <p className="text-color-gray leading-8 text-[14px]">
                    We will assure you of the fastest work delivery for Amazon
                    Marketing Service.
                  </p>
                </div>
                <div className="w-full p-4 pb-8 mt-8 bg-white box md:w-[408px] md:h-[216px]">
                  <img src="images/home_support_card_image.svg" alt="" />
                  <h3 className="my-4 font-medium uppercase">24X7 SUPPORT</h3>
                  <p className="text-color-gray leading-8 text-[14px]">
                    You can call us or chat with us on Skype: virtualexpertsltd
                    24/7.
                  </p>
                </div>
                <div className="w-full p-4 pb-8 mt-8 mb-16 bg-white box md:w-[408px] md:h-[216px]">
                  <img src="images/home_experienced_card_image.svg" alt="" />
                  <h3 className="my-4 font-medium uppercase">Experienced</h3>
                  <p className="text-color-gray leading-8 text-[14px]">
                    We have 7 years of experience in Amazon FBA/FBM Business &
                    Marketing strategy as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services pt-28">
          <div className="container px-3 mx-auto md:max-w-[1310px]">
            <div className="flex flex-col items-center my-4 md:flex">
              <h2 className="relative z-100 bg-white text-center text-[24px] border-[1px] border-[#FF9F26] pt-5 pb-2 px-10 mx-6 md:text-[28px] md:px-20">
                Our TOP 3 Amazon Marketing <br /> Services
                <span className="absolute -z-10 w-[50px] h-[50px] bg-color-orange top-[83px] left-[-6px] md:w-[60px] md:h-[60px] md:top-[78px]"></span>
                <span className="absolute -z-10 w-[50px] h-[50px]  border-color-orange border-[4px] rounded-[50px] top-[-20px] right-[-20px] md:w-[75px] md:h-[75px] md:border-[6px] md:top-[-30px] md:right-[-30px]"></span>
                <div className="w-[30px] h-[3px] bg-color-orange mt-4 m-auto"></div>
              </h2>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-[490px] h-[627px]">
                  <img
                    className="my-20 w-[150px]"
                    src="images/amazon-seo-consultant.svg"
                    alt=""
                  />
                  <h2 className="mx-[80px] text-center md:text-[18px]">
                    AMAZON SEO SERVICES - RANK 1ST PAGE IN AMAZON SEARCH
                  </h2>
                  <p className="my-5 text-[#828B9A] text-[14px] leading-8 mx-[80px] text-center md:text-[15px]">
                    As an Amazon SEO Agency, we have helped thousands of
                    products to rank on Amazon. Every single campaign is met
                    with special care, offering professional amazon SEO
                    consultant advice on which keywords, off-page secrets,
                    product pricing, and giveaway can help you to rank #1!
                  </p>
                  <Link
                    to="/"
                    className="text-color-orange text-[14px]"
                    href="#"
                  >
                    Order Now &gt;
                  </Link>
                </div>
                <div className="flex flex-col items-center w-[490px] h-[627px]">
                  <img
                    className="my-20 w-[150px]"
                    src="images/worst-amazon-reviews.svg"
                    alt=""
                  />
                  <h2 className="mx-[80px] text-center md:text-[18px]">
                    REMOVE WORST AMAZON REVIEWS FROM 1ST PAGE
                  </h2>
                  <p className="my-5 text-[#828B9A] text-[14px] leading-8 mx-[80px] text-center md:text-[15px]">
                    Worst Amazon Reviews can significantly down your sales! A
                    survey report in 2021 shows that 56% of all Amazon Prime
                    Customers read every single review on your listing’s first
                    page! An additional 24% of people only read the top 3
                    reviews on your listing’s first page.
                  </p>
                  <Link
                    to="/"
                    className="text-color-orange text-[14px]"
                    href="#"
                  >
                    Order Now &gt;
                  </Link>
                </div>
                <div className="flex flex-col items-center w-[476px] h-[627px]">
                  <img
                    className="my-20"
                    src="images/amazon-product-review-virtual-experts.svg"
                    alt=""
                  />
                  <h2 className="mx-[80px] text-center md:text-[18px]">
                    Amazon Customer Review
                  </h2>
                  <p className="my-5 text-color-gray text-[14px] leading-8 mx-[80px] text-center md:text-[15px]">
                    Amazon product reviews engage customers, builds customer
                    trust & help with Amazon SEO. Around 75% of U.S. consumers
                    said Amazon reviews provide helpful data and insights into
                    customer concerns and help them to make buying decisions.
                  </p>
                  <Link
                    to="/"
                    className=" text-color-orange text-[14px]"
                    href="#"
                  >
                    Order Now &gt;
                  </Link>
                </div>
              </div>
              <button className="mt-12 mb-20 border-color-orange border-[1px] text-[14px] px-6 py-1.5 bg-color-white-light">
                View All Amazon Services
              </button>
            </div>
          </div>
        </section>

        {/* Place Order Section */}
        <section className="place-order bg-color-white-light ">
          <div className="container px-3 mx-auto md:max-w-[1310px]">
            <div className="flex flex-col pb-6 my-4 md:flex md:flex-row md:gap-16">
              <img
                className="mt-16 md:w-[518px] md:h-[370px]"
                src="images/amazon-marketing-strategy.svg"
                alt=""
              />
              <div>
                <h2 className="text-color-dark text-[24px] pb-2 mt-8 md:pb-0 md:text-[28px]">
                  How to Place an Order?
                  <div className="w-[30px] h-[3px] bg-color-orange mb-10 md:mt-2"></div>
                </h2>
                <p className=" text-[14px] text-color-gray inline-block mb-8 md:leading-8 md:text-[15px]">
                  <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-[#FF9F26] before:top-[6px] before:right-[8px] before:-z-10">
                    01&nbsp;
                  </span>
                  Once we receive your request, we will contact you & let you
                  know the total service fee and
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other details.
                </p>
                <p className="text-[14px] text-color-gray inline-block mb-8 md:text-[15px]">
                  <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                    02&nbsp;
                  </span>
                  Or you can contact us via WhatsApp/Skype for the quickest
                  response.
                </p>
                <p className="text-[14px] text-color-gray inline-block mb-8 md:text-[15px]">
                  <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                    03&nbsp;
                  </span>
                  We will submit our working report once it is complete.
                </p>
                <p className="text-[14px] text-color-gray inline-block mb-8 md:leading-8 md:text-[15px]">
                  <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                    04&nbsp;
                  </span>
                  Once we receive your payment and all details related to the
                  project, we will start your
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;project.
                </p>
                <p className="text-[14px] text-color-gray inline-block mb-8 md:text-[15px]">
                  <span className="relative text-[14px] text-color-dark z-10 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-[50px] before:bg-color-orange before:top-[6px] before:right-[12px] before:-z-10">
                    05&nbsp;
                  </span>
                  You must select a service & fill the order form as per
                  instruction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Amazon Clients Section */}
        <section className="amazon-clients">
          <div className="container px-3 mx-auto">
            <div className="flex flex-col items-center mt-8 mb-20">
              <h2 className="relative z-100 text-center text-[24px] bg-white border-[1px] border-color-orange pt-5 pb-2 px-[80px] mt-16 mb-4 md:text-[28px] md:px-28">
                <span className="absolute -z-10 w-[50px] h-[50px] bg-color-orange top-[48px] left-[-6px] md:w-[60px] md:h-[60px] md:top-[36px]"></span>
                <span className="absolute -z-10 w-[50px] h-[50px]  border-color-orange border-[4px] rounded-[50px] top-[-20px] right-[-20px] md:w-[75px] md:h-[75px] md:top-[-30px] md:right-[-30px] md:border-[6px]"></span>
                Our TOP Amazon Clients
                <div className="w-[30px] h-[3px] bg-color-orange mt-4 m-auto"></div>
              </h2>

              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="relative flex flex-col items-center px-4 py-6 pt-2 mt-8 testimonials shadow-box-shadow md:max-w-[756px] md:pt-12">
                    <img
                      className="absolute top-[-38px] left-1 w-[80px] h-[80px] min-w-[10px] md:top-[0px] md:left-[-40px]"
                      src="images/comma-icon.svg"
                      alt=""
                    />
                    <div className="circle-image relative w-[70px] h-[70px]">
                      <img
                        className="absolute max-w-full max-h-full min-w-full min-h-full rounded-full border-[3px] border-color-orange"
                        src="images/testimonial-1.jpeg"
                        alt=""
                      />
                    </div>
                    <p className="leading-8 my-6 text-color-gray text-center text-[14px] italic">
                      “We have been attacked by our competitor We have ordered
                      for Amazon Negative Review Removal service from Virtual
                      Experts they help us within 72 hours.”
                    </p>
                    <h2 className="mb-4 font-semibold md:text-[18px]">
                      Benjamin Arneberg
                    </h2>
                    <p className="text-[14px] text-color-gray pb-6">
                      CEO of PetHonesty
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col items-center px-4 py-6 pt-2 mt-8 testimonials shadow-box-shadow md:max-w-[756px] md:pt-12">
                    <img
                      className="absolute top-[-38px] left-1 w-[80px] h-[80px] min-w-[10px] md:top-[0px] md:left-[-40px]"
                      src="images/comma-icon.svg"
                      alt=""
                    />
                    <div className="circle-image relative w-[70px] h-[70px]">
                      <img
                        className="absolute max-w-full max-h-full min-w-full min-h-full rounded-full border-[3px] border-color-orange"
                        src="images/testimonial-2.jpeg"
                        alt=""
                      />
                    </div>
                    <p className="leading-8 my-6 text-color-gray text-center text-[14px] italic">
                      “It's been around 6 years since we are using their Amazon
                      SEO Services & Ranking booster services a lot. Their
                      services are too good for Amazon FBA Business.”
                    </p>
                    <h2 className="mb-4 font-semibold md:text-[18px">
                      Ian Page
                    </h2>
                    <p className="text-[14px] text-color-gray pb-6">
                      CEO of Bullseyesellers
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col items-center px-4 py-6 pt-2 mt-8 testimonials shadow-box-shadow md:max-w-[756px] md:pt-12">
                    <img
                      className="absolute top-[-38px] left-1 w-[80px] h-[80px] min-w-[10px] md:top-[0px] md:left-[-40px]"
                      src="images/comma-icon.svg"
                      alt=""
                    />
                    <div className="circle-image relative w-[70px] h-[70px]">
                      <img
                        className="absolute max-w-full max-h-full min-w-full min-h-full rounded-full border-[3px] border-color-orange"
                        src="images/testimonial-3.jpeg"
                        alt=""
                      />
                    </div>
                    <p className="leading-8 my-6 text-color-gray text-center text-[14px] italic">
                      “We have ordered Amazon Product Review and worst amazon
                      reviews removal services from Virtual Experts they are
                      awesome.”
                    </p>
                    <h2 className="mb-4 font-semibold md:text-[18px">
                      Abdurahman Ravat
                    </h2>
                    <p className="text-[14px] text-color-gray pb-6">
                      Founder & CEO, Amcrest Technologies
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Our Profession */}
        <Profession />
      </main>
    </>
  );
}

export default Home;
