Audio.live = function (element, properties) {
    var self = this;

    properties = properties || {};

    var options = {
        src: [{
            url: 'http://93.188.164.219:8090/ices',
            type: 'audio/mp3'
        }, {
            url: 'http://93.188.164.219:8090/ices',
            type: 'audio/ogg'
        }],
        properties: {
            controls: properties.controls || true,
            preload: properties.preload || true,
        }
    };
    if (properties.width === 'auto' || isNaN(+properties.width)) {
        options.width = 'auto';
    } else {
        options.width = +properties.width + 'px';
    }

    self.create = function () {
        var audio = _d.createElement('audio');

        if (options.properties.controls) {
            audio.setAttribute('controls', 'controls');
        }

        if (options.properties.preload) {
            audio.setAttribute('preload', 'preload');
        }

        var src = options.src;
        for (var i = 0; i < src.length; i++) {
            var sourceTag = _d.createElement('source');
            sourceTag.setAttribute('src', src[i].url || '');
            sourceTag.setAttribute('type', src[i].type || '');
            audio.appendChild(sourceTag);
        }

        var parent = _d.querySelectorAll(element)[0];
        parent.appendChild(audio);

        var _width = options.width;
        console.log(parent.clientWidth);
        var _height = parent.clientWidth / 2;

        parent.style.width = _width;
        parent.style.height = _height + 'px';
        parent.style.maxWidth = '600px';
        parent.style.maxHeight = '300px';
        parent.style.overflow = 'hidden';

        parent.style.backgroundImage = 'url(https://github.com/octav47/rhapi/raw/master/img/background.png)';
        parent.style.backgroundSize = 'cover';

        var playButton = document.createElement('a');
        playButton.href = 'javascript:void(0)';
        playButton.style.display = 'block';
        playButton.style.width = '100%';
        playButton.style.height = '36px';
        playButton.style.fontSize = Math.min(_height, 300) * 0.25 + 'px';
        playButton.style.textAlign = 'center';
        playButton.setAttribute('data-action', 'pause');

        playButton.innerHTML = '<i class="icon rhd-play" style="color: #ffffff;"></i>';

        playButton.addEventListener('click', function () {
            var action = this.getAttribute('data-action');
            var icon = this.querySelector('i.icon');
            var iconClassName = '';

            if (action == 'play') {
                action = 'pause';
                iconClassName = 'icon rhd-play';

                audio.pause();
            } else if (action == 'pause') {
                action = 'play';
                iconClassName = 'icon rhd-pause';

                audio.play();
            }

            icon.className = iconClassName;
            this.setAttribute('data-action', action);
        });

        parent.appendChild(playButton);

        var songTitle = document.createElement('span');
        songTitle.style.display = 'block';
        songTitle.style.width = '100%';
        songTitle.style.textAlign = 'center';
        songTitle.style.color = '#ffffff';
        songTitle.style.fontFamily = 'Ubuntu, sans-serif';
        songTitle.innerHTML = 'Title';

        parent.appendChild(songTitle);

        var artist = document.createElement('span');
        artist.style.display = 'block';
        artist.style.width = '100%';
        artist.style.textAlign = 'center';
        artist.style.color = '#ffffff';
        artist.style.fontFamily = 'Ubuntu, sans-serif';
        artist.innerHTML = 'Artist';

        parent.appendChild(artist);
    };
};