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

    // Tambahkan event listener untuk mendeteksi scroll atau sentuhan
    var isPlaying = false;

    function startAutoplay() {
        if (!isPlaying) {
            playCurrentTrack();
            isPlaying = true;
        }
    }

    window.addEventListener('scroll', startAutoplay);
    window.addEventListener('touchstart', startAutoplay);
}

devAudio({
    loop: false,
    controls: true,
    playlist: ['music1.mp3', 'music2.mp3'],
    mute: false,
    onEnd: function() {
        // Callback when the playlist finishes playing
    },
    delayTime: 2000,
    autoplay: true
});
