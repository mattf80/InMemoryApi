import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryWineService implements InMemoryDbService {
  createDb() {
    let wines = [
      {
        id: 1, name: "Latour", country: { id: 1, name: "France" }, imageUrl: "",
        blend: [
          { grape: { id: 1, name: "Cabernet" }, percentage: 80 },
          { grape: { id: 2, name: "Merlot" }, percentage: 20 }
        ]
      },
      {
        id: 2, name: "Margaux", country: { id: 1, name: "France" }, imageUrl:"",
        blend: [
          { grape: { id: 1, name: "Cabernet" }, percentage: 80 },
          { grape: { id: 2, name: "Merlot" }, percentage: 20 }
        ]
      }
    ];

    let countries = [
      { id: 1, name: "France" },
      { id: 2, name: "USA" }
    ];

    let grapes = [
      { id: 1, name: "Cabernet" },
      { id: 2, name: "Merlot" }
    ]

    return { wines, countries, grapes };
  }
}
