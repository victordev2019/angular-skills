import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class FakeApiService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let skills = [
      {
        id: 1,
        name: "Jenna Ortega",
        age: 21,
        work: "Atriz de Cinema",
        locale: "New Jersey",
        description: "Aventureira apaixonada por explorar novos lugares e experiências, em busca de alguém para compartilhar aventuras e criar memórias inesquecíveis juntos.",
        pic: "assets/images/jenna.jpg",
        likes: 0,
      },
      {
        id: 2,
        name: "Emilly",
        age: 25,
        work: "Jornalista",
        locale: "Texas",
        description: "Espírito livre e amante da natureza, em busca de um parceiro que aprecie trilhas, acampamentos e momentos de conexão com o mundo ao nosso redor.",
        pic: "assets/images/emilly.jpg",
        likes: 0,
      },
      {
        id: 3,
        name: "Jéssica",
        age: 29,
        work: "Estilista",
        locale: "Massachusetts",
        description: "Amante das artes e da cultura, procurando um parceiro criativo e inspirador para compartilhar momentos em exposições, teatros e descobrir novas formas de expressão.",
        pic: "assets/images/jessica.jpg",
        likes: 0,
      },
      {
        id: 4,
        name: "Haruka",
        age: 30,
        work: "Modelo",
        locale: "Washington",
        description: "Profissional ambiciosa e determinada em busca de um parceiro igualmente motivado e dedicado a alcançar objetivos e construir um futuro próspero juntos.",
        pic: "assets/images/haruka.jpg",
        likes: 1,
      },
      {
        id: 5,
        name: "Amanda",
        age: 19,
        work: "Cantora",
        locale: "New York",
        description: "Amante da gastronomia e da boa comida, buscando um parceiro para explorar restaurantes, cozinhar juntos e desfrutar de momentos saborosos e memoráveis.",
        pic: "assets/images/amanda.jpg",
        likes: 0,
      },
      {
        id: 6,
        name: "Raimunda",
        age: 23,
        work: "Diretora de Cinema",
        locale: "Orlando",
        description: "Pessoa de coração gentil e apaixonada por ajudar os outros, em busca de um parceiro com uma abordagem solidária e que valorize o bem-estar da comunidade.",
        pic: "assets/images/raimunda.jpg",
        likes: 0,
      },
    ];

    return { skills };
  }
}
