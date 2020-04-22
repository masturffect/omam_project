import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import Backdrop from "./Methods_Image1.jpg"
import SideDB from "./Methods_Image2.jpg"
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
		<div className="Backdrop">
			<img src={Backdrop} alt="Backdrop" /> 
			<caption>OMAM’s “datafication” process.</caption>
		</div>
      <text>This section describes the datafication processes used in OMAM—transforming primary source material into database categories and subsequent map symbology. This procedure varied for each of the three elements depicted on OMAM’s digital map (the Union army, instances of guerrilla violence, and guerrillas’ domestic supply line). Most important in these descriptions are the decisions I made when converting primary source text to coded information in databases. Marrying historical source’s diverse psychological motives, controversial definitions, cryptic messages, and incomplete evidence with computer software’s calculated and rigid logic can feel like fitting a square peg in a round hole. Consequently, the historian who quantifies, measures, and maps subjective evidence introduces a new layer of human imperfection with each decision they make; how I datafied evidence and the information I chose to map versus the information I left unmapped says something about my own biases and desires. In disclosing these decisions, I hope to improve upon not only our interpretation of guerrilla warfare, but also our methods for collecting, preserving, and analyzing the past.

Using a CD-ROM version of the OR, I keyword-searched all 128 volumes using a list I created with the assistance of historians Matthew C. Hulbert, Patrick Lewis, and Joseph M. Beilein, Jr. That list is as follows, with the number of times each keyword appeared in the OR displayed in parentheses:
guerrilla (7,305)
guerilla (72)
guerrila (8)
irregular (1,663)
bushwhack (2,715)
jayhawk (391)
brigand (85)
bandit (102)
insurgent (725)
infest (714)
maraud (1,161)
southern sympathizer (55)
sympathizer (624)
disloyal (3,091)
aid and abet (19)
aiding (1,116)
aider (390)
abet (1,135)
harbor (5,765) 
It is important to note that keywords related to Frederick Dyer’s language for the Union’s tactics that were often irregular—scout (23,581); recon (13,017); expedition (19,277)—returned so many hits that only a separate project dedicated to mapping the Union’s company-level movements (and cross-checking Dyer’s Compendium to ensure no repeated information) could adequately map them. I did catalogue instances of these Union movements when they appeared in documents associated with the above list. 

I then began the two-step process of datafication. First, using physical volumes of the OR, I read the documents associated with these keyword searches. Next, I indexed any instances of guerrilla violence, civilian aid, or Union army activity, by necessarily manipulating that evidence to fit in a database. What follows is an explanation of that process and a screenshot of the actual database.

1. Because each document usually contained multiple instances of violence or aid, each row in the database represents one instance of violence, one instance of aiding guerrillas, or one instance of Union army activity.

2. Each row contains a unique identifier (‘uniqueid’), specific only to the OMAM dataset, for organizational purposes.

Due to the ambiguous and incomplete nature of historical records, I kept track of space and time in multiple ways:

3. Concerning time, sometimes an event occurred on a single day (categorized under ‘date’). Often, events happened over a span of several days, weeks, or even months (categorized by ‘start_date’ and ‘end_date’). Sometimes documents were less precise, simply stating “guerrillas have devastated this county,” without specifying when guerrillas did so (usually categorized with either a ‘start_date’ or ‘end_date,’ but not both).
 
4. Concerning space, sometimes a document detailed location down to the city-level (categorized by ‘city’ along with ‘lat’ and ‘long,’ short for latitude and longitude). More frequently, documents simply mentioned the county in which guerrillas operated (categorized by ‘county’ along with ‘county_lat’ and ‘county_long’). Other times, documents only described a region or mentioned a state (categorized by ‘place_descriptor’ and ‘state’). With the expertise of GeoScience and Computer Science students at Middle Tennessee State University, we devised several ways to visualize these gray areas in space—all symbolized with transparent geometry as opposed to solid points. These approximations included using a county’s central point for coordinates or creating rough lines or polygons where an event likely occurred. When drawing conclusions during analysis, I, of course, separated positively-identified coordinates from approximated ones. 
 
5. For latitudes and longitudes, I used the Getty Thesaurus of Geographic Names Online or Google Maps.
 
6. To describe what actually happened in each line of data, I used a simple classification system of ‘actor,’ ‘action,’ and ‘acted upon.’ For example, if a guerrilla shot and killed a member of the Union army, the actor is a guerrilla, the action is lethal violence, and the guerrilla acted upon the Union army. The ‘action’ column also has a sub column (‘action_sub1’) to include more descriptive information.
 
7. Lastly, there are columns for citation information and personal notes.

<img src={SideDB} alt="Database"/>   

Step six in this process—classifying primary evidence—determines how OMAM’s map will symbolize data, how much of that data can be accurately represented, and is also most susceptible to the historian imprinting their own biases onto the data. To address this crucial step, I will present my classification system in full, along with its known inadequacies.
The following visualization is organized as follows:
I. ACTOR
	A. ACTION
		1. ACTION_SUB
			i. ACTED_UPON

Categorization of Guerrilla Violence
I. Ugr or Cgr – reports of guerrilla activity (U = pro-Union, C = pro-Confederate)
	A. lethal – lethal violence against human(s)
		1. tactical – recognized military tactics (such raid, ambush)
		2. murder – assassination/hanging/execution
	B. nonlethal – nonlethal aggression against human(s)
		1. assault – includes physical harm
		2. threat – violent and nonviolent threats/intimidation
		3. prisoner – kidnap, hostage/prisoner taking
		4. guide – forced assistance
	C. propertyDamage – rob/destroy property
	D. terror – vague references to guerrilla activity (ex: “guerrilla infested the country”)
 			i. ua – guerrilla targets Union army
			ii. ca – Confederate army
 			iii. Ulocal – local representative of Union (Home Guard, militia, etc.)
			iv. civ – civilian

Categorization of Union Army Presence
II. ua or Ulocal – report on presence of Union army (ua = Union army; Ulocal = local representative of Union)
	A. service – no descriptor exists in OR
	B. [conventionalDescriptor] – same language used by Dyer (scout, raid, expedition, etc.)
		1. lethal – lethal violence against human(s)
		2. nonlethal – nonlethal aggression against human(s)
		3. capture – prisoner-taking 
	C. pacification – any action aimed at “eliminating the guerrilla’s base of support” 
		1. banish – remove from a city/military district/state
		2. incarcerate – arrest and/or imprison
		3. money – fine/issue bond/issue county assessment
		4. loyaltyOath – assess loyalty oath
		5. threat – violent and nonviolent threats/intimidation 
 		6. propertyDamage – rob/destroy nonhuman property
		7. humanTheft – removing blacks from property
		8. lethal – lethal violence against human(s)
			i. civ – target civilian(s)
			ii. Cgr – target guerrilla(s)

Categorization of Guerrillas’ Domestic Supply Line
III. civ – report on civilian activity
	A. aid – aiding/abetting/harboring guerrillas
		1. positive – civilian confession; Union troops find cache of weapons
		2. suspicion – Union suspects civilian of aid
	B. grKin – kin to guerrilla(s)
		1. positive – confessed
		2. suspicion – suspected/“known” through community intelligence
	C. sosym – southern sympathizer, disloyal, etc.
		1. positive – confessed
		2. suspicion – suspected/“known” through community intelligence
 
Difficulties in Assigning Descriptors
The descriptor combinations listed in the above table are the most common; however, others did exist. For example, on rare occasions, civilians killed other civilians. In this example, the actor is a civilian (civ), the action is lethal violence (lethal), and the civilian acted upon another civilian (civ). In these instances, the classification system’s flexibility encompassed the guerrilla conflict’s variety of violence. Still, the above combinations make up a vast majority of the OMAM database.
 
Other situations forced me to make a judgment call between descriptors. One of the hardest things to differentiate was guerrillas’ targets. There is a gray area between guerrillas targeting the Union army and guerrillas targeting civilians because of organized “strong-arm Union bands.” Unionist civilians composed these sometimes-sanctioned, sometimes-extralegal militia units. Historian Michael Fellman described them as “well-led ‘mobs’ … [that] killed and burned out” southern sympathizers and even overthrew “civic governments and circuit courts.” Often, guerrillas targeted such militia units as an extension of the Union army. The problem lies in deciding whether or not to classify members of such groups as the Union army or as a civilian—I chose to categorize situations in this gray area as guerrillas targeting civilians. This decision allows me to silence any accusations of being an apologist for guerrillas’ brutality. Guerrillas also targeted furloughed or discharged soldiers. I categorized these targets as the Union army. 
 
Similarly, it was difficult to distinguish a perpetrator of violence as a guerrilla versus a civilian because guerrilla bands were composed of, and supported by, civilians. They’re one and the same. Sometimes guerrilla bands sustained steady membership and obeyed designated leaders. We know a lot of these guerrillas’ names. Other times, civilians capitalized on the confusion of guerrilla war to wage personal vendettas or loot without actually taking to the bush for an extended period of time. This conundrum is part of guerrillas’ tactics to confuse their opponents; an army cannot destroy an unidentifiable enemy. As such, I relied on the primary document’s language to make this decision. If the Union army or civilians called perpetrators of violence guerrillas, I categorized them as guerrillas. If the Union army or civilians noted acts of violence or property destruction without naming a perpetrator, I categorized the perpetrator as a civilian. 
 
Another difficult choice was whether or not to classify a civilian as comprising part of guerrillas’ domestic supply line. It was often impossible to ascertain civilian’s genuine loyalties. (There is an entire subfield of Civil War history dedicated to this issue.) When guerrillas entered a community, local civilians responded in numerous ways; some were forced to give aid or information, others offered these things freely. Some lied about their true loyalties to ensure their survival; others stood up for their beliefs and paid the ultimate price. Some joined the guerrillas for the day and exacted personal vendettas against their neighbors; others assembled with the local Unionist militia and openly fought guerrillas. Most complied with the wishes of whatever power occupied their community at any given time—be it guerrillas or the Union army—and kept their mouths shut in order to save their family and farms. I chose to only “positively” condemn a civilian for assisting guerrillas if the Union army built a watertight case against a suspected abettor, complete with eyewitness testimony and/or confessions. This decision surely underestimates the number of civilians composing guerrillas’ domestic supply line, but does not exaggerate the guerrilla war’s extent. 

1. Robert R. Mackey, The Uncivil War: Irregular Warfare in the Upper South, 1861-1865 (Norman: University of Oklahoma Press, 2005), 13-14. Mackey’s work is one of the most useful for delineating definitions for guerrilla activity. 
2. Fellman, Inside War, 238.
3. Many can be found in, J. C. Eakin and D. R. Hale, Branded as Rebels: A List of Bushwhackers, Guerrillas, Partisan Rangers, Confederates and Southern Sympathizers from Missouri During the War Years. (Lee’s Summit, Missouri, 1995). In addition, Richard Brownlee’s Gray Ghosts of the Confederacy includes an appendix of “known members of Quantrill’s, Anderson’s and Todd’s guerrillas.” The list includes 340 names and when the guerrillas died. See, Richard Brownlee, Gray Ghosts of the Confederacy: Guerrilla Warfare in the West, 1861-1865 (Baton Rouge: Louisiana State University Press, 1958), 253-261.
4. Michael Fellman provides an excellent examination of this phenomenon, which he calls “survival lying.” See Fellman, Inside War, 58, 264, 49-52, 195, 228.

        </text>  
            <h1>Our methods!</h1>
        </div>
    )
}

export default Methods;