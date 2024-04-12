export interface TherapyType {
  id: string;
  name: string;
  egitim?: string;
  lisans?: string;
  yuksekLisans?: string;
  terapiEgtim?: string;
  uzmanAlan?: string;
  summery: string; // Optional field
  imageUrl: string;
  therapyPlaces: { therapyPlace: TherapyPlaces }[];
  therapyTypes: { therapyType: therapyTypes }[];
  therapyUnvans: { therapyUnvan: therapyUnvans }[];
}

export interface TherapyPlaces {
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

export interface Blog {
  id: string;
  title: string;
  summery: string;
  yazan: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  blogCategories: {
    category: {
      name: string;
      id: string;
    };
  }[];
}

export interface category {
  name: string;
  id: string;
}
