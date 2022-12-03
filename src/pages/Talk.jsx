import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Profession from "../components/Profession";
import emailjs from "emailjs-com";

function Talk() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm();
  }

  return (
    <>
      <section className="title bg-color-white-light">
        <div className="container px-3 mx-auto">
          <div className="py-16">
            <h2 className="text-[32px] mb-4">Let's Talk</h2>
            <div className="flex text-[14px]">
              <Link to={"/"} className="text-color-gray">
                Home
              </Link>
              &nbsp; &nbsp;
              <span className="text-color-orange">{`>`}</span>
              &nbsp; &nbsp;
              <Link to={"/talk"} className="text-color-gray">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container px-3 mx-auto">
          <div className="md:flex md:gap-16">
            <div className="py-24 md:w-[620px] ">
              <img className="mb-4" src="images/talk.svg" alt="" />
              <div className="pb-8">
                <h2 className="text-[#222F3E] text-[24px] pb-2">
                  Amazon Growth & Results.
                </h2>
                <div className="w-[25px] h-[2px] bg-color-orange mb-4"></div>
                <p className="text-color-gray text-[14px] text-justify leading-7">
                  Do you have any questions related to Amazon FBA/Kindle &
                  Digital Marketing? Feel free to contact us. For better
                  response use Skype/WhatsApp.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 12 16"
                    class="letsTalk_logo__3qygn icon-margin-top"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-color-orange w-[20px] h-[20px] mr-2"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  <p className="text-color-gray text-[14px]">
                    <span className="font-medium ">Address</span> : 226 West
                    26th Street, New York, NY 10001, USA
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="letsTalk_logo__3qygn"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-color-orange w-[20px] h-[20px] mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-color-gray text-[14px]">
                    <span className="font-medium ">Email</span> :
                    help@virtualexperts.net
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    class="letsTalk_logo__3qygn"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-color-orange w-[20px] h-[20px] mr-2"
                  >
                    <path d="M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5 0-51-10-100.5-29.7-147-19-45-46.3-85.4-81-120.1a375.79 375.79 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4-3.7 21.4-5.7 43.3-5.7 65.1 0 51 10 100.5 29.7 147 19 45 46.2 85.4 80.9 120.1 34.7 34.7 75.1 61.9 120.1 80.9 46.6 19.7 96 29.7 147 29.7 22.2 0 44.4-2 66.2-5.9 33.5 18.9 71.3 29 110 29 59.7 0 115.9-23.2 158.1-65.5 42.3-42.2 65.5-98.4 65.5-158.1.1-38-9.7-75.5-28.2-108.7zm-88.1 216C766.9 823.4 729 839 688.4 839c-26.1 0-51.8-6.8-74.6-19.7l-22.5-12.7-25.5 4.5c-17.8 3.2-35.8 4.8-53.6 4.8-41.4 0-81.3-8.1-119.1-24.1-36.3-15.3-69-37.3-97.2-65.5a304.29 304.29 0 0 1-65.5-97.1c-16-37.7-24-77.6-24-119 0-17.4 1.6-35.2 4.6-52.8l4.4-25.1L203 410a151.02 151.02 0 0 1-19.1-73.4c0-40.6 15.7-78.5 44.4-107.2C257.1 200.7 295 185 335.6 185a153 153 0 0 1 71.4 17.9l22.4 11.8 24.8-4.8c18.9-3.6 38.4-5.5 58-5.5 41.4 0 81.3 8.1 119 24 36.5 15.4 69.1 37.4 97.2 65.5 28.2 28.1 50.2 60.8 65.6 97.2 16 37.7 24 77.6 24 119 0 18.4-1.7 37-5.1 55.5l-4.7 25.5 12.6 22.6c12.6 22.5 19.2 48 19.2 73.7 0 40.7-15.7 78.5-44.4 107.2zM583.4 466.2L495 446.6c-33.6-7.7-72.3-17.8-72.3-49.5s27.1-53.9 76.1-53.9c98.7 0 89.7 67.8 138.7 67.8 25.8 0 48.4-15.2 48.4-41.2 0-60.8-97.4-106.5-180-106.5-89.7 0-185.2 38.1-185.2 139.5 0 48.8 17.4 100.8 113.6 124.9l119.4 29.8c36.1 8.9 45.2 29.2 45.2 47.6 0 30.5-30.3 60.3-85.2 60.3-107.2 0-92.3-82.5-149.7-82.5-25.8 0-44.5 17.8-44.5 43.1 0 49.4 60 115.4 194.2 115.4 127.7 0 191-61.5 191-144 0-53.1-24.5-109.6-121.3-131.2z"></path>
                  </svg>
                  <p className="text-color-gray text-[14px]">
                    <span className="font-medium ">Skype</span> :
                    virtualExpertsltd
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    t="1569683925316"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    class="letsTalk_logo__3qygn fs-15"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-color-orange w-[20px] h-[20px] mr-2"
                  >
                    <defs></defs>
                    <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
                    <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path>
                  </svg>
                  <p className="text-color-gray text-[14px]">
                    <span className="font-medium ">Whatsapp</span> :
                    +13473528622
                  </p>
                </div>
              </div>

              <h3 className="pt-12 font-medium">
                Connect with us
                <div className="w-[25px] h-[2px] bg-color-orange mt-2"></div>
              </h3>
              <div className="flex gap-4 pt-2 social-icons">
                <Link>
                  <FaFacebook className="w-[20px] h-[20px] text-color-orange transition-all duration-500 ease-in-out hover:scale-125" />
                </Link>
                <Link>
                  <AiFillInstagram className="w-[20px] h-[20px] text-color-orange transition-all duration-500 ease-in-out hover:scale-125" />
                </Link>
                <Link>
                  <FaTelegram className="w-[20px] h-[20px] text-color-orange transition-all duration-500 ease-in-out hover:scale-125" />
                </Link>
                <Link>
                  <FaTwitter className="w-[20px] h-[20px] text-color-orange transition-all duration-500 ease-in-out hover:scale-125" />
                </Link>
                <Link>
                  <FaYoutube className="w-[20px] h-[20px] text-color-orange transition-all duration-500 ease-in-out hover:scale-125" />
                </Link>
              </div>
            </div>
            <div>
              <div className="pt-4 contact-form mb-[-70px] mt-8 md:w-[620px] md:mt-32">
                <form
                  action=""
                  method="post"
                  onSubmit={sendEmail}
                  className="flex flex-col items-start gap-4"
                >
                  <div className="md:flex md:gap-8 md:w-[620px]">
                    <input
                      className="w-[100%] p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                      type="text"
                      name="name"
                      placeholder="Name"
                      autoComplete="off"
                      required
                    />
                    <input
                      className="w-[100%] p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="md:flex md:gap-8 md:w-[620px]">
                    <input
                      className="w-[100%] p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                      type="phone"
                      name="phone"
                      placeholder="Phone"
                      autoComplete="off"
                      required
                    />
                    <input
                      className="w-[100%] p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <textarea
                    className="w-[100%] p-3 border-[1px] border-color-gray rounded-[5px] text-[14px]"
                    type="text"
                    name="message"
                    placeholder="Message"
                    autoComplete="off"
                    cols={30}
                    rows={6}
                    required
                  />
                  <input
                    type="submit"
                    value="SEND"
                    className="px-6 py-3 text-white cursor-pointer font-poppins bg-color-orange"
                  />
                </form>
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

export default Talk;
