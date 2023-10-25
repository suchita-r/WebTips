async function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                await swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
}

async function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    updateChart(arr, i, j);
    await sleep(500);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateChart(arr, currentIndex, swapIndex) {
    const chartContainer = document.getElementById('chart-container');
    chartContainer.innerHTML = '';
    arr.forEach((barHeight, index) => {
        const bar = document.createElement('div');
        bar.className = `bar ${index === currentIndex ? 'highlight' : ''} ${index === swapIndex ? 'highlight' : ''}`;
        bar.style.height = `${barHeight * 20}px`;
        chartContainer.appendChild(bar);
    });
}

async function bubbleSorting() {
    const numElements = parseInt(document.getElementById('num-elements').value);
    const bars = Array.from({ length: numElements }, () => Math.floor(Math.random() * 10) + 1);
    await bubbleSort(bars);
}
