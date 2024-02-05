window.onload = () => {
  const btMenu = document.createElement('button');
  btMenu.classList.add('btMenu');
  btMenu.classList.add('btMenuOpen');
  const divTop = document.getElementById('divTop');
  divTop.append(btMenu);
  const divLeft = document.getElementById('divLeft');
  const divCenter = document.getElementById('divCenter');


  var hyperlink = document.getElementsByTagName("a");

  // For para percorrer array.
  // hyperlink.forEach(i => {
  //   i.setAttribute("title", i.innerText);
  //   console.log(i);
  // })

  for (var i of hyperlink) {
    // i.classList.add('tooltip');
    // i.innerHTML += '<div class="tooltiptext">' + i.text + '</div>';
    // i.setAttribute('aria-label', i.text);
    i.setAttribute('title', i.text);
    console.log(i);
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

  btMenu.addEventListener('click', () => {
    if (divLeft.classList.contains('open')) {
      divLeft.classList.add('closeDivLeft');
      divCenter.classList.add('moveLeftDivCenter')
      divLeft.classList.remove('overflowAuto');
      divLeft.classList.add('overflowHidden')
      btMenu.classList.remove('btMenuOpen');
    }
    else {
      divLeft.classList.add('openDivLeft')
      divCenter.classList.add('moveRightDivCenter')
      divLeft.classList.add('overflowAuto')
      divLeft.classList.remove('overflowHidden');
      btMenu.classList.add('btMenuOpen');
    }
  })
}