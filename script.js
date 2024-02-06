window.onload = () => {
  const btMenu = document.createElement('button');
  btMenu.classList.add('btMenu');
  btMenu.classList.add('btMenuOpen');
  const btLinks = document.createElement('button');
  btLinks.classList.add('btLinks');
  btLinks.classList.add('btLinksOpen');
  const divTop = document.getElementById('divTop');
  divTop.append(btMenu);
  divTop.append(btLinks);
  const divLeft = document.getElementById('divLeft');
  const divCenter = document.getElementById('divCenter');
  const divRight = document.getElementById('divRight');
  var windowWidth = window.innerWidth;

  var linkMenuLeft = divLeft.getElementsByTagName("a");

  for (var i of linkMenuLeft) {
    i.setAttribute('title', i.text);
    i.addEventListener('click', () => {
      ancorMenuEnvents();
    })
  }

  var linkMenuRight = divRight.getElementsByTagName("a");

  for (var i of linkMenuRight) {
    i.setAttribute('title', i.text);
    i.addEventListener('click', () => {
      ancorLinksEvents();
    })
  }

  //Eventos relacionado às animações:
  divLeft.addEventListener('animationstart', () => {
    btMenu.disabled = true;
  });
  divLeft.addEventListener('animationiteration', () => { });
  divLeft.addEventListener('animationcancel', () => { });
  divLeft.addEventListener('animationend', () => {
    divLeft.classList.contains('closeDivLeft') ? divLeft.classList.remove('closeDivLeft') : divLeft.classList.remove('openDivLeft');
    divLeft.classList.contains('close') ? divLeft.classList.replace('close', 'open') : divLeft.classList.replace('open', 'close');
    divCenter.classList.contains('moveLeftDivCenter') ? divCenter.classList.remove('moveLeftDivCenter') : divCenter.classList.remove('moveRightDivCenter');
    divCenter.classList.contains('divCenterClose') ? divCenter.classList.replace('divCenterClose', 'divCenterOpen') : divCenter.classList.replace('divCenterOpen', 'divCenterClose');
    btMenu.disabled = false;
  });

  divRight.addEventListener('animationstart', () => {
    btLinks.disabled = true;
  });
  divRight.addEventListener('animationiteration', () => { });
  divRight.addEventListener('animationcancel', () => { });
  divRight.addEventListener('animationend', () => {
    divRight.classList.contains('closeDivLeft') ? divRight.classList.remove('closeDivLeft') : divRight.classList.remove('openDivLeft');
    divRight.classList.contains('close') ? divRight.classList.replace('close', 'open') : divRight.classList.replace('open', 'close');
    // (divRight.style.getPropertyValue('width') == '100%') ? divRight.style.setProperty("width", "100%") : divRight.style.setProperty("width", "0%");
    btLinks.disabled = false;
  });

  function btMenuEvent() {
    windowWidth = window.innerWidth;
    if (windowWidth >= 800) {
      if (divLeft.classList.contains('open')) {
        divLeft.classList.add('closeDivLeft');
        divCenter.classList.add('moveLeftDivCenter')
        divLeft.classList.remove('overflowAuto');
        divLeft.classList.add('overflowHidden');
        btMenu.classList.remove('btMenuOpen');
      }
      else {
        divLeft.classList.add('openDivLeft')
        divCenter.classList.add('moveRightDivCenter')
        divLeft.classList.add('overflowAuto')
        divLeft.classList.remove('overflowHidden');
        btMenu.classList.add('btMenuOpen');
      }
    }
    else {
      if (divLeft.classList.contains('close')) {
        divLeft.classList.add('closeDivLeft');
        divLeft.classList.remove('overflowAuto');
        divLeft.classList.add('overflowHidden')
        btMenu.classList.remove('btMenuOpen');
      }
      else {
        divLeft.classList.add('openDivLeft')
        divLeft.classList.add('overflowAuto')
        divLeft.classList.remove('overflowHidden');
        btMenu.classList.add('btMenuOpen');
      }
    }
  }

  btMenu.addEventListener('click', () => {
    btMenuEvent();
  })

  function btLinksEvent() {
    windowWidth = window.innerWidth;
    if (divRight.classList.contains('close')) {
      divRight.classList.add('closeDivLeft');
      divRight.classList.remove('overflowAuto');
      divRight.classList.add('overflowHidden')
      btLinks.classList.remove('btMenuOpen');
    }
    else {
      divRight.classList.add('openDivLeft')
      divRight.classList.add('overflowAuto')
      divRight.classList.remove('overflowHidden');
      btLinks.classList.add('btMenuOpen');
    }
  }

  btLinks.addEventListener('click', () => {
    btLinksEvent();
  })

  function ancorMenuEnvents() {
    windowWidth = window.innerWidth;
    if (windowWidth < 800) {
      btMenuEvent();
    }
  }

  function ancorLinksEvents() {
    windowWidth = window.innerWidth;
    if (windowWidth < 800) {
      btLinksEvent();
    }
  }
}