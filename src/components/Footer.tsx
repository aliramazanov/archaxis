"use client";
import { FooterProps } from "@/types/Types";
import Link from "next/link";
import React from "react";
import { BiSolidHeart } from "react-icons/bi";

const footerContent = {
  mainLinks: [
    {
      heading: "Product",
      links: [
        {
          href: "#",
          label: "Overview",
        },
        {
          href: "#",
          label: "Solutions",
          badge: "New",
        },
        {
          href: "#",
          label: "Guidance",
        },
        {
          href: "#",
          label: "Pricing",
        },
        {
          href: "#",
          label: "Works",
        },
      ],
    },
    {
      heading: "Company",
      links: [
        {
          href: "#",
          label: "About Us",
        },
        {
          href: "#",
          label: "Leadership",
        },
        {
          href: "#",
          label: "Join Us",
          badge: "We are hiring!",
        },
        {
          href: "#",
          label: "Publication",
        },
        {
          href: "#",
          label: "Contact",
        },
        {
          href: "#",
          label: "Our Brand",
        },
      ],
    },
    {
      heading: "Resources",
      links: [
        {
          href: "#",
          label: "Blog",
        },
        {
          href: "#",
          label: "Events",
        },
        {
          href: "#",
          label: "Newsletter",
        },
        {
          href: "#",
          label: "Support",
        },
        {
          href: "#",
          label: "Content",
        },
      ],
    },
  ],
};

const Copyright = () => {
  return (
    <div className="pt-7 mt-7 md:mt-14 md:pt-14 border-t border-t-gray-100 text-center text-gray-500">
      <p className="text-center items-center mx-auto text-sm">
        &copy; 2024{" "}
        <Link className="text-green-600" href={"/"}>
          archaxis.
        </Link>
        <span> Created with </span>
        <BiSolidHeart className={"text-red-500 mx-1 inline-block"} />
      </p>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer>
      <div className={`${className} overflow-hidden w-full h-full relative`}>
        <div className="container px-4 mx-auto z-20 relative">
          <div className="md:flex">
            <div className="md:w-4/12 mb-10 md:mb-0">
              <Link href={"/"} className="text-4xl text-gray-800 font-bold">
                archaxis<span className="text-green-500">.</span>
              </Link>
            </div>
            <div className="md:w-8/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {footerContent.mainLinks.map((mainlink, idx) => (
                  <div className="mb-10 md:mb-0" key={mainlink.heading}>
                    <h3 className="text-gray-800 mb-3">{mainlink.heading}</h3>
                    <ul className="list-none">
                      {mainlink.links.map((link, idx) => (
                        <li className="mb-2" key={link.label}>
                          <Link
                            className={`${
                              link.badge ? "flex gap-2 items-center" : ""
                            } text-gray-500 duration-300 transition-all ease-in-out hover:text-green-600`}
                            href={link.href}
                          >
                            {link.badge ? (
                              <>
                                <span>{link.label}</span>{" "}
                                <span className="py-[0.5] px-2 rounded-full bg-green-200 border border-green-600 text-sm text-green-600 font-semibold">
                                  {link.badge}
                                </span>
                              </>
                            ) : (
                              link.label
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
