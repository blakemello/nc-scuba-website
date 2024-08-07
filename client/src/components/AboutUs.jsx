import React from "react";

export default function AboutUs(){
    return(
        <div className='about-page'>
            <h2>ABOUT US</h2>
            <br></br>
            <h3>Hours of Operation</h3>
            <p>Tuesday – Friday 11:00 – 6:30<br></br>Saturday 11:00 – 5:30<br></br>Closed Sunday & Monday or by appointment only</p>
            <br></br>
            <p>1411 Lillington Hwy<br></br>Spring Lake NC 28390<br></br>910-705-6577<br></br>Email: <a href='mailto:info@adventuresinscubanc.com'>info@adventuresinscubanc.com</a></p>
            <div className='about-text'>
            <img src='../src/assets/Chris-200x300.jpg' />
            <p><b>Chris Russello</b> received his first scuba diving certification in October 1972. Because of his passion for diving, he left the corporate world in 1997 and opened his first ALOHA DIVE store. He has over 10,000 dives to his credit, (and is still counting).  He currently holds a worldwide certification as a Course Director with NAUI and is a Regional Training Director with NASE.  In addition to these current certifications, ​Chris was a SSI Master Instructor Certifier, SSI Advance Nitrox Instructor, SSI Tek Instructor, TDI Advanced Nitrox Instructor, SDI Instructor, ANDI Safeair1 and 2 Instructor and has held an instructor rating with another agencies. Additionally he is an equipment specialist and holds multiple factory certifications as a Master Repair technician.  Chris also holds a U.S. Coast Guard Merchant Marine 200 ton Captain’s license.</p>
            </div>
            <div className='about-text'>
            <img src='../src/assets/Deb-200x300.jpg' width={200}/>
            <p><b>Deb Disney</b> is a partner, the Lead Instructor, Marketing Director and Coordinator for all ADVENTURES IN SCUBA NC trips.  She started her diving career in early 2015 and it has become her passion in life.  Since the time she started, she has logged over 2000 dives and has achieved a Master Diver, TEK 1 and is an Instructor Trainer with both NAUI & NASE.  She loves training instructors and is exceptional instructor with children.  Deb always is smiling and brings a positive, professional and passionate attitude to the business of diving.  The family and friends of ADVENTURES IN SCUBA NC love working and diving with her.</p>
            </div>
            <div className='about-text'>
            <img src='../src/assets/Lance-200x300.jpg' width={200}/>
            <p><b>L​ance</b> started his life as a show dog extraordinaire.  After finishing his AKC championship he then moved on to the couch and became the shop’s mascot. Lance is one big fat mamas boy, loves Papa Duck Chris, but most importantly,  he has become the meeter & greeter at ADVENTURES IN SCUBA NC.  He is always quick to wag his tail and meet you at the door and possibly give you a big kiss and smile (yes, he does smile), but don’t be fooled, what he is really hoping for is a hand out of his favorite treat, the peanut butter pretzels that are kept in the shop. <br></br>Lance is currently not scuba certified.</p>
            </div>
            <img src='../src/assets/Military-Trusted-Business-Badge.png' />
        </div>
    )
}