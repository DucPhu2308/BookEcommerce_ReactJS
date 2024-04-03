var counter = document.querySelectorAll(".box_right_number");


counter.forEach((item) => {
    var finalValue = item.innerText;

    // Thời gian (giây) cần để thực hiện hiệu ứng
    var duration = 2;

    // Số chữ số thập phân bạn muốn giữ lại
    var decimalPlaces = 0;

    var step = finalValue / (duration * 1000 / 150); // 50 là khoảng cách thời gian giữa mỗi lần cập nhật

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    function updateCounter() {
        var value = 0;
        var interval = setInterval(function () {
            value = value + step;
            item.innerText = formatNumber(value.toFixed(decimalPlaces));
            if (value >= finalValue) {
                clearInterval(interval);
                item.innerText = formatNumber(finalValue);
            }
        }, 50);
    }

    // Bắt đầu hiệu ứng
    updateCounter();
});




const ctx = document.getElementById('myChartDashboard');

var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'orange'
        ],

        borderWidth: 0
    }]
};

// Cấu hình biểu đồ
var options = {
    legend: {
        position: 'bottom' // Di chuyển nhãn xuống phía dưới
    },
    animation: {
        animateScale: true, // Hiệu ứng phóng to thu nhỏ
        animateRotate: true // Hiệu ứng quay
    },
    plugins: {
        datalabels: {
            display: false, // ẩn label
        },
    },

};

var myChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

const lineChart= document.getElementById('myLineChart');
var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        // label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'orange'
        ],
        borderColor: [
            'red',
            'blue',
            'yellow',
            'green',
            'purple',
            'orange'
        ],
      
    }]
};


// Cấu hình biểu đồ
var options = {
    
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    plugins: {
        datalabels: {
            display: false, // ẩn label
        },
    },
    

};

var myLineChart = new Chart(lineChart, {
    type: 'line',
    data: data,
    options: options
});