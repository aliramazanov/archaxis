"use client";
import { NavMenuItem } from "@/types/Types";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navMenu: NavMenuItem[] = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname: string = usePathname();
  const [windowDimensions, setWindowDimensions] = useState<{
    height: number;
    width: number;
  }>({
    height: typeof window !== "undefined" ? window.innerHeight : 0,
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <header role="banner">
        <div className="py-10 absolute w-full z-[3]">
          <div className="container px-4 mx-auto flex items-center justify-between">
            <div>
              <Link href={"/"} className="text-[22px] text-gray-800 font-bold">
                archaxis<span className="text-green-600">.</span>
              </Link>
            </div>
            <div className="flex">
              <ul className="hidden md:flex space-x-8" role="list">
                {navMenu.map((menu) => (
                  <li key={menu.label}>
                    <Link
                      href={menu.href}
                      className={`text-gray-800 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-green-600 before:origin-[100%, 50%] before:transition-all before:duration-300 before:ease-in-out before:scale-x-0 before:scale-y-[1] before:scale-z-[1] before:will-change-transform hover:before:origin-[100%, 0%] hover:before:scale-x-[1] hover:before:scale-y-[1] hover:before:scale-z-[1] text-[14px] tracking-[2px] font-semibold pb-2`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                className="md:hidden text-md"
                onClick={() => setOpen(true)}
                type="button"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>
      <Transition.Root show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as="div"
            enter="ease-in-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-25 transition-opacity "></div>
          </Transition.Child>
          <div className="fixed inset-0">
            <div className="absolute inset-0">
              <div className="pointer-events-none inset-y-0 right-0 flex min-w-screen pl-28">
                <Transition.Child
                  as="div"
                  enter="transform transition-all ease-in-out duration-1000 sm:duration-1000"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition-all ease-in-out duration-1000 sm:duration-1000"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen h-screen max-w-screen">
                    <div className="flex flex-col h-screen bg-white shadow-xl">
                      <div className="flex-1 px-12 py-12 sm:px-12">
                        <div className="flex items-start justify-between">
                          <Dialog.Title
                            className={"text-lg font-medium text-gray-900"}
                          >
                            Menu
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-600"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-0.5 "></span>
                              <span className="sr-only">Close Panel</span>
                              <XMarkIcon
                                className="h-6 w-6 mr-28"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list">
                              {navMenu.map((menu) => (
                                <li key={menu.label}>
                                  <Link
                                    href={menu.href}
                                    className="py-2 inline-block"
                                  >
                                    {menu.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div>
                          <Link
                            className="block text-center text-xs tracking-[2px] font-bold bg-violet-600 hover:bg-violet-800 py-4 px-5 mr-28 text-white"
                            href={"/contact"}
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </React.Fragment>
  );
};

export default Navigation;
