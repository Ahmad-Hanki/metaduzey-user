"use client";

import Container from "@/components/ui/Container";

const GoogleMaps = () => {
  return (
    <div className="py-16">
      <Container>
        <h1 className="text-center text-black/60 font-extrabold text-4xl">
          Harita
        </h1>
        <p className="text-center pb-16">Neredeyiz</p>
        <div className="flex flex-col gap-8 xl:flex-row">
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-center font-bold text-3xl">Merkez</h1>
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17961.323091053997!2d29.092084176043432!3d41.01982040623626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8f710ea7bf3%3A0xcd217052b5b1e04f!2sAtat%C3%BCrk%2C%20Yayla%20Sk.%20No%3A20%20Kat%202%20Daire%202%2C%2034764%20%C3%9Cmraniye%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1713304374428!5m2!1sen!2str"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-center font-bold text-3xl">Şube</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d576580.3221307782!2d28.798938594132597!3d41.010551459899716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab94ac1d62f2d%3A0x7c4e76bedea0a097!2sMETADUZEY%20INTERNATIONAL%20PSYCHOLOGY%20%26%20MENTORING!5e0!3m2!1sen!2str!4v1713305055724!5m2!1sen!2str"
              width="600"
              className="w-full"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GoogleMaps;
