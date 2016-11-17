import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryWineService implements InMemoryDbService {
  createDb() {
    let wines = [
      { id: 1, name: "Latour", country: { id: 1, name: "France" } }
    ];

    let countries = [
      { id: 1, name: "France" },
      { id: 2, name: "USA" }
    ];

    return { wines, countries };
  }
}
