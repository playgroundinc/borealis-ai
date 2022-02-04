import { namespace } from "../helper-functions/constants";
import selectPostBlock from "../reusable/custom-post-column.jsx";

export default function selectPostsBlocks() {
    const parent = [`${namespace}/publications-container`];
    const icon = 'open-folder';
    const selectBlocks = [
        {
            icon,
            parent, 
            slug: 'publications',
            single: 'Publication',
        },
        {
            icon,
            parent, 
            slug: 'research-blogs',
            single: 'Research',
        },
        {
            icon,
            parent, 
            slug: 'news',
            single: 'News',
        },
    ]
    selectBlocks.forEach((block) => selectPostBlock(block));
}