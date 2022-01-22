const owl         = $('.owl-1');
const owlL        = $('#slider-arrow-l');
const owlR        = $('#slider-arrow-r');
const lifeSlider  = $('#life-slider');

owlL.click(function(){
    lifeSlider.trigger('prev.owl.carousel');
});

owlR.click(function(){
lifeSlider.trigger('next.owl.carousel');
});

owl.owlCarousel({
  	loop:true,
    margin:16,
    dots:true,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        385:{
            items:1
        },
        900:{
            items:1
        }
    }
  });


const owl2              = $('.owl-2');
const owlL2             = $('#slider-arrow-l-2');
const owlR2             = $('#slider-arrow-r-2');
const resppupilSlider   = $('#resppupil-slider');

owlL2.click(function(){
    resppupilSlider.trigger('prev.owl.carousel');
});

owlR2.click(function(){
  resppupilSlider.trigger('next.owl.carousel');
});


resppupilSlider.owlCarousel({
    loop:true,
    margin:5,
    dots:true,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        385:{
            items:1
        },
        900:{
            items:3
        }
    }
  });


 $('a.svg-link[href^="#"]').click(function () 
 {
    var target = $(this).attr('href');
    $('html, body').animate(
    {  
      scrollTop: $(target).offset().top - 0
    }, 500);
    return false;
});



const modal        = $('#bg-modal');
const modalSucces  = $('#bg-success');

const closePopup   = $('#close-popup');
const closeSuccess = $('#close-success');
const successOk    = $('#ok');

const exitPopup    = $('#submit-popup-exit');
var   sendForm     = $("#send-form").closest("form");

$(window).click(function(e)
{
  if(e.target == modal[0])
    {
      modal.removeClass('bg-modal-enter');
      sendForm[0].reset();
      errorName.hideError();
      errorTel.hideError();
      errorCheck.hideError();
    }
  if(e.target == modalSucces[0])
    {
      modal.removeClass('bg-modal-enter');
      modalSucces.removeClass('bg-modal-enter');
      sendForm[0].reset();
      errorName.hideError();
      errorTel.hideError();
      errorCheck.hideError();
    }

});

//Popup win  
closePopup.click(function () 
  {
    modal.removeClass('bg-modal-enter');
    sendForm[0].reset();
    errorName.hideError();
    errorTel.hideError();
    errorCheck.hideError();
  });

closeSuccess.click(function () 
  {
    modal.removeClass('bg-modal-enter');
    modalSucces.removeClass('bg-modal-enter');
    sendForm[0].reset();
    errorName.hideError();
    errorTel.hideError();
    errorCheck.hideError();
  });
successOk.click(function () 
  {
    modal.removeClass('bg-modal-enter');
    modalSucces.removeClass('bg-modal-enter');
    sendForm[0].reset();
    errorName.hideError();
    errorTel.hideError();
    errorCheck.hideError();
  });

$('#zak1, #header-start, #zak2, #zak3, #zak4, #zak5, #zak6, #doubt__button').click(function (e) 
  {
    e.preventDefault();
    modal.addClass('bg-modal-enter');
  });
//Popup win 

/*Popup form*/
var sendBtn         = $('#send');

var userNameInput     = $('#user-name');
var userTelInput      = $('#user-tel');
var userCheckInput    = $('#check-body');

var userCheckInputVal = $('#user-check');

var errorNameBlock    = $('#errorpopup-name');
var errorTelBlock     = $('#errorpopup-tel');
var errorCheckBlock   = $('#errorpopup-check');


var namevalidate  = /^([A-Za-zА-Яа-яЁ-ёІ-і]{1,})$/u;
var phonevalidate = /^([\+]{1}[0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{2}[0-9]{4}[0-9]{4}$)|([0-9]{4}[0-9]{4}[0-9]{4}$)/;

var failName          = "";
var failTel           = "";
var failCheck         = "";


class  ErrorName
  {
      showError() 
      {
          errorNameBlock.html(failName);
          userNameInput.addClass('error-input');
      };

      hideError() 
      {
          errorNameBlock.html('');
          userNameInput.removeClass('error-input');
      };  
  };

var errorName = new ErrorName();

class  ErrorTel
  {
      showError() 
      {
          errorTelBlock.html(failTel);
          userTelInput.addClass('error-input');
      };

      hideError() 
      {
          errorTelBlock.html('');
          userTelInput.removeClass('error-input');
      };  
  };

var errorTel = new ErrorTel();

class  ErrorCheck
  {
      showError() 
      {
          errorCheckBlock.html(failCheck);
          userCheckInput.addClass('error-input');
      };

      hideError() 
      {
          errorCheckBlock.html('');
          userCheckInput.removeClass('error-input');
      };  
  };

var errorCheck = new ErrorCheck();

sendBtn.click(function(e)
{
  e.preventDefault();
  e.stopImmediatePropagation();
  var sendForm     = $("#send-form").closest("form");
  var sendformData = new FormData(sendForm[0]);
  
  /*Name Valid*/
  if(userNameInput.val().length < 1)
  {
    failName = 'Поле не может юыть пустым';
  }
  else if(namevalidate.test(userNameInput.val()) == false)
  {
    failName = 'Имя не должно содержать цифры';
  }
  else
  {
    failName = null;
  }
  /*Name Valid*/
  /*Tel Valid*/
  if(userTelInput.val().length < 1)
  {
    failTel = 'Поле не может юыть пустым';
  }
  else if(phonevalidate.test(userTelInput.val()) == false)
  {
    failTel = 'Введите корректно телефон';
  }
  else
  {
    failTel = null;
  }
  /*Tel Valid*/

  /*Check Valid*/
  if(userCheckInputVal.prop('checked') == false) 
  {
    failCheck = 'Дайте согласие на обработку данных'; 
  }
  else
  {
    failCheck = '';
  }
  /*Check Valid*/

  if(failName == null 
    && failTel == null 
    && userCheckInputVal.prop('checked') == true)
          {
            modalSucces.addClass('bg-modal-enter');
            sendForm[0].reset();
          }

          if(failName !== null)
            {
              errorName.showError();
            }
          else
            {
              errorName.hideError();
            }
         if(failTel !== null)
            {
              errorTel.showError();
            }
          else
            {
              errorTel.hideError();
            }
          if(failCheck !== '')
            {
              errorCheck.showError();
            }
          else
            {
              errorCheck.hideError();
            }
});
/*Popup form*/


/*application form*/
var appNameInp      = $('#app-name');
var appTelInp       = $('#app-tel');
 
var errorAppNameBlock    = $('#erorr-ap-name');
var errorAppTelBlock     = $('#erorr-ap-tel');

var appBtn         = $('#application__button-submit');

var appErrName="";
var appErrTel="";


class  ErrorAppName
  {
      showError() 
      {
          errorAppNameBlock.html(appErrName);
          appNameInp.addClass('error-input');
      };

      hideError() 
      {
          errorAppNameBlock.html('');
          appNameInp.removeClass('error-input');
      };  
  };

var errorAppName = new ErrorAppName();

class  ErrorAppTel
  {
      showError() 
      {
          errorAppTelBlock.html(appErrTel);
          appTelInp.addClass('error-input');
      };

      hideError() 
      {
          errorAppTelBlock.html('');
          appTelInp.removeClass('error-input');
      };  
  };

var errorAppTel = new ErrorAppTel();




appBtn.click(function(e)
{
  e.preventDefault();
  e.stopImmediatePropagation();
  var appForm     = $("#application__form").closest("form");
  var appformData = new FormData(appForm[0]);
 

/*     Name Valid    */
    if(appNameInp.val().length < 1)
        {
          appErrName = 'Поле не может юыть пустым';
        }
    else if(namevalidate.test(appNameInp.val()) == false)
        {
          appErrName = 'Имя не должно содержать цифры';
        }
    else
        {
          appErrName = null;
        }
/*     Name Valid     */

/*     Tel Valid     */
    if(appTelInp.val().length < 1)
        {
          appErrTel = 'Поле не может юыть пустым';
        }
    else if(phonevalidate.test(appTelInp.val()) == false)
        {
          appErrTel = 'Введите корректно телефон';
        }
    else
        {
          appErrTel = null;
        }
/*     Tel Valid     */


  if(  appErrName == null 
    && appErrTel  == null
    )
        {
            modalSucces.addClass('bg-modal-enter');
            appForm[0].reset();
        }

    if(appErrName !== null)
        {
            errorAppName.showError();
        }
    else
        {
            errorAppName.hideError();
        }
    if(appErrTel !== null)
        {
            errorAppTel.showError();
        }
    else
        {
            errorAppTel.hideError();
        }

});
/*application form*/

 
/* TEST*/
var closeTest = $('#close-test');
var bgTest    = $('#bg-test');

var testLink  = $('#test-link');

var testSend  = $('#test-send');

var testForm = $('#test-form');

var pB = $('#test-prev');
var nB = $('#test-next');
 

var currentnum=1;
nB.click(function(e)
{
  e.preventDefault();
  e.stopImmediatePropagation();

  var num = $(this).data('num');
  currentnum=currentnum+1;
  num = currentnum;
  $('#modal-test-page-num').text(num);

  if(currentnum>6)
  {
    currentnum=6;
  }

  if(currentnum==6)
  {
    nB.prop('disabled', true);
    nB.attr("disabled", true);
    nB.attr("disabled","disabled");
  }
  else
  {
    nB.prop('disabled', false);
  }

  $('.form-test-item').each(function(i,elem) 
  {
    if( $(this).data('page') == num)
    {
      $(this).addClass('form-test-item_active').siblings().removeClass('form-test-item_active');
    }
  });
 if(currentnum>1)
  {
    pB.prop('disabled', false);
  }
});



pB.attr("disabled","disabled");

pB.click(function(e)
{
  e.preventDefault();
  e.stopImmediatePropagation();
   
  var numPrev = $(this).data('num');

  currentnum = currentnum-1;
  numPrev = currentnum;

  if(numPrev<1 || numPrev==1)
    {
      currentnum==1;
      pB.attr("disabled","disabled");
    }
  if(numPrev<6)
  {
    nB.prop('disabled', false);
  }
  
  $('#modal-test-page-num').text(numPrev);

  $('.form-test-item').each(function(i,elem) 
  {
    if( $(this).data('page') == numPrev)
    {
      $(this).addClass('form-test-item_active').siblings().removeClass('form-test-item_active');
    }
  });

});


closeTest.click(function () 
  {
    bgTest.removeClass('bg-modal-enter');
    testForm[0].reset();
  });
 
$(window).click(function(e)
{
  if(e.target == bgTest[0])
    {
      bgTest.removeClass('bg-modal-enter');
      testForm[0].reset();
    }
});

testLink.click(function (e) 
{
    e.preventDefault();
    bgTest.addClass('bg-modal-enter');
});

var testInpName = $('#test-name');
var testInpTel = $('#test-tel');

var testTelErrBox  =  $('#error-test-tel');
var testNameErrBox =  $('#error-test-name');

var testErrName="";
var testErrTel ="";


class  ErrorTestName
  {
      showError() 
      {
          testNameErrBox.html(testErrName);
          testInpName.addClass('error-input');
      };

      hideError() 
      {
          testNameErrBox.html('');
          testInpName.removeClass('error-input');
      };  
  };

var errorTestName = new ErrorTestName();

class  ErrorTestTel
  {
      showError() 
      {
          testTelErrBox.html(testErrTel);
          testInpTel.addClass('error-input');
      };

      hideError() 
      {
          testTelErrBox.html('');
          testInpTel.removeClass('error-input');
      };  
  };

var errorTestTel = new ErrorTestTel();



testSend.click(function(e)
{
  e.preventDefault();
  e.stopImmediatePropagation();

  var testForm = $('#test-form');
  var testformData = new FormData(testForm[0]);

/*  TEST   Name Valid    */
    if(testInpName.val().length < 1)
        {
          testErrName = 'Поле не может юыть пустым';
        }
    else if(namevalidate.test(testInpName.val()) == false)
        {
          testErrName = 'Имя не должно содержать цифры';
        }
    else
        {
          testErrName = null;
        }
/*  TEST   Name Valid     */


/*  TEST   Tel Valid     */
    if(testInpTel.val().length < 1)
        {
            testErrTel = 'Поле не может юыть пустым';
        }
    else if(phonevalidate.test(testInpTel.val()) == false)
        {
            testErrTel = 'Введите корректно телефон';
        }
    else
        {
            testErrTel = null;
        }
/*   TEST  Tel Valid     */


/*   TEST  Success    */
  if(  testErrName == null 
    && testErrTel  == null
    )
        {
            modalSucces.addClass('bg-modal-enter');
            bgTest.removeClass('bg-modal-enter');
            testForm[0].reset();
        }
/*  TEST   Success    */

    if(testErrName !== null)
        {
            errorTestName.showError();
        }
    else
        {
            errorTestName.hideError();
        }
    if(testErrTel !== null)
        {
            errorTestTel.showError();
        }
    else
        {
            errorTestTel.hideError();
        } 
});
/* TEST*/