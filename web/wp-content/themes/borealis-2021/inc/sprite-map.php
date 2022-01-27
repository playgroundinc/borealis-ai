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
        <svg height="0" width="0" aria-hidden="true" style="position:absolute; left: 100%" focusable="false"> 
            <!--  Slanted Clip Path -->
            <defs>
                <!-- Transform values are defined by dividing 1 by the respective viewbox sizes of the original svg -->
                <!-- Need to add the clipPathUnits for this to work -->
                <!-- Pulled from this answer https://stackoverflow.com/questions/53618192/create-responsive-svg-clip-path-making-svg-path-responsive -->
                <clipPath transform="scale(0.001669449082, 0.002222222222222)" id="clip-path-slanted" clipPathUnits="objectBoundingBox">
                    <path d="M585 450H14c-9 0-15-9-13-18L136 10c2-6 7-9 13-9h436c7 0 14 6 14 13v422c0 7-7 14-14 14z" stroke="#000"/>
                </clipPath>
                <clipPath transform="scale(0.001669449082, 0.002222222222222)" id="clip-path-slanted-reverse" clipPathUnits="objectBoundingBox">
                    <path d="M584.83 449.5H14C6.54413 449.5.5 443.456.5 436V14C.5 6.54416 6.54413.5 14 .5h436.01c5.873 0 11.072 3.79709 12.859 9.39157L597.69 431.892c2.782 8.709-3.716 17.608-12.86 17.608z" stroke="#000"/>
                </clipPath>
            </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display: none">


            <!-- Facebook -->
            <symbol id="icon-facebook" viewbox="0 0 22 22"> 
                <!-- Used from Font Awesome under the creative commons licence https://fontawesome.com/license only modification was to change fill color. -->
                <path d="M17 1h-3c-1.32608 0-2.59785.526784-3.53553 1.46447C9.52678 3.40215 9 4.67392 9 6v3H6v4h3v8h4v-8h3l1-4h-4V6c0-.26522.10536-.51957.29289-.70711C13.48043 5.10536 13.73478 5 14 5h3V1z"/>
            </symbol>

            <!-- Twitter -->
            <symbol id="icon-twitter" viewBox="0 0 22 22">
                <!-- Used from Font Awesome under the creative commons licence https://fontawesome.com/license only modification was to change fill color. -->
                <path d="M21 3.842093c-.870545.56882-1.834454 1.003878-2.854546 1.288425-.547545-.58315-1.275181-.996472-2.084545-1.184067-.809363-.187592-1.661363-.140404-2.440818.135183-.779455.275587-1.448818.766273-1.917364 1.405692-.468636.639428-.713909 1.396733-.702727 2.1695v.842105c-1.59761.038374-3.180664-.289836-4.608173-.955411-1.427518-.665575-2.655172-1.64784-3.573645-2.859326 0 0-3.636364 7.578964 4.545454 10.947385C5.491391 16.808842 3.261055 17.399074 1 17.315789c8.181818 4.210527 18.181818 0 18.181818-9.684227-.000818-.23456-.025182-.468547-.072727-.698939.927818-.847587 1.582545-1.917718 1.890909-3.09053z" fill-rule="nonzero"/>
            </symbol>

            <!-- Instagram -->
            <symbol id="icon-instagram" viewbox="0 0 22 22">
                <!-- Used from Font Awesome under the creative commons licence https://fontawesome.com/license only modification was to change fill color. -->

                <path d="M11.004444 5.899777c-2.826666 0-5.106666 2.285078-5.106666 5.11804 0 2.832962 2.28 5.11804 5.106666 5.11804 2.826667 0 5.106667-2.285078 5.106667-5.11804 0-2.832962-2.28-5.11804-5.106667-5.11804zm0 8.445435c-1.826666 0-3.32-1.492205-3.32-3.327395 0-1.835189 1.48889-3.327394 3.32-3.327394 1.831112 0 3.32 1.492205 3.32 3.327394 0 1.83519-1.493333 3.327395-3.32 3.327395zm6.506667-8.654789c0 .663697-.533333 1.193764-1.191111 1.193764-.662222 0-1.191111-.534521-1.191111-1.193764S15.662222 4.49666 16.32 4.49666c.657778 0 1.191111.534521 1.191111 1.193764zm3.382222 1.211581c-.075555-1.599109-.44-3.01559-1.608889-4.182628C18.12 1.55234 16.706667 1.187082 15.111111 1.106904c-1.644444-.093541-6.573333-.093541-8.217778 0-1.59111.075724-3.004444.44098-4.173333 1.608018C1.551111 3.88196 1.191111 5.298441 1.111111 6.89755c-.093333 1.648107-.093333 6.587973 0 8.23608.075556 1.59911.44 3.01559 1.608889 4.182628 1.168889 1.167038 2.577778 1.532294 4.173333 1.612472 1.644445.093542 6.573334.093542 8.217778 0 1.595556-.075723 3.008889-.44098 4.173333-1.612472 1.164445-1.167038 1.52889-2.583519 1.60889-4.182628.093333-1.648107.093333-6.583519 0-8.231626zm-2.124444 10c-.346667.873052-1.017778 1.545657-1.893333 1.89755-1.311112.521159-4.422223.400891-5.871112.400891-1.448888 0-4.564444.115813-5.87111-.40089-.871112-.34744-1.542223-1.020045-1.893334-1.89755-.52-1.314032-.4-4.432072-.4-5.884188 0-1.452115-.115556-4.57461.4-5.884187.346667-.87305 1.017778-1.545657 1.893333-1.89755 1.311111-.521158 4.422223-.40089 5.871111-.40089 1.44889 0 4.564445-.115814 5.871112.40089.87111.347439 1.542222 1.020045 1.893333 1.89755.52 1.314031.4 4.432072.4 5.884187 0 1.452116.12 4.57461-.4 5.884187z" fill="currentColor" fill-rule="nonzero"/>
            </symbol>

            <!-- LinkedIn -->
            <symbol id="icon-linkedin" viewbox="0 0 22 22">
                <!-- Used from Font Awesome under the creative commons licence https://fontawesome.com/license only modification was to change fill color. -->
                <path d="M5.476786 21H1.330357V7.647321h4.146429V21zM3.401339 5.825893C2.075446 5.825893 1 4.727679 1 3.401786c0-1.326223 1.075116-2.40134 2.40134-2.40134 1.326222 0 2.401339 1.075117 2.401339 2.40134 0 1.325893-1.075893 2.424107-2.40134 2.424107zM20.995536 21h-4.1375v-6.5c0-1.549107-.03125-3.535714-2.155804-3.535714-2.155803 0-2.48616 1.683035-2.48616 3.424107V21H8.074106V7.647321h3.976786V9.46875h.058036c.553571-1.049107 1.905803-2.15625 3.923214-2.15625C20.22857 7.3125 21 10.075893 21 13.665179V21h-.004464z" fill="currentColor" fill-rule="nonzero"/>
            </symbol>

            <!-- YouTube -->
            <!-- Used from Font Awesome under the creative commons licence https://fontawesome.com/license only modification was to change fill color. -->
            <symbol id="icon-youtube" viewBox="0 0 22 22">
                <path d="M20.549453 6.190526c-.229234-.86224-.904636-1.541312-1.76219-1.771766C17.232883 4 11 4 11 4s-6.232847 0-7.787263.41876c-.857555.23049-1.532956.909526-1.76219 1.771766-.416496 1.56286-.416496 4.82362-.416496 4.82362s0 3.26076.416496 4.82362c.229234.86224.904635 1.51302 1.76219 1.743474C4.767153 18 11 18 11 18s6.232847 0 7.787263-.41876c.857554-.230454 1.532956-.881235 1.76219-1.743474.416496-1.56286.416496-4.82362.416496-4.82362s0-3.26076-.416496-4.82362zM8.961496 13.974672V8.05362l5.209453 2.960599-5.209453 2.960453z" fill="currentColor" fill-rule="nonzero"/>
            </symbol>

            <!-- Down Chevron -->
            <symbol id="icon-chevron" viewBox="0 0 13 12">
                <path d="M1.21967 3.21967c.292893-.292893.767767-.292893 1.06066 0L6.25 7.18934l3.96967-3.96967c.29289-.292893.76777-.292893 1.06063 0 .2929.292893.2929.767767 0 1.06066l-4.49997 4.5c-.29289.29289-.76777.29289-1.06066 0l-4.5-4.5c-.292893-.292893-.292893-.767767 0-1.06066z" fill="currentColor" fill-rule="evenodd"/>
            </symbol>

            <!-- Hamburger Icon -->
            <symbol id="icon-hamburger" viewBox="0 0 22 22">
                <g transform="translate(1 5)" fill="currentColor" fill-rule="nonzero">
                    <rect width="20" height="1.5" rx=".75"/><rect y="5.25" width="20" height="1.5" rx=".75"/><rect y="10.5" width="20" height="1.5" rx=".75"/>
                </g>
            </symbol>

            <!-- Close Icon -->
            <symbol id="icon-close" viewBox="0 0 22 22">
                <path d="M19.722632 2.796958c.411052-.411084.411052-1.077572 0-1.48865-.411053-.411078-1.07758-.411078-1.488632 0l-7.718526 7.718524-7.718516-7.718524c-.411084-.411078-1.077572-.411078-1.48865 0-.411078.411078-.411078 1.077566 0 1.48865l7.718524 7.718516L1.308308 18.234c-.411078.411053-.411078 1.077579 0 1.488632.411078.411052 1.077566.411052 1.48865 0l7.718516-7.718527L18.234 19.722632c.411053.411052 1.077579.411052 1.488632 0 .411052-.411053.411052-1.07758 0-1.488632l-7.718527-7.718526 7.718527-7.718516z" fill="currentColor" fill-rule="evenodd"/>
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


            <!--  Cookie Close -->
            <symbol id="icon-cookie-close" viewBox="0 0 8 8">
                <path d="M6.3536 2.35355c.1952-.19526.1952-.51184 0-.7071-.1953-.19527-.51189-.19527-.70715 0L3.9999975 3.29289 2.35355 1.64645c-.19526-.19527-.51184-.19527-.7071 0-.19527.19526-.19527.51184 0 .7071l1.64644 1.6464475L1.64645 5.64645c-.19527.19526-.19527.51185 0 .70715.19526.1952.51184.1952.7071 0l1.6464475-1.64649L5.64645 6.3536c.19526.1952.51185.1952.70715 0 .1952-.1953.1952-.51189 0-.70715L4.70711 3.9999975 6.3536 2.35355z" fill="currentColor" fill-rule="evenodd"/>
            </symbol>
        </svg>

        <?php
    }
}
