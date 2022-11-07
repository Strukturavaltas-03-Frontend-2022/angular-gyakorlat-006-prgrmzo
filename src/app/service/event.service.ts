import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor() {}

  event1: Event = new Event(
    'Liza Birthday',
    '2022-11-07',
    '18:00',
    new Location('Red Street 15', 'San Diego', 'California')
  );
  event2: Event = new Event(
    'Dentist Appointment',
    '2022-11-09',
    '15:00',
    new Location('Blue Street 20', 'New York', 'New York')
  );
  event3: Event = new Event(
    'Charity Dinner',
    '2022-11-11',
    '19:00',
    new Location('Green Street 15', 'Houston', 'Texas')
  );

  getAll(): Event[] {
    return [this.event1, this.event2, this.event3];
  }
}
