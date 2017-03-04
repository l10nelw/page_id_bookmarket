// without whitespace
javascript:function getmeta(x){m=document.getElementsByTagName('meta');for(i=0;i<m.length;i++)if(m[i].getAttribute('property')==x)return m[i].getAttribute('content');return '';}function out(x){void prompt('',x);}a=location.href.split(/[\/&=?#]+/);if(a[1]=='www.reddit.com'){if(a[7]){a[5]+=' '+a[7];b=document.title.split(' ')[0]}else b=document.querySelectorAll('[data-cid]')[0].getAttribute('data-author');out(b+' '+a[5]+' ');}else if(a[1]=='www.youtube.com')out(document.getElementsByClassName('yt-user-info')[0].textContent.trim()+' '+a[a.indexOf('v')+1]+' '+document.getElementById('eow-title').title);else if(a[1].slice(-11)=='.tumblr.com')out(a[1]+' '+a[3]);else if(a[1]=='www.facebook.com')out(document.getElementById('fbPhotoPageAuthorName').firstChild.innerHTML+' '+a.slice(2,6).join(' '));else if(a[1].slice(-15)=='.deviantart.com')out(a.slice(1,4).join(' '));else if(a[1]=='www.instagram.com'&&a[2]=='p'){out(window._sharedData.entry_data.PostPage[0].media.owner.username+' '+a[3]);location.href=getmeta('og:video')||getmeta('og:image')}else void(0)

// with whitespace
javascript:
function getmeta(x){
    m=document.getElementsByTagName('meta');
    for(i=0;i<m.length;i++)
		if(m[i].getAttribute('property')==x)
			return m[i].getAttribute('content');
    return '';
}
function out(x)void prompt('',x);
a=location.href.split(/[\/&=?#]+/);
if(a[1]=='www.reddit.com'){
	if(a[7]){ // comment post
		a[5]+=' '+a[7];
		b=document.title.split(' ')[0];
	}else
		b=document.querySelectorAll('[data-cid]')[0].getAttribute('data-author');
	out(b+' '+a[5]+' ');
}else if(a[1]=='www.youtube.com')
	out(document.getElementsByClassName('yt-user-info')[0].textContent.trim()+' '+a[a.indexOf('v')+1]+' '+document.getElementById('eow-title').title);
else if(a[1].slice(-11)=='.tumblr.com')
	out(a[1]+' '+a[3]);
else if(a[1]=='www.facebook.com')
	out(document.getElementById('fbPhotoPageAuthorName').firstChild.innerHTML+' '+a.slice(2,6).join(' '));
else if(a[1].slice(-15)=='.deviantart.com')
	out(a.slice(1,4).join(' '));
else if(a[1]=='www.instagram.com'&&a[2]=='p'){
	out(window._sharedData.entry_data.PostPage[0].media.owner.username+' '+a[3]);
	location.href=getmeta('og:video')||getmeta('og:image') // redirects to the media file url
}else void(0);

