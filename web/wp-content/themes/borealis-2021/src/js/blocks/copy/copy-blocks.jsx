import { namespace } from "../helper-functions/constants";
import customRichTextBlock from "../reusable/custom-richtext-block.jsx";

const blocks = [
  {
    slug: "paragraph",
    title: "Paragraph",
    description: "Add a paragraph",
    classes: "paragraph-blog mt-10 md:mt-15 wp-block-pg-paragraph first:mt-0",
    category: "copy",
    icon: "editor-paragraph",
    tagName: "p",
    transforms: [`heading-two`, `heading-three`, `heading-four`, `legal`],
  },
  {
    slug: "heading-two",
    title: "Heading Two",
    description: "Add a second level header",
    classes: "wp-block-pg-heading-two h3 md:h2 mt-11 md:mt-13 first:mt-0",
    category: "copy",
    icon: "heading",
    tagName: "h2",
    transforms: [`paragraph`, `heading-three`, `heading-four`, `legal`],
  },
  {
    slug: "heading-three",
    title: "Heading Three",
    classes: "h3 mt-11 md:mt-13 first:mt-0 wp-block-pg-heading-three first:mt-0",
    description: "Add a third level header",
    category: "copy",
    icon: "heading",
    tagName: "h3",
    transforms: [`paragraph`, `heading-two`, `heading-four`, `legal`],
  },
  {
    slug: "heading-four",
    title: "Heading Four",
    classes: "h4 mt-9 md:mt-10 wp-block-pg-heading-four first:mt-0",
    description: "Add a fourth level header",
    category: "copy",
    icon: "heading",
    tagName: "h4",
    transforms: [`paragraph`, `heading-two`, `heading-three`, `legal`],
  },
  {
    slug: "legal",
    title: "Legal Text",
    classes: "legal mt-8 wp-block-pg-paragraph first:mt-0",
    description: "Add legal text",
    category: "copy",
    icon: "editor-paragraph",
    tagName: "p",
    transforms: [`paragraph`, `heading-two`, `heading-three`, `heading-four`],
  },
];

export default function registerBodyCopyBlocks() {
  blocks.forEach((block) => {
    customRichTextBlock(block);
  });
}
