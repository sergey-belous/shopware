import Plugin from 'src/plugin-system/plugin.class';

export default class emzWidthNavbarEmzScrollUp extends Plugin {
    init() {
        window.addEventListener('load', emzScrollUp, true);
        window.addEventListener('scroll', emzScrollUp, true);
        
        let prevScrollpos = window.pageYOffset;

        function emzScrollUp() {
            let body = document.body,
                html = document.documentElement;

            let footer = document.getElementById('emz-sticky-sm-footer')
            let height = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight) - 50;

            let currentScrollPos = window.pageYOffset;
            let currentScrollPosDown = window.pageYOffset + window.innerHeight + 0.5;

            if (prevScrollpos > currentScrollPos) {
                footer.style.bottom = '0px';
            } else if (height <= currentScrollPosDown) {
                footer.style.bottom = '0px';
            } else {
                footer.style.bottom = '-50px';
            }

            prevScrollpos = currentScrollPos;
        }
    }
}
