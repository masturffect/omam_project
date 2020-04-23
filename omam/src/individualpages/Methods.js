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
			<li className="p2">
				1. Because each document usually contained multiple instances of violence or aid, each row in the database represents one instance of violence, one instance of aiding guerrillas, or one instance of Union army activity.
			</li><p></p>
			<li className="p2">
				2. Each row contains a unique identifier (‘uniqueid’), specific only to the OMAM dataset, for organizational purposes.
			</li>
			<text>
				Due to the ambiguous and incomplete nature of historical records, I kept track of space and time in multiple ways:
			</text>
			<li className="p2">
				3. Concerning time, sometimes an event occurred on a single day (categorized under ‘date’). Often, events happened over a span of several days, weeks, or even months (categorized by ‘start_date’ and ‘end_date’). Sometimes documents were less precise, simply stating “guerrillas have devastated this county,” without specifying when guerrillas did so (usually categorized with either a ‘start_date’ or ‘end_date,’ but not both).
			</li>
			<li className="p2">
				4. Concerning space, sometimes a document detailed location down to the city-level (categorized by ‘city’ along with ‘lat’ and ‘long,’ short for latitude and longitude). More frequently, documents simply mentioned the county in which guerrillas operated (categorized by ‘county’ along with ‘county_lat’ and ‘county_long’). Other times, documents only described a region or mentioned a state (categorized by ‘place_descriptor’ and ‘state’). With the expertise of GeoScience and Computer Science students at Middle Tennessee State University, we devised several ways to visualize these gray areas in space—all symbolized with transparent geometry as opposed to solid points. These approximations included using a county’s central point for coordinates or creating rough lines or polygons where an event likely occurred. When drawing conclusions during analysis, I, of course, separated positively-identified coordinates from approximated ones.
			</li>
			<li className="p2">
				5. For latitudes and longitudes, I used the Getty Thesaurus of Geographic Names Online or Google Maps.
			</li>
			<li className="p2">
				6. To describe what actually happened in each line of data, I used a simple classification system of ‘actor,’ ‘action,’ and ‘acted upon.’ For example, if a guerrilla shot and killed a member of the Union army, the actor is a guerrilla, the action is lethal violence, and the guerrilla acted upon the Union army. The ‘action’ column also has a sub column (‘action_sub1’) to include more descriptive information.
			</li>
			<li className="p2">
				7. Lastly, there are columns for citation information and personal notes.
			</li>
			</p>
			<figure>
			<img className = "data05" src = { SideDB } alt="Database"></img><br></br>
                      <figcaption> A screenshot of OMAM's database. </figcaption>
            </figure>
			
			<hr></hr>
        </div>
    )
}

export default Methods;