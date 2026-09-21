export type Party = 2 | 4 | 5 | 6;
export type Week = 'early' | 'late' | 'turn' | 'feb';
export const fx = {eur: 4.30, gbp: 5.10};
export const weeks = {
  early: {label: '16–23 stycznia', start: '2027-01-16', end: '2027-01-23', ski: '17–22 stycznia', outbound: '270116', inbound: '270123'},
  late: {label: '23–30 stycznia', start: '2027-01-23', end: '2027-01-30', ski: '24–29 stycznia', outbound: '270123', inbound: '270130'},
  turn: {label: '30 stycznia–6 lutego', start: '2027-01-30', end: '2027-02-06', ski: '31 stycznia–5 lutego', outbound: '270130', inbound: '270206'},
  feb: {label: '6–13 lutego', start: '2027-02-06', end: '2027-02-13', ski: '7–12 lutego', outbound: '270206', inbound: '270213'},
};
export const baseFares: Record<Week, number> = {early:348,late:585,turn:1564,feb:309};
export interface Stay {
  id: string; name: string; area: string; capacity: string; parties: Party[];
  beds: string; access: string; note: string; url: string; priceUrl?: string;
  prices: Record<Week, number | null>; point: [number, number];
}
export const stays: Stay[] = [
  {id:'pelvoux',name:'Le Pelvoux · apartament 26',area:'La Croisette',capacity:'50 m² · 2 sypialnie · do 8 osób',parties:[2,4,5,6],beds:'Łóżko podwójne i łóżka piętrowe; dodatkowe spanie w salonie. Dla grupy akceptującej piętrowe łóżka.',access:'Przy stokach, w centrum La Croisette i głównych wyciągów.',note:'Cennik właściciela za cały lokal, podzielony przez liczbę gości. Dostępność, sprzątanie, pościel, podatek, kaucja i anulowanie do potwierdzenia. Dla 2 osób wynajem dużego lokalu jest mniej opłacalny.',url:'https://lesmenuires-location.com/appartement-a-louer-le-pelvoux-les-menuires-3-vallees-t3-68-pers-pied-pistes/',priceUrl:'https://lesmenuires-location.com/tarifs-disponibilites-pelvoux/',prices:{early:1080,late:1150,turn:1150,feb:1790},point:[427,1460]},
  {id:'jettay',name:'Le Jettay · apartament 16',area:'Les Fontanettes / poniżej La Croisette',capacity:'50 m² · duplex · do 8 osób',parties:[2,4,5,6],beds:'Łóżko podwójne, 2 pojedyncze, kabina z łóżkiem piętrowym, sofa. Niska antresola nie jest liczona jako miejsce dla dorosłego.',access:'Zielona trasa przy budynku; zjazd do Doron / Reberty. Dostęp przez stok, nie potwierdzony dystans pieszy.',note:'Cennik właściciela. Dostępność, dodatki i anulowanie do potwierdzenia. Sklepy La Croisette ok. 400 m według właściciela.',url:'https://lesmenuires-location.com/appartement-a-louer-le-jettay-les-menuires-3-vallees-t3-68-pers-pied-pistes/',priceUrl:'https://lesmenuires-location.com/tarifs-disponibilites-jettay/',prices:{early:1080,late:1150,turn:1150,feb:1790},point:[407,1455]},
  {id:'pierre',name:'SOWELL · Pierre Blanche',area:'Le Brelin',capacity:'Studia i apartamenty · 2–6 osób',parties:[2,4,5,6],beds:'Dla pary studio; dla grupy większy apartament. Układ łóżek zależy od kategorii — sprawdź liczbę sof.',access:'Przy stokach; ok. 100 m od La Croisette przez windę według operatora.',note:'Pościel i ręczniki w ofercie operatora. Podatek lokalny i opcjonalne sprzątanie osobno; kaucja 300 €. Warunki zależą od taryfy.',url:'https://www.sowell.fr/en/residence-pierre-blanche/',prices:{early:null,late:null,turn:null,feb:null},point:[444,1445]},
  {id:'aconit',name:'Pierre & Vacances · Aconit',area:'Les Bruyères',capacity:'Apartamenty · 4, 5 i 6 osób',parties:[2,4,5,6],beds:'Sypialnia + salon lub większy apartament. Dla 2 osób trzeba wycenić lokal 4-osobowy.',access:'Wyjście na stok; piesze centrum Les Bruyères.',note:'W opisie pościel, ręczniki i sprzątanie poza aneksem. Podatek osobno; anulowanie zależne od oferty.',url:'https://reservation.les3vallees.com/en/product-6645-residence-aconit',prices:{early:null,late:null,turn:null,feb:null},point:[468,1458]},
  {id:'combes',name:'Résidence Les Combes',area:'Reberty 1850',capacity:'Studio do 3 osób · apartamenty 5–6 osób',parties:[2,4,5,6],beds:'Dla 2 osób studio; dla 4–5 lokal 5-osobowy; dla 6 większy apartament. Układ łóżek w rezerwacji.',access:'Przy trasach według katalogu turystycznego. Dokładne dojście do wyciągu do sprawdzenia.',note:'W opisie pościel i ręczniki; sprzątanie i podatek osobno. Warunki anulowania do sprawdzenia.',url:'https://reservation.les3vallees.com/en/product-6938-residence-les-combes',prices:{early:null,late:null,turn:null,feb:null},point:[455,1440]},
  {id:'alpages',name:'Les Alpages de Reberty',area:'Reberty 2000',capacity:'Apartamenty 4–10 osób',parties:[2,4,5,6],beds:'Dla 4 lokal 4-osobowy; dla 5–6 lokal 6-osobowy, 1 sypialnia + alkowa lub 2 sypialnie. Dla pary większy lokal.',access:'Bezpośredni dostęp do tras z rezydencji.',note:'Pościel, ręczniki, basen i wellness w opisie zimowym. Cena i dodatki zależne od apartamentu.',url:'https://reservation.les3vallees.com/en/product-6943-residence-les-alpages-de-reberty',prices:{early:null,late:null,turn:null,feb:null},point:[465,1418]},
  {id:'sapiniere',name:'Le Hameau de la Sapinière',area:'Reberty / La Sapinière',capacity:'Apartamenty 4–10 osób',parties:[4,5,6],beds:'Większe apartamenty w stylu chalet. Wybierz liczbę oddzielnych sypialni odpowiadającą grupie.',access:'U podnóża tras; ok. 10 minut pieszo do centrum.',note:'Pościel, ręczniki i zestaw kuchenny w opisie. Cena, podatek i anulowanie wymagają wyboru lokalu.',url:'https://www.le-hameau-de-la-sapiniere.com/appartement-chalet/',prices:{early:null,late:null,turn:null,feb:null},point:[448,1427]},
  {id:'vallon',name:'Chalet du Mont Vallon',area:'Les Bruyères',capacity:'Suites i apartamenty · warianty dla 2–6 dorosłych',parties:[2,4,5,6],beds:'Dla 5–6 dorosłych sprawdź Prestige. Mniejsze suites mają czasem miejsca dla dzieci, nie dorosłych.',access:'Rezydencja u podnóża tras.',note:'Wybierz formułę apartamentową, jeśli chcecie kuchnię. W formule hotelowej wyposażenie kuchni nie jest udostępniane. Wyżywienie to osobny wariant.',url:'https://www.hotel-montvallon-menuires.com/',prices:{early:null,late:null,turn:null,feb:null},point:[478,1443]},
];
export const sources = {
  bus:'https://www.bensbus.co.uk/ski-transfer/lyon-airport-to-les-menuires/',
  busBooking:'https://bookings.bensbus.co.uk/bookings/create',
  busBags:'https://www.bensbus.co.uk/lyon-airport-ski-transfers-questions/',
  pass:'https://lesmenuires.com/en/ski-passes',passBuy:'https://www.skipass-lesmenuires.com/',
  train:'https://ebilet.intercity.pl/',local:'https://www.wtp.waw.pl/',flights:'https://www.wizzair.com/pl-pl',
};
export function flightLink(week:Week, party:Party):string {
  const w=weeks[week];
  return `https://www.skyscanner.pl/transport/loty/waw/lys/${w.outbound}/${w.inbound}/?adults=${party}&adultsv2=${party}&cabinclass=economy&rtn=1`;
}
export function lodgingSearch(stay:Stay, week:Week, party:Party):string {
  return 'https://www.booking.com/searchresults.pl.html?' + new URLSearchParams({ss:stay.name+' Les Menuires',checkin:weeks[week].start,checkout:weeks[week].end,group_adults:String(party),no_rooms:'1',group_children:'0'}).toString();
}
export function bagCount(party:Party):number {return Math.ceil(party/2);}
export function flightCost(party:Party, week:Week='early'):number {return baseFares[week]+501.44+205.14*bagCount(party)/party;}
export function busCost(party:Party):number {return 97.5+8*bagCount(party)/party;}
