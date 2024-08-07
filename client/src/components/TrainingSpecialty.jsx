import React from "react";
import OtherCourses from "./OtherCourses";

export default function TrainingSpecialty(){
    return(
        <div className='training-page'>
            <h2>SPECIALTY DIVER COURSES</h2>
            <OtherCourses />
            <img src='../src/assets/Specialty-Nitrox-300x173.jpg' />
            <p>Adventures in Scuba NC offers a variety of specialty diver courses.  With this specialty training your education and skills will be improved.<br></br>

                Specialty Diver Courses:<br></br>
                <ul>
                    <li>Enhanced Air Nitrox</li>
                    <li>Night Diver</li>
                    <li>Deep Diver</li>
                    <li>Wreck Diver</li>
                    <li>Underwater Digital Imaging</li>
                    <li>Drysuit</li>
                    <li>Equipment Specialist</li>
                    <li>And many more…</li>
                </ul>
                Contact us for pricing & schedules.   We offer discounts for our specialty courses when combined with other courses.<br></br>
                Specialty Course Includes:<br></br>
                All student materials<br></br>
                Classroom and open water instruction<br></br>
                Rental Gear includes; tank, BCD, life support regulator system, wetsuit and weights<br></br>
                Certification card upon completion<br></br>

                Additional Costs: Ocean boat trips. You can combine specialty course skills with one boat trip.</p>

            <img src='../src/assets/rec-Military-Trusted-Business-Badge.png' />
            <OtherCourses />
        </div>
    )
}