import { lodgingPrice, lodgingQuote } from "./lodging";
export type Party = 2 | 4 | 5 | 6;
export type Week = "late" | "feb" | "febLate" | "march";
export const fx = { eur: 4.3, gbp: 5.1 };
export const weeks = {
  late: {
    label: "23–30 stycznia",
    start: "2027-01-23",
    end: "2027-01-30",
    ski: "24–29 stycznia",
    outbound: "270123",
    inbound: "270130",
  },
  feb: {
    label: "6–13 lutego",
    start: "2027-02-06",
    end: "2027-02-13",
    ski: "7–12 lutego",
    outbound: "270206",
    inbound: "270213",
  },
  febLate: {
    label: "20–27 lutego",
    start: "2027-02-20",
    end: "2027-02-27",
    ski: "21–26 lutego",
    outbound: "270220",
    inbound: "270227",
  },
  march: {
    label: "6–13 marca",
    start: "2027-03-06",
    end: "2027-03-13",
    ski: "7–12 marca",
    outbound: "270306",
    inbound: "270313",
  },
};
export const baseFares: Record<Week, number> = { late: 1108, feb: 877, febLate: 431, march: 902 };
export const flightFareDate = "01.11.2026";
export const flightFareNote =
  "Odczyt Wizz Air przekazany przez użytkownika 01.11.2026; kwoty na osobę za loty w obie strony, bez doliczania opłaty pośrednika eSky. Koszyk przewoźnika, warunki taryfy i miejsca dla całej ekipy nie zostały niezależnie potwierdzone.";
export interface Stay {
  id: string;
  name: string;
  area: string;
  capacity: string;
  parties: Party[];
  beds: string;
  access: string;
  note: string;
  url: string;
  priceUrl?: string;
  point: [number, number] | null;
}
export const stays: Stay[] = [
  {
    id: "pelvoux",
    name: "Le Pelvoux · apartament 26",
    area: "La Croisette",
    capacity: "50 m² · 2 sypialnie · do 8 osób",
    parties: [2, 4, 5, 6],
    beds: "Łóżko podwójne i łóżka piętrowe; dodatkowe spanie w salonie. Dla grupy akceptującej piętrowe łóżka.",
    access: "Przy stokach, w centrum La Croisette i głównych wyciągów.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://lesmenuires-location.com/appartement-a-louer-le-pelvoux-les-menuires-3-vallees-t3-68-pers-pied-pistes/",
    priceUrl: "https://lesmenuires-location.com/tarifs-disponibilites-pelvoux/",
    point: [427, 1460],
  },
  {
    id: "jettay",
    name: "Le Jettay · apartament 16",
    area: "Les Fontanettes / poniżej La Croisette",
    capacity: "50 m² · duplex · do 8 osób",
    parties: [2, 4, 5, 6],
    beds: "Łóżko podwójne, 2 pojedyncze, kabina z łóżkiem piętrowym, sofa. Niska antresola nie jest liczona jako miejsce dla dorosłego.",
    access: "Zielona trasa przy budynku; zjazd do Doron / Reberty. Dostęp przez stok, nie potwierdzony dystans pieszy.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://lesmenuires-location.com/appartement-a-louer-le-jettay-les-menuires-3-vallees-t3-68-pers-pied-pistes/",
    priceUrl: "https://lesmenuires-location.com/tarifs-disponibilites-jettay/",
    point: [407, 1455],
  },
  {
    id: "pierre",
    name: "SOWELL · Pierre Blanche",
    area: "Le Brelin",
    capacity: "Studia i apartamenty · 2–6 osób",
    parties: [2, 4, 5, 6],
    beds: "Dla pary studio; dla grupy większy apartament. Układ łóżek zależy od kategorii — sprawdź liczbę sof.",
    access: "Przy stokach; ok. 100 m od La Croisette przez windę według operatora.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://www.sowell.fr/en/residence-pierre-blanche/",
    point: [444, 1445],
  },
  {
    id: "aconit",
    name: "Pierre & Vacances · Aconit",
    area: "Les Bruyères",
    capacity: "Apartamenty · 4, 5 i 6 osób",
    parties: [2, 4, 5, 6],
    beds: "Sypialnia + salon lub większy apartament. Dla 2 osób trzeba wycenić lokal 4-osobowy.",
    access: "Wyjście na stok; piesze centrum Les Bruyères.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://reservation.les3vallees.com/en/product-6645-residence-aconit",
    point: [468, 1458],
  },
  {
    id: "combes",
    name: "Résidence Les Combes",
    area: "Reberty 1850",
    capacity: "Studio do 3 osób · apartamenty 5–6 osób",
    parties: [2, 4, 5, 6],
    beds: "Dla 2 osób studio; dla 4–5 lokal 5-osobowy; dla 6 większy apartament. Układ łóżek w rezerwacji.",
    access: "Przy trasach według katalogu turystycznego. Dokładne dojście do wyciągu do sprawdzenia.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://reservation.les3vallees.com/en/product-6938-residence-les-combes",
    point: [455, 1440],
  },
  {
    id: "alpages",
    name: "Les Alpages de Reberty",
    area: "Reberty 2000",
    capacity: "Apartamenty 4–10 osób",
    parties: [2, 4, 5, 6],
    beds: "Dla 4 lokal 4-osobowy; dla 5–6 lokal 6-osobowy, 1 sypialnia + alkowa lub 2 sypialnie. Dla pary większy lokal.",
    access: "Bezpośredni dostęp do tras z rezydencji.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://reservation.les3vallees.com/en/product-6943-residence-les-alpages-de-reberty",
    point: [465, 1418],
  },
  {
    id: "sapiniere",
    name: "Le Hameau de la Sapinière",
    area: "Reberty / La Sapinière",
    capacity: "Apartamenty 4–10 osób",
    parties: [2, 4, 5, 6],
    beds: "Większe apartamenty w stylu chalet. Wybierz liczbę oddzielnych sypialni odpowiadającą grupie.",
    access: "U podnóża tras; ok. 10 minut pieszo do centrum.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://www.le-hameau-de-la-sapiniere.com/appartement-chalet/",
    point: [448, 1427],
  },
  {
    id: "vallon",
    name: "Résidence Le Chalet du Mont Vallon",
    area: "Les Bruyères",
    capacity: "Apartamenty rezydencji · liczba dorosłych zależy od taryfy",
    parties: [2, 4, 5, 6],
    beds: "Apartamenty z kuchnią. W marcu dostępne taryfy mieszczą maksymalnie 4 dorosłych, nawet jeśli nazwa lokalu mówi o 6 osobach.",
    access: "Rezydencja u podnóża tras.",
    note: "Warunki aktualnej wyceny podano poniżej dla wybranego terminu i liczby osób.",
    url: "https://www.booking.com/hotel/fr/ra-c-sidence-le-chalet-du-mont-vallon.en-gb.html",
    point: [478, 1443],
  },
  {
    id: "confortable",
    name: "Appartement confortable Les Belleville 40 m² avec vue montagne",
    area: "Les Belleville · lokalizacja do sprawdzenia",
    capacity: "40 m² · do 5 osób",
    parties: [2, 4, 5],
    beds: "Sypialnia z łóżkiem podwójnym; pojedyncze łóżko i sofa w salonie.",
    access:
      "Opis oferty: blisko tras. Dokładny adres, dojście do wyciągu i położenie na panoramie wymagają sprawdzenia.",
    note: "Cena dotyczy jednego całego lokalu na 7 nocy, bez skipassa.",
    url: "https://www.booking.com/hotel/fr/appartement-d-une-chambre-a-les-belleville-a-100-m-des-pistes-avec-terrasse-amen.en-gb.html",
    point: null,
  },
  {
    id: "studioCabine",
    name: "Studio cabine 4 pers. proche pistes avec balcon et parking",
    area: "Les Menuires · lokalizacja do sprawdzenia",
    capacity: "24 m² · do 4 osób",
    parties: [2, 4],
    beds: "Sofa i łóżko piętrowe według gospodarza; podsumowanie łóżek w serwisie jest niespójne.",
    access:
      "Opis oferty: blisko tras. Dokładny adres, dojście do wyciągu i położenie na panoramie wymagają sprawdzenia.",
    note: "Cena dotyczy jednego całego lokalu na 7 nocy, bez skipassa.",
    url: "https://www.booking.com/hotel/fr/studio-les-menuires-2-pieces-4-personnes-fr-1-344-863.en-gb.html",
    point: null,
  },
  {
    id: "median005",
    name: "Apartment Médian 005 by Interhome",
    area: "Les Menuires · Médian",
    capacity: "24 m² · do 4 osób",
    parties: [2, 4],
    beds: "Sypialnia z łóżkiem piętrowym i sofa w salonie.",
    access:
      "Opis oferty: blisko tras. Dokładny adres, dojście do wyciągu i położenie na panoramie wymagają sprawdzenia.",
    note: "Cena dotyczy jednego całego lokalu na 7 nocy, bez skipassa.",
    url: "https://www.booking.com/hotel/fr/appartement-le-median-5.en-gb.html",
    point: null,
  },
  {
    id: "balcons",
    name: "Apartment Balcons D’Olympie by Interhome",
    area: "Les Menuires · Balcons d’Olympie",
    capacity: "25 m² · do 4 osób",
    parties: [2, 4],
    beds: "Dwa pojedyncze łóżka w sypialni i sofa w salonie.",
    access:
      "Opis oferty: blisko tras. Dokładny adres, dojście do wyciągu i położenie na panoramie wymagają sprawdzenia.",
    note: "Cena dotyczy jednego całego lokalu na 7 nocy, bez skipassa.",
    url: "https://www.booking.com/hotel/fr/apartment-balcons-d-olympie-by-interhome.en-gb.html",
    point: null,
  },
];
export function stayPrice(stay: Stay, week: Week, party: Party): number | null {
  return lodgingPrice(lodgingQuote(stay.id, week, party));
}
export function availableStays(week: Week, party: Party): Stay[] {
  return stays
    .filter((stay) => stay.parties.includes(party) && stayPrice(stay, week, party) !== null)
    .sort((a, b) => stayPrice(a, week, party)! - stayPrice(b, week, party)!);
}
export const sources = {
  bus: "https://www.bensbus.co.uk/ski-transfer/lyon-airport-to-les-menuires/",
  busBooking: "https://bookings.bensbus.co.uk/bookings/create",
  busBags: "https://www.bensbus.co.uk/lyon-airport-ski-transfers-questions/",
  pass: "https://lesmenuires.com/en/ski-passes",
  passBuy: "https://www.skipass-lesmenuires.com/",
  train: "https://ebilet.intercity.pl/",
  local: "https://www.wtp.waw.pl/",
  flights: "https://www.wizzair.com/pl-pl",
};
export function flightLink(week: Week, party: Party): string {
  const w = weeks[week];
  return `https://www.skyscanner.pl/transport/loty/waw/lys/${w.outbound}/${w.inbound}/?adults=${party}&adultsv2=${party}&cabinclass=economy&rtn=1`;
}
export function lodgingSearch(stay: Stay, week: Week, party: Party): string {
  return (
    "https://www.booking.com/searchresults.pl.html?" +
    new URLSearchParams({
      ss: stay.name + " Les Menuires",
      checkin: weeks[week].start,
      checkout: weeks[week].end,
      group_adults: String(party),
      no_rooms: "1",
      group_children: "0",
    }).toString()
  );
}
export const suitcasePerPerson = 205.14 / 2;
export function flightCost(week: Week = "late"): number {
  return baseFares[week] + 501.44 + suitcasePerPerson;
}
export function busCost(): number {
  return 97.5 + 8 / 2;
}
