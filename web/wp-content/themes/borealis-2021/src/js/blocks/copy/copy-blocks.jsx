import { namespace } from "../helper-functions/constants";
import customRichTextBlock from "../reusable/custom-richtext-block.jsx";

const blocks = [
    {
        slug: 'paragraph',
        title: "Paragraph",
        description: "Add a paragraph",
        category: "common",
        icon: "editor-paragraph",
        tagName: "p",
        transforms: [
            `heading-two`,
            `heading-three`,
            `heading-four`,
            `heading-five`,
            `heading-six`,
            `legal`,
        ]
    },
    {
        slug: 'heading-two',
        title: "Heading Two",
        description: "Add a second level header",
        category: "common",
        icon: "heading",
        tagName: "h2",
        transforms: [
            `paragraph`,
            `heading-three`,
            `heading-four`,
            `heading-five`,
            `heading-six`,
            `legal`,
        ]
    },
    {
        slug: 'heading-three',
        title: "Heading Three",
        description: "Add a third level header",
        category: "common",
        icon: "heading",
        tagName: "h3",
        transforms: [
            `paragraph`,
            `heading-two`,
            `heading-four`,
            `heading-five`,
            `heading-six`,
            `legal`,
        ]
    },
    {
        slug: 'heading-four',
        title: "Heading Four",
        description: "Add a fourth level header",
        category: "common",
        icon: "heading",
        tagName: "h4",
        transforms: [
            `paragraph`,
            `heading-two`,
            `heading-three`,
            `heading-five`,
            `heading-six`,
            `legal`,
        ]
    },
    {
        slug: 'heading-five',
        title: "Heading Five",
        description: "Add a fifth level header",
        category: "common",
        icon: "heading",
        tagName: "h5",
        transforms: [
            `paragraph`,
            `heading-two`,
            `heading-three`,
            `heading-four`,
            `heading-six`,
            `legal`,
        ]
    },
    {
        slug: 'heading-six',
        title: "Heading Six",
        description: "Add a sixth level header",
        category: "common",
        icon: "heading",
        tagName: "h6",
        transforms: [
            `paragraph`,
            `heading-two`,
            `heading-three`,
            `heading-four`,
            `heading-five`,
            `legal`,
        ]
    },
    {
        slug: 'legal',
        title: "Legal Text",
        description: "Add legal text",
        category: "common",
        icon: "editor-paragraph",
        tagName: "p",
        transforms: [
            `paragraph`,
            `heading-two`,
            `heading-three`,
            `heading-four`,
            `heading-five`,
            `heading-six`,
        ]
    },
]

export default function registerBodyCopyBlocks() {
    blocks.forEach((block) => {
        customRichTextBlock(block);
    })
}