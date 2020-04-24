import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import './Citation.css';

function Citation(){
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
            <h className = "header1"> References and Resources!</h>
           
          <p className = "type1">
              Four of my publications reference source material and statistics from this project’s digital database: 
            </p>
            <p className = "publication">
            [1] Andrew Fialka, "Federal Eyes: How the Union Saw Kentucky's Civil War," Ohio Valley History 18, no. 3 (Fall 2018): 6-25.
            </p>
            <p className = "publication">
            [2] Andrew Fialka, "Guerrillas in the Archive: Kentucky's Irregular War through the Governor's Eyes,"
            Register of the Kentucky Historical Society 116, no. 2 (Spring 2018): 209-236.
            </p>
            <p className = "publication">
            [3] Andrew Fialka, “A Spatial Approach to Civil War Missouri’s Domestic Supply Line,” in Guerrilla
            Hunters: Irregular Conflicts during the Civil War, <br></br><p className = "pub2"> Barton A. Myers & Brian D. McKnight, eds. 
            (Baton Rouge: Louisiana State University Press, 2017). </p>
            </p>
            <p className = "publication">
            [4] Andrew Fialka, “Controlled Chaos: Spatiotemporal Patterns within Missouri’s Irregular Civil War,”
            in The Civil War Guerrilla: Unfolding the Black Flag in History, <br></br><p className = "pub2"> BMemory, and Myth, Joseph Beilein, 
            Jr. & Matthew C. Hulbert, eds. (Lexington: University of Kentucky Press, 2015). </p>
            </p>
            <p className = "type1">
            In the latest three publications (“Federal Eyes,” “Guerrillas in the Archive,” 
            and “A Spatial Approach to Civil War Missouri’s Domestic Supply Line”), all footnotes 
            that reference events in the OMAM database also include the original citation information 
            associated with said events. For a complete breakdown of statistics derived from the database 
            used in all three of these publications, see 
            <a href ="https://usg.maps.arcgis.com/apps/MapJournal/index.html?appid=ad48876255b2414abc0ffa3756bdf8ed">“Methods,” Of Methods and Madness (Version 3.0). </a>
            </p>
            <p className = "type1"> 
            As noted in the Project History section of this site, my earliest publication (“Controlled Chaos”) 
            contains imperfect citations as I wrestled with how to cite a changing digital database in non-changing text. 
            Multiple footnotes in that chapter do not include original citation information, forcing readers to visit the 
            <a href = "https://usg.maps.arcgis.com/home/webmap/viewer.html?webmap=9fed23d6e8cb42ccbf4bf6d0a2910fc3">Interactive Map from Of Methods and Madness (Version 3.0) </a>in conjunction with the text to locate said information.
            </p>
            <p className = "type1">
            All four of these publications stem from my dissertation and master’s thesis:
            </p>
            <p className = "publication">
            Andrew Fialka, “Of Methods and Madness: A Spatial History Approach to the Civil War’s Guerrilla Violence” (Ph.D diss., University of Georgia, 2018).
            </p>
            <p className = "publication">
            Andrew Fialka, “Reassessing Guerrillas: A Spatial and Temporal Analysis of Missouri’s Civil War” (Master’s thesis, West Virginia University, 2013).

            </p>
        </div>
    )
}

export default Citation;