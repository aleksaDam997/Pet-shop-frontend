import React from 'react'
import about from '../../img/about-us.jpg';
import './AboutUs.css';

const AboutUs = () => {
  return (  
    <div className='about-us'>
    <h2>O nama</h2>
      <div className='img-text'>
    <img className='img-about' src={about} alt='about'/>
    <div className='text'>
    <p>Pet centar je specijalizovana maloprodaja hrane i opreme za sve kućne ljubimce, prisutan u Srbiji od 2008. godine kada je na Novom Beogradu otvorena prva Pet centar prodavnica u Srbiji.<br></br><br></br>
    Danas regionalni lider, Pet centar je započeo sa radom daleke 1999. godine, sa željom da postane mesto najšire ponude asortimana za kućne ljubimce.<br></br><br></br>
    Od tih početaka puno se promenilo: višestruko je proširen asortiman, prodavnice su veće i prilagođene najvišim standardima moderne maloprodaje, izradili smo vlastitu robnu marku hrane za pse i mačke koja pruža najbolji odnos cene i kvalitete na tržištu, te konstantno radimo na unapređenju ponude i osiguranju najboljih cena za naše kupce.<br></br><br></br>
    Posebno smo posvećeni postizanju najviših standarda kvaliteta usluge, na čemu stalno radimo u želji da nadmašimo očekivanja naših kupaca. U okviru svih Pet centar prodavnica rade i veterinarske apoteke u kojima uvek možete dobiti i stručan savet nekog od naših veterinara, a snabdevanje robom je automatizovano i strogo se kontroliše, kako biste uvek pronašli onaj artikal po koji ste došli. Pet centar nudi kompletan asortiman hrane i opreme za sve kućne ljubimce, kao i bogatu ponudu malih životinja (ptice i glodari), akvaristike i teraristike. Sve životinje iz Pet centra imaju veterinarsku potvrdu i dokaz porekla od registrovanih odgajivača iz Srbije i sveta.<br></br><br></br>
    Danas je Pet centar prepoznat kao vodeća specijalizovana maloprodaja za kućne ljubimce u regionu, sa kvalitetom ponude i usluge na nivou najboljih specijalizovanih maloprodaja u Evropi. U Srbiji, Pet centar zapošljava oko 100 ljudi i ima osam prodajnih objekta od kojih su 4 u Beogradu i po jedan u Novom Sadu, Nišu, Kragujevcu i Čačku.<br></br><br></br>
    Takođe, Pet centar je postao deo međunarodne Pet Network grupacije, koja osim u Srbiji posluje i u Hrvatskoj, Sloveniji, Rumuniji i Bugarskoj. Svi zaposleni Pet Network grupe, u pet zemalja i više od 130 prodavnica, ljubitelji su i najčešće vlasnici životinja.<br></br><br></br>
    Naša misija je uneti radost u živote kućnih ljubimaca i njihovih vlasnika, promovisati prednosti suživota ljudi i životinja, te edukovati široku javnost i konstantno promovisati dobrobit životinja.<br></br><br></br>
    Zahvaljujemo našim kupcima na ukazanom poverenju i nadamo se da ćemo ga i u budućnosti opravdati, a ako do sada niste imali prilike posetiti neku od naših prodavnica, pozivamo Vas da svakako dođete zajedno sa svojim ljubimcem.<br></br><br></br>
    Vaš Pet centar<br></br><br></br>
    Ljubimci znaju zašto.</p> 
      </div>
      </div>
      </div>

  )
}

export default AboutUs