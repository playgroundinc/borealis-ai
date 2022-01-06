// import customButtonIcons from './blocks/core-extends/button-icons';
import customVideoPoster from './blocks/core-extends/video-embed-poster.jsx';

// Meta
import pageMetaBlock from "./blocks/meta/page-meta.jsx"
import locationMetaBlock from "./blocks/meta/location-meta.jsx"
import newsReleaseMetaBlock from "./blocks/meta/news-releases-meta.jsx";
import researchBlogMetaBlock from "./blocks/meta/research-blogs-meta.jsx";


// Development Blocks
import developmentBlocks from "./development/blocks/development-blocks.jsx"

import textColumnBlock from "../js/blocks/text-column.jsx";
import imageTextBlock from "./blocks/image-text.jsx";

// Page Strips
import pageStripBlock from "./blocks/page-strip.jsx";
import featurePageStripBlock from "./blocks/feature-strip.jsx";
import imageBlock from "./blocks/image-block.jsx";
import trmcPageStripGraphic from "./blocks/page-strip-graphic.jsx";

// Form Blocks
import formContainerBlock from "./blocks/form-container.jsx";
import inputRowBlock from "./blocks/forms/input-row.jsx";
import textInputBlock from "./blocks/forms/input-block.jsx";
import selectInputBlock from "./blocks/forms/select-block.jsx";
import dateInputBlock from "./blocks/forms/date-input-block.jsx";
import numberInputBlock from "./blocks/forms/number-input-block.jsx";
import textareaBlock from "./blocks/forms/textarea-block.jsx";
import selectDestinationBlock from "./blocks/forms/destination-select-block.jsx";

// Form Embed Blocks
import cognitoEmbedBlock from "./blocks/cognito-embed-block.jsx";
import formStackEmbedBlock from "./blocks/formstack-embed-block.jsx";

// Accordion Blocks
import accordionContainerBlock from "./blocks/accordion.jsx";
import accordionRowBlock from "./blocks/accordion-row.jsx";

// Body Copy
import bodyCopyBlock from "./blocks/body-copy.jsx";
import trmcBodyCopyImageBlock from "./blocks/body-copy-image.jsx";

// Callout Columns
import calloutContainerBlock from "./blocks/callout-container.jsx";
import calloutColumnBlock from "./blocks/callout-column.jsx";

// Content Columns
import contentCardContainerBlock from "./blocks/content-cards/content-card-container.jsx";
import contentCardBlock from "./blocks/content-cards/content-card.jsx";

// Document Blocks
import documentRowBlock from "./blocks/document-row.jsx";

// Image List Blocks
import imageListContainerBlock from "./blocks/image-list/image-list-container.jsx";
import imageListBlock from "./blocks/image-list/image-list-block.jsx";

// Logo Blocks
import logosContainer from "./blocks/logos/logo-container.jsx";
import logoBlock from "./blocks/logos/logo.jsx";

// Slider Blocks
import sliderBlock from "./blocks/slider/slider-container.jsx";
import imageSlideBlock from "./blocks/slider/image-slide.jsx";
import testimonialSliderBlock from "./blocks/slider/testimonial-slider-container.jsx";
import testimonialSlide from "./blocks/slider/testimonial-slide.jsx";
import trmcBodyCopySliderBlock from "./blocks/slider/body-copy-slider-container.jsx";
import trmcBodyCopyImageSlideBlock from "./blocks/slider/body-copy-image-slide.jsx";

// Stat Blocks
import stateContainerBlock from "./blocks/stats-container.jsx";
import statColumnBlock from "./blocks/stats-column.jsx";

// Timeline Blocks 
import timelineContainerBlock from "./blocks/timeline/timeline-container-block.jsx";
import trmcMilestoneBlock from './blocks/timeline/milestone-block.jsx';

// Greenhouse Blocks
import jobBlock from "./blocks/greenhouse/jobs-block.jsx";

// Core Extends Blocks
// customButtonIcons();
customVideoPoster();

// Init meta blocks
pageMetaBlock();
locationMetaBlock();
newsReleaseMetaBlock();
researchBlogMetaBlock();

// Init development blocks!
developmentBlocks();

// Init blocks here
textColumnBlock(); 
imageTextBlock();

// Page Strips
pageStripBlock();
featurePageStripBlock();
imageBlock();
trmcPageStripGraphic();

// Accordion Blocks
accordionContainerBlock();
accordionRowBlock();

// Body Copy
bodyCopyBlock();
trmcBodyCopyImageBlock();

// Callout Columns
calloutContainerBlock();
calloutColumnBlock();

// Content Cards
contentCardContainerBlock();
contentCardBlock();

//Document Blocks
documentRowBlock();

// Form blocks
formContainerBlock();
inputRowBlock();
textInputBlock();
selectInputBlock();
dateInputBlock();
numberInputBlock();
textareaBlock();
selectDestinationBlock();

//Form Embed Blocks
cognitoEmbedBlock();
formStackEmbedBlock();

// Image List Blocks
imageListContainerBlock();
imageListBlock();

// Logo Blocks
logosContainer();
logoBlock();

// Slide Blocks
sliderBlock();
imageSlideBlock();
testimonialSliderBlock();
testimonialSlide();
trmcBodyCopySliderBlock();
trmcBodyCopyImageSlideBlock();

// Stat Blocks
stateContainerBlock();
statColumnBlock();

// Timeline Blocks
timelineContainerBlock();
trmcMilestoneBlock();

// Greenhouse Blocks
jobBlock();

