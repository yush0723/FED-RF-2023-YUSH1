document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="about" class="section">
            <h2>宿について</h2>
            <p>千葉県南房総の小湊温泉「吉夢」は、心安らぐ海と趣ある港の風景を楽しむことができる宿です。</p>
            <img src="about-image.jpg" alt="宿について">
        </div>
        <div id="rooms" class="section">
            <h2>客室</h2>
            <img src="rooms-image.jpg" alt="客室">
            <p>ゆったりとしたひと時をお過ごしください。</p>
        </div>
        <div id="onsen" class="section">
            <h2>温泉</h2>
            <img src="onsen-image.jpg" alt="温泉">
            <p>地上35ｍの露天風呂から眺める景色は絶景です。</p>
        </div>
        <div id="dining" class="section">
            <h2>お食事</h2>
            <img src="dining-image.jpg" alt="お食事">
            <p>新鮮な海、山の幸を味わい、厳選された四季折々の会席料理をお楽しみください。</p>
        </div>
        <div id="contact" class="section">
            <h2>お問い合わせ</h2>
            <p>ご予約・お問い合わせはこちらまで: 04-7095-2111</p>
        </div>
    `;
});
