const bars = document.querySelectorAll('.chart-image .chart-bar');
const barValues = [18, 35, 52.36, 31.07, 23, 42, 24];

const maxHeight = 9.5;
const maxBarHeight = maxHeight / Math.max(...barValues);

for (let i = 0; i < bars.length; i++) {
    bars[i].style.height = `${maxBarHeight * barValues[i]}rem`;
    bars[i].setAttribute("data-value", '$'+barValues[i]);
}