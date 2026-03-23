import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type AboutTextProps = SliceComponentProps<Content.AboutTextSlice>;

const AboutText: FC<AboutTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-2xl mx-auto py-4"
    >
      <div className="bg-white rounded-2xl p-6 prose prose-lg">
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-2xl font-bold mb-4">{children}</h1>
            ),
            heading2: ({ children }) => (
              <h2 className="text-xl font-bold mb-4">{children}</h2>
            ),
          }}
        />
        <PrismicRichText field={slice.primary.body} />
      </div>
    </section>
  );
};

export default AboutText;
