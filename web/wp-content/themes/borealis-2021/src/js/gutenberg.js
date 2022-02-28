// import customButtonIcons from './blocks/core-extends/button-icons';
import customVideoPoster from './blocks/core-extends/video-embed-poster.jsx';
import registerRichTextBlocks from "./blocks/copy/copy-blocks.jsx";

// Meta
import pageMetaBlock from "./blocks/meta/page-meta.jsx"
import researchBlogMetaBlock from "./blocks/meta/research-blogs-meta.jsx";
import newsMetaBlock from "./blocks/meta/news-meta.jsx"
import teamMemberMetaBlock from "./blocks/meta/team-member-meta.jsx";
import authorMetaBlock from './blocks/meta/author-meta.jsx';
import publicationMetaBlock from './blocks/meta/publications-meta.jsx';
import productMetaBlock from './blocks/meta/product-meta.jsx';

import textColumnBlock from "../js/blocks/text-column.jsx";
import imageTextBlock from "./blocks/image-text.jsx";

// Text 2 Up Blocks
import text2UpBlock from "./blocks/text-2-up-block.jsx";
import text2UpContainerBlock from "./blocks/text-2-up-container-block.jsx";

// Page Strips
import imageBlock from "./blocks/image-block.jsx";

// Accordion Blocks
import accordionContainerBlock from "./blocks/accordion/accordion.jsx";
import accordionRowBlock from "./blocks/accordion/accordion-row.jsx";

// Block Quote
import blockquoteBlock from './blocks/blockquote/blockquote.jsx';

// Body Copy
import bodyCopyBlock from "./blocks/body-copy.jsx";

// Callout Columns
import calloutContainerBlock from "./blocks/callouts/callout-container.jsx";
import calloutColumnBlock from "./blocks/callouts/callout-column.jsx";

// Code
import compareCodeBlock from './blocks/code/compare-code-block.jsx';
import codeBlock from './blocks/code/code-block.jsx';

// Content Columns
import contentCardContainerBlock from "./blocks/content-cards/content-card-container.jsx";
import contentCardBlock from "./blocks/content-cards/content-card.jsx";

// Figures
import compareFiguresBlock from './blocks/figures/compare-figures-block.jsx';

// Gallery
import galleryContainerBlock from './blocks/gallery/gallery-container-block.jsx';

// Image List Blocks
import imageListContainerBlock from "./blocks/image-list/image-list-container.jsx";
import imageListBlock from "./blocks/image-list/image-list-block.jsx";

// Logo Blocks
import logosContainer from "./blocks/logos/logo-container.jsx";
import logosSubsection from "./blocks/logos/logos-subsection.jsx";
import logoBlock from "./blocks/logos/logo.jsx";

// Page Strips
import pageStripBlock from "./blocks/page-strips/page-strip.jsx";
import pageStripGraphic from "./blocks/page-strips/page-strip-graphic.jsx";
import pageStripGraphicContainer from "./blocks/page-strips/page-strip-graphic-container.jsx";

// Publications
import publicationsContainerBlock from './blocks/publications/publications-container.jsx';
import selectPostsBlocks from './blocks/publications/select-posts-blocks.jsx';
import bibtexBlock from './blocks/publications/bibtex-block.jsx';

// Posts
import featuredPostsContainerBlock from './blocks/posts/featured-posts-container.jsx';

// Products
import productContainerBlock from './blocks/products/product-container.jsx';

// Slider Blocks
import sliderBlock from "./blocks/slider/slider-container.jsx";
import newsSlideBlock from './blocks/slider/news-slide.jsx';

// Stat Blocks
import stateContainerBlock from "./blocks/stats/stats-container.jsx";
import statColumnBlock from "./blocks/stats/stats-column.jsx";

// Greenhouse Blocks
import jobBlock from "./blocks/greenhouse/jobs-block.jsx";
import selectJobBlock from './blocks/greenhouse/select-job-block.jsx';
import featuredJobsBlock from './blocks/greenhouse/jobs-list.jsx';
import jobHighlightBlock from './blocks/greenhouse/job-highlight-block.jsx';

// Sidebar Table Of Contents Blocks
import customSectionBlock from './blocks/sidebar-table-of-contents/custom-section-blok.jsx';
import customSubsectionBlock from './blocks/sidebar-table-of-contents/custom-subsection-blok.jsx';

// Icon List Contents Blocks
import iconListContainerBlock from './blocks/icon-list/icon-list-container-block.jsx';
import iconListItemBlock from './blocks/icon-list/icon-list-item-block.jsx';

// Tabbed Content Blocks
import tabbedContentContainerBlock from "./blocks/tabbed-content/tabbed-content-container.jsx";
import tabbedContentPanelBlock from "./blocks/tabbed-content/tabbed-content-panel.jsx";

// Tag Cloud Content Blocks
import tagCloudContainerBlock from "./blocks/tag-cloud/tag-cloud-container-block.jsx";
import tagCloudItemBlock from "./blocks/tag-cloud/tag-cloud-item-block.jsx";

// Image & Text Strip Block
import imageTextStripBlock from "./blocks/image-text-strip-block.jsx";

// Statisitcs Blocks
import statisticsBlock from "./blocks/statistics-block.jsx";
import statisticsContainerBlock from "./blocks/statistics-container-block.jsx";

// Core Extends Blocks
customVideoPoster();
registerRichTextBlocks();

// Init meta blocks
pageMetaBlock();
researchBlogMetaBlock();
newsMetaBlock();
teamMemberMetaBlock();
authorMetaBlock();
publicationMetaBlock();
productMetaBlock();

// Init blocks here
textColumnBlock();
imageTextBlock();

// Page Strips
pageStripBlock();
imageBlock();
pageStripGraphic();
pageStripGraphicContainer();

// Accordion Blocks
accordionContainerBlock();
accordionRowBlock();

// Block Quote
blockquoteBlock();

// Body Copy
bodyCopyBlock();

// Callout Columns
calloutContainerBlock();
calloutColumnBlock();

// Content Cards
contentCardContainerBlock();
contentCardBlock();

// Code
compareCodeBlock();
codeBlock();

// Figures
compareFiguresBlock();

// Gallery
galleryContainerBlock();

// Image List Blocks
imageListContainerBlock();
imageListBlock();

// Logo Blocks
logosContainer();
logosSubsection();
logoBlock();

// Publications
publicationsContainerBlock();
selectPostsBlocks();
bibtexBlock();

// Posts
featuredPostsContainerBlock();

// Products
productContainerBlock();

// Slide Blocks
sliderBlock();
newsSlideBlock();


// Stat Blocks
stateContainerBlock();
statColumnBlock();

// Greenhouse Blocks
jobBlock();
selectJobBlock();
featuredJobsBlock();
jobHighlightBlock();

// Sidebar Table Of Contents Blocks
customSectionBlock();
customSubsectionBlock();

// Icon List Blocks
iconListContainerBlock();
iconListItemBlock();

// Tabbed Content Blocks
tabbedContentContainerBlock();
tabbedContentPanelBlock();

// Tag Cloud Content Blocks
tagCloudContainerBlock();
tagCloudItemBlock();

// Text 2 Up Blocks
text2UpContainerBlock();
text2UpBlock();
// Image & Text Strip Block
imageTextStripBlock();

// Statistics Content Blocks
statisticsContainerBlock();
statisticsBlock();