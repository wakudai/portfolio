/*
  スキル一覧
*/

//Photoshop
var ps_chart = document.getElementById("ps"); //canvasに設定したidを指定
var ps_chart_flag = false; //フラグを設定

//グラフの描画設定
var ps_chartItem = function() {
    var ps_context = ps_chart.getContext('2d');
    ps_chart = new Chart(ps_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [85, 15]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var ps_chartTiming = function() {
    var target = $(ps_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && ps_chart_flag == false ) {
        ps_chartItem();
        ps_chart_flag = true;
    }
};
window.addEventListener('load', ps_chartTiming);
window.addEventListener('scroll', ps_chartTiming);


//Illustrator
var ill_chart = document.getElementById("ill"); //canvasに設定したidを指定
var ill_chart_flag = false; //フラグを設定

//グラフの描画設定
var ill_chartItem = function() {
    var ill_context = ill_chart.getContext('2d');
    ill_chart = new Chart(ill_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [87, 13]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var ill_chartTiming = function() {
    var target = $(ill_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && ill_chart_flag == false ) {
        ill_chartItem();
        ill_chart_flag = true;
    }
};
window.addEventListener('load', ill_chartTiming);
window.addEventListener('scroll', ill_chartTiming);


//XD
var xd_chart = document.getElementById("xd"); //canvasに設定したidを指定
var xd_chart_flag = false; //フラグを設定

//グラフの描画設定
var xd_chartItem = function() {
    var xd_context = xd_chart.getContext('2d');
    xd_chart = new Chart(xd_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [75, 25]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var xd_chartTiming = function() {
    var target = $(xd_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && xd_chart_flag == false ) {
        xd_chartItem();
        xd_chart_flag = true;
    }
};
window.addEventListener('load', xd_chartTiming);
window.addEventListener('scroll', xd_chartTiming);


//HTML
var html_chart = document.getElementById("html"); //canvasに設定したidを指定
var html_chart_flag = false; //フラグを設定

//グラフの描画設定
var html_chartItem = function() {
    var html_context = html_chart.getContext('2d');
    html_chart = new Chart(html_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [90, 10]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var html_chartTiming = function() {
    var target = $(html_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && html_chart_flag == false ) {
        html_chartItem();
        html_chart_flag = true;
    }
};
window.addEventListener('load', html_chartTiming);
window.addEventListener('scroll', html_chartTiming);


//CSS
var css_chart = document.getElementById("css"); //canvasに設定したidを指定
var css_chart_flag = false; //フラグを設定

//グラフの描画設定
var css_chartItem = function() {
    var css_context = css_chart.getContext('2d');
    css_chart = new Chart(css_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [90, 10]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var css_chartTiming = function() {
    var target = $(css_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && css_chart_flag == false ) {
        css_chartItem();
        css_chart_flag = true;
    }
};
window.addEventListener('load', css_chartTiming);
window.addEventListener('scroll', css_chartTiming);


//JavaScript
var js_chart = document.getElementById("js"); //canvasに設定したidを指定
var js_chart_flag = false; //フラグを設定

//グラフの描画設定
var js_chartItem = function() {
    var js_context = js_chart.getContext('2d');
    js_chart = new Chart(js_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [75, 25]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var js_chartTiming = function() {
    var target = $(js_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && js_chart_flag == false ) {
        js_chartItem();
        js_chart_flag = true;
    }
};
window.addEventListener('load', js_chartTiming);
window.addEventListener('scroll', js_chartTiming);


//jQuery
var jq_chart = document.getElementById("jq"); //canvasに設定したidを指定
var jq_chart_flag = false; //フラグを設定

//グラフの描画設定
var jq_chartItem = function() {
    var jq_context = jq_chart.getContext('2d');
    jq_chart = new Chart(jq_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [75, 25]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var jq_chartTiming = function() {
    var target = $(jq_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && jq_chart_flag == false ) {
        jq_chartItem();
        jq_chart_flag = true;
    }
};
window.addEventListener('load', jq_chartTiming);
window.addEventListener('scroll', jq_chartTiming);


//WordPress
var wp_chart = document.getElementById("wp"); //canvasに設定したidを指定
var wp_chart_flag = false; //フラグを設定

//グラフの描画設定
var wp_chartItem = function() {
    var wp_context = wp_chart.getContext('2d');
    wp_chart = new Chart(wp_context, {
    type: 'doughnut',
    data: {
        datasets: [{
            borderWidth: 0,
            backgroundColor: ["#f59b00", "#ffffff"],
            data: [75, 25]
        }]
    },
    options: {
        responsive: true,
        cutout: '85%',
    }
});
};

//グラフの描画タイミング
var wp_chartTiming = function() {
    var target = $(wp_chart).offset().top; //画面上からのコンテンツまでの距離
    var scroll = $(window).scrollTop();　//スクロール量を取得
    var height = $(window).height();　//画面の高さを取得

    if ( scroll > target - height && wp_chart_flag == false ) {
        wp_chartItem();
        wp_chart_flag = true;
    }
};
window.addEventListener('load', wp_chartTiming);
window.addEventListener('scroll', wp_chartTiming);


$(function () {
    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        $((".skill__toolIcon")).each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 20) {
                $(this).addClass("fadeIn__bottom");
            }
        });
    });
    });