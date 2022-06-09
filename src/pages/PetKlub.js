import React from 'react'
import './PetKlub.css';
import img1 from '../img/klub-img1.jpg';
import img2 from '../img/klub-img2.jpg';


const PetKlub = () => {
  return (
    <div className='pet-klub'>
        <h2>Pet centar klub</h2>
        <div className='items'>
            <div className='first'>
            <img src={img1} alt='slika1'/>
            </div>
            <div className='second'>
            <h3>ŠTA JE PET CENTAR KLUB?</h3>
            <p>Pet centar klub pokrenut je od samih početaka rada Pet centra, sa svrhom pružanja pogodnosti redovnim kupcima.  Učlanjenje u Pet centar klub donosi pravo na povoljnije uslove kupovine, kao i na učestvovanje u akcijama namenjenim samo članovima. Pogodnosti za članove odnose se samo za kupovinu u Pet centar prodavnicama i ne važe za online kupovinu.<br />
            Informacije o aktuelnim pogodnostima za članove Pet centar kluba uvek su dostupne na našim stranicama i istaknute u prostoru prodavnice. Prodajno osoblje Pet centra na raspolaganju je za sva dodatna pitanja o članskim akcijama, a možete nas kontaktirati za sva pitanja i na <a className='link-mail' href='mailto:info@pet-centar.rs?subject=Pitanje korisnika'>info@pet-centar.rs</a>.</p>  
            </div>
        </div>
        <div className='flex'>
        <h3>KAKO SE UČLANITI?</h3>
        <p>Član Pet centar kluba može postati fizičko lice starije od 16 godina. Pristupnicu zatražite od prodajnog osoblja u Pet centar prodavnici i ispunite potrebne podatke. Odmah po dobijanju popunjene pristupnice, dobćete aktivnu člansku kartu, spremnu za korišćenje već pri sledećoj kupovini.<br></br><br></br>
        Učlanjenje je potpuno besplatno i ni na šta Vas ne obvezuje. Jednom aktivirano članstvo nije potrebno obnavljati, osim u slučaju gubitka članske karte.<br></br><br></br>
        <span className='bold'>Molimo Vas da člansku kartu čuvate i nosite sa sobom kod svake posete našoj prodavnici.</span></p>
        </div>
        <div>
            <h2>Gotovinski popust</h2>
        <p>Članovi Pet centar kluba koji ostvare jednokratnu kupovinu sa minimalnim iznosom računa od 5.000,00 din, ostvaruju pravo na poklon bon u vrednosti od 500 din. Ovaj poklon bon mogu iskoristiti prilikom naredne kupovine, najranije sledećeg dana.  Korišćenje 500 din. poklon bona nije moguće kombinovati sa drugim članskim popustima, kao niti sa učestvovanjem u programu OŠTAR POPUST koji podrazumeva sakupljanje nalepnica. Ukoliko je prilikom korišćenja bona i umanjenja računa iznos iznad 5.000,00 din. novi bon se može dobiti prilikom sledeće kupovine. Pravo na poklon bon se odnosi na fizička lice - krajnje kupce.<br></br><br></br>
        Poklon bon možete dobiti i iskoristiti za kupovinu bilo kojeg artikla iz ponude Pet centar prodavnice, osim asortimana veterinarske apoteke. Pokon bon važi isključivo prilikom kupovine i plaćanja u Pet centar prodavnici i nije ga moguće dobiti i koristiti prilikom plaćanja na web shopu.
        </p>
        </div>
        <div>
            <h2>Oštar popust za najvernije kupce</h2>
            <div className='items'>
                <div className='first'>
                <img src={img2} alt='slika2'/>
                </div>
                <div className='second'>
                <h3>OŠTAR POPUST ZA NAJVERNIJE KUPCE!</h3>
                <p>Ovom prlikom nagrađujemo članove popularnog Pet centar kluba novim, zanimljivim programom pogodnosti i oštrim popustima!<br/>
                Sakupljajte nalepnice i pri sledoćoj kupovini odaberite oštar popust:</p>
                <ul>
                    <li><span className='bold'>5%</span> popusta za <span className='bold'>2</span> nalepnice</li>
                    <li><span className='bold'>10%</span> popusta za <span className='bold'>4</span> nalepnice</li>
                    <li><span className='bold'>15%</span> popusta za <span className='bold'>6</span> nalepnica</li>
                </ul>
                </div>
            </div>
        </div>
        <div>
            <h3>SAKUPLJANJE NALEPNICA</h3>
            <p>U Pet centar prodavnici zatražite karticu za skupljanje nalepnica i ostvarivanje pogodnosti. Član Pet centar kluba koji ostvari jednokratnu kupovinu u iznosu od minimalno 1.000,00 din, bez obzira na način  plaćanja, dobija jednu nalepnicu. Iz programa je izuzet kompletan asortiman veterinarske apoteke. Za dobijanje nalepnice prilikom kupovine potrebno je poneti člansku kartu Pet centar kluba i pokazati je na blagajni. Moguće je dobiti jednu nalepnicu dnevno. Nalepnicu nije moguće dobiti za kupovinu pri kojoj se koristi popust.<br/><br/>
            Ovaj program je namenjen potrošačima, odnosno važi samo za fizička lice - krajnje kupce. Kupci koji ostvare kupovinu od 5.000,00 din mogu izabrati ili jednu nalepnicu ili poklon (500 din), ne i jedno i drugo. Program se odnosi samo na kupovinu u Pet centar prodavnici, te nije moguće učestvovanje u programu kupovinom putem web shopa.</p>
        </div>
    </div>
  )
}

export default PetKlub