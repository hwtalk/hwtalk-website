let url=new URL(location.href);
let id=url.searchParams.get('id');
function httpGet(url) {
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
}
let content=httpGet('https://api.github.com/repos/hwtalk/hwtalk-posts/issues/'+id);
content=JSON.parse(content);
let html=marked.parse(content['body']);
document.getElementById('content').innerHTML='<h1>'+content['title']+'</h1>'+html;