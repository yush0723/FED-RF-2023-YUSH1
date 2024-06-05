import React from 'react';

const Section = ({ id, title, imageSrc, children }) => (
    <div id={id} className="section">
        <h2>{title}</h2>
        {imageSrc && <img src={imageSrc} alt={title} />}
        <p>{children}</p>
    </div>
);

export default function App() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="logo.png" alt="満ちてくる心の宿 吉夢" />
                </div>
                <nav>
                    <a href="#about">宿について</a>
                    <a href="#rooms">客室</a>
                    <a href="#onsen">温泉</a>
                    <a href="#dining">お食事</a>
                    <a href="#contact">お問い合わせ</a>
                </nav>
            </header>
            <main>
                <Section id="about" title="宿について" imageSrc="about-image.jpg">
                    千葉県南房総の小湊温泉「吉夢」は、心安らぐ海と趣ある港の風景を楽しむことができる宿です。
                </Section>
                <Section id="rooms" title="客室" imageSrc="rooms-image.jpg">
                    ゆったりとしたひと時をお過ごしください。
                </Section>
                <Section id="onsen" title="温泉" imageSrc="onsen-image.jpg">
                    地上35ｍの露天風呂から眺める景色は絶景です。
                </Section>
                <Section id="dining" title="お食事" imageSrc="dining-image.jpg">
                    新鮮な海、山の幸を味わい、厳選された四季折々の会席料理をお楽しみください。
                </Section>
                <Section id="contact" title="お問い合わせ">
                    ご予約・お問い合わせはこちらまで: 04-7095-2111
                </Section>
            </main>
            <footer>
                <p>&copy; 2024 満ちてくる心の宿 吉夢</p>
            </footer>
        </div>
    );
}
