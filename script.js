/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const volumeSlider = player.querySelector('[name="volume"]');
const playbackSpeedSlider = player.querySelector('[name="playbackSpeed"]');

// Play/pause functionality
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play/pause button text
function updateButton() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Skip forward or backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// Update volume and playback speed
function handleRangeUpdate() {
    video[this.name] = this.value;
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// Set video playback speed
function setPlaybackSpeed() {
    video.playbackRate = parseFloat(playbackSpeedSlider.value);
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
volumeSlider.addEventListener('input', handleRangeUpdate);
playbackSpeedSlider.addEventListener('input', setPlaybackSpeed);
