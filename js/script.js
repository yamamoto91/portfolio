'use strict';

//カウントダウン
function countdown(due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [days, hours, min, sec];

  return count;
}

const goal = new Date(2022, 8, 21);

function recalc() {
  const counter = countdown(goal);
  document.getElementById('day').textContent = counter[0];
  document.getElementById('hour').textContent = String(counter[1]).padStart(2, '0');
  document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
  document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
  refresh();
}

function refresh() {
  setTimeout(recalc, 1000);
}

recalc();

//ロケーション
const lang = document.querySelector('html').lang;

if(lang === 'ja') {
  document.querySelector('option[value="index.html"]').selected = true;
} else if(lang === 'en') {
  document.querySelector('option[value="index-en.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
  location.href = document.getElementById('form').select.value;
}

//スムーススクロール
$('.nav-menu-item-link').on('click', function(e) {
  e.preventDefault()

  const sectionId = $(this).attr('href');
  const sectionOffsetTop = $(sectionId).offset().top
  window.scrollTo({
    top: sectionOffsetTop,
    behavior: "smooth",
  });
});

//spナビ表示
$('.nav-toggle').on('click', function() {
  $('.nav-toggle, #nav').toggleClass('show');
});

//imgをフワッと表示
$(function () {
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});

//page-top
$(function () {
  const topBtn = $("#page-top");
  topBtn.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});