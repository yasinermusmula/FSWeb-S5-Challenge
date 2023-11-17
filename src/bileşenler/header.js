const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const firstBaslik = document.createElement("div");
  firstBaslik.className = "header";

  const firstSpan = document.createElement("span");
  firstSpan.className = "date";
  firstSpan.textContent = `${tarih}`;

  const firstH1 = document.createElement("h1");
  firstH1.textContent = `${baslik}`;

  const secondSpan = document.createElement("span");
  secondSpan.className = "temp";
  secondSpan.textContent = `${yazi}`;

  firstBaslik.append(firstSpan, firstH1, secondSpan);

  return firstBaslik;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const appendHeader = document.querySelector(secici);
  const createHeader = Header(
    "Sprint 5",
    "17/11/2023",
    "Yeni yazılımcının yükselişi"
  );
  return appendHeader.append(createHeader);
};

export { Header, headerEkleyici };
