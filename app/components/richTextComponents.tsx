import { RichTextComponents } from "@prismicio/react";

export const richTextComponents: RichTextComponents = {
  heading1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-4">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-2xl font-semibold mb-3">{children}</h2>
  ),
  paragraph: ({ children }) => (
    <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
};
