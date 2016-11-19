import { Grape, Blend } from './grape';
import { Country } from './country';

export class Wine {
  id: number;
  name: string;
  country: Country;
  blend: Blend[];
}