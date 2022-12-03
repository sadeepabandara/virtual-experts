import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <section className="title bg-color-white-light">
        <div className="container px-3 mx-auto">
          <div className="py-16">
            <h2 className="text-[32px] mb-4">Blog</h2>
            <div className="flex text-[14px]">
              <Link to={"/"} className="text-color-gray">
                Home
              </Link>
              &nbsp; &nbsp;
              <span className="text-color-orange">{`>`}</span>
              &nbsp; &nbsp;
              <Link to={"/blog"} className="text-color-gray">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="md:flex md:max-w-[1310px] md:mx-auto">
        <div className="pt-12 pb-4 blog-content">
          <div className="container mx-auto w-[95%]">
            <div className="flex flex-col items-center justify-center pb-4 shadow-box-shadow blog-post">
              <img
                className="w-full h-[351px] rounded-[5px] md:h-[270px]"
                src="images/upc-code-for-amazon.webp"
                alt=""
              />
              <div className="flex gap-20 post-details text-color-gray text-[14px] pt-2 pb-8">
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <p>Richard</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                  </svg>
                  <p>August 31, 2021</p>
                </div>
              </div>
              <div>
                <h3 className="pb-2 pl-4 font-medium text-start">
                  The Significance of UPC code for Amazon
                </h3>
                <p className="pl-4 text-[14px] text-color-gray leading-8">
                  If you are planning to grow your business by selling products
                  on Amazon, which is the most popular...
                </p>
                <button className="px-4 ml-4 my-3 py-2 border-[1px] border-color-orange rounded-[5px] cursor-pointer font-poppins text-color-orange text-[14px] transition-all ease-in-out duration-[.3s] hover:bg-color-orange hover:text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 blog-content md:pt-12">
          <div className="container mx-auto w-[95%]">
            <div className="flex flex-col items-center justify-center pb-4 shadow-box-shadow blog-post rounded-[10px]">
              <img
                className="w-full h-[351px] rounded-[5px] md:h-[270px]"
                src="images/Amazon-Product-Review-The-ultimate-guide.webp"
                alt=""
              />
              <div className="flex gap-20 post-details text-color-gray text-[14px] pt-2 pb-8">
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <p>Richard</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                  </svg>
                  <p>August 24, 2021</p>
                </div>
              </div>
              <div>
                <h3 className="pb-2 pl-4 font-medium text-start">
                  Amazon Product Review
                </h3>
                <p className="pl-4 text-[14px] text-color-gray leading-8">
                  As of 2021, about 2 million people are selling products
                  through Fulfillment by Amazon (FBA). This setup...
                </p>
                <button className="px-4 ml-4 my-3 py-2 border-[1px] border-color-orange rounded-[5px] cursor-pointer font-poppins text-color-orange text-[14px] transition-all ease-in-out duration-[.3s] hover:bg-color-orange hover:text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-4 blog-content md:pt-12">
          <div className="container mx-auto w-[95%]">
            <div className="flex flex-col items-center justify-center pb-4 shadow-box-shadow blog-post rounded-[10px]">
              <img
                className="w-full h-[351px] rounded-[5px] md:h-[270px]"
                src="images/amazon-seo-services.webp"
                alt=""
              />
              <div className="flex gap-20 post-details text-color-gray text-[14px] pt-2 pb-8">
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    class="me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  <p>Richard</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                  </svg>
                  <p>August 24, 2021</p>
                </div>
              </div>
              <div>
                <h3 className="pb-2 pl-4 font-medium text-start">
                  Improve Your Amazon Search Ranking and Earn More Revenues
                </h3>
                <p className="pl-4 text-[14px] text-color-gray leading-8">
                  Amazon has proved to be a great way for people to make money
                  in 2020. When a lot of traditional...
                </p>
                <button className="px-4 ml-4 my-3 py-2 border-[1px] border-color-orange rounded-[5px] cursor-pointer font-poppins text-color-orange text-[14px] transition-all ease-in-out duration-[.3s] hover:bg-color-orange hover:text-white">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container mx-auto w-[95%]">
          <div className="relative pt-4 mt-8 contact-form">
            <img className="w-[100%]" src="images/blog-line.svg" alt="" />
            <div className="w-[72px] h-[72px] top-14 right-[42%] absolute circle bg-white border-[3px] rounded-[50%] border-color-orange">
              <img
                className="absolute w-[40px] h-[34px] top-[20px] right-[14px]"
                src="images/v-logo.svg"
                alt=""
              />
            </div>
            <form
              action=""
              method="post"
              className="flex flex-col gap-4 pt-10 pb-4 shadow-box-shadow"
            >
              <input
                className="w-[95%] ml-3 p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                type="text"
                name="name"
                placeholder="Your Name/Brand Name"
                autoComplete="off"
                required
              />
              <input
                className="w-[95%] ml-3 p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                required
              />
              <input
                className="w-[95%] ml-3 p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                type="text"
                name="product"
                placeholder="Product Link/ASIN"
                autoComplete="off"
                required
              />
              <textarea
                className="w-[95%] ml-3 p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                type="text"
                name="description"
                placeholder="Description"
                autoComplete="off"
                cols={30}
                rows={6}
                required
              />
              <input
                type="submit"
                value="Submit"
                className="px-6 py-3 w-[25%] ml-3 text-white cursor-pointer float font-poppins bg-color-orange"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
