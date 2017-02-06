(function (C) {
    var iconFont = document.createElement('link');
    iconFont.rel = 'stylesheet';
    iconFont.href = 'https://file.myfontastic.com/DhWpPnDANaVZU7gkRBQxkL/icons.css';

    var ubuntuFont = document.createElement('link');
    ubuntuFont.rel = 'stylesheet';
    ubuntuFont.href = 'http://fonts.googleapis.com/css?family=Ubuntu:regular,bold&subset=Latin';

    var head = document.querySelector('head');
    head.appendChild(iconFont);
    head.appendChild(ubuntuFont);
})(CHIEF);