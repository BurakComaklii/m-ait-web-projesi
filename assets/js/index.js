function increaseCount(elementId) {
    var countElement = document.getElementById(elementId);
    var count = parseInt(countElement.textContent);
    countElement.textContent = count + 1;
  }

  function decreaseCount(elementId) {
    var countElement = document.getElementById(elementId);
    var count = parseInt(countElement.textContent);
    if (count > 0) {
      countElement.textContent = count - 1;
    }
  }

  function resetCount(elementId) {
    var countElement = document.getElementById(elementId);
    countElement.textContent = 0;
  }

  function saveData() {
    var sandikNo = document.getElementById('sandikNo').value;
    var okulAdi = document.getElementById('okulAdi').value;
    var kemalOy = document.getElementById('count1').textContent;
    var recepOy = document.getElementById('count2').textContent;
    var gecersizOy = document.getElementById('count3').textContent;

    document.getElementById('sandikNoDisplay').textContent = "Sandık No: " + sandikNo;
    document.getElementById('okulAdiDisplay').textContent = "Okul Adı: " + okulAdi;
    document.getElementById('kemalOyDisplay').textContent = "Kemal Kılıçdaroğlu Oy: " + kemalOy;
    document.getElementById('recepOyDisplay').textContent = "Recep Tayyip Erdoğan Oy: " + recepOy;
    document.getElementById('gecersizOyDisplay').textContent = "Geçersiz Oy: " + gecersizOy;
    document.getElementById('toplamOyDisplay').textContent = "Toplam Oy: " + (parseInt(kemalOy) + parseInt(recepOy) + parseInt(gecersizOy));
  }