import React from "react";
import OtherCourses from "./OtherCourses";

export default function TrainingRefresher(){
    return(
        <div className='training-page'>
            <h2>REFRESHER COURSE</h2>
            <OtherCourses />
            <p>Are you a certified diver, but it’s been a while since you’ve been in the water?</p>
            <p>Are you a certified diver just looking for a skills tune-up?</p>
            <p>A Refresher Course is just what you’re looking for!</p>
            <img src='../src/assets/refresh-Instructor-300x225.jpg' />
            <ul>
                <li>Spend some time in the confined water (Local Dive Park) with one of our Instructors or Divemasters</li>
                <li>Add on a classroom session to reacquaint yourself with Dive Tables and the physics of diving</li>
                <li>Add on an Open Water or Ocean dive with one of our Instructors or Divemasters</li>
            </ul>
            <img src='../src/assets/rec-Military-Trusted-Business-Badge.png' />
            <OtherCourses />
        </div>
    )
}