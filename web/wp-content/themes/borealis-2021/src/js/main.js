// require('./scripts/polyfills/closest-polyfill');

import '../sass/style.scss';
import search from './scripts/search';
import loadMore from './scripts/load-more';
import animate from './scripts/animate';
// import fixSkipLinkFocus from './scripts/skip-link-focus-fix';
import navigation from './scripts/navigation';
import accordion from './scripts/accordion';
// import videoBlocks from './scripts/video-block';

// // Import JS Modules here
animate();
// fixSkipLinkFocus();
navigation();
accordion();
loadMore();
// videoBlocks();
// heroVideo();

search();