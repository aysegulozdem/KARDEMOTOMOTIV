 function showMore() {
  const info = document.getElementById("moreInfo");
  const btn = document.querySelector("button");

  if (info.style.display === "none") {
    info.style.display = "block";
    btn.textContent = "Marka Bilgilerini Gizle";
  } else {
    info.style.display = "none";
    btn.textContent = "Tüm Marka Bilgilerini Göster";
  }
}



document.addEventListener('DOMContentLoaded', () => {
  // Mobil menü butonu
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('nav ul');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  // İletişim formu
  const contactForm = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');

  if (contactForm && formMsg) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      formMsg.textContent = 'Mesajınız başarıyla gönderildi. Teşekkür ederiz!';
      contactForm.reset();
    });
  }
});