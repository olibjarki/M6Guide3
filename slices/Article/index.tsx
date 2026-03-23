import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";
import { richTextComponents } from "@/app/components/richTextComponents";

export type ArticleProps = SliceComponentProps<Content.ArticleSlice>;

const Article: FC<ArticleProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="max-w-2xl mx-auto py-6 px-6 bg-white rounded-2xl"
    >
      {isFilled.richText(slice.primary.title) && (
        <PrismicRichText field={slice.primary.title} components={richTextComponents} />
      )}
      {isFilled.image(slice.primary.image) && (
        <PrismicImage field={slice.primary.image} className="w-full rounded-lg mb-6" />
      )}
      {isFilled.richText(slice.primary.body) && (
        <PrismicRichText field={slice.primary.body} components={richTextComponents} />
      )}
    </section>
  );
};

export default Article;
