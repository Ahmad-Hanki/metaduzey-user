export interface TherapyType {
    id: string;
    name: string;
    egitim: string;
    lisans: string;
    yuksekLisans: string;
    terapiEgtim: string;
    uzmanAlan: string;
    summery?: string; // Optional field
    imageUrl: string;
    therapyPlaces: TherapyPlace[]; 
    therapyTypes: therapyTypes[];
    therapyUnvans: therapyUnvans[];
  }
  
  export interface TherapyPlace {
    id: string;
    name: string;
  }
  export interface therapyTypes {
    id: string;
    name: string;
  }
  export interface therapyUnvans {
    id: string;
    name: string;
  }
