Audio.live = function (element) {
    var self = this;

    var options = {
        width: 300,
        height: 300,
        src: [{
            url: 'http://93.188.164.219:8090/ices',
            type: 'audio/mp3'
        }, {
            url: 'http://93.188.164.219:8090/ices',
            type: 'audio/ogg'
        }],
        properties: {
            controls: true,
            preload: true
        }
    };

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
    };
};