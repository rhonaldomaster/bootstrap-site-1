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
  $("table").tablesorter({
    // this will apply the bootstrap theme if "uitheme" widget is included
    // the widgetOptions.uitheme is no longer required to be set
    theme : "bootstrap",

    widthFixed: true,

    headerTemplate : '{content} {icon}', // new in v2.7. Needed to add the bootstrap icon!

    // widget code contained in the jquery.tablesorter.widgets.js file
    // use the zebra stripe widget if you plan on hiding any rows (filter widget)
    widgets : [ "uitheme", "filter", "zebra" ],

    widgetOptions : {
      // using the default zebra striping class name, so it actually isn't included in the theme variable above
      // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
      zebra : ["even", "odd"],

      // reset filters button
      filter_reset : ".reset",

      // extra css class name (string or array) added to the filter element (input or select)
      filter_cssFilter: "form-control",

      // set the uitheme widget to use the bootstrap theme class names
      // this is no longer required, if theme is set
      // ,uitheme : "bootstrap"

    }
  })
  .tablesorterPager({

    // target the pager markup - see the HTML block below
    container: $(".ts-pager"),

    // target the pager page select dropdown - choose a page
    cssGoto  : ".pagenum",

    // remove rows from the table to speed up the sort of large tables.
    // setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
    removeRows: false,

    // output string - default is '{page}/{totalPages}';
    // possible variables: {page}, {totalPages}, {filteredPages}, {startRow}, {endRow}, {filteredRows} and {totalRows}
    output: '{startRow} - {endRow} / {filteredRows} ({totalRows})'

  });

});
