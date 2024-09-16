document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('speed0.5').addEventListener('click', () => {
    setPlaybackSpeed(0.5);
  });

  document.getElementById('speed1').addEventListener('click', () => {
    setPlaybackSpeed(1);
  });

  document.getElementById('speed1.5').addEventListener('click', () => {
    setPlaybackSpeed(1.5);
  });

  document.getElementById('speed2').addEventListener('click', () => {
    setPlaybackSpeed(2);
  });

  document.getElementById('speed2.5').addEventListener('click', () => {
    setPlaybackSpeed(2.5);
  });
});

function setPlaybackSpeed(speed) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: (playbackSpeed) => {
          document.querySelectorAll('video').forEach((video) => {
            video.playbackRate = playbackSpeed;
          });
        },
        args: [speed],
      },
      () => {
        // Display confirmation message within the popup
        const messageElement = document.getElementById('message');
        messageElement.textContent = `Playback speed set to ${speed}x`;

        // Optional: Clear the message after a few seconds
        setTimeout(() => {
          messageElement.textContent = '';
        }, 3000);
      }
    );
  });
}
