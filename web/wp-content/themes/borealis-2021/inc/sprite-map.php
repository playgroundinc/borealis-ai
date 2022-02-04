<?php
/**
 * A function that returns a Sprite Map
 *
 * Used in header.php for inclusion on every page.
 *
 * @package pg-wp-starter
 */

if ( ! function_exists( 'pg_svg_spritemap' ) ) {
    /**
     *
     * Outputs a sprite map at the top of each page.
     * When adding new icons, be sure to include the viewbox so the svg can be properly calculated
     * Consider changing the value of any `fill` properties to `currentColor` so the svg color can be controlled with the CSS `color` property.
     * Usage:
     * <svg class="icon" aria-labelledby="TITLE-ID"><title id="TITLE-ID">[TITLE]</title><use xlink:href="#icon-id"></use></svg>
     *
     * ICON LIST:
     * 
     * Facebook
     * Twitter
     * Instagram
     * LinkedIn
     * YouTube
     * Hamburger
     * 
     **/
    function pg_svg_spritemap() {
?>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display: none">

            <!-- Github -->
            <symbol id="icon-github"  viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9633 0C5.3578 0 0 5.50719 0 12.2969C0 17.7286 3.44954 22.3305 8.14679 23.9902C8.73395 24.0657 8.95413 23.6885 8.95413 23.3867C8.95413 23.0849 8.95413 22.3305 8.95413 21.2744C5.65138 22.0288 4.91743 19.6147 4.91743 19.6147C4.40367 18.1813 3.59633 17.8041 3.59633 17.8041C2.49541 17.0497 3.66972 17.0497 3.66972 17.0497C4.84404 17.1251 5.50459 18.3322 5.50459 18.3322C6.6055 20.2182 8.29358 19.6901 8.95413 19.3883C9.02752 18.5585 9.3945 18.0304 9.68807 17.7286C7.04587 17.4269 4.25688 16.3707 4.25688 11.6179C4.25688 10.26 4.69725 9.2038 5.50459 8.29851C5.43119 8.07219 4.99083 6.78969 5.65138 5.12999C5.65138 5.12999 6.6789 4.82822 8.95413 6.41249C9.90826 6.11072 10.9358 6.03528 11.9633 6.03528C12.9908 6.03528 14.0183 6.18616 14.9725 6.41249C17.2477 4.82822 18.2752 5.12999 18.2752 5.12999C18.9358 6.78969 18.4954 8.07219 18.422 8.37395C19.156 9.2038 19.6697 10.3354 19.6697 11.6934C19.6697 16.4461 16.8807 17.4269 14.2385 17.7286C14.6789 18.1058 15.0459 18.8603 15.0459 19.9919C15.0459 21.6516 15.0459 22.9341 15.0459 23.3867C15.0459 23.6885 15.2661 24.0657 15.8532 23.9902C20.6239 22.3305 24 17.7286 24 12.2969C23.9266 5.50719 18.5688 0 11.9633 0Z" fill="#5C5D76"/>
            </symbol>

            <!-- Twitter -->
            <symbol id="icon-twitter"  viewBox="0 0 24 24" fill="none">
                <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029Z" fill="#5C5D76"/>
            </symbol>


            <!-- LinkedIn -->
            <symbol id="icon-linkedin"  viewBox="0 0 24 24" fill="none" >
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" fill="#5C5D76"/>
                <path d="M6 9H2V21H6V9Z" fill="#5C5D76"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="#5C5D76"/>
            </symbol>

            <!-- YouTube -->
            <symbol id="icon-youtube" viewBox="0 0 24 18" fill="none">
                <path d="M23.4 3.08036C23.1 2.01786 22.35 1.25893 21.3 0.955357C19.5 0.5 11.85 0.5 11.85 0.5C11.85 0.5 4.35001 0.5 2.40001 0.955357C1.35001 1.25893 0.599995 2.01786 0.299995 3.08036C-4.58956e-06 5.05357 0 9 0 9C0 9 4.55976e-06 12.9464 0.450005 14.9196C0.750005 15.9821 1.5 16.7411 2.55 17.0446C4.35 17.5 12 17.5 12 17.5C12 17.5 19.5 17.5 21.45 17.0446C22.5 16.7411 23.25 15.9821 23.55 14.9196C24 12.9464 24 9 24 9C24 9 24 5.05357 23.4 3.08036ZM9.59999 12.6429V5.35714L15.9 9L9.59999 12.6429Z" fill="#5C5D76"/>
            </symbol>

            <!-- Down Chevron -->
            <symbol id="icon-chevron" viewBox="0 0 10 10">
                <path d="m2 3.5 3 3.066L8 3.5" stroke="#5C5D76" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Hamburger Icon -->
            <symbol id="icon-hamburger" viewBox="0 0 22 22">
                <g transform="translate(1 5)" fill="currentColor" fill-rule="nonzero">
                    <rect width="20" height="1.5" rx=".75"/><rect y="5.25" width="20" height="1.5" rx=".75"/><rect y="10.5" width="20" height="1.5" rx=".75"/>
                </g>
            </symbol>

            <!-- RBC Icon -->
            <symbol  id="icon-rbc" viewBox="0 0 50 66" fill="none" >
                <path d="M50 57.588C50 59.7564 49.1096 61.0146 47.3724 61.684C40.6137 64.2841 32.6119 65.625 25 65.625C17.3881 65.625 9.38629 64.2841 2.62761 61.684C0.890389 61.0146 -1.57506e-06 59.7564 -1.57506e-06 57.588V4.76837e-06H50V57.588Z" fill="#2B59AF"/>
                <path d="M13.4089 35.0943C6.48658 30.7799 4.20004 28.8693 4.0056 26.0379C3.9716 25.4629 4.10335 24.4944 4.34348 23.8016L3.69109 23.3688C3.1694 24.1995 2.83789 25.2921 2.83789 26.2978C2.83789 27.9326 3.36065 29.1685 4.00454 30.1572C4.9778 31.653 6.00101 32.5929 8.5213 34.4791C11.2371 36.5148 13.0901 38.8901 14.158 41.3746H14.5437V38.5548C18.2147 40.633 21.45 42.5903 23.0417 46.0879H23.4263C22.8037 42.464 20.752 39.6698 13.4089 35.0943Z" fill="#F9DD06"/>
                <path d="M33.7248 25.6589C32.2108 26.3378 31.1663 27.2576 30.2355 28.5772L33.3307 28.4171C33.4412 27.0443 33.6218 26.1331 33.7248 25.6589ZM44.8792 36.6874C45.1905 35.9321 45.3902 35.2075 45.4444 34.2888L40.9234 34.0321C40.7183 35.2967 40.3815 36.3946 40.0213 37.2963L44.8792 36.6874ZM39.9841 25.4849C40.3093 26.3548 40.5547 27.1971 40.7322 28.0086L43.3916 27.8612C42.4768 26.8131 41.3102 25.9888 39.9841 25.4849ZM38.7771 28.1168C38.3234 26.5489 37.7805 25.4573 37.4957 24.9449C37.314 24.9343 37.1302 24.929 36.9443 24.929C36.6393 24.929 36.3301 24.9693 36.0348 25.0001C35.5949 26.097 35.2368 27.2056 34.9446 28.328L38.7771 28.1168ZM40.9957 29.5394C41.137 30.6703 41.1518 31.7311 41.0785 32.7103L45.4295 32.4812C45.318 31.4946 45.0375 30.56 44.6167 29.7049L40.9957 29.5394ZM39.5166 32.7931C39.4731 31.5572 39.319 30.438 39.1108 29.4525L34.7204 29.253C34.4176 30.5886 34.22 31.8903 34.1265 33.0774L39.5166 32.7931ZM40.1924 23.412L40.7067 22.6906L39.9087 21.6287L40.0426 21.3943L42.2845 22.6004L41.7957 24.0793C42.1559 24.2543 42.4885 24.4728 42.9316 24.7667L44.3808 22.3893L40.6312 20.4321H32.3425L25.6157 24.4728C26.879 25.3491 28.0414 26.2964 28.8681 27.2512C30.6701 24.6309 33.8375 22.9611 36.973 22.9611C37.9994 22.9611 39.1926 23.0693 40.1924 23.412ZM23.6086 23.1754L27.3221 20.9519C26.5932 20.5923 25.7868 20.361 24.8294 20.3483C23.5502 20.3292 21.3901 20.9179 20.3435 21.0771C20.8121 21.3953 22.4707 22.4541 23.6086 23.1754ZM24.3694 14.8053C23.0508 14.5168 22.3166 14.6791 21.559 15.3994C21.9288 15.5776 22.3941 15.6742 22.9073 15.6371C23.6469 15.5851 24.1069 15.1416 24.3694 14.8053ZM45.2967 46.0929H44.8282C44.8282 43.5129 42.4577 42.8117 39.9778 42.8117H32.2246C32.4743 44.0826 32.5911 45.572 32.3967 46.9766H32.0121C31.2927 41.1822 28.0127 38.3095 23.4258 35.2362V37.8734H23.0412C21.8225 35.1524 19.1439 32.5968 16.6066 30.7849H16.6077C15.933 30.3043 15.2349 29.8068 14.5432 29.3145V32.1587H14.1586C13.0822 29.3379 11.1293 27.2321 8.34659 24.7253C5.34072 22.0223 4.12733 20.4056 3.42394 18.547C2.99787 17.4203 2.87674 16.5101 2.86187 15.2732C2.83318 13.0613 3.95308 11.0637 5.34923 10.318V11.3884C4.65646 12.3028 4.29839 13.4602 4.29627 14.6377C4.29414 15.723 4.5534 16.9313 5.09528 17.9603C6.78787 21.1789 12.4904 25.1284 16.1115 27.5525C27.3731 35.093 29.6182 36.4095 31.4893 40.4099C31.6976 40.8565 31.9047 41.4559 32.0779 42.1508C33.7047 41.9004 39.6059 41.004 40.695 40.8321C40.9032 40.7993 41.3378 40.7441 41.562 40.7303C42.5788 40.0895 43.3736 39.2706 44.0695 38.2511L39.7546 37.918C39.5326 38.4113 39.3105 38.8261 39.1171 39.1592H38.7644C38.8834 38.7211 38.9854 38.2904 39.0736 37.866L37.9696 37.7822V37.5488L39.166 37.4014C39.3923 36.1814 39.5028 35.0293 39.5262 33.9515L34.0882 33.6438C34.0595 34.1997 34.0542 34.7248 34.0733 35.2118H33.7238C33.609 34.6686 33.5187 34.1318 33.4486 33.6078L32.2564 33.5388V33.176L33.3891 33.1156C33.2297 31.6781 33.2201 30.3383 33.2786 29.1862L30.0995 29.0408C30.2493 29.3198 30.4045 29.602 30.515 29.9118C31.2003 31.8245 31.0377 34.0693 30.8114 35.1025H30.4257C30.3694 33.9069 29.9667 32.444 29.5863 31.5497C28.7066 29.48 26.7335 27.6511 23.4258 25.5305V28.1752H23.0412C21.9405 24.7009 19.2034 22.7691 15.1329 20.6814C11.7732 18.9607 10.7298 16.8867 10.92 13.6766L12.0548 14.3471C12.3459 17.3503 14.6558 19.0827 17.0731 19.0646C18.4968 19.054 19.8303 18.8652 21.1202 18.6074C22.9807 18.2319 24.703 17.9115 26.1395 18.4196V16.647H25.0111C24.6063 16.996 23.7882 17.4002 22.5833 17.4193C21.2572 17.4437 18.7508 16.6809 18.7508 13.8845C18.7508 11.4552 20.8099 11.0669 22.4855 11.0669C23.3833 11.0669 24.8762 11.0351 25.3798 11.0065C25.7549 10.9831 26.0365 10.9269 26.2181 10.7465C26.4083 10.5598 26.4668 10.3678 26.5103 10.1196C26.5624 9.81937 26.5624 9.51066 26.5624 8.98873V7.215H18.7943V10.2872L15.8543 9.17119V8.43603H17.2611V7.215H12.0197V4.66366H10.2326C9.27736 4.66366 8.17659 5.33199 8.09902 6.62728C8.02465 7.86954 8.58459 8.91446 9.86493 8.91446H10.0944V10.4018H9.86493C7.62089 10.4018 5.93042 8.71927 5.93042 6.4862C5.93042 4.15976 7.91627 2.38814 10.3154 2.38814H14.1054V4.93948H28.8415V8.70867C28.8415 9.34305 28.8086 10.197 28.7459 10.7359C28.7023 11.1285 28.5621 11.835 27.8172 12.4025C27.3699 12.7452 26.6931 12.8831 25.5934 12.8863C25.2343 12.8884 24.1887 12.8714 22.936 12.7929C21.2573 12.6879 20.7802 13.334 20.7132 13.9355C20.6984 14.0617 20.6994 14.1858 20.7143 14.3025C21.4984 13.6946 22.612 13.2661 23.8753 13.6639C26.0991 14.3619 26.7345 14.4245 27.8927 13.5154L28.0096 13.7763C27.8842 13.9683 27.6611 14.2463 27.337 14.4913H28.4112V20.3005L31.7549 18.2987H41.1402C41.1402 18.2987 45.1065 20.3684 45.76 20.7111C46.3369 21.0124 46.5622 21.3784 46.6514 21.9151C46.7269 22.3628 46.6111 22.9304 46.3901 23.2964C46.2519 23.5223 45.1745 25.2865 44.604 26.2285C46.1999 27.9524 47.2773 30.3637 47.2773 33.0487C47.2773 35.4834 46.3741 38.6235 43.4458 40.9573C44.7336 41.3764 45.5581 42.0776 46.2073 43.0005L45.2967 46.0929Z" fill="#F9DD06"/>
                <path d="M25.2922 58.554H23.5167V53.4778H25.2114C27.5404 53.4778 28.434 54.1695 28.434 55.9125C28.434 57.7976 27.2674 58.554 25.2922 58.554ZM25.1519 48.4791C26.5587 48.4791 27.5149 48.7847 27.5149 50.2858C27.5149 51.8876 26.2357 52.3268 24.7758 52.3268H23.5167V48.4791H25.1519ZM27.9846 52.7607C29.2447 52.556 30.4496 51.5779 30.4496 50.0969C30.4496 48.7613 29.8812 47.2963 25.9467 47.2963H19.3027V47.4034C19.5067 47.4628 19.8212 47.6252 20.0306 47.831C20.4811 48.2723 20.6298 48.9289 20.6511 49.802V59.7305H26.1549C29.1831 59.7305 31.374 58.5773 31.374 55.9358C31.374 53.7876 29.7005 52.8732 27.9846 52.7607Z" fill="white"/>
                <path d="M9.28883 48.4802H11.2269C12.8419 48.4802 13.6834 48.9512 13.6834 50.6613C13.6834 52.1889 12.5816 53.0949 10.8157 53.0949H9.28883V48.4802ZM14.4049 59.7305H17.9909L13.4071 53.881C15.2442 53.3919 16.6202 52.3894 16.6202 50.5658C16.6202 48.4261 15.3388 47.2963 11.9844 47.2963H5.05469V47.4024C5.31075 47.4926 5.59551 47.657 5.78251 47.8416C6.26914 48.3179 6.41152 49.0467 6.41152 50.0333V59.7305H9.28883V54.2172H10.3407L14.4049 59.7305Z" fill="white"/>
                <path d="M43.0077 49.0003C43.778 49.4352 44.0118 50.0049 44.0161 50.0102L44.1361 50.0399L44.763 47.9119C44.763 47.9119 43.6378 47.1067 40.9613 47.1067C36.9131 47.1067 33.8828 49.1425 33.8828 53.5991C33.8828 58.62 37.4922 59.9238 40.6766 59.9238C43.6378 59.9238 44.8012 58.9818 44.8012 58.9818V57.5253C44.8012 57.5253 43.7547 58.498 41.5117 58.498C39.6587 58.498 36.9386 57.6547 36.8823 53.5269C36.8249 49.7164 38.491 48.4731 40.7212 48.4731C41.9643 48.4731 42.5848 48.7637 43.0077 49.0003Z" fill="white"/>
            </symbol>

            <!-- Careers Speech Icon -->
            <symbol id="icon-careers" viewBox="0 0 73 24" fill="none">
                <rect width="73" height="18" rx="9" fill="#0044FF"/>
                <path d="M16.5958 16.666H4.63086L5.40279 23.9993L11.1923 20.1397L16.5958 16.666Z" fill="#0044FF"/>
                <path d="M9.2017 13L7.21307 5.72727H8.10795L9.62784 11.6506H9.69886L11.2472 5.72727H12.2415L13.7898 11.6506H13.8608L15.3807 5.72727H16.2756L14.2869 13H13.3778L11.7727 7.20455H11.7159L10.1108 13H9.2017ZM19.0384 13.1136C18.5128 13.1136 18.0594 12.9976 17.6783 12.7656C17.2995 12.5312 17.0071 12.2045 16.8011 11.7855C16.5975 11.3641 16.4957 10.8741 16.4957 10.3153C16.4957 9.75663 16.5975 9.2642 16.8011 8.83807C17.0071 8.40956 17.2936 8.07576 17.6605 7.83665C18.0298 7.59517 18.4607 7.47443 18.9531 7.47443C19.2372 7.47443 19.5178 7.52178 19.7947 7.61648C20.0717 7.71117 20.3239 7.86506 20.5511 8.07812C20.7784 8.28883 20.9595 8.56818 21.0945 8.91619C21.2294 9.2642 21.2969 9.69271 21.2969 10.2017V10.5568H17.0923V9.83239H20.4446C20.4446 9.52462 20.383 9.25 20.2599 9.00852C20.1392 8.76705 19.9664 8.57647 19.7415 8.43679C19.5189 8.29711 19.2562 8.22727 18.9531 8.22727C18.6193 8.22727 18.3305 8.31013 18.0866 8.47585C17.8452 8.6392 17.6593 8.85227 17.5291 9.11506C17.3989 9.37784 17.3338 9.65956 17.3338 9.96023V10.4432C17.3338 10.8551 17.4048 11.2043 17.5469 11.4908C17.6913 11.7749 17.8913 11.9915 18.147 12.1406C18.4027 12.2874 18.6998 12.3608 19.0384 12.3608C19.2585 12.3608 19.4574 12.33 19.6349 12.2685C19.8149 12.2045 19.9699 12.1098 20.1001 11.9844C20.2304 11.8565 20.331 11.6979 20.402 11.5085L21.2116 11.7358C21.1264 12.0104 20.9832 12.2519 20.782 12.4602C20.5807 12.6662 20.3321 12.8272 20.0362 12.9432C19.7403 13.0568 19.4077 13.1136 19.0384 13.1136ZM23.3104 5.72727V6.36648C23.3104 6.56061 23.2749 6.76776 23.2038 6.98793C23.1352 7.20573 23.0334 7.41761 22.8984 7.62358C22.7659 7.82718 22.6049 8.00473 22.4155 8.15625L21.9609 7.78693C22.1101 7.57386 22.2391 7.35251 22.348 7.12287C22.4593 6.89086 22.5149 6.64347 22.5149 6.38068V5.72727H23.3104ZM24.2026 13V7.54545H25.0123V8.36932H25.0691C25.1685 8.09943 25.3484 7.88045 25.6088 7.71236C25.8693 7.54427 26.1628 7.46023 26.4895 7.46023C26.5511 7.46023 26.628 7.46141 26.7203 7.46378C26.8127 7.46615 26.8825 7.4697 26.9299 7.47443V8.3267C26.9015 8.3196 26.8364 8.30895 26.7346 8.29474C26.6351 8.27817 26.5298 8.26989 26.4185 8.26989C26.1534 8.26989 25.9166 8.32552 25.7083 8.43679C25.5023 8.54569 25.339 8.69721 25.2182 8.89134C25.0998 9.0831 25.0407 9.30208 25.0407 9.5483V13H24.2026ZM30.0442 13.1136C29.5186 13.1136 29.0653 12.9976 28.6841 12.7656C28.3053 12.5312 28.013 12.2045 27.807 11.7855C27.6034 11.3641 27.5016 10.8741 27.5016 10.3153C27.5016 9.75663 27.6034 9.2642 27.807 8.83807C28.013 8.40956 28.2994 8.07576 28.6664 7.83665C29.0357 7.59517 29.4666 7.47443 29.959 7.47443C30.2431 7.47443 30.5236 7.52178 30.8006 7.61648C31.0776 7.71117 31.3297 7.86506 31.557 8.07812C31.7843 8.28883 31.9654 8.56818 32.1003 8.91619C32.2353 9.2642 32.3027 9.69271 32.3027 10.2017V10.5568H28.0982V9.83239H31.4505C31.4505 9.52462 31.3889 9.25 31.2658 9.00852C31.1451 8.76705 30.9722 8.57647 30.7473 8.43679C30.5248 8.29711 30.262 8.22727 29.959 8.22727C29.6252 8.22727 29.3364 8.31013 29.0925 8.47585C28.851 8.6392 28.6652 8.85227 28.535 9.11506C28.4048 9.37784 28.3397 9.65956 28.3397 9.96023V10.4432C28.3397 10.8551 28.4107 11.2043 28.5527 11.4908C28.6971 11.7749 28.8972 11.9915 29.1529 12.1406C29.4086 12.2874 29.7057 12.3608 30.0442 12.3608C30.2644 12.3608 30.4632 12.33 30.6408 12.2685C30.8207 12.2045 30.9758 12.1098 31.106 11.9844C31.2362 11.8565 31.3368 11.6979 31.4078 11.5085L32.2175 11.7358C32.1323 12.0104 31.9891 12.2519 31.7878 12.4602C31.5866 12.6662 31.338 12.8272 31.0421 12.9432C30.7462 13.0568 30.4135 13.1136 30.0442 13.1136ZM36.5037 13V5.72727H37.3844V8.96591H41.2623V5.72727H42.1429V13H41.2623V9.74716H37.3844V13H36.5037ZM43.7924 13V7.54545H44.6305V13H43.7924ZM44.2186 6.63636C44.0552 6.63636 43.9144 6.58073 43.796 6.46946C43.68 6.35819 43.622 6.22443 43.622 6.06818C43.622 5.91193 43.68 5.77817 43.796 5.6669C43.9144 5.55563 44.0552 5.5 44.2186 5.5C44.3819 5.5 44.5216 5.55563 44.6376 5.6669C44.756 5.77817 44.8152 5.91193 44.8152 6.06818C44.8152 6.22443 44.756 6.35819 44.6376 6.46946C44.5216 6.58073 44.3819 6.63636 44.2186 6.63636ZM46.1655 13V7.54545H46.9751V8.36932H47.032C47.1314 8.09943 47.3113 7.88045 47.5717 7.71236C47.8321 7.54427 48.1257 7.46023 48.4524 7.46023C48.514 7.46023 48.5909 7.46141 48.6832 7.46378C48.7756 7.46615 48.8454 7.4697 48.8928 7.47443V8.3267C48.8643 8.3196 48.7992 8.30895 48.6974 8.29474C48.598 8.27817 48.4927 8.26989 48.3814 8.26989C48.1162 8.26989 47.8795 8.32552 47.6712 8.43679C47.4652 8.54569 47.3018 8.69721 47.1811 8.89134C47.0627 9.0831 47.0036 9.30208 47.0036 9.5483V13H46.1655ZM49.8862 13V7.54545H50.7243V13H49.8862ZM50.3123 6.63636C50.149 6.63636 50.0081 6.58073 49.8897 6.46946C49.7737 6.35819 49.7157 6.22443 49.7157 6.06818C49.7157 5.91193 49.7737 5.77817 49.8897 5.6669C50.0081 5.55563 50.149 5.5 50.3123 5.5C50.4757 5.5 50.6154 5.55563 50.7314 5.6669C50.8497 5.77817 50.9089 5.91193 50.9089 6.06818C50.9089 6.22443 50.8497 6.35819 50.7314 6.46946C50.6154 6.58073 50.4757 6.63636 50.3123 6.63636ZM53.0973 9.71875V13H52.2592V7.54545H53.0689V8.39773H53.1399C53.2678 8.12074 53.4619 7.8982 53.7223 7.73011C53.9827 7.55966 54.3189 7.47443 54.7308 7.47443C55.1001 7.47443 55.4233 7.55019 55.7003 7.7017C55.9773 7.85085 56.1927 8.07812 56.3466 8.38352C56.5005 8.68655 56.5774 9.07008 56.5774 9.53409V13H55.7393V9.59091C55.7393 9.16241 55.6281 8.8286 55.4055 8.58949C55.183 8.34801 54.8776 8.22727 54.4893 8.22727C54.2218 8.22727 53.9827 8.28527 53.772 8.40128C53.5637 8.51728 53.3991 8.68655 53.2784 8.90909C53.1577 9.13163 53.0973 9.40152 53.0973 9.71875ZM60.3105 15.1591C59.9057 15.1591 59.5577 15.107 59.2665 15.0028C58.9753 14.901 58.7327 14.7661 58.5385 14.598C58.3468 14.4323 58.1941 14.2547 58.0804 14.0653L58.748 13.5966C58.8238 13.696 58.9197 13.8097 59.0357 13.9375C59.1517 14.0677 59.3103 14.1802 59.5115 14.2749C59.7151 14.3719 59.9815 14.4205 60.3105 14.4205C60.7509 14.4205 61.1143 14.3139 61.4007 14.1009C61.6872 13.8878 61.8304 13.554 61.8304 13.0994V11.9915H61.7594C61.6979 12.0909 61.6103 12.214 61.4966 12.3608C61.3854 12.5052 61.2244 12.6342 61.0137 12.7479C60.8053 12.8591 60.5236 12.9148 60.1685 12.9148C59.7282 12.9148 59.3328 12.8106 58.9824 12.6023C58.6344 12.3939 58.3586 12.0909 58.155 11.6932C57.9538 11.2955 57.8532 10.8125 57.8532 10.2443C57.8532 9.68561 57.9514 9.1991 58.1479 8.7848C58.3444 8.36813 58.6178 8.04616 58.9682 7.81889C59.3186 7.58925 59.7234 7.47443 60.1827 7.47443C60.5378 7.47443 60.8195 7.53362 61.0279 7.65199C61.2386 7.76799 61.3996 7.90057 61.5108 8.04972C61.6245 8.1965 61.7121 8.31723 61.7736 8.41193H61.8588V7.54545H62.6685V13.1562C62.6685 13.625 62.562 14.0062 62.3489 14.2997C62.1382 14.5956 61.8541 14.8123 61.4966 14.9496C61.1415 15.0893 60.7462 15.1591 60.3105 15.1591ZM60.2821 12.1619C60.6183 12.1619 60.9024 12.085 61.1344 11.9311C61.3664 11.7772 61.5428 11.5559 61.6635 11.267C61.7843 10.9782 61.8446 10.6326 61.8446 10.2301C61.8446 9.83712 61.7855 9.49029 61.6671 9.18963C61.5487 8.88897 61.3735 8.65341 61.1415 8.48295C60.9095 8.3125 60.623 8.22727 60.2821 8.22727C59.927 8.22727 59.6311 8.31723 59.3944 8.49716C59.16 8.67708 58.9836 8.91856 58.8652 9.22159C58.7492 9.52462 58.6912 9.8608 58.6912 10.2301C58.6912 10.6089 58.7504 10.9439 58.8688 11.2351C58.9895 11.5239 59.1671 11.7512 59.4015 11.9169C59.6382 12.0803 59.9318 12.1619 60.2821 12.1619Z" fill="white"/>
            </symbol>

            <!-- Close Icon -->
            <symbol id="icon-close" viewBox="0 0 26 26">
                <path d="M19 7L7 19" stroke="#222731" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7L19 19" stroke="#222731" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Cite Icon -->
            <symbol id="icon-cite" fill="none" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19H4C3.44772 19 3 18.5523 3 18V4C3 3.44772 3.44772 3 4 3H10C11.1046 3 12 3.89543 12 5C12 3.89543 12.8954 3 14 3H20C20.5523 3 21 3.44772 21 4V18C21 18.5523 20.5523 19 20 19H14C12.8954 19 12 19.8954 12 21C12 19.8954 11.1046 19 10 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 5V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 7H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 11H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 7H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 11H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 15H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Share Icon -->
            <symbol id="icon-share" viewBox="0 0 24 24" fill="none">
                <circle cx="6" cy="12" r="3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="18" cy="6" r="3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="18" cy="18" r="3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.69922 10.6998L15.2992 7.2998" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.69922 13.2998L15.2992 16.6998" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Plus Icon -->
            <symbol id="icon-plus" viewBox="0 0 22 22">
                <g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M11.0002 1.5719v18.8562M1.5721 11h18.8562"/></g>
            </symbol>

            <!-- Minus Icon -->
            <symbol id="icon-minus" viewBox="0 0 22 22">
                <path d="M2.110833 11h17.7778" stroke="currentColor" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Download -->
            <symbol id="icon-download" viewBox="0 0 22 22">
                <g stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 14v4c0 .5304-.2107 1.0391-.5858 1.4142S18.5304 20 18 20H4c-.53043 0-1.03914-.2107-1.41421-.5858C2.21071 19.0391 2 18.5304 2 18v-4M6 9l5 5 5-5M11 14V2"/>
                </g>
            </symbol>

            <!-- Unchecked Checkbox -->
            <symbol id="icon-checkbox" viewBox="0 0 22 22">
                <path d="M7.77285714 17.9999968c-.3324 0-.63714285-.1075868-.88644285-.3496608l-5.51244-5.35255c-.49861458-.484148-.49861458-1.237264 0-1.721412.49861571-.484148 1.27421142-.484148 1.77282571 0l4.65375714 4.49183L18.8531429 4.3631096c.4987142-.48415038 1.2742857-.48415038 1.7728571 0 .4987143.4841494.4987143 1.2372724 0 1.7214344L8.68697143 17.650336c-.27701429.242074-.5817.3496608-.91411429.3496608z" fill="currentColor" fill-rule="nonzero"/>
            </symbol>

            <!-- Slanted Line -->
            <symbol id="decoration-slant" viewBox="0 0 286 7" preserveAspectRatio="none">
                <g fill="currentColor" fill-rule="nonzero">
                    <path d="M5 1h5v5H1zM10 1h270v5H10zM280 1h5l-2 5h-3z"/>
                </g> 
            </symbol>

            <!-- Right Chevron (arrow) -->
            <symbol id="icon-arrow" viewBox="0 0 16 16">
                <path d="M4.792893 14.7071c-.390524-.3905-.390524-1.0237 0-1.4142l5.292897-5.29290385L4.792893 2.7071c-.390525-.39052-.390525-1.023686 0-1.414209C5.18342.9023647 5.81658.9023647 6.20711 1.29289l6 6c.39052.39053.39052 1.02369 0 1.41421l-6 6c-.39053.3905-1.02369.3905-1.414217 0z" fill="currentColor" fill-rule="evenodd"/>
            </symbol>
            
            <!-- Left Chevron (arrow) -->
            <symbol id="icon-arrow-left" viewBox="0 0 16 16">
                <path d="M11.70709701 1.29289382c.39053732.3905251.39053732 1.02369152 0 1.41421428L6.41420872 8l5.29288829 5.2928727c.39053732.3906005.39053732 1.0237125 0 1.4142352-.39052177.3905228-1.02368659.3905228-1.41421614 0l-5.9999878-5.99998822c-.3905241-.39053054-.3905241-1.02369696 0-1.41421972l5.99999558-6.00000614c.39052177-.3905251 1.02368659-.3905251 1.41420836 0z" fill="currentColor" fill-rule="evenodd"/>
            </symbol>
            
            <!-- Radio -->
            <symbol id="icon-radio" viewBox="0 0 22 22">
                <g>
                    <circle r="11" cx="50%" cy="50%" fill="currentColor" />
                </g>
            </symbol>

            <!-- Play Button -->
            <symbol id="icon-play" viewBox="0 0 22 22">
                <path d="M6 21l13-10L6 1z" fill="currentColor" fill-rule="nonzero" stroke="currentColor" stroke-width="1.06667" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Map Marker -->
            <symbol id="icon-marker" viewBox="0 0 22 22">
                <path d="M11 1C7.57778167 1 4.00583858 3.9116625 4 8.0833125c-.00699475 4.992125 7 12.5 7 12.5s7.0074083-7.4975 7-12.5C17.9937583 3.9179125 14.4222417 1 11 1zm0 10.4166875c-1.71810917 0-3.11110917-1.4925-3.11110917-3.333375C7.88889083 6.24249375 9.28189083 4.75 11 4.75c1.71809167 0 3.1110917 1.49249375 3.1110917 3.3333125 0 1.840875-1.39300003 3.333375-3.1110917 3.333375z" fill="currentColor" fill-rule="nonzero"/>
            </symbol>

            <!--  Smart Quote -->
            <symbol id="icon-quote" viewbox="0 0 22 22">
                <path d="M20.6533333 2.99428571c-2.76-.45257228-4.81.08228572-6.15 1.60457143-1.34 1.52228572-2.01 3.76457143-2.01 6.72685715v8.39314281h8.16v-8.39314281h-4.2c-.22-1.48114286-.02-2.68457143.6-3.61028572.64-.92571428 1.68-1.32685714 3.12-1.20342857l.48-3.51771429zm-10.85999997 0c-2.76-.45257228-4.81.08228572-6.15 1.60457143-1.34 1.52228572-2.01 3.76457143-2.01 6.72685715v8.39314281h8.16v-8.39314281h-4.2c-.22-1.48114286-.02-2.68457143.6-3.61028572.64-.92571428 1.68-1.32685714 3.12-1.20342857l.48-3.51771429z" fill="currentColor" fill-rule="nonzero"/>
            </symbol>

            <!-- Pause Button -->
            <symbol id="icon-pause" viewBox="0 0 12 12">
                <g stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2.88888889 10V2M9.11111111 10V2"/>
                </g>
            </symbol>

            <!-- Search Icon -->
            <symbol id="icon-search" viewBox="0 0 22 22">
                <ellipse cx="5.83331" cy="5.77634" rx="4.08331" ry="4.04343" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.25 12.1303L8.75 8.66455" stroke="white" fill="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Large Search Icon -->
            <symbol id="icon-large-search" viewBox="0 0 66 66" fill="none">
                <ellipse cx="27.4999" cy="27.5" rx="19.2499" ry="19.25" stroke="#222731" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M57.75 57.75L41.25 41.25" stroke="#222731" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!-- Large Search Close Icon -->
            <symbol id="icon-large-search-close" viewBox="0 0 92 92" fill="none">
                <path d="M67.2301 24.7695L24.7686 67.2311" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.7686 24.7695L67.2301 67.2311" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </symbol>

            <!--  Cookie Close -->
            <symbol id="icon-cookie-close" viewBox="0 0 8 8">
                <path d="M6.3536 2.35355c.1952-.19526.1952-.51184 0-.7071-.1953-.19527-.51189-.19527-.70715 0L3.9999975 3.29289 2.35355 1.64645c-.19526-.19527-.51184-.19527-.7071 0-.19527.19526-.19527.51184 0 .7071l1.64644 1.6464475L1.64645 5.64645c-.19527.19526-.19527.51185 0 .70715.19526.1952.51184.1952.7071 0l1.6464475-1.64649L5.64645 6.3536c.19526.1952.51185.1952.70715 0 .1952-.1953.1952-.51189 0-.70715L4.70711 3.9999975 6.3536 2.35355z" fill="currentColor" fill-rule="evenodd"/>
            </symbol>
        </svg>

        <?php
    }
}
