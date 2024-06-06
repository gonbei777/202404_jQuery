// $(document).ready(function () {
//   alert('jQuery動作テスト');
// });

// document.querySelector('h1').style.color = 'green'

$('h1').css('color', 'green')
$('.site-header-nav li a ').css('color', 'blue')

$('.mv-copy').next().css('text-decoration', 'underline')

$('.works-panel').find('.works-title').css('border-bottom', '2px solid #000')

$('.works-container')
  .css('border', '4px dotted orange')
  .find('.works-thumb')
  .css('opacity', '0.5')
  .next()
  .css('background-color', 'green')

const tweet = '<div class="tweet-content">イエローマジックデザインワークショップを開催しました。「普段何気なく使っているモノの見方を変えて見る」をテーマに、参加者のいろんなアイデアと作品が生まれました。</div>';

const $tweetCotainer = $('.tweet-container')

// $tweetCotainer.append(tweet)


let display = true

// on === addEventListener
$('#quick-news-btn').on('click', e => {
  if (display) {
    $('.quick-news-content').wrap('<div class="hidden">')
    // $('.quick-news-content').wrap("<div class=\"hidden\">")
    $(e.target).text('+ ニュースを開く')
    display = false
  } else {
    $('.quick-news-content').unwrap()
    $(e.target).text('× ニュースを閉じる')
    display = true
  }


})

$('.works-desc').remove()

// $('.works-thumb img').removeAttr('alt')

console.log($('.works-thumb img').attr('alt'))

$('.works-thumb img').attr('alt', 'アンティーク家具ショップ')


// FAQの操作
$('.faq-openclose').on('click', e => {
  console.log('FAQクリック')
  // イベントリスナーの削除
  // $('.faq-openclose').off('click')

  $(e.target).toggleClass('is-open')

  const $dd = $(e.target).parent().next()

  // if ($dd.is(':visible')) {
  //   // $dd.hide()
  //   $dd.slideUp()
  // } else {
  //   // $dd.show()
  //   $dd.slideDown()
  // }
  // $dd.toggle(!$dd.is(':visible'))
  $dd.stop().slideToggle(!$dd.is(':visible'))

  // dd部分(Answer)の表示
  // $dd.show()
})

// 1回のみ反応
// $jquery.one('click', () => {})

// $jquery.click(() => {})
// $jquery.dblclick(() => {})
// $jquery.hover(() => {}, () => {})
// $jquery.focus(() => {})
// $jquery.scroll(() => {})

// .onメソッドのもう1つの使い方（デリゲート＝委任）
// $jquery.on('イベント名', '子孫要素のセレクタ', () => {})


$(document).on('DOMContentLoaded', () => {
  console.log('あああ')
  $('h1').css('font-weight', 'bold')
})

$(document).ready(() => {
  $('.mv-subcopy').css('color', 'orange')
})

// $(関数(){})
$(function () {
  $('.mv-subcopy').css('color', 'green')
})

$(window).on('load', () => {
  console.log('すべてのコンテンツがロードされました')
})

const mouseFollow = $('.mouse-follow')
let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

$(window).on('mousemove', e => {
  // console.log(e.clientX, e.clientY)
  // mouseFollow.css({
  //   'left': e.clientX,
  //   'top': e.clientY
  // })
  mouseX = e.clientX
  mouseY = e.clientY
})

// 追従要素の位置をアップデートする関数
// 約60FPS
function updateMouseFollowPosition() {
  // console.log('あいうえお')
  let nowX = lerp(currentX, mouseX)
  let nowY = lerp(currentY, mouseY)

  currentX = nowX
  currentY = nowY

  mouseFollow.css({
    'left': nowX,
    'top': nowY
  })
  requestAnimationFrame(updateMouseFollowPosition)
}
updateMouseFollowPosition()

// 線形補間の関数
// c = current, d = destination, e = easing
function lerp(c, d, e = 0.1) {
  return c + (d - c) * e
}

$('.mv-copy').on('click', e => {
  $(e.target)
    .animate({
      'font-size': 40
    }, 1000, 'swing')
    .animate({ 'font-weight': '400' })

  $(e.target).animate({
    'width': 700
  }, {
    duration: 1000,
    easing: 'swing',
    step: function (num) {
      console.log(num)
    }
  })
})

$('.pagetop').on('click', () => {
  // const y = $('.works')[0].offsetTop
  $('html').animate({
    scrollTop: 0
  })
})

$('.tweet-show').on('click', () => {
  $('.tweet-content-ls16').fadeIn(1000, function () {
    $(this).css('background', 'orange')
  })
})

$('.tweet-hide').on('click', () => {
  $('.tweet-content-ls16').fadeOut(1000)
})


const tweets = [
  '「DX支援」に当社のサービスがお役に立てるかもしれません。',
  '良いデザインはどっち？ クイズを解くだけで、デザインの知識がどんどん身につく画期的なデザイン手法を紹介',
  '現場監督からWebデザイナーに転職。建築現場責任者として活躍されていた川本さんのキャリアチェンジの理由は？',
  'Webデザインの勉強やトレンドキャッチに役立つSNSアカウントおすすめ25選'
];

const $tweetContent = $('.tweet-content-ls19')
let counter = 0
$tweetContent.text(tweets[counter]).fadeIn()

// setTimeout(() => { }, 3000)
setInterval(() => {
  $tweetContent.fadeOut(400, () => {
    counter++
    if (counter === tweets.length) {
      counter = 0
    }
    $tweetContent.text(tweets[counter]).fadeIn()
  })
}, 3000)


const $serviceList = $('.service-list')
let isInView = false
// $(window).scroll()
$(window).on('scroll', () => {
  if (isInView) return

  console.log('スクロール検知中')

  isInView = $serviceList.inView('topOnly', 150)

  if (isInView) {
    $serviceList.addClass('in-view')
  }
})