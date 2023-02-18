import { FirebaseApp } from 'firebase/app';
import { collection, getDocs, Firestore } from 'firebase/firestore';

export enum DbCollectionEnum {
  Products = 'products',
}

export class DbCollection {
  constructor(private collection: DbCollectionEnum, private db: Firestore) {}

  async list<T>(): Promise<T[]> {
    const items: T[] = [];
    const querySnapshot = await getDocs(collection(this.db, this.collection));
    querySnapshot.forEach((doc) => items.push(doc.data() as T));
    return items;
  }
}
