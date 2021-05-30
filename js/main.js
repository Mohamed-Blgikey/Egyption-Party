
$(`#btnUp`).click(function () {
    $(`body,html`).animate({ scrollTop: 0 }, 1000)

});

let secondSection = $(`#details`).offset().top;
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if ($(window).scrollTop() > secondSection / 2) {
        $(`#btnUp`).fadeIn(1000)
    }
    else {
        $(`#btnUp`).fadeOut(1000)
    }
});

//------------ nav & home

let navWidth = $(`nav`).innerWidth();

$(`nav`).css(`left`, `-${navWidth}px`);
$(`#open`).click(function () {
    $(`nav`).css(`left`, `0px`);
    $(`#home`).css(`left`, `${navWidth}px`);

    if ($(`#home`).innerWidth() == $(`body`).innerWidth()) {
        $(`#home`).css(`width`, `-=${navWidth}`);
    }

});

$(`#close`).click(function () {
    $(`nav`).css(`left`, `-${navWidth}px`);
    $(`#home`).css(`left`, `0px`);
    $(`#home`).css(`width`, `100%`);
});


$(`nav a`).click(function () {
    let hrefLink = $(this).attr("href");
    let sectionTop = $(hrefLink).offset().top;
    $(`html,body`).animate({ scrollTop: sectionTop }, 1000)
});



//--------------- Details

$(`.show`).click(function (e) {
    if ($(e.target).next().css(`display`) == `block`) {
        $(e.target).next().slideUp(1000)
    }
    else {
        $(`.singerDesc`).slideUp(1000);
        $(e.target).next().slideDown(1000)
    }

});





/**--------------- duration */

function myBirthDay() {
    let birthDayTime = new Date(`2041-6-29`).getTime();//milisecond from 1 1 1970 to 29 6 2021
    let cuurentDay = new Date();

    let timeForcurrentDay = cuurentDay.getTime();//milisecond from 1 1 1970 to now
    let remain = birthDayTime - timeForcurrentDay;//milisecond now to 29 6 2021
    // console.log(remain);



    let second = Math.floor((remain / 1000));
    let minute = Math.floor(second / 60);
    let hour = Math.floor(minute / 60);
    let day = Math.floor(hour / 24);
    second = 59 - cuurentDay.getSeconds();
    minute = 59 - cuurentDay.getMinutes();
    hour = 23 - cuurentDay.getHours();

    $(`#day`).html(`${day} D`);
    $(`#hour`).html(`0-${hour} H`);
    $(`#minute`).html(`0-${minute} M`);
    $(`#second`).html(`0-${second} s`);
    setTimeout(myBirthDay, 1000);
}
myBirthDay();


/**--------------contact */
$(`textarea`).keyup(function () {

    let numOfChar = $(`textarea`).val().length;
    // console.log(x);
    let remain = 100 - numOfChar;
    // console.log(remain);
    if (remain > 0) {
        $(`#count`).html(`${remain}`);
    } else {
        $(`#count`).html(`your available character finished`);
    }

});
