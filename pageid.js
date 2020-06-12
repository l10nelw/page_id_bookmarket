javascript:
(_=>{
    let gebi = s => document.getElementById(s);
    let qs = s => document.body.querySelector(s);
    let qsa = s => document.body.querySelectorAll(s);
    let out = x => void prompt('', x);
    let a = location.href.split(/[?#]+/)[0].split(/\/+/);
    let b = location.href.split(/[\/&=?#]+/);
    let a1 = a[1];

    if (a1.endsWith('reddit.com')) {
        a[7] // comment post
        ? out(`${document.title.split(' ')[0]} ${a[5]} ${a[7]} `)
        : out(`${qs('[data-author]').dataset.author} ${a[5]} `);
    } else if (a1 == 'www.youtube.com') {
        out(`${qs('.yt-user-info').textContent.trim()} ${b[b.indexOf('v') + 1]} ${gebi('eow-title').title}`);
    } else if (a1.endsWith('tumblr.com')) {
        out(`${a1} ${a[3]}`);
    } else if (a1 == 'www.facebook.com') {
        out(`${gebi('fbPhotoPageAuthorName').firstChild.innerHTML} ${b.slice(2, 6).join(' ')}`);
    } else if (a1.endsWith('deviantart.com')) {
        out(a.slice(1, 4).join(' '));
    } else if (a1 == 'www.instagram.com' && a[2] == 'p') {
        let data = window.__additionalData;
        for (let x in data) data = data[x].data.graphql.shortcode_media;
        out(data.owner.username + ' ' + a[3]);
        let media = qsa('li img[srcset], li video');
        let url = media.length == 3 ? media[1].src :
                  media.length == 2 ? media[qs('.coreSpriteRightChevron') ? 0 : 1].src :
                  qs('img[srcset], video').src;
        location.href = url;
    } else void(0);
})()
