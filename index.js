// Metric-to-Imperial ratios
const ratios = {
    distance: 3.280839895,
    volume: 0.2641721769,
    mass: 2.2046244202,
    speed: 0.6213711922
};

// Queried elements
const numberInputEl = document.getElementById('number-input');
const lengthPEl = document.getElementById('length-display');
const volumePEl = document.getElementById('volume-display');
const massPEl = document.getElementById('mass-display');
const speedPEl = document.getElementById('speed-display');
const darkModeToggleBtn = document.getElementById('dark-mode-toggle');

let darkModeEnabled = false;

// Functions
function metricToImperial(value, ratio) {
    return value * ratio;
}

function imperialToMetric(value, ratio) {
    return value / ratio;
}

function renderContent(numValue) {
    // Exclude negative user input
    if (numValue < 0) {
        numValue = 0;
        numberInputEl.value = 0;
    }
       
    lengthPEl.textContent = createDisplayedText(numValue, metricToImperial(numValue, ratios.distance).toFixed(3), imperialToMetric(numValue, ratios.distance).toFixed(3), 'meters', 'feet');
    
    volumePEl.textContent = createDisplayedText(numValue, metricToImperial(numValue, ratios.volume).toFixed(3), imperialToMetric(numValue, ratios.volume).toFixed(3), 'liters', 'gallons');
        
    massPEl.textContent = createDisplayedText(numValue, metricToImperial(numValue, ratios.mass).toFixed(3), imperialToMetric(numValue, ratios.mass).toFixed(3), 'kilos', 'pounds');  
    
    speedPEl.textContent = createDisplayedText(numValue, metricToImperial(numValue, ratios.speed).toFixed(3), imperialToMetric(numValue, ratios.speed).toFixed(3), 'km/h', 'mi/h');
}

function createDisplayedText(numVal, metricImperialVal, imperialMetricVal, metricUnitTypeStr, imperialUnitTypeStr) {
    return `${numVal} ${metricUnitTypeStr} = ${metricImperialVal} ${imperialUnitTypeStr} | ${numVal} ${imperialUnitTypeStr} = ${imperialMetricVal} ${metricUnitTypeStr}`;
}

// Event listener(s)
document.addEventListener('DOMContentLoaded', () => {
    renderContent(0); 
});

numberInputEl.addEventListener('input', event => {        
    renderContent(Number(event.target.value));
});

darkModeToggleBtn.addEventListener('click', () => {
    darkModeEnabled = darkModeEnabled ? !darkModeEnabled : !darkModeEnabled;
    
    const darkModeClass = 'dark-mode';
    const darkModeBtnFlipClass = 'dark-mode-btn-flip';
    
    if (darkModeEnabled) {
        document.body.classList.add(darkModeClass);
        darkModeToggleBtn.classList.add(darkModeBtnFlipClass);
    } else {
        document.body.classList.remove(darkModeClass);
        darkModeToggleBtn.classList.remove(darkModeBtnFlipClass);
    }
});