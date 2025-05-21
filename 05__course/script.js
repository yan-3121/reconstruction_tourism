document.addEventListener('DOMContentLoaded', function() {
    // 要素の取得
    const contactButton = document.getElementById('contact-button');
    const contactModal = document.getElementById('contact-modal');
    const closeButton = document.querySelector('.close-button');
    const contactForm = document.getElementById('contact-form');
    
    // モーダルを開く
    contactButton.addEventListener('click', function() {
      contactModal.style.display = 'block';
    });
    
    // モーダルを閉じる
    closeButton.addEventListener('click', function() {
      contactModal.style.display = 'none';
    });
    
    // モーダル外をクリックして閉じる
    window.addEventListener('click', function(event) {
      if (event.target === contactModal) {
        contactModal.style.display = 'none';
      }
    });
    
    // フォーム送信
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // フォームデータの取得
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // ここに送信処理を追加
      // 例: fetchやAjaxを使ってサーバーにデータを送信
      console.log('送信データ:', { name, email, phone, message });
      
      // 送信成功メッセージ
      alert('お問い合わせありがとうございます。近日中にご連絡いたします。');
      
      // フォームをリセットしてモーダルを閉じる
      contactForm.reset();
      contactModal.style.display = 'none';
    });
  });