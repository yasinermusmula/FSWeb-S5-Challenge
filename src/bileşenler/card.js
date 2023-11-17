import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const firstDiv = document.createElement("div");
  firstDiv.className = "card";

  const secondDiv = document.createElement("div");
  secondDiv.className = "headline";
  secondDiv.textContent = `${makale.anabaslik}`;
  firstDiv.prepend(secondDiv);

  const thirdDiv = document.createElement("div");
  thirdDiv.className = "author";
  firstDiv.append(thirdDiv);

  const fourthDiv = document.createElement("div");
  fourthDiv.className = "img-container";
  thirdDiv.append(fourthDiv);

  const firstImg = document.createElement("img");
  firstImg.setAttribute("src", `${makale.yazarFoto}`);
  fourthDiv.append(firstImg);

  const lastSpan = document.createElement("span");
  lastSpan.textContent = `${makale.yazarAdi} tarafından`;

  thirdDiv.append(lastSpan);

  firstDiv.addEventListener("click", (e) => {
    console.log(secondDiv.textContent);
  });

  return firstDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const appendCard = document.querySelector(secici);
  axios.get(`http://localhost:5001/api/makaleler`).then((res) => {
    console.log(res);
    const addCard = res.data.makaleler;
    for (let i in addCard) {
      for (let j = 0; j < addCard[i].length; j++) {
        appendCard.append(Card(addCard[i][j]));
      }
    }
  });
};

export { Card, cardEkleyici };
