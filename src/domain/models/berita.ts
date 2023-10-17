import { Entity } from "./_entity";

export interface IBerita {
  id?: string;
  date: string;
  time: string;
  redaktur: string;
  headline: string;
  news: string;
  images: string[];
}

export class Berita extends Entity<IBerita> {
  static create(props: IBerita): Berita {
    return new Berita(props);
  }

  unmarshall() {
    return {
      id: this.id,
      date: this.date,
      time: this.time,
      redaktur: this.redaktur,
      headline: this.headline,
      news: this.news,
      images: this.images,
    };
  }

  get date(): string {
    return this._props.date;
  }
  get time(): string {
    return this._props.time;
  }
  get redaktur(): string {
    return this._props.redaktur;
  }
  get headline(): string {
    return this._props.headline;
  }
  get news(): string {
    return this._props.news;
  }
  get images(): string[] {
    return this._props.images;
  }
}
