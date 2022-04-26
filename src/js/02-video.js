import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
const time = localStorage.getItem(CURRENT_TIME);

player.setCurrentTime(time);
const onTimeUpdate = function (event) {
  localStorage.setItem(CURRENT_TIME, event.seconds);
  console.log(event);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
