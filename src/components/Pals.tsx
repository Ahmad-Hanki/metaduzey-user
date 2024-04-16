import Container from "./ui/Container";
import Hero from "./ui/Hero";

const Pals = () => {
  return (
    <div className="">
      <Hero title="PALS" path="AnaSayfa => pals" />
      <Container>
        <div className="flex gap-5 flex-col items-center text-center sm:text-start sm:items-start text-black/60">
          <h1 className="text-red-700">PALS &quot;Pratik Algı Sistemleri&quot;</h1>
          <div className="flex flex-col gap-3">
            <div>
              <p>
                PALS (Pratik Algı Sistemleri)ne dair bir çalışmayı uzun süredir
                düşünüyordum. Kişisel inancım odur ki; Bilgi evrenseldir. O
                evrensel bilgiden yararlanmak temel insan haklarının
                başlıcasıdır. Ve yine yoğunlukla hissettiğim bir doğru da bilgi
                hazinesinin isteyen tüm insanlar tarafından kolayca
                paylaşılabilmesidir. Bu bağlamda büyük-küçük tüm insanlığa
                önerim bilgiyi paylaşmaktır… Tüm içtenliğimle inanıyorum ki
                paylaşılan bilgiyi kristalize edecek nice cevherler çıkacak ve
                daha da geliştirip insanlığın hizmetine sunacaklardır. Bu duygu
                insan olmanın onuruna ulaşmada çok önemli bir değerdir ve insanı
                yüceleştiren belirgin bir farktır.
              </p>
              <p>
                Sizlere arz ettiğim çalışma içerik itibariyle kısa olduğu ölçüde
                etkin bir çalışma. Ve bu programı oluştururken yerli yabancı pek
                çok değerli uluslararası şahsiyetlerden yararlandım.
              </p>
            </div>
            <p>
              Sevgili kardeşim İstanbul Barosu Avukatlarından Merhum Fehmi ÖZALP
              aramızdan ayrılışıyla bana en büyük sorumluluğu yükledi ve
              “insanlığa hizmet yolculuğunda” çok belirgin amir oldu. Anne ve
              babam zamanında yaptıkları doğru seçimleriyle beni“yaşama”
              hazırladılar, ciddi bir eğitimden geçmemi sağladılar. Sayın Işıl
              TEKE özellikle METADUZEY BİLİM ve SANAT AKADEMİ eğitim kurumunda
              “AVSGEP Akademik ve Sosyal Gelişim Projesi” uygulamaları sürecinde
              kâh uyarıları kâh teşvikleriyle beni hep beslemiştir. Prof. Dr.
              Doğan CÜCELOĞLU, Dr. Wyatt Woodsmall, Prof. Dr. Hikmet Timur,
              Prof. Dr. Canan BALKIR hocalarım bilgi ve esin kaynaklarımdırlar.
            </p>
            <p>
              Futbol alanında bu ülkenin gururları Mustafa DENİZLİ, Ziya DOĞAN,
              Reha KAPSAL, Fatih KAVLAK, Oktay GÜRSOY, Mustafa CEVİZ gibi Teknik
              direktörler “Bilgi”yi başka alana nasıl taşıdıklarını “yaparak ve
              yaşayarak” benimle paylaştı ve önemli katkı sağladılar.
              Duygudaşlarım Bilal GEZER ve Boğazhisar Kadrosu, Asistanlarım
              Sinan YAMAN, Nihat DEPE, Erdem ÖZDEMİR ve diğerleri… Hepsine
              şükran doluyum, minnet borçluyum.
            </p>
            <p>
              Şu an ismini burada anamadığım nice; kimi öğretmen kimi öğrenci,
              kimi bilgin, kimi cahil, kimi büyük kimi çocuk, kimi tanıdığım
              kimi hiç tanımadığım, kimi bilerek kimi bilmeyerek bana
              “eğitmenlik” yapan herkese en derin saygılarımı sunuyorum. Onlar
              benim meşalelerim… “KALBİ BİRLİK ve RUHİ AHENK” yaşam kalitemiz.
            </p>
          </div>
          <h1 className="text-red-700">
            “Şimşekleri havada yakalamaya aday” Yüreği güzel,Sevgi ve Bilgi
            peşindeki her gönül adamına ithaf olunur…
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Pals;
