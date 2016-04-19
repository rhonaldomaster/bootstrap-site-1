'use strict';
var myapp = (function () {
  var $registerBtnShow = $('.js-register-show');
  var $registerForm = $('.js-register-form');
  var $loginForm = $('.js-login-form');
  var $contactBtn = $('.js-contact-button');
  var $registerBtn = $('.js-register');
  var $topLoginElem = $('.js-top-login');
  var $topLogoutElem = $('.js-top-logout');
  var $sideUserElem = $('.js-user-side');
  var init = function () {
    registerBtnShowAction();
    registerBtnAction();
    contactBtnAction();
    loginBtnAction();
    logoutBtnAction();
  };
  var registerBtnShowAction = function () {
    $registerBtnShow.off('click');
    $registerBtnShow.on('click',function () {
      toggleVisibility([$registerForm,$loginForm]);
    });
  };
  var registerBtnAction = function () {
    $registerBtn.off('click');
    $registerBtn.on('click',function () {
      register();
      toggleVisibility([$registerForm,$loginForm]);
    });
  };
  var contactBtnAction = function () {
    $contactBtn.off('click');
    $contactBtn.on('click',function () {
      sendContactForm();
    });
  };
  var loginBtnAction = function () {
    $('.js-login-btn').off('click');
    $('.js-login-btn').on('click',function () {
      var usuario = $.trim($('#usuario').val());
      var clave = $.trim($('#clave').val());
      if(usuario!='' && usuario.length>3){
        login(usuario,clave);
      }
      else{
        alertify.error('Ingrese un usuario v&aacute;lido');
      }
    });
  };
  var logoutBtnAction = function () {
    $('.js-logout-btn').off('click');
    $('.js-logout-btn').on('click',function () {
      logout();
    });
  };
  var toggleVisibility = function ($elems) {
    for (var i = 0; i < $elems.length; i++) {
      $elems[i].toggleClass('hidden');
    }
  };
  var deleteInnerHTML = function (elem) {
    $(elem).html('');
  };
  var register = function () {
    alertify.success('Registro correcto');
  };
  var sendContactForm = function () {
    alertify.success('Consulta enviada');
  };
  var login = function (usuario,clave) {
    $('.js-user-side-names').html(usuario);
    toggleVisibility([$topLoginElem,$topLogoutElem,$loginForm,$sideUserElem]);
  };
  var logout = function () {
    deleteInnerHTML('.js-user-side-names');
    toggleVisibility([$topLoginElem,$topLogoutElem,$loginForm,$sideUserElem]);
  };
  return{
    init: init
  }
})();
$(document).ready(function () {
  myapp.init();
  $(".js-showEditModal").click(function(){
    $(".js-editModal").modal();
  });
});
