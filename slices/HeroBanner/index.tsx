import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import logo from "@/app/logo.svg";

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner: FC<HeroBannerProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-2xl mx-auto p-6 gap-4 flex flex-col  rounded-2xl"
    >
        <Image src={logo} alt="Logo" className="w-160" />

      <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
        <PrismicRichText field={slice.primary.body} />
        <PrismicNextImage field={slice.primary.image} className="w-full rounded-lg" />
      </div>


    </section>
  );
};

export default HeroBanner;
