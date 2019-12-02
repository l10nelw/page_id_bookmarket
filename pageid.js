javascript:
(_=>{
    let out = x => void prompt('', x);
    let a = location.href.split(/[?#]+/)[0].split(/\/+/);
    let b = location.href.split(/[\/&=?#]+/);
    let a1 = a[1];

    if (a1.endsWith('reddit.com')) {
        a[7] // comment post
        ? out(`${document.title.split(' ')[0]} ${a[5]} ${a[7]} `)
        : out(`${document.querySelector('[data-author]').dataset.author} ${a[5]} `);
    } else if (a1 == 'www.youtube.com') {
        out(`${document.querySelector('.yt-user-info').textContent.trim()} ${b[b.indexOf('v') + 1]} ${document.getElementById('eow-title').title}`);
    } else if (a1.endsWith('tumblr.com')) {
        out(`${a1} ${a[3]}`);
    } else if (a1 == 'www.facebook.com') {
        out(`${document.getElementById('fbPhotoPageAuthorName').firstChild.innerHTML} ${b.slice(2, 6).join(' ')}`);
    } else if (a1.endsWith('deviantart.com')) {
        out(a.slice(1, 4).join(' '));
    } else if (a1 == 'www.instagram.com' && a[2] == 'p') {
        out(window._sharedData.entry_data.PostPage[0].graphql.shortcode_media.owner.username + ' ' + a[3]);
        let imgs = document.querySelectorAll('li img[srcset]');
        let url;
        if (imgs.length == 3) {
            url = imgs[1].src;
        } else if (imgs.length == 2) {
            let i0 = imgs[0], i1 = imgs[1];
            let top = !i0.closest('li').previousElementSibling;
            let bot = !i1.closest('li').nextElementSibling;
            if (top && bot) {
                url = i0.src;
                open(i1.src);
            } else {
                url = top ? i0.src : i1.src;
            }
        } else {
            let meta = x => { for (let m of document.querySelectorAll('meta')) if (m.getAttribute('property') == x) return m.content };
            url = meta('og:video') || meta('og:image');
        }
        location.href = url;
    } else void(0);
})()
