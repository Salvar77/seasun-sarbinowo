
import { useTranslation } from 'next-i18next'
import classes from './Statute.module.scss'

const Statute = () => {
    const {t} = useTranslation('statute')
  return (
    <div className={classes.statute_container}>
        <h1 className={classes.statute_maintitle}>Regulamin</h1>
        <p className={classes.statute_title}>Rezerwacje i płatności:</p>
        <p className={classes.statute_text}>Rezerwacje domków letniskowych należy dokonywać z wyprzedzeniem za pośrednictwem naszej strony internetowej lub kontaktując się z naszym biurem obsługi klienta.</p>
        <p className={classes.statute_text}>Wymagane jest dokonanie przedpłaty lub wpłaty zaliczki w celu potwierdzenia rezerwacji. Pełna płatność powinna być uregulowana przed rozpoczęciem pobytu.</p>
        <p className={classes.statute_text}>Akceptujemy płatności gotówkowe, kartą kredytową lub przelewem bankowym. W przypadku płatności przelewem bankowym, prosimy o przesłanie potwierdzenia dokonanej wpłaty.</p>
        <p className={classes.statute_title}>Warunki rezygnacji:</p>
        <p className={classes.statute_text}>W przypadku rezygnacji z dokonanej rezerwacji, prosimy o poinformowanie nas jak najszybciej. Obowiązują następujące zasady:</p>
        <p className={classes.statute_text}>Rezygnacja do 14 dni przed planowanym terminem pobytu - pełny zwrot wpłaconych środków.</p>
        <p className={classes.statute_text}>Rezygnacja w ciągu 7-14 dni przed planowanym terminem pobytu - zwrot 50% wpłaconych środków.</p>
        <p className={classes.statute_text}>Rezygnacja w ciągu 7 dni przed planowanym terminem pobytu - brak zwrotu wpłaconych środków.</p>
        <p className={classes.statute_title}>Zakwaterowanie:</p>
        <p className={classes.statute_text}>Zameldowanie odbywa się od godziny 15:00, natomiast wymeldowanie powinno nastąpić do godziny 10:00.</p>
        <p className={classes.statute_text}>W przypadku opóźnionego wymeldowania bez wcześniejszej zgody, naliczane mogą być dodatkowe opłaty za przekroczenie czasu pobytu.</p>
        <p className={classes.statute_text}>Domki letniskowe przeznaczone są dla określonej liczby osób. Wprowadzenie dodatkowych osób powyżej limitu jest zabronione, chyba że uzyskano uprzednią zgodę od zarządcy.</p>
        <p className={classes.statute_title}>Użytkowanie domku letniskowego:</p>
        <p className={classes.statute_text}>Należy dbać o porządek i czystość wewnątrz domku letniskowego.</p>
        <p className={classes.statute_text}>W przypadku stwierdzenia uszkodzeń lub braku wyposażenia, należy niezwłocznie poinformować zarządcę.</p>
        <p className={classes.statute_text}>Niedozwolone jest organizowanie imprez, hałaśliwe zachowanie oraz naruszanie ciszy nocnej (od godziny 22:00 do 7:00).</p>
        <p className={classes.statute_text}>Niedozwolone jest palenie tytoniu wewnątrz domku letniskowego. Wyznaczone miejsca do palenia znajdują się na terenie posesji.</p>
        <p className={classes.statute_title}>Odpowiedzialność:</p>
        <p className={classes.statute_text}>Właściciel domku letniskowego nie ponosi odpowiedzialności za utratę, uszkodzenie lub kradzież mienia gości.</p>
        <p className={classes.statute_text}>Goście ponoszą pełną odpowiedzialność za wszelkie szkody wyrządzone w domku letniskowym i zobowiązani są do pokrycia ich kosztów.</p>
        <p className={classes.statute_text}>Prosimy o zapoznanie się z powyższymi zasadami i przestrzeganie ich podczas pobytu w naszych domkach letniskowych. W przypadku jakichkolwiek pytań lub wątpliwości, nasz personel jest do Państwa dyspozycji.</p>
        <p className={classes.statute_text}>Zachowujemy sobie prawo do zmiany lub aktualizacji regulaminu w dowolnym momencie.</p>
    </div>


        

  )
}

export default Statute