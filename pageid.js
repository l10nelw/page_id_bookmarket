// without whitespace
javascript:function getmeta(x){m=document.getElementsByTagName('meta');for(i in m)if((m[i]['name']||m[i]['property'])==x)return m[i]['content'];return ''}function out(x)void prompt('',x);a=location.href.split(/[\/&=?]+/);if(a[1]=='www.reddit.com'){if(a[7]){b=document.title.split(' ')[0];a[5]+=' '+a[7]}else{b=document.getElementsByClassName('tagline')[1];b=b.childNodes[5].innerHTML||b.childNodes[3].innerHTML}out(b+' '+a[5]+' ')}else if(a[1]=='www.youtube.com')out(document.getElementsByClassName('yt-user-name')[0].innerHTML+' '+a[a.indexOf('v')+1]+' '+document.getElementById('eow-title').title);else if(a[1]=='www.facebook.com')out(document.getElementById('fbPhotoPageAuthorName').firstChild.innerHTML+' '+a.slice(2,5).join(' '));else if(a[1].slice(-14)=='deviantart.com')out(a.slice(1).join(' '));else if(a[1]=='instagram.com'&&a[2]=='p'){out(document.title.split(' ')[2]+' '+a[3]);location.href=getmeta('og:video')||getmeta('og:image')}else void(0)

// with whitespace
javascript:
function getmeta(x){
    m=document.getElementsByTagName('meta');
    for(i in m)
		if((m[i]['name']||m[i]['property'])==x)
			return m[i]['content'];
    return '';
}
function out(x)void prompt('',x);
a=location.href.split(/[\/&=?]+/);
if(a[1]=='www.reddit.com'){
	if(a[7]){ //then it's a comment post
		b=document.title.split(' ')[0];
		a[5]+=' '+a[7]
	}else{ //then it's an original post
		b=document.getElementsByClassName('tagline')[1];
		b=b.childNodes[5].innerHTML||b.childNodes[3].innerHTML
	}
	out(b+' '+a[5]+' ');
}else if(a[1]=='www.youtube.com')
	out(document.getElementsByClassName('yt-user-name')[0].innerHTML+' '+a[a.indexOf('v')+1]+' '+document.getElementById('eow-title').title);
else if(a[1]=='www.facebook.com')
	out(document.getElementById('fbPhotoPageAuthorName').firstChild.innerHTML+' '+a.slice(2,5).join(' '));
else if(a[1].slice(-14)=='deviantart.com')
	out(a.slice(1).join(' '));
else if(a[1]=='instagram.com'&&a[2]=='p'){
	out(document.title.split(' ')[2]+' '+a[3]);
	location.href=getmeta('og:video')||getmeta('og:image')
}else void(0);
