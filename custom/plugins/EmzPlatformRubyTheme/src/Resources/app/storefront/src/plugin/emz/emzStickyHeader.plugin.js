import Plugin from 'src/plugin-system/plugin.class';

export default class emzStickyHeader extends Plugin {
    init() {
        let header = document.getElementById('emz-sticky');
        let headeroffset = window.document.getElementById('emz-sticky').offsetTop;

        window.addEventListener('scroll', emzStickyHeader, true);
        window.addEventListener('load', emzStickyHeader, true);

        function emzStickyHeader() {
            let headerheight = header.clientHeight;
            let headermain = document.getElementsByClassName('header-main')[0];

            if (headeroffset < window.pageYOffset) {

                header.classList.add('sticky');
                headermain.style.marginBottom = headerheight + 'px';

            } else {
                header.classList.remove('sticky');
                headermain.style.marginBottom = 'unset';
            }
        }
    }
}
