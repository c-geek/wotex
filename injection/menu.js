(function inject(window) {

  "use strict";

  var openNewTab = window.openNewTab
  var mainWindow = window.mainWindow

  window.uiModules['wotex'] = {
    menuIconClass: 'fa-users',
    menuLabel: 'Wotex',
    menuOpen: openWotexModule
  }

  function openWotexModule() {

    var wotexModuleHeight = parseInt(localStorage.getItem('wotex_module_height')) || 1000;
    var wotexModuleWidth = parseInt(localStorage.getItem('wotex_module_width')) || 1400;

    window.openModule ('/wotex/', {
      position: 'center',
      height: wotexModuleHeight,
      width: wotexModuleWidth,
      show: false
    }, function(win) {
      win.show();
      // Remember the window size
      win.on('closed', function() {
        localStorage.setItem('wotex_module_height', win.window.innerHeight - 8); // Seems to always have 8 pixels more
        localStorage.setItem('wotex_module_width', win.window.innerWidth - 16); // Seems to always have 16 pixels more
        mainWindow.focus();
      });
    });
  }

})(window);
