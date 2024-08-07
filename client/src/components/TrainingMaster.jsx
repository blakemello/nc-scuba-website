import React from "react";
import OtherCourses from "./OtherCourses";

export default function TrainingMaster(){
    return(
        <div className='training-page'>
            <h2>MASTER DIVER CERTIFICATION</h2>
            <OtherCourses />
            <p>
                <b>The Most Elite Non-Professional Certification  $750</b><br></br>
            <img src='../src/assets/Master-Diver-214x300.jpg' /><br></br>

                Master Diver CertificationTo be a Master Diver you must have the following:
                <ul>
                    <li>Basic Open Water</li>
                    <li>Advanced Open Water</li>
                    <li>Rescue Diver</li>
                    <li>At least 25 logged dives or 500 logged underwater minutes</li>
                    <li>Be at least 15 years old</li>
                </ul>
                Once a diver has the necessary prerequisites they can begin working towards their Master Diver Certification  Join the ELITE divers.<br></br>

                Course Includes:<br></br>
                Student On-line training materials<br></br>
                All instructor training<br></br>
            </p>
            <img src='../src/assets/rec-Military-Trusted-Business-Badge.png' />
            <OtherCourses />
        </div>
    )
}