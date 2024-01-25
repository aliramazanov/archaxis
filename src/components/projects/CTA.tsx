import { CTATypes } from "@/types/Types";
import Link from "next/link";
import React from "react";

const CTA: React.FC<CTATypes> = ({
  className,
  ctaTitle,
  ctaLabel,
  ctaLink,
  desc,
}) => {
  return (
    <section>
      <div className={className}>
        <div className="container px-4 mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-2xl items-center mx-auto text-center">
              <h2 className="text-white text-6xl font-thin mb-8">
                <p className="text-white text-lg opacity-600 leading-relaxed mb-8">
                  {desc}
                </p>
                <p>
                  <Link
                    className="transition-all duration-300 ease-in-out inline-block text-xs tracking-[2px] font-bold uppercase bg-green-500 py-4 px-5 text-white hover:bg-white hover:text-green-600 hover:shadow-2xl"
                    href={ctaLink}
                  >
                    {ctaLabel}
                  </Link>
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
