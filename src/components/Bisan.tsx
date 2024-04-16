import Container from "./ui/Container";
import Hero from "./ui/Hero";

const Bisan = () => {
  return (
    <div className="bg-slate-200">
      <Hero title="BISAN" path="AnaSayfa => bisan" />
      <Container>
        <div className="flex gap-5 flex-col items-center text-center md:text-start md:items-start text-black/60">
          <div className="flex gap-3 flex-col ">
            <h1 className="text-red-700 p-1">
              BİSAN-BİSAN BİREYSEL SİSTEM ANALİZİ-
            </h1>
            <div className="flex flex-col gap-1">
              <h2>{`A) Kuramsal testler`}</h2>
              <p>- Stres ve Kaygı</p>
              <p>- Tercihli Algı</p>
              <p>- Kişilik</p>
              <p>- Çalışma Davranış Kalıpları</p>
              <p>- Duygusal Zekâ EQ</p>
            </div>
            <div className="flex flex-col gap-1">
              <h2>{`B) Sosyal Anamnez`}</h2>
              <p>- Öğrencinin doğumundan bugüne öyküsü…</p>
              <p>- Sıklıkla gördüğü rüyalar</p>
              <p>- Hayalleri, korkuları ve beklentileri</p>
              <p>- Fiziksel ve psikolojik durumu</p>
              <p>- Rolmodelleri – Sevdiği insanlar ve Meslekleri</p>
              <p>- Öğrencinin somut başarıları</p>
              <p>- Yetiştiği ortam (ev, oda, vb)</p>
              <p>- Ana-Baba Bilgileri (Eğitim-Meslek-Yaş-Adres vb)</p>
              <p>- Ana-Babanın çocuğundan beklentileri</p>
              <p>
                - Ana-Babanın Algı sistemleri, Stres ölçekleri ve Kişilik
                yapıları
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h2>{`C) Chunking ve Gözleme dayalı değerlendirmeler`}</h2>
              <p>- Öğretmenler</p>
              <p>- Rehber danışmanlar</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>
              Tüm çalışmalar METAMODEL olarak isimlendirilerek rapor haline
              getirilir.
            </p>
            <p>Bu rapor Öğrencinin “KARİYER PLANLAMASI” dır.</p>
            <p>Artık öğrencinin Hedefi bellidir ve Ne istediğini biliyordur.</p>
            <p>
              Bundan sonraki süreç, “Öğrenci Eğitim ortamında nasıl donanacak ve
              Aile bu donanımı nasıl koruyarak gelişimine katkı sunacak”
              sorularının cevaplarıdır. Tüm mesele çocuklarımızı yaşama
              hazırlamaktır. Temel bilincimiz; Hayat boyu uygulayabileceğimiz
              becerileri kazanmaktır.
            </p>
            <p>
              BİSAN bu süreçte Yönetim ve Rehberlik kadrosuna danışmanlık
              sunarak katkı yapabilir.
            </p>
            <p>
              Diğer önemli bir katkıda “Velilerin Eğitimi’dir. Çocuğunun
              özelliklerinin farkına varan Veli, onunla nasıl sağlıklı iletişim
              kuracağını ve nasıl ona etkin katkı sunacağını öğrenmelidir.
            </p>
            <p>
              Farklılıklarımız zenginliktir. Böylelikle çatışmalar önlenir ve
              insan doğasına uygun bir “öğrenme ortamı” aile içinde de
              oluşturulur.
            </p>
            <p>
              İnsan davranışlarını yönlendiren güdü, ”sevme ve sevilme
              ihtiyacıdır”
            </p>
            <p>
              Bu gereksinimlerimizi karşılamak için seçimlerimizi yaparız. Biz
              seçimimizi ”BİREYSEL GELİŞİMDEN TOPLUMSAL DÖNÜŞÜME” sloganıyla
              EĞİTİM olarak yaptık.
            </p>
            <p>Sevgi dolu bir Eğitim dileklerimizle…</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bisan;
