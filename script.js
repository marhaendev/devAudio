    function devAudio(options) {
        var audio = document.querySelector(".dev-audio");
        var playlist = options.playlist || [];
        var currentTrackIndex = 0;

        function playCurrentTrack() {
            audio.src = playlist[currentTrackIndex];
            audio.play();
        }

        function playNextTrack() {
            currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
            playCurrentTrack();
        }

        audio.loop = options.loop || false;

        if (options.volume !== undefined) {
            audio.volume = options.volume;
        }

        audio.muted = options.mute || false;
        audio.controls = options.controls || false;

        if (options.onEnd && typeof options.onEnd === "function") {
            audio.addEventListener('ended', options.onEnd);
        }

        if (options.delayTime !== undefined && options.delayTime > 0) {
            setTimeout(function() {
                playCurrentTrack();
                audio.addEventListener('ended', playNextTrack);
            }, options.delayTime);
        } else {
            playCurrentTrack(); // Start playing immediately
            audio.addEventListener('ended', playNextTrack);
        }
    }

    devAudio({
        loop: false,                  // Enable or disable song looping (Aktifkan atau nonaktifkan pengulangan lagu)
        controls: true,               // Show or hide the built-in audio controls (Tampilkan atau sembunyikan kontrol audio bawaan)
        playlist: ['music1.mp3', 'music2.mp3'],  // List of songs to be played (Daftar lagu yang akan diputar)
        mute: false,                  // Turn the sound on or off (Matikan atau hidupkan suara)
        onEnd: function() {
            // Callback when the playlist finishes playing (Callback saat playlist selesai diputar)
        },
        delayTime: 2000,               // Delay time before the first playback (in milliseconds) (Waktu penundaan sebelum pemutaran pertama)
        autoplay: true                 // Enable autoplay (Aktifkan pemutaran otomatis)
    });

