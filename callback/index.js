var url=new URL(document.URL);
var param=url.searchParams;
if(param.get('code')!=undefined) {
    var token=param.get('code');
    localStorage.setItem('access_token',token);
    // location.href='/';
    window.close();
} else {
    document.write('Invalid login information');
    document.close();
}