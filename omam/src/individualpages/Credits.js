import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import './Credits.css'


function Credits(){
    return(
        <div>
        <Link to ='/'>
          <Button
            onClick = {() => {
              console.log("You clicked me");
            }}
            type="button"
            buttonStyle="btn--home"
            buttonSize="btn--large"
            >HOME
          </Button>
      </Link>
            <h1 className = "header">Credits, Contributors, and Builders</h1>
            <div>
              <p className = "p3">
              The current version of the project (4.0) is under construction at Middle Tennessee State University using a kaleidoscope of funding,
               student labor, and ITD support.
              </p>
              <p className = "p3">
              Necessary funding comes from the Tennessee Civil War National Heritage Area. These funds paid a GeoScience graduate student and Computer Science 
              undergraduate to oversee project development. Additionally, 
              funding went to host the project’s website and database on MTSU server space.
              </p>
              <p className = "p3">
              Ian Rust (MTSU Computer Science undergraduate student) developed the interactive map and site using ArcGIS javascript API and continues to 
              oversee connecting backend data to frontend visualization on the web.  
              </p>
              <p className = "p3">
              Brandon Sadley (MTSU GeoScience graduate student) assisted in designing and converting geometry types in the project database, 
              built the project base map from the Civil War Military Atlas, and assisted in spatial analyses. 
              </p>
              <p className = "p3">
              The project also utilizes undergraduate labor in conjunction with the MTSU Computer Science department’s required class CSCI 4700/5700 – Software Engineering, 
              taught by Dr. Medha Sarkar. Students received class credit to work on the project’s database design and website development. Contributors from Spring 2020 included
              Sam Hollingsworth, Paul Myers, Andrew Bowman,
              Girgis Shihataa, Ian Seal, and Cruz Jean. Contributors from Fall 2019 included Ian Rust, Ryan Butler, Ebosehon Imeokparia, and Sai Manoj Nelavalli. 
              </p>
              <p className = "p3">
              I would like to thank the following for helping me develop the project’s database and hosting design: 
              Henrique Momm, Jeremy Aber, Alan Franklin, Jimmy Williams, and Michael Barton.
              </p>
              <p className = "p3">
              The project is hosted on MTSU’s server using a virtual machine. It utilizes Microsoft SQL Server 2019, Windows Server OS, and ArcGIS for Server.
              </p>
              <p className = "p3">
              The project is dually-hosted by the Information Technology Outreach Services group at the Carl Vinson Institute of the University of Georgia. Of Methods and Madness is powered by the ESRI suite of software products, especially ArcGIS. The project is presented with the support of
               the Willson Center for Humanities and the Arts at the University of Georgia, in affiliation with the Center for Virtual History. 
              </p>
              <p className = "p3">
              Of Methods and Madness logo designed and created by Rob Bratney.
              </p>
              <p className = "p3">
              Previous Versions<br></br>
              Version 3.0 of the project culminated at the University of Georgia under research assistantships with Stephen Berry and Scott Nesbit. 
              The project received necessary funding from a Willson Center Graduate Research Award, Willson Center Special Funding Award, UGA Graduate School 
              Dean’s Award, Gregory Graduate Research Award, Filson Historical Society Research Fellowship, Kentucky Historical Society Research Fellowship, 
              and Horace Montgomery Graduate Fellowship. Additionally, UGA's history department provided a licensed version of ArcGIS which I used to build
               the mapping component of the project. 
              Version 3.0 is built with ESRI’s StoryMap software on ArcGIS Online.  
              </p>
              <p className = "p3">
              Versions 1.0 and 2.0 of the project culminated at West Virginia University. WVU’s history department provided funding for a research trip to Columbia, Missouri, incorporated Geographic Information Systems coursework into their department’s bylaws, 
              and recognized a partly-digital Master’s thesis as legitimate for degree completion. 
              </p>


            </div>
        </div>
    )
}

export default Credits;