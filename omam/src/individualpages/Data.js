import React from 'react'
import { Button } from '../Components/Buttons'
import './Data.css'
import Img from '../photos/Data_01_DyerAtDesk_Wikipedia.png'
import {Link} from 'react-router-dom'

function Data(){
    return(
        <div>
          <div>
          <Link to ='/'>
            <Button
              onClick = {() => {
                console.log("You clicked me");
              }}
              type="button"
              buttonStyle="btn--home"
              buttonSize="btn--homesize"
              >HOME
            </Button>
          </Link>
              <p className="p1">
              The Official Records of the War of the Rebellion
              The War of the Rebellion: A Compilation of the Official Records of the Union and the Confederate Army, 128 vols. 
              (Washington, D.C., 1880-1902).
              This particular version of OMAM draws its data from the War Department’s Official Records of the War of the Rebellion (OR), 
              which comprises what historian Yael Sternhell called “the basis for what we know about the Civil War.” 
              This source is so robust—128 volumes of primary evidence at roughly 900 pages per volume—that it generates data for every layer on the map: 
              guerrilla violence, Union army movement, and guerrillas’ domestic supply line. 
              </p>
              <p className="p2">
              In 2016, Sternhell published a brilliant article in the Journal of American History that detailed the OR’s collection and preservation processes, 
              along with its inadequacies. A summary of that work will suffice here. Most importantly, Sternhell discovered that the OR’s creation took place in 
              the context of sectional reconciliation. In fact, the “Confederacy’s leadership was instrumental in correcting, fact checking, and proofreading the 
              documents that would make up the OR.” Not surprisingly, “ex-Confederates were first and foremost concerned with propagating their version of the facts” 
              (as were the northerners involved in the project). As a result, the evidence included in the OR “offered historians the documentary basis for narratives
              that gave both sides an equal voice and made battlefield drama the central interest of Civil War history. It enabled the comforting, reunionist histories
              that marginalized the importance of emancipation and generally ignored the role of African Americans.” Yael A. Sternhell, “The Afterlives of a 
              Confederate Archive: Civil War Documents and the Making of Sectional Reconciliation,” Journal of American History 102, no. 4 (March 2016): 
              1026, 1044, 1048-1049. 
              </p>
              <p className="p3">
              Therefore, at its heart, this project’s current version leaves a gaping hole in the historiography: the role of race in the Civil War’s guerrilla conflict. 
              It is my hope that in laying this deficiency bare, other scholars will bear its torch as soon as possible.  
              </p>
              <p className="p3">
              The University of Richmond’s (Digital Scholarship Lab) “Visualizing Emancipation” Union Army Dataset
              This data illustrates the Union army’s spatial location throughout the war (representing the points army regiments visited, but not the spaces over which 
              they travelled). 
              The source’s transformation, from actual boots on the ground to a written reference work to points on a map, spans over 150 years. 
              </p>
              <p classname="p4">
                <img src = {Img} align = "right" alt = "Dyer"></img>
              One set of those boots belonged to Frederick H. Dyer, who ran away from school to join the army at age fourteen. 
              He served as a drummer boy in the 7th Connecticut, “and there is nothing in Dyer’s record to suggest that he was anything but
              a solid character and a dutiful soldier.” Dyer survived the war and worked as a “commercial traveler” when not engaged in his 
              duties as Commander of the Pennsylvania Department of the Grand Army of the Republic. Dyer took seriously the latter position, 
              compiling regimental histories at each meeting—from veterans and historical archives—and obsessing over their completeness and correctness. 
              One journalist claimed that it “used to be a favorite trick of his to stand up in an audience of 500 to 1,000 old soldiers and challenge any man
                to name a regiment whose record of service he could not give.” He kept at it for almost forty years until enough veterans—General Sherman 
                included—convinced him that the war’s importance necessitated a compendium of regimental histories, violent engagements, casualties, 
                and officer commands, and that Dyer was the only man for the job. It seems those veterans were right, for Dyer’s work ethic in completing 
                such a compilation is almost beyond words: "He stuck to his work with a dogged determination that meant a sort of heroism that not many understand. 
                For five years he kept at his desk leaving it only to eat a little and to sleep a little. He was at it before breakfast, he kept at it until after midnight. 
                He isolated himself in his room for weeks at a stretch. … Seven times he went over his list of battles to make sure that nothing had been omitted and that no 
                mistakes had been made in dates, that the list of killed had been properly reported and each time this revision took him seven months." 
              </p>
            </div>
        </div>
    )
}

export default Data;