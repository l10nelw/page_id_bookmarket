javascript:
(_=>{
    function metaprop(x) {
        for (var m of document.querySelectorAll('meta')) {
            if (m.getAttribute('property') == x) return m.content;
        }
        return '';
    }

    function out(x) {
        void prompt('', x)
    }
        
    var a = location.href.split(/[?#]+/)[0].split(/\/+/);
    var b = location.href.split(/[\/&=?#]+/);
    var a1 = a[1];
    
    if (a1.endsWith('reddit.com')) {
        a[7] // comment post
        ? out(document.title.split(' ')[0] + ' ' + a[5] + ' ' + a[7] + ' ')
        : out(document.querySelector('[data-author]').dataset.author + ' ' + a[5] + ' ');
    } else if (a1 == 'www.youtube.com') {
        out(document.querySelector('.yt-user-info').textContent.trim() + ' ' + b[b.indexOf('v') + 1] + ' ' + document.getElementById('eow-title').title);
    } else if (a1.slice(-11) == '.tumblr.com') {
        out(a1 + ' ' + a[3]);
    } else if (a1 == 'www.facebook.com') {
        out(document.getElementById('fbPhotoPageAuthorName').firstChild.innerHTML + ' ' + b.slice(2, 6).join(' '));
    } else if (a1.slice(-15) == '.deviantart.com') {
        out(a.slice(1, 4).join(' '));
    } else if (a1 == 'www.instagram.com' && a[2] == 'p') {
        out(window._sharedData.entry_data.PostPage[0].graphql.shortcode_media.owner.username + ' ' + a[3]);
        location.href = metaprop('og:video') || metaprop('og:image') // redirects to the media file url
    } else void(0);
})()
