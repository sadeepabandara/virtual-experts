import React from "react";
import { Link } from "react-router-dom";
import Social from "../components/Social";
import Profession from "../components/Profession";

function Service() {
  return (
    <>
      {/* Title */}
      <section className="title bg-color-white-light">
        <div className="container px-3 mx-auto">
          <div className="py-12">
            <h2 className="text-[32px] mb-4">Service</h2>
            <div className="flex text-[14px]">
              <Link to={"/"} className="text-color-gray">
                Home
              </Link>
              &nbsp; &nbsp;
              <span className="text-color-orange">{`>`}</span>
              &nbsp; &nbsp;
              <Link to={"/service"} className="text-color-gray">
                Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <Social />

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="container px-3 mx-auto">
          <div className="flex flex-col items-center gap-20">
            <div>
              <h2 className="text-[#222F3E] text-[24px] pt-16 pb-2 md:text-[28px]">
                What We Do
              </h2>
              <div className="w-[30px] h-[3px] bg-color-orange mb-4"></div>
              <p className="text-color-gray text-[14px] text-justify leading-7 md:text-[15px]">
                <Link to={"/"} className="text-color-orange">
                  Virtual Experts Limited
                </Link>{" "}
                is the well-known USA based Amazon FBA/Kindle Consultant &
                Amazon Marketing Services provider. Who works to promote your
                products & improves your product brand value Online. We have
                different types of services for our clients through which they
                can advertise their products online and can boost their sales
                and brand value. We have more than 7 years of experience at
                Amazon FBA/Kindle Book consultancy & Digital Marketing.
              </p>
              <h2 className="pt-6 leading-8 pb-14 md:text-[18px]">
                You can choose your preferable services from our lists. If you
                are not sure which will be best for your Amazon FBA/Kindle Book
                or Business, then feel free to{" "}
                <Link to={"/talk"} className="text-color-orange">
                  contact us!
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative py-20 mb-12 why-choose bg-color-white-light -z-100">
        <div className="container px-3 mx-auto">
          <div className="flex flex-col">
            <h2 className="relative bg-color-white-light z-[100] text-[24px] border-[1px] border-color-orange pt-5 pb-2 px-6 mb-16 text-center  before:content-[''] before:w-[50px] before:absolute before:h-[50px] before:bg-color-orange before:top-[85px] before:left-[-6px] before:z-[-10] md:w-[500px] md:mx-auto md:text-[28px]">
              {/* <span className="absolute w-[50px] h-[50px] bg-color-orange top-[145px] left-[22px] z-[-1]"></span>
              <span className="absolute w-[50px] h-[50px] border-color-orange border-[4px] rounded-[50px] top-[76px] right-[10px]"></span> */}
              Our Amazon FBA/Kindle & Digital Marketing Services.
              <div className="w-[30px] h-[3px] bg-color-orange mt-6 m-auto md:mt-3"></div>
            </h2>

            <div className="md:flex md:flex-wrap md:gap-7">
              {/* Service 1 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] md:mt-12"
                    src="virtual-experts/images/amazon-seo.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 mt-2 bg-white b-8 p box md:w-[400px] md:h-[268px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON SEO - RANK 1ST PAGE IN AMAZON SEARCH ENGINE.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1">
                    Send me your product link/ASIN for pricing & details!
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 600-1500 Per Keyword
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 30-45 days
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Maintenence : $200 per month
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 2 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-ppc.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[268px]">
                  <h2 className="mb-4 font-light uppercase">
                    PPC KEYWORD RESEARCH.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Research 5-10 highly converting keyword for your PPC
                    Campaign
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 100-$200
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5-7 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 3 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-kindle-book-cover-design.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[268px]">
                  <h2 className="mb-4 font-light uppercase">
                    KINDLE BOOK COVER DESIGN.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    We will design professional kindle book cover for your
                    business.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">Price : 50</p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 3-5 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 4 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-question-answer.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[320px]">
                  <h2 className="mb-4 font-light uppercase">
                    QUESTION & ANSWER.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Questions & Answers is an important section to add keywords
                    and increase your conversion rate. Real buyers will post
                    your questions and answers from high-quality accounts at a
                    regular speed.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 10 each Q&A
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5-7 days
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Warranty : Forever
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 5 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-fba-consultant.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[320px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON FBA A-Z CONSULTANCY!
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    I will research product, find supplier, order it for you,
                    improve the product, private label, create your shipping
                    plan and listing with title, description, bullet point, make
                    sure it reaches Amazon warehouse that’s mean A-Z work from
                    scratch.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 2000
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 30 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 6 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-helpful-vote.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[320px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON HELPFUL VOTES.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    We can help you vote for any review on Amazon. All votes
                    will be conducted by real buyers of high quality. Suitable
                    for Product/eBook/Reviewer/Q&A section
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    0.60 each vote
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 3-5 days
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Warranty : Forever
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 7 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-hijacker-removal-service.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[340px]">
                  <h2 className="mb-4 font-light uppercase">
                    FBM HIJACKER REMOVAL.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    The fastest and effective way to remove hijackers. Do not
                    let them destroy your listing or stealing your sales
                    anymore!
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 500
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5-10 days
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Warranty : Forever
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 8 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-product-listing-images-design.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[340px]">
                  <h2 className="mb-4 font-light uppercase">
                    DESIGN AMAZON LISTING IMAGES.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Design 8 professional images for your Amazon Listing.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 300
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 9 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/kindle-direct-publishing-consultant.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[340px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON KINDLE BOOK A-Z CONSULTANCY!
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    I will research the kindle book niche & keywords, design the
                    book cover, write a 5000 words book and fix the format as
                    per kindle book requirements, upload the book and run your
                    campaign and arrange the first 5 reviews. That means A-Z
                    Amazon Kindle launching from scratch.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 1500 only
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 30 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 10 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-kindle-product-review.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON KINDLE VERIFIED REVIEWS.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Reliable Amazon Kindle Book Customer Reviews
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Regular Review : $25 each
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Top 50 Reviewers : $100 each
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 7-15 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 11 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-kindle-product-review.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    ENHANCE BRAND CONTENT – A+ / EBC DESIGN/COPYWRITING!
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Let Virtual Experts help to take your Enhanced Brand Content
                    Listing to the next level!
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 300
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 12 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/remove-amazon-bad-reviews.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    REMOVE NEGATIVE AMAZON REVIEWS FROM 1ST PAGE.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Remove Negative Amazon Reviews from 1st Page and show only
                    positive.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 500+ per ASIN
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5-7 days
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Warranty : 30 Days Free Maintenance
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 13 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-bullet-points-html.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    BULLET POINTS FOR AMAZON LISTING.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Write 5 SEO friendly bullet point for your Amazon listing.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 100
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 14 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-report-abuse.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">REPORT ABUSE.</h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Report abuses may trigger Amazon’s bot to delete a review
                    (removal rate is about 3% depending on the review’s content)
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 5 each
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 3-5 days
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Warranty : Forever
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 14 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-competitors-analysis.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    COMPETITOR ANALYSIS.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Detailed report including his daily-monthly sales,
                    opportunity, how you can compete with them!
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 200
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 15 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-video-upload.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[310px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON VIDEO UPLOADER.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    We will help you upload videos on your Amazon listing
                    without Amazon Brand Registry.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 300 each
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5-10 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 16 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-keyword-research.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[310px]">
                  <h2 className="mb-4 font-light uppercase">
                    KEYWORD BOOSTER.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Real buyers will search for your product with the targeted
                    keyword, then add it to cart & wishlist. This will
                    effectively boost the product’s SEO under this keyword. &
                    Exposure in the “Customers who viewed this item also viewed”
                    area.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 300
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5-10 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 17 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-fba-wholesale-suppliers.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[310px]">
                  <h2 className="mb-4 font-light uppercase">
                    FIND A SUPPLIER.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    I will find a supplier for your desired Amazon product
                    sourcing. Price: $200 Delivery: 5 Days
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 200
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 18 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-product-review.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON VERIFIED REVIEWS
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Reliable Regular Verified Amazon Customer Reviews
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Regular Review : $30 each
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Video Review : $100 each
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Top 50 Reviewers : $150 each
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 10-20 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 19 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-competitor-attack-protection.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    COMPETITOR PROTECTION/ATTACK.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Getting attacked by your competitor? Don’t worry! We can
                    help.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 2000 + 50 Product cost.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 15-30 days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Service 20 */}
              <div>
                <div>
                  <img
                    className="w-[200px] h-[200px] mt-12"
                    src="virtual-experts/images/amazon-product-description-html.svg"
                    alt=""
                  />
                </div>
                <div className="w-full px-4 py-4 pb-8 mt-2 bg-white box md:w-[400px] md:h-[280px]">
                  <h2 className="mb-4 font-light uppercase">
                    AMAZON PRODUCT DESCRIPTION.
                  </h2>
                  <p className="text-color-gray text-[14px] font-medium mb-1 leading-7">
                    Write a detailed product description that will help your
                    Amazon SEO.
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Price : 150
                  </p>
                  <p className="text-color-gray text-[14px] mb-1">
                    Delivery : 5 Days days
                  </p>
                  <button className="mt-4 border-color-orange border-[1px] text-[14px] px-6 py-1.5 font-poppins font-medium">
                    Order Now
                  </button>
                </div>
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

export default Service;
