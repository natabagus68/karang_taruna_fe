import { config } from "@common/utils";
import { Entity } from "./_entity";

export interface IAcara {
  id?: string;
  dateEvent: string;
  timeEvent: string;
  name: string;
  location: string;
  maker: string;
  sponsor?: string;
  desc?: string;
  image?: string;
  dateMaked?: string;
  longTime?: string;
  status?: string;
}

export class Acara extends Entity<IAcara> {
  static create(props: IAcara): Acara {
    return new Acara(props);
  }

  unmarshall() {
    return {
      id: this.id,
      dateEvent: this.dateEvent,
      timeEvent: this.timeEvent,
      name: this.name,
      location: this.location,
      maker: this.maker,
      sponsor: this.sponsor,
      desc: this.desc,
      image: this.image,
      dateMaked: this.dateMaked,
      longTime: this.longTime,
      status: this.status,
    };
  }

  get dateEvent(): string {
    return this._props.dateEvent;
  }
  get timeEvent(): string {
    return this._props.timeEvent;
  }
  get name(): string {
    return this._props.name;
  }
  get location(): string {
    return this._props.location;
  }
  get maker(): string {
    return this._props.maker;
  }
  get sponsor(): string {
    return this._props.sponsor;
  }
  get desc(): string {
    return this._props.desc;
  }
  get image(): string {
    return config.apibaseUrl + this._props.image;
  }
  get dateMaked(): string {
    return this._props.dateMaked;
  }
  get longTime(): string {
    return this._props.longTime;
  }
  get status(): string {
    return this._props.status;
  }
}
