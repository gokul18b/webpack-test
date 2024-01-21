

$("#sideNav_content").html(loadSideNavigation())

function loadContent(page) {
    document.getElementById('iframe').src = page;
}

$("#btn_logout").click(function () {
    window.location.href = 'index.html';
})
