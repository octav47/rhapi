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
        // parent.appendChild(audio);

        parent.style.width = options.width;
        parent.style.height = (parent.clientWidth / 2) + 'px';

        parent.style.backgroundImage = 'url(https://github.com/octav47/rhapi/raw/master/img/backgrund.png)';
        parent.style.backgroundSize = 'cover';
    };
};