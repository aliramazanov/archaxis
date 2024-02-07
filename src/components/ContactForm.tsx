"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PropTypes } from "@/types/Types";

const ContactForm: React.FC<PropTypes> = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className={`${className} `}
    >
      <div className="container px-4 mx-auto">
        <div className="lg:flex items-stretch mb-32 px-14">
          <div className="lg:w-6/12 flex-1">
            <Image
              src={"/project5.jpg"}
              width={1000}
              height={600}
              alt="Image"
              className="lg:rounded-tl-3xl lg:rounded-bl-3xl object-cover object-center max-w-full h-full bg-white"
            />
          </div>
          <div className="lg:w-6/12 flex-1 ">
            <form className="p-14 bg-white h-full lg:rounded-tr-3xl lg:rounded-br-3xl">
              <h2 className="text-gray-800 mb-4 text-3xl">Get In Touch</h2>
              <p className="text-gray-500 mb-6">
                Do you have any questions or feedback to share with us? Please
                use the form below to get in touch.
              </p>
              <div className="flex space-x-5">
                <div className="w-6/12 mb-6">
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-gray-600 text-base"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="rounded-0 appearance-none !text-base p-2  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-600 focus:ring-green-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
                <div className="w-6/12 mb-6">
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-gray-600 text-base"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="rounded-0 appearance-none !text-base p-2 outline-1mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-600 focus:ring-green-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                  />
                </div>
              </div>
              <div className="block mb-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-gray-600 text-base"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="text"
                  className="rounded-0 appearance-none !text-base p-2 outline-1mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-600 focus:ring-green-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                />
              </div>
              <div className="block mb-6">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-gray-600 text-base"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  className="rounded-0 appearance-none !text-base p-2 outline-1mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-600 focus:ring-green-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                />
              </div>
              <div className="block mb-6">
                <label
                  htmlFor="submit"
                  className="mb-2 block text-gray-600 text-base"
                >
                  Submit
                </label>

                <textarea
                  name=""
                  id="message"
                  cols={28}
                  rows={7}
                  className="rounded-0 appearance-none !text-base p-2 outline-1mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-600 focus:ring-green-600 block w-full sm:text-sm focus:ring-1 outline-gray-300"
                />
              </div>
              <div className="block mb-6">
                <input
                  type="submit"
                  className="cursor-pointer w-full block transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-green-600 py-4 px-5 text-white hover:bg-white hover:text-green-600 hover:shadow-2xl"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
