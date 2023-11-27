import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const getCurrentTime = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

let curTime = 0;

if (localStorage.getItem('videoplayer-current-time')) {
  curTime = localStorage.getItem('videoplayer-current-time');
}

player.setCurrentTime(curTime);