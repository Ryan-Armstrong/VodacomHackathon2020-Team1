function navigateToHome() {
    my.postMessage({
        navigateToUrl: '../music-landing-page/music-landing-page'
    });
}

function navigateToPlayList() {
    my.postMessage({
        navigateToUrl: '../play-list-page/play-list-page'
    });
}

function navigateToSearch() {
    my.postMessage({
        navigateToUrl: '../search-page/search-page'
    });
}