Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: '2023來臺旅客目的統計圖'
    },
    tooltip: {
        valueSuffix: '人'
    },
    subtitle: {
        text:
        'Source:<a href="https://stat.taiwan.net.tw/inboundSearch" target="_default">MDPI</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: '人數',
            colorByPoint: true,
            data: [
                {
                    name: '業務',
                    y:   3012 

                },
                {
                    name: '觀光',
                    sliced: true,
                    selected: true,
                    y:   13575 

                },
                {
                    name: '探親',
                    y:   349601 

                },
                {
                    name: '會議',
                    y:   39569 

                },
                {
                    name: '求學',
                    y:   565 

                },
                {
                    name: '展覽',
                    y:   19319 

                },
                {
                    name: '醫療',
                    y:  11696 

                },
                {
                    name: '其他',
                    y:   7916 

                }
            ]
        }
    ]
});