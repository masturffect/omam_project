import React from 'react'
import { Button } from '../Components/Buttons'
import './Data.css'
import Img from '../photos/Data_01_DyerAtDesk_Wikipedia.png'
import Img2 from '../photos/Data_02_PerseusScreenshot.png'
import Img3 from '../photos/Data_03_VisualizingEmancipationScreenshot.png'
import Img4 from '../photos/Data_04_PerseusXML.jpg'
import Img5 from '../photos/Data_05_Getty.png'
import Img6 from '../photos/Data_06_IncompleteDatasetBattles.jpg'
import Img7 from '../photos/Data_07_NHGIS.png'
import Img8 from '../photos/Data_08_UNLrailroads.png'


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
          <h1 className = "header">Data</h1>
              <body>
                  <p className="p1">
                  The Official Records of the War of the Rebellion
                  The War of the Rebellion: A Compilation of the Official Records of the Union and the Confederate Army, 128 vols. 
                  (Washington, D.C., 1880-1902).
                  This particular version of OMAM draws its data from the War Department’s Official Records of the War of the Rebellion (OR), 
                  which comprises what historian Yael Sternhell called “the basis for what we know about the Civil War.” 
                  This source is so robust—128 volumes of primary evidence at roughly 900 pages per volume—that it generates data for every layer on the map: 
                  guerrilla violence, Union army movement, and guerrillas’ domestic supply line. 
                  </p>
                  <p className="p3">
                  In 2016, Sternhell published a brilliant article in the Journal of American History that detailed the OR’s collection and preservation processes, 
                  along with its inadequacies. A summary of that work will suffice here. Most importantly, Sternhell discovered that the OR’s creation took place in 
                  the context of sectional reconciliation. In fact, the “Confederacy’s leadership was instrumental in correcting, fact checking, and proofreading the 
                  documents that would make up the OR.” Not surprisingly, “ex-Confederates were first and foremost concerned with propagating their version of the facts” 
                  (as were the northerners involved in the project). As a result, the evidence included in the OR “offered historians the documentary basis for narratives
                  that gave both sides an equal voice and made battlefield drama the central interest of Civil War history. It enabled the comforting, reunionist histories
                  that marginalized the importance of emancipation and generally ignored the role of African Americans.” 
                  </p>
                  <p className="p3">
                  Therefore, at its heart, this project’s current version leaves a gaping hole in the historiography: the role of race in the Civil War’s guerrilla conflict. 
                  It is my hope that in laying this deficiency bare, other scholars will bear its torch as soon as possible.  
                  </p>
                  <p className = "p3">
                    The University of Richmond’s (Digital Scholarship Lab) “Visualizing Emancipation” Union Army Dataset
                    This data illustrates the Union army’s spatial location throughout the war (representing the points army regiments visited, 
                    but not the spaces over which they travelled). The source’s transformation, from actual boots on the ground to a written reference 
                    work to points on a map, spans over 150 years.
                  </p>
                  <p className="p3">
                    <figure>
                      <img className = "dyer" src = { Img } align="right" alt="Dyer"></img><br></br>
                      <figcaption> “Dyer working on the Compendium” – from Wikipedia.</figcaption>
                    </figure>
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
                  <p className = "p3">
                  The result defies comparison. Dyer’s Compendium of the War of the Rebellion consists of “thousands of sheets, millions of words, involving the 
                  examination of 10,000,000 names and dates, every line of it prepared by [him]… without the aid of a secretary or even a stenographer.” Of Methods 
                  and Madness consults two of its three volumes, Volume I: Battles and Volume III: Regimental Histories. Despite the impossibility of perfecting such 
                  a reference work, immediate veteran reviews praised its accuracy and today’s archivists and historians agree on its “general reliability.” In fact, 
                  over a century after its publication, Dyer’s Compendium remains the most comprehensive collection of Union regimental histories to include spatiotemporal information.
                  Frederick H. Dyer, A Compendium of the War of the Rebellion (New York: Sagamore Press, 1908). Quotes from Bell Irvin Wiley’s introduction to the 
                  1959 edition [unnumbered pages]. The unused Volume II is a “Name Index of Commands” detailing every Union officer, their rank(s), the dates they 
                  held said ranks, and their regiment’s associated brigade, division, corps, and army.  
                  </p>
                  <p className = "p3">
                  In the 1980s, Gregory Crane and the Tufts University Perseus Digital Library digitized all three volumes of Dyer’s Compendium. 
                  This process identified which words in Dyer’s text contained spatial information and made the digital text publicly available online.
                  Gregory R. Crane, “Perseus Digital Library,” Tufts University, http://www.perseus.tufts.edu/hopper/ (accessed March 20, 2020). 
                  </p>
                  <img className = "perseus" src = { Img2 } alt="Perseus"></img>
                  <p className = "p3">
                  In 2012, the University of Richmond’s Digital Scholarship Lab launched “Visualizing Emancipation,” a “map of slavery’s end during the American Civil 
                  War.” “Visualizing Emancipation” plotted the Union army’s location on a map of the United States using Volume III: Regimental Histories of Dyer’s 
                  Compendium. Furthermore, the site made that data available for download.
                  The University of Richmond, “Digital Scholarship Lab,” Boatwright Memorial Library, Visualizing Emancipation,
                   http://dsl.richmond.edu/emancipation/ (accessed March 20, 2020). “Visualizing Emancipation” credits the following for transforming the digitized text 
                   of Dyer’s Compendium into mappable data: “Chris Kemp has provided help in working with xml-encoded texts and their transformations, and played a 
                   significant role in transforming the Union army information from textual description to mapped data.
                  … Alex Wan helped clean U.S. army data that had been generated algorithmically.” See http://dsl.richmond.edu/emancipation/credits/ 
                  (accessed March 20, 2020).  
                  </p>
                  <img className = "data03" src = { Img3 } alt="Emancipation"></img>
                  <p className = "p3">
                  Each stage of this source’s data transformation contains unique limitations. First, Dyer’s Compendium contains known and unknown errors. 
                  Dyer worked at the regimental level and did not include many company-level movements in his work. This poses a problem as the Union military 
                  sent many companies on search-and-destroy missions specifically targeting guerrillas. Similarly, many Union “detectives”—who were 
                  given small squads of troops and extreme leeway in breaking official policy toward civilians—investigated guerrillas and their supporters; Dyer did not 
                  document such activities. Dyer drew much of his evidence from the OR, meaning any errors, omissions, or biases in that source transmitted to his Compendium. 
                  Additionally, a large amount of guerrilla violence enacted against civilians actually targeted members of local Unionist militias. Dyer did not account for 
                  many civilian militias. This omission enhances the image of guerrilla violence as anarchic by enabling historians to characterize guerrillas’ targets as 
                  innocent civilians instead of proactive extensions of the Union army (Unionist militias often received arms from the army and contained 
                  former soldiers and/or soldiers’ family members). 
                  </p>
                  <p className = "p3">
                  Concerning terminology, Dyer used 117 terms to describe the Union army’s movements (for example, ‘about,’ ‘outpost duty,’ ‘transferred,’ or ‘marched’) 
                  and often used multiple terms to describe the same line of data (for example, ‘repulsing’ an attack before ‘marching’ somewhere nearby and performing 
                  ‘guard duty’). Furthermore, Dyer never defined his terminology (for example, explaining the differences between a scout, expedition, or reconnaissance mission).
                   Lastly, Dyer was a Union veteran and Union subjectivity must be taken into account.
                   Dyer actually used 154 different terms to describe the Union army’s movement, but I removed misspellings, different tenses of the same verbs, and plurals 
                   of the same verb. I used nineteenth-century United State military manuals to better understand Dyer’s terminology. See, William Duane, A Military Dictionary, 
                   Or, Explanation of the Several Systems of Discipline of Different Kinds of Troops, Infantry, Artillery, and Cavalry; The Principles of Fortification, 
                   and All the Modern Improvements in the Science of Tactics: Comprising The Pocket Gunner, or Little Bombardier; the Military Regulations of the United States; 
                   the Weights, Measures, and Monies of All Nations; the Technical Terms and Phrases of the Art of War in the French Language, Particularly Adapted to the 
                   Use of the Military Institutions of the United States (Philadelphia, 1810); and Captain Lendy, Maxims, Advice and Instructions on the Art of War, 
                   or a Practical Military Guide for the Use of Soldiers of All Arms and of All Countries (New York: D. Van Nostrand, 1862). 
                  </p>
                  <p className = "p3">
                  <figure>
                      <img className = "perseus2" src = { Img4 } align="left" alt="PerseusDigitized"></img><br></br>
                      <figcaption> - Perseus’s digitized version of Dyer’s text.</figcaption>
                    </figure>
                  Second, the Perseus Digital Library introduced errors during digitization. Digitizing a textual document involves scanning the document
                   into a computer and using Optical Character Recognition (OCR) software to convert the scanned image of text into text itself. This software is imperfect;
                    misspellings and omissions inevitably occur. The Perseus Digital Library’s Managing Editor, Lisa M. Cerrato, stated that the “OCR clean up error quality
                    was contracted at 98.5%,” although the Library has not checked the actual output to ensure that 98.5% of Dyer’s text was correctly digitized.
                  Additionally, Perseus identified which words in the digitized text portrayed spatial information by tagging “placenames” (for example, tagging 
                  the placename “Tuscumbia, Alabama” in the sentence “Expedition toward Tuscumbia, Ala., December 9-24”). Perseus did not tag every placename in Dyer’s text. 
                  For example, Perseus did not tag regions (such as “North Alabama”) or features of the built environment (such as “Cobb’s Mill” or “Brown’s Ferry”). Again,
                   the Perseus Library has not checked the digitized text to calculate a percent error of its tagging process (or to discover how many locations are missing).
                  </p>
                  <p className="p3">
                  <figure>
                      <img className = "dyer" src = { Img5 } align="left" alt="Getty"></img><br></br>
                      <figcaption> - A search on the Getty Thesaurus of Geographic Names® Online. -</figcaption>
                    </figure>
                  Third, “Visualizing Emancipation” introduced errors during its geotagging process. This process works by using an algorithm to match latitude and 
                  longitude coordinates with the placenames Perseus tagged in Dyer’s text. To do this, the algorithm searches an online database of placename coordinates, 
                  in this case, the Getty Thesaurus of Geographic Names® Online, which contains 4,100,000 placenames and their associated latitude and longitude.
                   The automated geotagging process could not identify every location in Dyer’s Compendium for multiple reasons. First, the Getty Thesaurus does not 
                   catalogue every location in Dyer’s Compendium; this is especially true for historical locations. For example, the 80th Illinois Infantry fought at 
                   “Blount’s plantation,” but Getty does not contain coordinates for Blount’s plantation. Second, some placenames have multiple locations, such as “Springfield.” 
                   If Dyer did not list a state or county, the algorithm does not know which “Springfield” to choose (or it may choose the wrong one). Lastly, Getty uses the 
                   coordinates of water feature’s starting point. If Dyer mentioned the “Mississippi River” when describing General Grant’s approach to Vicksburg, Mississippi,
                    the geotagging process may have mistakenly identified Grant’s approach at the Mississippi River’s starting point in northern Minnesota.
                     “Visualizing Emancipation” notes that their map of Union army “locations should be regarded as approximations subject to a number of caveats”
                      (described above) but does not disclose an error quality percentage. Despite these shortcomings, “Visualizing Emancipation” remains the very best 
                      map of the Union army’s wartime movements—no other map comes close in breadth or accuracy. The dataset contains 42,109 locations, only eighty-eight 
                      of which do not have latitude and longitude coordinates. I uploaded the dataset into Of Methods and Madness as is, without attempting to correct 
                      any inaccurate tagging or geotagging errors. Only a project dedicated to that task could do so properly.
                  </p>
                  <figure>
                      <img className = "data05" src = { Img6 } alt="Battle Data"></img><br></br>
                      <figcaption> A screenshot of the in-progress Vol. I: Battles database.</figcaption>
                    </figure>
                  <p className = "p3">
                  Incomplete dataset of Dyer’s Compendium, Vol. I: Battles
                  This dataset, spearheaded by myself and Scott Nesbit, illustrates the Union army’s violent engagements throughout the war, as derived from Volume I:
                   Battles of Dyer’s Compendium. This dataset’s collection and limitations are nearly identical to those described in the above section on Union army 
                   data; we used the same algorithm to identify placenames and latitude and longitude coordinates.
                  The dataset contains 12,181 violent engagements, 6,633 of which I have crosschecked latitude and longitude coordinates. 
                  </p>
                  <p className= "p3">
                  Geopolitical Boundaries, Demographic Data, and Transportation Networks 
                  This data delineates the country’s natural and man-made geographic features and provide statistical information useful for analyzing guerrilla war. 
                  Applicable datasets include 1860 county and state borders along with population and demographic statistics, courtesy of the National Historical 
                  Geographic Information System (NHGIS). The national 1861 railroad system comes courtesy of the University of Nebraska-Lincoln’s (UNL) “Railroads and 
                  the Making of Modern America” project. Nineteenth-century navigable river systems come courtesy of Vanderbilt University’s Jeremy Atack. All other
                   river systems come courtesy of Natural Earth, a “public domain map dataset.” Latitude and Longitude graticules also come from Natural Earth.
                  Latitude and Longitude coordinates for cities come from the Getty Thesaurus of Geographic Names® Online and Google Maps.
                  </p>
                  <p className = "p3">
                  Each of these datasets has its own set of limitations. The original source of consulted NHGIS data is the U.S. Census. U.S. Marshals conducted the 1860
                  census and sought to record accurate information as census data determined each state’s number of Congressional representatives. Still, the census ultimately
                   relied on humans collecting self-reported data. A tired marshal may have skipped certain neighborhoods and Americans may have disclosed vague or inaccurate 
                   answers. There is no way to calculate a percent error for the U.S. Census. County borders—drawn by U.S. geological survey teams—are much more reliable, 
                  although these borders changed during the war and OMAM does not account for such changes. 
                  </p>
                  <figure>
                      <img className = "data05" src = { Img7 } alt="NGHIS"></img><br></br>
                      <figcaption> A screenshot of NHGIS.org. </figcaption>
                    </figure>
                  <p className = "p3">
                  UNL’s process of “digitizing historical maps and capturing the [railroad] line data from them resulted in wide variation and inaccuracies.”
                   Historical maps “often contained never completed roads and projected lines and towns.” Consequently, UNL cross-referenced data from multiple source materials. 
                   However, these were usually drawn at different scales, making their integration problematic. To counter these difficulties, the research team created a 
                   five-step quality control process to ensure the most accurate representation of railroad lines possible. In addition, OMAM does not account for changes 
                   in the railroad system during the war—the miles of new track continually laid by railroad companies or both armies’ destruction of railroads for logistical 
                   purposes. (Notably, these challenges explain why OMAM’s map does not contain road systems. Although it would be possible to build a map of Civil War road
                  systems from sources such as The Official Military Atlas of the Civil War, 
                  only a separate research project solely focused on building such a map could do so accurately.) 
                  </p>
                  <figure>
                      <img className = "data05" src = { Img8 } alt="Railroads"></img><br></br>
                      <figcaption> A screenshot of UNL’s “Railroads and the Making of Modern America.” </figcaption>
                    </figure>
                  <p className = "p3">
                  Accurate representation of nineteenth-century river systems suffers from both natural and man-made changes to waterways over time. Floods, erosion, damming,
                   and straightening all altered the course of rivers since the Civil War. Jeremy Atack’s navigable river system pays particular attention to historical political
                    boundaries—usually influenced by natural barriers such as waterways—and rivers regularly navigated by steamboats throughout the nineteenth century. 
                    Atack’s river lines most likely depict waterways utilized by the Union and Confederate militaries. 
                  I consulted Natural Earth’s river data only when necessary (Natural Earth’s data represents a simplified and modern version of America’s river systems). 
                  </p>

              </body>
            </div>
        </div>
    )
}

export default Data;