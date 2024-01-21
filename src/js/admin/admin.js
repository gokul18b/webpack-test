$(document).ready(function (e) {

    document.getElementById('iframe_sidenav').src = 'sidenav.html';

    $("#btn_logout").click(function(){
        window.location.href = 'index.html';
    })
});