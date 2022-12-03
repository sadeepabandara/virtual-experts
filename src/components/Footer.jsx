import React from "react";
import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";
import { AiFillSkype, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <section className="footer bg-color-white-light">
          <div className="container px-3 mx-auto ">
            <div className="py-8">
              <div className="items-center justify-start md:flex md:gap-20">
                <div className="w-[408px]">
                  <img
                    className="ml-3 w-[334px] h-[60px] md:mt-12"
                    src="virtual-experts/images/VEFinal.png"
                    alt="logo"
                  />
                  <p className="text-color-gray text-[14px] text-center leading-6 px-2 py-4 md:text-start">
                    Virtual Experts Limited is the best Amazon FBA Consultant &
                    Amazon SEO Agency with 7 years of experience, who can help
                    you to improve your sales significantly.
                  </p>
                </div>

                <div>
                  <h3 className="pt-12 font-medium text-center md:text-start ">
                    Get in Touch
                    <div className="w-[25px] h-[2px] bg-color-orange mt-2 mx-auto md:mx-0"></div>
                  </h3>
                  <ul className="pt-4 mx-12 md:mx-0">
                    <li className="pb-6">
                      <MdMail className="inline-block mr-2 cursor-pointer text-color-orange transition-all duration-500 ease-in-out w-[20px] h-[20px] hover:scale-125" />
                      <Link className="text-[14px] text-[#6c757d] hover:text-color-orange">
                        <span className="font-medium">Email</span> :
                        help@virtualexperts.net
                      </Link>
                    </li>
                    <li className="pb-6">
                      <AiFillSkype className="inline-block mr-2 cursor-pointer text-color-orange transition-all duration-500 ease-in-out w-[20px] h-[20px] hover:scale-125" />
                      <Link className="text-[14px] text-[#6c757d] hover:text-color-orange">
                        <span className="font-medium ">Skype</span> :
                        virtualExpertsltd
                      </Link>
                    </li>
                    <li className="pb-6">
                      <IoLogoWhatsapp className="inline-block mr-2 cursor-pointer text-color-orange transition-all duration-500 ease-in-out w-[20px] h-[20px] hover:scale-125" />
                      <Link className="text-[14px] text-[#6c757d] hover:text-color-orange">
                        <span className="font-medium ">Whatsapp</span> :
                        +13473528622
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="pt-12 font-medium text-center md:text-start md:pt-[18px]">
                    Let’s Get Social
                    <div className="w-[25px] h-[2px] bg-color-orange mt-2 mx-auto md:mx-0"></div>
                  </h3>
                  <div className="flex items-center justify-center gap-4 pt-4 social-icons md:items-start md:justify-start">
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

                  <h3 className="pt-16 font-medium text-center md:text-start md:pt-6">
                    Payment Method
                    <div className="w-[25px] h-[2px] bg-color-orange mt-2 mx-auto md:mx-0"></div>
                  </h3>
                  <div className="flex items-center justify-center gap-4 pt-4 payment-icons md:items-center md:justify-start">
                    <img src="virtual-experts/images/PayPal.svg" alt="" />
                    <img src="virtual-experts/images/Payoneer.svg" alt="" />
                    <img src="virtual-experts/images/Skrill.svg" alt="" />
                    <img src="virtual-experts/images/Bitcoin.svg" alt="" />
                  </div>
                </div>
              </div>

              <hr className="mt-8" />
              <p className="text-[14px] text-color-gray text-center pt-8">
                © 2014-2021 Virtual Experts Limited | All Right Reserved
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
