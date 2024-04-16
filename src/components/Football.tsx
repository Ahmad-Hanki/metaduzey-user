import Container from "./ui/Container";
import Hero from "./ui/Hero";

const Football = () => {
  return (
    <div>
      <Hero title="FOOTBALL" path="AnaSayfa => football" />
      <Container>
        <div className="flex gap-5 flex-col items-center text-center sm:text-start sm:items-start text-black/60">
          <h1 className="text-red-700">FUTBOL MENTORING</h1>
          <div>
            <p>
              METADUZEY INTERNATIONAL COACHING INSTITUTE hemen hemen her
              kültürde popüler olan futbol oyununun nasıl daha etkin ve
              etkileşimli olabileceği sorusundan yola çıkarak yepyeni bir
              yöntemle spor dünyasında bütünsel yaklaşım danışmanlığını
              uyguluyor.
            </p>
            <p>
              İlk olarak futbol filminin aktörleri "futbolcularla" bu filmin
              yönetmeni "teknik direktörleri" konu alan bir proje geliştirildi.
              METADUZEY INTERNATIONAL COACHING INSTITUTE, ülkemizde ilk kez
              gerçekleştirilecek bu uygulama da takımın başarıya ulaşması için
              takımı oluşturan her bireyi tek tek ele alıyor.
            </p>
          </div>
          <div>
            <p>
              Bireyin bedensel, zihinsel, sosyal ve ruhsal yönden analizi
              yapılarak ihtiyaçları saptanıyor. Bu çalışmalar INLPTA TRAINER
              İhsan ÖZALP genel direktörlüğünde yürütülüyor. Ekipte, bireyin
              gerçek potansiyeliyle buluşmasında etkin rol oynayan performans ve
              zihinsel gelişim teknikleri konusunun uzmanları da bulunuyor.
            </p>
            <p>
              Futbolun atılan iki gol, kaçırılan üç gol, kazanılan ya da
              kaybedilen maç ile sınırlandırılmayacak bir öneme sahip olduğu
              fikri böyle bir çalışmanın başlamasında etkin bir rol oynadı.
              Elbette başarıyı ancak; tadı çıkarılan, zevk alınan ve kalıcı bir
              başarıyı amaçlayan proje dört adımdan oluşuyo:
            </p>
            <ul>
              <p>- Kurumsallık</p>
              <p>- Coaching- Liderlik</p>
              <p>- Profesyonel Futbol Kültürü</p>
              <p>- Futbolseverlik Bilinci</p>
            </ul>
            <p>Kurumsallık</p>
            <p>
              Kulüp yöneticilerine yönelik; başarı ya da başarısızlık sonucunda
              yalnızca bu sonucun matematiksel ifadelerini ve sonuç tablosunu
              görmek yerine, onları bu başarı ya da başarısızlığa götüren
              etkenleri de görebilmelerinin sağlanması; hayatın her alanında
              olduğu gibi futbolda da başarı için sistemli, zamana bağlı ve çok
              yönlü bir çalışma gereğinin anlatılması.
            </p>
            <p>Coaching – Liderlik.</p>
            <p>
              Teknik direktörlerin üstlerinde ki yoğun baskıdan sıyrılarak
              yaptıkları işten tat almalarının ve her durumda çözümü
              görebilmelerinin sağlanması; analiz yapabilme, öngörü de
              bulunabilme, problemi zamanında saptayarak çözüm üretebilme gibi
              bireysel yeteneklerinin kullanımında sorunların saptanması ve
              çözümü; futbolcularla iletişimin güçlendirilmesi yoluyla onların
              problemlerini ve yeteneklerini en etkili ve en seri biçimde
              saptayabilmesinin desteklenmesi
            </p>
            <p>Profesyonel Futbol Kültürü</p>
            <p>
              Futbolcuların seri ve en etkili biçimde karar vermeleri ve
              liderlik kadar paylaşımcılığa da istekli olmaları; her futbolcunun
              var olan bireysel yeteneklerini en üst düzeye taşıması ve bu nokta
              da tutabilmesi amacıyla desteklenmesi; problemlerinin doğru ve
              etkili biçimde belirlenerek seri ve kalıcı çözümlerin
              geliştirilmesi; takım ruhu ve takım sorumluluğu bilincinin
              oluşturulması.
            </p>
            <p>Futbolseverlik Bilinci</p>
            <p>
              Futbol izleyicisinin bu filmi zevkle izlemesi ve bu oyunun
              kazanılmasında ki en önemli etkenlerden birinin doğru motivasyon
              olduğu bilincine ulaşması; futbolun her şeyden önce bir şov
              olduğunun ve hiçbir şovda da şiddete yer olmadığının anlatımı.
            </p>
          </div>
          <p>
            Futbolun bir top ve çizgileri belirlenmiş bir sahadan oluşan 90
            dakikalık bir oyun olmanın ötesine geçerek bir yaşam şekli
            olabilmesi ve toplumun tüm kesimlerine doğru mesajlar iletebilmesi.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Football;
