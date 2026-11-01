import {
  availableStays,
  baseFares,
  busCost,
  flightCost,
  flightFareDate,
  flightFareNote,
  fx,
  flightLink,
  stayPrice,
  weeks,
  type Party,
  type Week,
  type Stay,
} from "./data";
import { escapeHtml, lodgingQuote } from "./lodging";

const money = (n: number) => n.toLocaleString("pl-PL", { maximumFractionDigits: 0 }) + " zł";
export function ownTravelComparison(party: Party, stay: Stay, pass: number): string {
  const rows = (Object.keys(weeks) as Week[])
    .map((week) => {
      const rent = stayPrice(stay, week, party);
      return `<tr><th scope="row">${weeks[week].label}</th><td>${rent === null ? "Brak aktualnej oferty" : money((rent * fx.eur) / party)}</td><td>${money(pass * fx.eur)}</td><td><b>${rent === null ? "Niepełna wycena" : money((rent * fx.eur) / party + pass * fx.eur)}</b></td></tr>`;
    })
    .join("");
  return `<div id="terminy"><p class="eyebrow">DOJAZD WŁASNY · CENY NA OSOBĘ</p><h2>Porównaj koszt pobytu.</h2><p>${escapeHtml(stay.name)} · ${party} os. · 7 noclegów + 6 dni wybranego skipassa. Tabela dotyczy wybranego obiektu.</p><div class="date-table"><table><caption>Pobyt bez kosztów podróży</caption><thead><tr><th>Termin 2027</th><th>Nocleg</th><th>Skipass</th><th>Razem / osoba</th></tr></thead><tbody>${rows}</tbody></table></div><p class="footnote">Poza sumą: dojazd, jedzenie, ubezpieczenie, kaucje i dodatki noclegowe opisane przy ofercie. Ceny odczytane 01.11.2026, dostępność może się zmienić.</p></div>`;
}
export function dateComparison(party: Party): string {
  const rows = (Object.keys(weeks) as Week[])
    .map((week) => {
      const stay = availableStays(week, party)[0];
      const rent = stay ? stayPrice(stay, week, party) : null;
      const quote = stay ? lodgingQuote(stay.id, week, party) : undefined;
      const total =
        rent === null ? null : flightCost(week) + (rent * fx.eur) / party + 421 * fx.eur + busCost() * fx.gbp;
      return `<tr><th scope="row"><a href="${flightLink(week, party)}" target="_blank" rel="noopener noreferrer">${weeks[week].label} ↗</a></th><td>${money(baseFares[week])}</td><td>≈ ${money(flightCost(week))}</td><td>${rent === null ? "Brak aktualnej oferty" : money((rent * fx.eur) / party)}<br><small>${quote ? `<a href="${escapeHtml(quote.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(stay.name)} ↗</a>` : ""}</small></td><td><b>${total === null ? "Niepełna wycena" : `≈ ${money(total + 200)}–${money(total + 400)}`}</b></td></tr>`;
    })
    .join("");
  return `<div id="terminy"><p class="eyebrow">CZTERY TERMINY · LOTY ${flightFareDate} · NOCLEGI 01.11.2026</p><h2>Styczeń, luty czy marzec?</h2><p>Ceny <b>na osobę przy ${party} dorosłych</b>, podróż w obie strony i 7 nocy. Każdy termin wykorzystuje najtańszy dostępny nocleg spośród sprawdzonych dla tej liczby osób; obiekty mogą się różnić. Pełny skipass 3 Vallées: 421 €. Wybór noclegu i skipassa w kalkulatorze powyżej nie zmienia tej tabeli.</p><div class="date-table"><table><caption>Sobotnie wyjazdy · ten sam zakres kosztów</caption><thead><tr><th>Termin 2027</th><th>Lot bez dodatków</th><th>Lot z bagażami — szacunek*</th><th>Nocleg · 7 nocy</th><th>Budżet podstawowy*</th></tr></thead><tbody>${rows}</tbody></table></div><p class="notice"><b>* Bagaż sportowy jest uwzględniony w szacunku, opłata dla nowych dat wymaga potwierdzenia.</b> Rezerwa na osobę: 501,44 zł za snowboard oraz 102,57 zł za ½ walizki 20 kg, w obie strony.</p><p class="footnote">Suma: lot z rezerwą bagażową, nocleg, pełny skipass, Ben’s Bus według taryfy sezonowej i 200–400 zł na kolej oraz dojazd na Chopina. Bez jedzenia, ubezpieczenia, kaucji i dodatków opisanych przy noclegu. Noclegi odczytano w sesji z programem Genius; ceny mogą zależeć od uprawnień. Dostępność nie oznacza rezerwacji. ${flightFareNote} Godziny transferu wymagają sprawdzenia.</p></div>`;
}
