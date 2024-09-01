var colors = ["#3bc0c3"], dataColors = $("#basic-area").data("colors"), options = {
        chart: {height: 380, type: "area", zoom: {enabled: !1}},
        dataLabels: {enabled: !1},
        stroke: {width: 2, curve: "straight"},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        series: [{name: "STOCK ABC", data: series.monthDataSeries1.prices}],
        title: {text: "Fundamental Analysis of Stocks", align: "left"},
        subtitle: {text: "Price Movements", align: "left"},
        labels: series.monthDataSeries1.dates,
        xaxis: {type: "datetime"},
        legend: {horizontalAlign: "left"},
        grid: {borderColor: "#f1f3fa"},
        responsive: [{breakpoint: 600, options: {chart: {toolbar: {show: !1}}, legend: {show: !1}}}]
    }, chart = new ApexCharts(document.querySelector("#basic-area"), options),
    colors = (chart.render(), ["#3bc0c3", "#6c757d"]), dataColors = $("#spline-area").data("colors"), options = {
        chart: {height: 380, type: "area"},
        dataLabels: {enabled: !1},
        stroke: {width: 2, curve: "smooth"},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        series: [{name: "Series 1", data: [40, 60, 44, 84, 64, 110, 95]}, {
            name: "Series 2",
            data: [20, 30, 22, 42, 32, 55, 44]
        }],
        legend: {offsetY: 5},
        xaxis: {categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]},
        tooltip: {fixed: {enabled: !1, position: "topRight"}},
        grid: {borderColor: "#f1f3fa"}
    }, colors = ((chart = new ApexCharts(document.querySelector("#spline-area"), options)).render(), ["#4489e4"]),
    dataColors = $("#basic-bar").data("colors"), options = {
        chart: {height: 380, type: "bar", toolbar: {show: !1}},
        plotOptions: {bar: {horizontal: !0}},
        dataLabels: {enabled: !1},
        series: [{data: [350, 480, 490, 520, 550, 600, 700, 1140, 1260, 1400]}],
        colors: colors = dataColors ? dataColors.split(",") : colors,
        xaxis: {categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]},
        states: {hover: {filter: "none"}},
        grid: {borderColor: "#f1f3fa"}
    }, colors = ((chart = new ApexCharts(document.querySelector("#basic-bar"), options)).render(), ["#33b0e0", "#f24f7c"]),
    dataColors = $("#grouped-bar").data("colors"), options = {
        chart: {height: 380, type: "bar", toolbar: {show: !1}},
        plotOptions: {bar: {horizontal: !0, dataLabels: {position: "top"}}},
        dataLabels: {enabled: !0, offsetX: -6, style: {fontSize: "13px", colors: ["#fff"]}},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        stroke: {show: !0, width: 1, colors: ["#fff"]},
        series: [{name: "Series 1", data: [45, 60, 41, 64, 22, 43, 21]}, {
            name: "Series 2",
            data: [42, 40, 33, 52, 13, 44, 32]
        }],
        xaxis: {categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]},
        legend: {offsetY: 5},
        states: {hover: {filter: "none"}},
        grid: {borderColor: "#f1f3fa", padding: {bottom: 5}}
    },
    colors = ((chart = new ApexCharts(document.querySelector("#grouped-bar"), options)).render(), ["#3bc0c3", "#47ad77", "#fa5c7c"]),
    dataColors = $("#basic-boxplot").data("colors"), options = {
        series: [{
            type: "boxPlot",
            data: [{x: "Jan 2015", y: [42, 68, 72, 80, 92]}, {x: "Jan 2016", y: [43, 65, 69, 76, 81]}, {
                x: "Jan 2017",
                y: [31, 39, 45, 51, 59]
            }, {x: "Jan 2018", y: [39, 46, 55, 65, 71]}, {x: "Jan 2019", y: [29, 31, 35, 39, 44]}, {
                x: "Jan 2020",
                y: [41, 49, 58, 61, 67]
            }, {x: "Jan 2021", y: [54, 59, 66, 71, 88]}]
        }],
        chart: {type: "boxPlot", height: 350, toolbar: {show: !1}},
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: (colors = dataColors ? dataColors.split(",") : colors)[0],
                    lower: colors[1]
                }
            }
        },
        stroke: {colors: ["#a1a9b1"]}
    },
    colors = ((chart = new ApexCharts(document.querySelector("#basic-boxplot"), options)).render(), ["#3bc0c3", "#47ad77", "#fa5c7c"]),
    options = ((dataColors = $("#scatter-boxplot").data("colors")) && (colors = dataColors.split(",")), {
        series: [{
            name: "Box",
            type: "boxPlot",
            data: [{x: new Date("2017-01-01").getTime(), y: [54, 66, 69, 75, 88]}, {
                x: new Date("2018-01-01").getTime(),
                y: [43, 65, 69, 76, 81]
            }, {x: new Date("2019-01-01").getTime(), y: [31, 39, 45, 51, 59]}, {
                x: new Date("2020-01-01").getTime(),
                y: [39, 46, 55, 65, 71]
            }, {x: new Date("2021-01-01").getTime(), y: [29, 31, 35, 39, 44]}]
        }, {
            name: "Outliers",
            type: "scatter",
            data: [{x: new Date("2017-01-01").getTime(), y: 32}, {
                x: new Date("2018-01-01").getTime(),
                y: 25
            }, {x: new Date("2019-01-01").getTime(), y: 64}, {
                x: new Date("2020-01-01").getTime(),
                y: 27
            }, {x: new Date("2020-01-01").getTime(), y: 78}, {x: new Date("2021-01-01").getTime(), y: 15}]
        }],
        chart: {type: "boxPlot", height: 350},
        colors: colors,
        stroke: {colors: ["#a1a9b1"]},
        legend: {offsetY: 10},
        xaxis: {
            type: "datetime", tooltip: {
                formatter: function (o) {
                    return new Date(o).getFullYear()
                }
            }
        },
        grid: {padding: {bottom: 5}},
        tooltip: {shared: !1, intersect: !0},
        plotOptions: {boxPlot: {colors: {upper: colors[0], lower: colors[1]}}}
    });

function generateData(o, e, t) {
    for (var a = 0, r = []; a < e;) {
        var s = Math.floor(750 * Math.random()) + 1, l = Math.floor(Math.random() * (t.max - t.min + 1)) + t.min,
            i = Math.floor(61 * Math.random()) + 15;
        r.push([s, l, i]), a++
    }
    return r
}

(chart = new ApexCharts(document.querySelector("#scatter-boxplot"), options)).render();
colors = ["#3bc0c3", "#edc755", "#fa5c7c"], (dataColors = $("#simple-bubble").data("colors")) && (colors = dataColors.split(",")), options = {
    chart: {
        height: 380,
        type: "bubble",
        toolbar: {show: !1}
    },
    dataLabels: {enabled: !1},
    series: [{
        name: "Bubble 1",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {min: 10, max: 60})
    }, {
        name: "Bubble 2",
        data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {min: 10, max: 60})
    }, {name: "Bubble 3", data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {min: 10, max: 60})}],
    fill: {opacity: .8, gradient: {enabled: !1}},
    colors: colors,
    xaxis: {tickAmount: 12, type: "category"},
    yaxis: {max: 70},
    grid: {borderColor: "#f1f3fa", padding: {bottom: 5}},
    legend: {offsetY: 7}
};

function generateData1(o, e, t) {
    for (var a = 0, r = []; a < e;) {
        var s = Math.floor(Math.random() * (t.max - t.min + 1)) + t.min, l = Math.floor(61 * Math.random()) + 15;
        r.push([o, s, l]), o += 864e5, a++
    }
    return r
}

(chart = new ApexCharts(document.querySelector("#simple-bubble"), options)).render();
var colors = ["#3bc0c3", "#47ad77", "#fa5c7c", "#39afd1"],
    options2 = ((dataColors = $("#second-bubble").data("colors")) && (colors = dataColors.split(",")), {
        chart: {
            height: 380,
            type: "bubble",
            toolbar: {show: !1}
        },
        dataLabels: {enabled: !1},
        series: [{
            name: "Product 1",
            data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {min: 10, max: 60})
        }, {
            name: "Product 2",
            data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {min: 10, max: 60})
        }, {
            name: "Product 3",
            data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {min: 10, max: 60})
        }, {name: "Product 4", data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {min: 10, max: 60})}],
        fill: {type: "gradient"},
        colors: colors,
        xaxis: {tickAmount: 12, type: "datetime", labels: {rotate: 0}},
        yaxis: {max: 70},
        legend: {offsetY: 7},
        grid: {borderColor: "#f1f3fa", padding: {bottom: 5}}
    }),
    colors = ((chart = new ApexCharts(document.querySelector("#second-bubble"), options2)).render(), ["#47ad77", "#fa5c7c"]),
    dataColors = $("#simple-candlestick").data("colors"), options = {
        chart: {height: 400, type: "candlestick"},
        plotOptions: {
            candlestick: {
                colors: {
                    upward: (colors = dataColors ? dataColors.split(",") : colors)[0],
                    downward: colors[1]
                }
            }
        },
        series: [{data: seriesData}],
        stroke: {show: !0, colors: "#f1f3fa", width: 1},
        xaxis: {type: "datetime"},
        grid: {borderColor: "#f1f3fa"}
    },
    colors = ((chart = new ApexCharts(document.querySelector("#simple-candlestick"), options)).render(), ["#47ad77", "#fa5c7c"]),
    optionsCandlestick = ((dataColors = $("#combo-candlestick").data("colors")) && (colors = dataColors.split(",")), {
        chart: {
            height: 240,
            type: "candlestick",
            toolbar: {show: !1},
            zoom: {enabled: !1}
        },
        series: [{data: seriesData}],
        plotOptions: {candlestick: {colors: {upward: colors[0], downward: colors[1]}}},
        xaxis: {type: "datetime"},
        grid: {borderColor: "#f1f3fa"}
    }), chartCandlestick = new ApexCharts(document.querySelector("#combo-candlestick"), optionsCandlestick),
    colors = (chartCandlestick.render(), ["#3bc0c3", "#edc755"]),
    options = ((dataColors = $("#combo-bar-candlestick").data("colors")) && (colors = dataColors.split(",")), {
        chart: {
            height: 160,
            type: "bar",
            toolbar: {show: !1, autoSelected: "selection"},
            selection: {
                xaxis: {min: new Date("20 Jan 2017").getTime(), max: new Date("10 Dec 2017").getTime()},
                fill: {color: "#6c757d", opacity: .4},
                stroke: {color: "#6c757d"}
            },
            events: {
                selection: function (o, e) {
                    chartCandlestick.updateOptions({xaxis: {min: e.xaxis.min, max: e.xaxis.max}}, !1, !1)
                }
            }
        },
        dataLabels: {enabled: !1},
        plotOptions: {
            bar: {
                columnWidth: "80%",
                colors: {ranges: [{from: -1e3, to: 0, color: colors[0]}, {from: 1, to: 1e4, color: colors[1]}]}
            }
        },
        series: [{name: "volume", data: seriesDataLinear}],
        xaxis: {type: "datetime", axisBorder: {offsetX: 13}},
        yaxis: {labels: {show: !1}},
        grid: {borderColor: "#f1f3fa"}
    }),
    colors = ((chart = new ApexCharts(document.querySelector("#combo-bar-candlestick"), options)).render(), ["#3bc0c3", "#4489e4", "#33b0e0"]),
    dataColors = $("#basic-column").data("colors"), options = {
        chart: {height: 396, type: "bar", toolbar: {show: !1}},
        plotOptions: {bar: {horizontal: !1, endingShape: "rounded", columnWidth: "80%", borderRadius: 4}},
        dataLabels: {enabled: !1},
        stroke: {show: !0, width: 2, colors: ["transparent"]},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        series: [{name: "Net Profit", data: [82, 50, 55, 42, 45, 48, 52, 53, 41]}, {
            name: "Revenue",
            data: [60, 42, 82, 62, 61, 58, 63, 60, 66]
        }, {name: "Free Cash Flow", data: [70, 60, 95, 82, 87, 105, 91, 114, 94]}],
        xaxis: {categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]},
        legend: {offsetY: 7},
        yaxis: {title: {text: "$ (thousands)"}},
        fill: {opacity: 1},
        grid: {row: {colors: ["transparent", "transparent"], opacity: .2}, borderColor: "#f1f3fa", padding: {bottom: 5}},
        tooltip: {
            y: {
                formatter: function (o) {
                    return "$ " + o + " thousands"
                }
            }
        }
    }, colors = ((chart = new ApexCharts(document.querySelector("#basic-column"), options)).render(), ["#3bc0c3"]),
    dataColors = $("#datalabels-column").data("colors"), options = {
        chart: {height: 380, type: "bar", toolbar: {show: !1}},
        plotOptions: {bar: {borderRadius: 10, dataLabels: {position: "top"}}},
        dataLabels: {
            enabled: !0, formatter: function (o) {
                return o + "%"
            }, offsetY: -25, style: {fontSize: "12px", colors: ["#304758"]}
        },
        colors: colors = dataColors ? dataColors.split(",") : colors,
        legend: {show: !0, horizontalAlign: "center", offsetX: 0, offsetY: -5},
        series: [{name: "Inflation", data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, .8, .5, .2]}],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "top",
            labels: {offsetY: 0},
            axisBorder: {show: !1},
            axisTicks: {show: !1},
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: .4, opacityTo: .5}
                }
            },
            tooltip: {enabled: !0, offsetY: -10}
        },
        fill: {
            gradient: {
                enabled: !1,
                shade: "light",
                type: "horizontal",
                shadeIntensity: .25,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        yaxis: {
            axisBorder: {show: !1}, axisTicks: {show: !1}, labels: {
                show: !1, formatter: function (o) {
                    return o + "%"
                }
            }
        },
        title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: !0,
            offsetY: 360,
            align: "center",
            style: {color: "#444"}
        },
        grid: {row: {colors: ["transparent", "transparent"], opacity: .2}, borderColor: "#f1f3fa"}
    }, colors = ((chart = new ApexCharts(document.querySelector("#datalabels-column"), options)).render(), ["#edc755"]),
    dataColors = $("#line-chart").data("colors"), options = {
        chart: {height: 380, type: "line", zoom: {enabled: !1}},
        dataLabels: {enabled: !1},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        stroke: {width: [4], curve: "straight"},
        series: [{name: "Desktops", data: [40, 35, 55, 60, 33, 70, 80, 96, 130]}],
        title: {text: "Product Trends by Month", align: "center"},
        grid: {row: {colors: ["transparent", "transparent"], opacity: .2}, borderColor: "#f1f3fa"},
        labels: series.monthDataSeries1.dates,
        xaxis: {categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]},
        responsive: [{breakpoint: 600, options: {chart: {toolbar: {show: !1}}, legend: {show: !1}}}]
    }, colors = ((chart = new ApexCharts(document.querySelector("#line-chart"), options)).render(), ["#d03f3f,#3bc0c3"]),
    dataColors = $("#line-chart-datalabel").data("colors"), options = {
        chart: {height: 380, type: "line", zoom: {enabled: !1}, toolbar: {show: !1}},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        dataLabels: {enabled: !0},
        stroke: {width: [4, 4], curve: "smooth"},
        series: [{name: "High - 2022", data: [28, 29, 33, 36, 32, 32, 33]}, {
            name: "Low - 2022",
            data: [12, 11, 14, 18, 17, 13, 13]
        }],
        title: {text: "Average High & Low Temperature", align: "left"},
        grid: {row: {colors: ["transparent", "transparent"], opacity: .2}, borderColor: "#f1f3fa"},
        markers: {style: "inverted", size: 6},
        xaxis: {categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], title: {text: "Month"}},
        yaxis: {title: {text: "Temperature"}, min: 5, max: 40},
        legend: {position: "top", horizontalAlign: "right", floating: !0, offsetY: -25, offsetX: -5},
        responsive: [{breakpoint: 600, options: {chart: {toolbar: {show: !1}}, legend: {show: !1}}}]
    },
    colors = ((chart = new ApexCharts(document.querySelector("#line-chart-datalabel"), options)).render(), ["#4489e4", "#3bc0c3"]),
    dataColors = $("#line-column-mixed").data("colors"), options = {
        chart: {height: 380, type: "line", toolbar: {show: !1}},
        series: [{
            name: "Website Blog",
            type: "column",
            data: [530, 510, 420, 680, 400, 415, 340, 360, 780, 340, 270, 180]
        }, {name: "Social Media", type: "line", data: [28, 42, 30, 25, 48, 30, 26, 30, 28, 32, 15, 20]}],
        stroke: {width: [0, 4]},
        labels: ["01 Jan 2001", "02 Jan 2001", "03 Jan 2001", "04 Jan 2001", "05 Jan 2001", "06 Jan 2001", "07 Jan 2001", "08 Jan 2001", "09 Jan 2001", "10 Jan 2001", "11 Jan 2001", "12 Jan 2001"],
        xaxis: {type: "datetime"},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        yaxis: [{title: {text: "Website Blog"}}, {opposite: !0, title: {text: "Social Media"}}],
        legend: {offsetY: 7},
        grid: {borderColor: "#f1f3fa", padding: {bottom: 5}}
    },
    colors = ((chart = new ApexCharts(document.querySelector("#line-column-mixed"), options)).render(), ["#3bc0c3", "#39afd1", "#fa5c7c"]),
    dataColors = $("#multiple-yaxis-mixed").data("colors"), options = {
        chart: {height: 380, type: "line", stacked: !1, toolbar: {show: !1}},
        dataLabels: {enabled: !1},
        stroke: {width: [0, 0, 3]},
        series: [{name: "Income", type: "column", data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]}, {
            name: "Cashflow",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {name: "Revenue", type: "line", data: [20, 29, 37, 36, 44, 45, 50, 58]}],
        colors: colors = dataColors ? dataColors.split(",") : colors,
        xaxis: {categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]},
        yaxis: [{
            axisTicks: {show: !0},
            axisBorder: {show: !0, color: colors[0]},
            labels: {style: {color: colors[0]}},
            title: {text: "Income (thousand crores)"}
        }, {
            opposite: !0,
            axisTicks: {show: !0},
            axisBorder: {show: !0, color: colors[2]},
            labels: {style: {color: colors[2]}},
            title: {text: "Revenue (thousand crores)"}
        }],
        tooltip: {
            followCursor: !0, y: {
                formatter: function (o) {
                    return void 0 !== o ? o + " thousand crores" : o
                }
            }
        },
        grid: {borderColor: "#f1f3fa", padding: {bottom: 5}},
        legend: {offsetY: 7},
        responsive: [{breakpoint: 600, options: {yaxis: {show: !1}, legend: {show: !1}}}]
    },
    colors = ((chart = new ApexCharts(document.querySelector("#multiple-yaxis-mixed"), options)).render(), ["#3bc0c3", "#6c757d", "#4489e4", "#d03f3f", "#edc755"]),
    dataColors = $("#simple-pie").data("colors"), options = {
        chart: {height: 320, type: "pie"},
        series: [60, 40, 32, 55, 18],
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: colors = dataColors ? dataColors.split(",") : colors,
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 7
        },
        responsive: [{breakpoint: 600, options: {chart: {height: 240}, legend: {show: !1}}}]
    },
    colors = ((chart = new ApexCharts(document.querySelector("#simple-pie"), options)).render(), ["#3bc0c3", "#6c757d", "#4489e4", "#d03f3f", "#edc755"]),
    dataColors = $("#simple-donut").data("colors"), options = {
        chart: {height: 320, type: "donut"},
        series: [40, 60, 45, 22, 18],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 7
        },
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: colors = dataColors ? dataColors.split(",") : colors,
        responsive: [{breakpoint: 600, options: {chart: {height: 240}, legend: {show: !1}}}]
    },
    colors = ((chart = new ApexCharts(document.querySelector("#simple-donut"), options)).render(), ["#3bc0c3", "#6c757d", "#4489e4", "#d03f3f", "#edc755", "#33b0e0"]),
    dataColors = $("#basic-polar-area").data("colors"), options = {
        series: [16, 22, 24, 16, 17, 12],
        chart: {height: 380, type: "polarArea"},
        stroke: {colors: ["#fff"]},
        fill: {opacity: .8},
        labels: ["Vote A", "Vote B", "Vote C", "Vote D", "Vote E", "Vote F"],
        legend: {position: "bottom"},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        responsive: [{breakpoint: 480, options: {chart: {width: 200}, legend: {position: "bottom"}}}]
    }, options = ((chart = new ApexCharts(document.querySelector("#basic-polar-area"), options)).render(), {
        series: [72, 80, 60, 75, 65],
        chart: {height: 380, type: "polarArea"},
        labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
        fill: {opacity: 1},
        stroke: {width: 1},
        yaxis: {show: !1},
        legend: {position: "bottom"},
        plotOptions: {polarArea: {rings: {strokeWidth: 0}, spokes: {strokeWidth: 0}}},
        theme: {monochrome: {enabled: !0, shadeTo: "light", color: "#f24f7c", shadeIntensity: .6}}
    }),
    colors = ((chart = new ApexCharts(document.querySelector("#monochrome-polar-area"), options)).render(), ["#4489e4"]),
    dataColors = $("#basic-radar").data("colors"), options = {
        chart: {height: 350, type: "radar"},
        series: [{name: "Series 1", data: [80, 50, 30, 40, 100, 20]}],
        colors: colors = dataColors ? dataColors.split(",") : colors,
        labels: ["January", "February", "March", "April", "May", "June"]
    }, colors = ((chart = new ApexCharts(document.querySelector("#basic-radar"), options)).render(), ["#d03f3f"]),
    dataColors = $("#radar-polygon").data("colors"), options = {
        chart: {height: 350, type: "radar"},
        series: [{name: "Series 1", data: [20, 100, 40, 30, 50, 80, 33]}],
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        plotOptions: {radar: {size: 140}},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        markers: {size: 4, colors: ["#fff"], strokeColor: colors, strokeWidth: 2},
        tooltip: {
            y: {
                formatter: function (o) {
                    return o
                }
            }
        },
        yaxis: {
            tickAmount: 7, labels: {
                formatter: function (o, e) {
                    return e % 2 == 0 ? o : ""
                }
            }
        }
    }, colors = ((chart = new ApexCharts(document.querySelector("#radar-polygon"), options)).render(), ["#3bc0c3"]),
    dataColors = $("#basic-radialbar").data("colors"), options = {
        chart: {height: 320, type: "radialBar"},
        plotOptions: {radialBar: {hollow: {size: "70%"}, track: {background: "rgba(170,184,197, 0.2)"}}},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        series: [70],
        labels: ["CRICKET"]
    },
    colors = ((chart = new ApexCharts(document.querySelector("#basic-radialbar"), options)).render(), ["#3bc0c3", "#4489e4", "#edc755", "#33b0e0"]),
    dataColors = $("#multiple-radialbar").data("colors"), options = {
        chart: {height: 320, type: "radialBar"},
        plotOptions: {circle: {dataLabels: {showOn: "hover"}}, radialBar: {track: {background: "rgba(170,184,197, 0.2)"}}},
        colors: colors = dataColors ? dataColors.split(",") : colors,
        series: [66, 70, 55, 92],
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
        responsive: [{breakpoint: 380, options: {chart: {height: 260}}}]
    };
(chart = new ApexCharts(document.querySelector("#multiple-radialbar"), options)).render();



