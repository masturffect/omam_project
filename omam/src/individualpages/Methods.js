import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import Backdrop from "../photos/Methods_Image1.jpg"
import SideDB from "../photos/Methods_Image2.jpg"
import './Methods.css'

function Methods(){
    return(
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
	  		<h1 className='header'> Methods</h1>
			<img className="Backdrop" src={Backdrop} alt="Backdrop" /> 
			<figcaption className="c1">OMAM’s “datafication” process.</figcaption>

			<p className="p1">
				This section describes the datafication processes used in OMAM—transforming 
		    	primary source material into database categories and subsequent map symbology. 
				This procedure varied for each of the three elements depicted on OMAM’s digital map 
				(the Union army, instances of guerrilla violence, and guerrillas’ domestic supply line). 
				Most important in these descriptions are the decisions I made when converting primary 
				source text to coded information in databases. Marrying historical source’s diverse 
				psychological motives, controversial definitions, cryptic messages, and incomplete 
				evidence with computer software’s calculated and rigid logic can feel like fitting a 
				square peg in a round hole. Consequently, the historian who quantifies, measures, and 
				maps subjective evidence introduces a new layer of human imperfection with each decision 
				they make; how I datafied evidence and the information I chose to map versus the 
				information I left unmapped says something about my own biases and desires. In disclosing 
				these decisions, I hope to improve upon not only our interpretation of guerrilla warfare, 
				but also our methods for collecting, preserving, and analyzing the past.
			</p>
			<p className="p1">
				Using a CD-ROM version of the OR, I keyword-searched all 128 volumes using a list I 
				created with the assistance of historians Matthew C. Hulbert, Patrick Lewis, and 
				Joseph M. Beilein, Jr. That list is as follows, with the number of times each keyword 
				appeared in the OR displayed in parentheses:
			</p>
			<p className="column">
				guerrilla(7,305)
				guerilla(72)
				guerrila(8)
				irregular(1,663)
				bushwhack(2,715)
				jayhawk(391)
				brigand(85)
				bandit(102)
				insurgent(725)
				infest(714)
				maraud(1,161)
				southern_sympathizer(55)
				sympathizer(624)
				disloyal(3,091)
				aid_and_abet(19)
				aiding(1,116)
				aider(390)
				abet(1,135)
				harbor(5,765) 
			</p>
			<p className="p1">
				It is important to note that keywords related to Frederick Dyer’s language for the Union’s 
				tactics that were often irregular—scout (23,581); recon (13,017); expedition (19,277)—returned 
				so many hits that only a separate project dedicated to mapping the Union’s company-level 
				movements (and cross-checking Dyer’s Compendium to ensure no repeated information) could 
				adequately map them. I did catalogue instances of these Union movements when they appeared 
				in documents associated with the above list. 
			</p>
			<p className="p1">
				I then began the two-step process of datafication. First, using physical volumes of the OR, 
				I read the documents associated with these keyword searches. Next, I indexed any instances 
				of guerrilla violence, civilian aid, or Union army activity, by necessarily manipulating that 
				evidence to fit in a database. What follows is an explanation of that process and a screenshot 
				of the actual database.
			<ol className="p2">
				1. Because each document usually contained multiple instances of violence or aid, each row in the database represents one instance of violence, one instance of aiding guerrillas, or one instance of Union army activity.
			</ol><br></br>
			<ol className="p2">
				2. Each row contains a unique identifier (‘uniqueid’), specific only to the OMAM dataset, for organizational purposes.
			</ol><br></br>
			<text>
				Due to the ambiguous and incomplete nature of historical records, I kept track of space and time in multiple ways:
			</text><br></br>
			<ol className="p2">
				3. Concerning time, sometimes an event occurred on a single day (categorized under ‘date’). Often, events happened over a span of several days, weeks, or even months (categorized by ‘start_date’ and ‘end_date’). Sometimes documents were less precise, simply stating “guerrillas have devastated this county,” without specifying when guerrillas did so (usually categorized with either a ‘start_date’ or ‘end_date,’ but not both).
			</ol><br></br>
			<ol className="p2">
				4. Concerning space, sometimes a document detailed location down to the city-level (categorized by ‘city’ along with ‘lat’ and ‘long,’ short for latitude and longitude). More frequently, documents simply mentioned the county in which guerrillas operated (categorized by ‘county’ along with ‘county_lat’ and ‘county_long’). Other times, documents only described a region or mentioned a state (categorized by ‘place_descriptor’ and ‘state’). With the expertise of GeoScience and Computer Science students at Middle Tennessee State University, we devised several ways to visualize these gray areas in space—all symbolized with transparent geometry as opposed to solid points. These approximations included using a county’s central point for coordinates or creating rough lines or polygons where an event likely occurred. When drawing conclusions during analysis, I, of course, separated positively-identified coordinates from approximated ones.
			</ol><br></br>
			<ol className="p2">
				5. For latitudes and longitudes, I used the Getty Thesaurus of Geographic Names Online or Google Maps.
			</ol><br></br>
			<ol className="p2">
				6. To describe what actually happened in each line of data, I used a simple classification system of ‘actor,’ ‘action,’ and ‘acted upon.’ For example, if a guerrilla shot and killed a member of the Union army, the actor is a guerrilla, the action is lethal violence, and the guerrilla acted upon the Union army. The ‘action’ column also has a sub column (‘action_sub1’) to include more descriptive information.
			</ol><br></br>
			<ol className="p2">
				7. Lastly, there are columns for citation information and personal notes.
			</ol><br></br>
			</p>
			<figure>
			<img className = "data05" src = { SideDB } alt="Database"></img><br></br>
                      <figcaption> A screenshot of OMAM's database. </figcaption>
            </figure>
			<p className="p1">
				Step six in this process—classifying primary evidence—determines how OMAM’s map will symbolize data, how much of that data can be accurately represented, and is also most susceptible to the historian imprinting their own biases onto the data. To address this crucial step, I will present my classification system in full, along with its known inadequacies.
				<br></br>
				The following visualization is organized as follows:
			</p>
			<p className="p2">
				I. ACTOR
				<p className="p2">
					A. ACTION
					<p className="p2">
						1. ACTION_SUB
						<p className="p2">
							i. ACTION_UPON
						</p>
					</p>
				</p>
			</p>
			<p className="p2">
				<em>Categorization of Guerilla Violence</em>
			</p>
			<p className="p2">
				I.<b>Ugr</b> or <b>Cgr</b> – reports of guerrilla activity (U = pro-Union, C = pro-Confederate)
			
				<p className="p2">
					A. <b>lethal</b> – lethal violence against human(s)
					<p className="p2">
						1.<b>tactical</b> – recognized military tactics (such raid, ambush)
					</p>
					<p className="p2">
						2. <b>murder</b> – assassination/hanging/execution
					</p>
				</p>
				<p className="p2">
					B. <b>nonlethal</b> – nonlethal aggression against human(s)
					<p className="p2">
						1. <b>assault</b> - includes physical harm
					</p>
					<p className="p2">
						2. <b>threat</b> - violent and nonviolent threats/intimidation
					</p>
					<p className="p2">
						3. <b>prisoner</b> - kidnap, hostage/prisoner taking
					</p>
					<p className="p2">
						4. <b>guide</b> - forced assistance
					</p>
				</p>
				<p className="p2">
					C. <b>propertyDamage</b> - rob/destory property
				</p>
				<p className="p2">
					D. <b>terror</b> - vague references to guerrilla activity (ex: “guerrilla infested the country”)
					<p className="p2">
						<p className="p2">
							i. <b>ua</b> - guerrilla targets Union army
						</p>
						<p className="p2">
							ii. <b>cs</b> - Confederate army
						</p>
						<p className="p2">
							iii. <b>Ulocal</b> - local representative of Union (Home Guard, militia, etc.)
						</p>
						<p className="p2">
							iv. <b>civ</b> - civilian
						</p>
					</p>
				</p>
			</p>
			<p className="p2">
				<em>Categorization of Union Army Presence</em>
			</p>
			<p className="p2">
				II. <b>ua</b> or <b>Ulocal</b> - report on presence of Union army (ua = Union army; Ulocal = local representative of Union)
				<p className="p2">
					A. <b>service</b> - no descriptor exists in OR
				</p>
				<p className="p2">
					B. <b>[conventionalDescriptor]</b> - same language used by Dyer (scout, raid, expedition, etc.)
					<p className="p2">
						1. <b>lethal</b> - lethal violence against human(s)
					</p>
					<p className="p2">
						2. <b>nonlethal</b> - nonlethal aggression against human(s)
					</p>
					<p className="p2">
						3. <b>capture</b> - prisoner-taking
					</p>
				</p>
				<p className="p2">
					C. <b>pacification</b> - any action aimed at “eliminating the guerrilla’s base of support”<a href="#foot1">[1]</a>
					<p className="p2">
						1. <b>banish</b> - remove from a city/military district/state
					</p>
					<p className="p2">
						2. <b>incarcerate</b> - arrest and/or imprision
					</p>
					<p className="p2">
						3. <b>money</b> - fine/issue bond/issue county assessment
					</p>
					<p className="p2">
						4. <b>loyaltyOath</b> - assess loyalty oath
					</p>
					<p className="p2">
						5. <b>threat</b> - violent and nonviolent threats/intimidation 
					</p>
					<p className="p2">
						6. <b>propertyDamage</b> - rob/destroy nonhuman property
					</p>
					<p className="p2">
						7. <b>humanTheft</b> - removing blacks from property
					</p>
					<p className="p2">
						8. <b>lethal</b> - lethal violence against human(s)
						<p className="p2">
							<p className="p2">
								i. <b>civ</b> - target civilian(s)
							</p>
							<p className="p2">
								ii. <b>Cgr</b> - target guerilla(s)
							</p>
						</p>
					</p>
				</p>
			</p>
			<p className="p2">
				<em>Categorization of Guerrillas’ Domestic Supply Line</em>
			</p>
			<p className="p2">
				III. <b>civ</b> - report on civilian activity
				<p className="p2">
					A. <b>aid</b> - aiding/abetting/harboring guerrillas
					<p className="p2">
						1. <b>positive</b> - civilian confession; Union troops find cache of weapons
					</p>
					<p className="p2">
						2. <b>suspicion</b> - Union suspects civilian of aid
					</p>
				</p>
				<p className="p2">
					B. <b>grKin</b> - kin to guerrilla(s)
					<p className="p2">
						1. <b>positive</b> - confessed
					</p>
					<p className="p2">
						2. <b>suspicion</b> - suspected/“known” through community intelligence
					</p>
				</p>
				<p className="p2">
					C. <b>sosym</b> - southern sympathizer, disloyal, etc.
					<p className="p2">
						1. <b>positive</b> - confessed
					</p>
					<p className="p2">
						2. <b>suspicion</b> - suspected/“known” through community intelligence
					</p>
				</p>
			</p>
			<p className="p2">
				<em>Difficulties in Assigning Descriptors</em>
			</p><br></br>
			<p className="p2">
				The descriptor combinations listed in the above table are the most common; however, others did exist. For example, on rare occasions, civilians killed other civilians. In this example, the actor is a civilian (civ), the action is lethal violence (lethal), and the civilian acted upon another civilian (civ). In these instances, the classification system’s flexibility encompassed the guerrilla conflict’s variety of violence. Still, the above combinations make up a vast majority of the OMAM database.
			</p>
			<p className="p2">
				Other situations forced me to make a judgment call between descriptors. One of the hardest things to differentiate was guerrillas’ targets. There is a gray area between guerrillas targeting the Union army and guerrillas targeting civilians because of organized “strong-arm Union bands.” Unionist civilians composed these sometimes-sanctioned, sometimes-extralegal militia units. Historian Michael Fellman described them as “well-led ‘mobs’ … [that] killed and burned out” southern sympathizers and even overthrew “civic governments and circuit courts.” Often, guerrillas targeted such militia units as an extension of the Union army. The problem lies in deciding whether or not to classify members of such groups as the Union army or as a civilian—I chose to categorize situations in this gray area as guerrillas targeting civilians. This decision allows me to silence any accusations of being an apologist for guerrillas’ brutality. Guerrillas also targeted furloughed or discharged soldiers. I categorized these targets as the Union army.<a href="#foot2">[2]</a>
			</p>
			<p className="p2">
			Similarly, it was difficult to distinguish a perpetrator of violence as a guerrilla versus a civilian because guerrilla bands were composed of, and supported by, civilians. They’re one and the same. Sometimes guerrilla bands sustained steady membership and obeyed designated leaders. We know a lot of these guerrillas’ names. Other times, civilians capitalized on the confusion of guerrilla war to wage personal vendettas or loot without actually taking to the bush for an extended period of time. This conundrum is part of guerrillas’ tactics to confuse their opponents; an army cannot destroy an unidentifiable enemy. As such, I relied on the primary document’s language to make this decision. If the Union army or civilians called perpetrators of violence guerrillas, I categorized them as guerrillas. 
			</p>
			<p className="p2">
			If the Union army or civilians noted acts of violence or property destruction without naming a perpetrator, I categorized the perpetrator as a civilian. <a href="#foot3">[3]</a>
			</p>
			<p className="p2">
			Another difficult choice was whether or not to classify a civilian as comprising part of guerrillas’ domestic supply line. It was often impossible to ascertain civilian’s genuine loyalties. (There is an entire subfield of Civil War history dedicated to this issue.) When guerrillas entered a community, local civilians responded in numerous ways; some were forced to give aid or information, others offered these things freely. Some lied about their true loyalties to ensure their survival; others stood up for their beliefs and paid the ultimate price. Some joined the guerrillas for the day and exacted personal vendettas against their neighbors; others assembled with the local Unionist militia and openly fought guerrillas. Most complied with the wishes of whatever power occupied their community at any given time—be it guerrillas or the Union army—and kept their mouths shut in order to save their family and farms. I chose to only “positively” condemn a civilian for assisting guerrillas if the Union army built a watertight case against a suspected abettor, complete with eyewitness testimony and/or confessions. This decision surely underestimates the number of civilians composing guerrillas’ domestic supply line, but does not exaggerate the guerrilla war’s extent.<a href="#foot4">[4]</a>
			</p>

			<hr></hr>
			<p id="foot1">
				1. Robert R. Mackey, The Uncivil War: Irregular Warfare in the Upper South, 1861-1865 (Norman: University of Oklahoma Press, 2005), 13-14. Mackey’s work is one of the most useful for delineating definitions for guerrilla activity. 
			</p>
			<p id="foot2">
				2. Fellman, Inside War, 238.
			</p>
			<p id="foot3">
				3. If the Union army or civilians noted acts of violence or property destruction without naming a perpetrator, I categorized the perpetrator as a civilian. 
			</p>
			<p id="foot4">
				4. Michael Fellman provides an excellent examination of this phenomenon, which he calls “survival lying.” See Fellman, Inside War, 58, 264, 49-52, 195, 228.
			</p>
			<br></br>
			<br></br>

        </div>
    )
}

export default Methods;