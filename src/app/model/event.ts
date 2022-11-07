import { Location } from './location';

export class Event {
  constructor(
    public name: string = '',
    public date: string = '',
    public time: string = '',
    public location: Location = new Location()
  ) {}
}
