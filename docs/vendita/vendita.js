let progress = 50;
let startx = 0;
let active = 0;
let is_down = false;
let direction = 1;

const speed_wheel = 0.02;
const speed_drag = 0.03;

const getZindex = (array, index) => (
    array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)));

const items = document.querySelectorAll('.sliderItem');

const showItem = (item, index, active) => {
    const zIndex = getZindex([...items], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / items.length);
};

const animate = () => {
    progress = Math.max(0, Math.min(progress, 100));
    active = Math.floor(progress / 100 * (items.length - 1));

    items.forEach((item, index) => showItem(item, index, active));
};

animate();

items.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (i === active) {
            if (active === items.length - 1) {
                progress = 0;
            } else {
                progress = ((active + 1) / (items.length - 1)) * 100;
            }
        } else {
            progress = (i / (items.length - 1)) * 100;
        }

        animate();
    });
});



const wheel = e => {
    const wheelProgress = e.deltaY * speed_wheel;
    progress += wheelProgress;

    animate();
};

const move = e => {
    if (!is_down) return;

    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startx) * speed_drag;

    progress += mouseProgress;
    startx = x;

    animate();
};

const down = e => {
    is_down = true;
    startx = e.clientX || (e.touches && e.touches[0].clientX) || 0;
};

const up = e => {
    is_down = false;
};

document.addEventListener('mousewheel', wheel);
document.addEventListener('mousemove', move);
document.addEventListener('mousedown', down);
document.addEventListener('mouseup', up);

document.addEventListener('touchmove', move);
document.addEventListener('touchstart', down);
document.addEventListener('touchend', up);