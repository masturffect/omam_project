import React from 'react'
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import {Hist1} from '../photos/History_01.jpg'
import {Hist2} from '../photos/Version2Screenshot.jpg'
import {Hist3} from '../photos/Version3Screenshot.jpg'
import "./History.css"

function History(){
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

        <h1 className='header'>Project History</h1>
        <p className="p2">
          This website represents version 4.0 of the project. I built versions 1.0 through 3.0 under trying conditions—two worth mentioning here. First, I enrolled in one GIS class as a master’s student, but the rest of my knowledge concerning the necessary technology for this project came almost exclusively from YouTube tutorials. Second, all of the grants I won as a graduate student contributed to research trips, meaning I built all of the project websites by myself with no money or proper training.<a href="#footer1">[1]</a>  (Excellent open-source software for building websites exists, but we all know free isn’t free—they come with harsh limitations, especially for a historian trying to adapt technology built with a different disciplines’ needs in mind.) 
        </p>
        <p className="p2">
          Below are descriptions of each version of the project, with links to those projects, themselves.
        </p>
        <text className="p2">
          <em>Version 1.0</em>
        </text><br></br>
        <p className="p2">
          Version 1.0, built as a master’s student at West Virginia University, was a disaster. I took the Geography Department’s entry-level class on ArcGIS, then ditched that software entirely after realizing its time function was a bit clunky. This was a huge mistake. As I learned years later from the University of Georgia’s GIS Librarian, Meagan Duever, “time is hard.” Truth. I soon learned that no digital mapping platform has a less-than-clunky time function. 
        </p>
        <p className="p2">
          I decided to learn a new piece of software—Neatline, a plug-in for Omeka, which is a “free, flexible, and open source web-publishing platform”—with no training, while simultaneously undergoing the data entry process, a semester before I was slated to defend my thesis, with a broken laptop and no money to replace it.<a href="#footer2">[2]</a>
        </p>
        <p className="p2">
          To be sure, someone experienced with Neatline and/or Omeka will probably be able to offer easy solutions to the following problems. I am certain most, if not all, of these issues resulted from operator error. Still, this proves my initial point about trying conditions: any history graduate student trying to learn multiple software platforms in addition to their coursework, research, and writing loads will inevitably face similar circumstances. 
        </p>
        <p className="p2">
          A comedy of errors ensued. At the time (2013), Omeka either only ran, or best ran, I can’t remember which, on a Linux operating system. I had no suitable computer, and the WVU geography lab’s computers ran on Windows. Just to access Neatline, I had to alter the boot sequence of the geography lab’s computers to read from their USB port, then booted them from an external hard drive loaded with a Linux operating system (which took me two days to install with help from a local bassist I played music with who happened to have a Computer Science degree). This workaround sufficiently allowed me to pair the geography lab’s computers with Neatline’s necessary operating system, but drastically reduced the computer’s processing speed. As a result, inputting mass quantities of evidence into Neatline became painstakingly slow as the program constantly crashed. 
        </p>
        <p className="p2">
          Then there were the plug-ins. So many plug-ins (Neatline itself being a plug-in). And each plug-in layered another set of limitations on visualizing the project’s data. For example, the ‘CSV Import’ plug-in enabled me to upload data contained in Excel spreadsheets, but utilized Dublin Core standards for data categorization, which seriously hampered my ability to include historical nuance and ambiguity.<a href="#footer3">[3]</a>  A ‘Neatline Maps’ plug-in was necessary to display useful indicators such as county lines, topographic identifiers, and historical demarcations. Alas, I never did figure out how to wed downloaded shapefiles of historic transportation networks—such as the 1861 railroad system—with this plug-in. Consequently, my analysis suffered (guerrillas frequently attacked the Union army’s logistics network). 
        </p>
        <figure>
          <img src = { Hist1 } alt="Thesis Data"></img><br></br>
          <figcaption> A screenshot of my MA thesis data displayed in Neatline.” </figcaption>
        </figure>
        <p className="p2">
          Most importantly, I could not simultaneously view or edit large quantities of inputted information through an attribute table. The data for each event on the map was organized and accessible separately, meaning I had to make sweeping analyses and changes one case at a time (for example, if I wanted to change the symbology for Union occupational forces on the map from a red square to a blue triangle, I had to do so one point at a time, hundreds of times). 
        </p>
        <p className="p2">
          The result of all this? Most embarrassingly, my master’s thesis contains dozens of footnotes with broken links referencing a Neatline project that was never publically-accessible and no longer exists. This is professionally unacceptable and I’ve had to live with that. But I did learn the hard way that ArcGIS—clunky time function and all—was the most powerful spatial analytics program available to me. 
        </p>
        <text className="p2">
          <em>Version 2.0</em>
        </text><br></br>
        <figure>
          <img src = { Hist2 } alt="Version 2 Screenshot"></img><br></br>
        </figure>
        <p className="p2">
          Despite its many flaws, I presented this project at multiple academic conferences and word about my spatial methodology and its resulting conclusions confirmed some of the more qualitative arguments coming from my colleagues in the Civil War guerrilla field. Joseph M. Beilein, Jr. and Matthew C. Hulbert approached me about publishing my findings in an upcoming edited collection.
        </p>
        <p className="p2">
          While the text that became my chapter in Beilein & Hulbert’s Civil War Guerrilla (2015) went through the history profession’s normal peer-review processes, those processes did not (and still do not) exist for digital history projects. Therefore, the publication of partly-textual, partly-digital scholarship brought about an awkward problem: how to cite a changing digital database in non-changing text? Historians must be transparent by showing the source material that led to their conclusions, but this project’s source material was organized in a dynamic database that still didn’t have a home online. 
        </p>
        <p className="p2">
          I opted to convert my project’s Neatline component back into ArcGIS and publish my data in a free website using ArcGIS Online—a cloud-based service for hosting interactive maps (an explanation of how to access that data is described in Version 3.0).<a href="#footer4">[4]</a>  At nearly the same time, I was fortunate enough to be accepted into the University of Georgia’s PhD program, where I lucked upon a home for this new, ArcGIS Online website: UGA’s Center for Virtual History. 
        </p>
        <p className="p2">
          The result was less than perfect (from footnotes in my chapter from Civil War Guerrilla): “Citations … [from Version 1.0] refer to material from Neatline databases that are part of my master’s thesis, Fialka, “Reassessing Guerrillas”; the URLs are item identifiers, not publicly accessible website addresses. These materials will be made publically available at … the University of Georgia’s Center for Virtual History[, which] currently hosts an expanding version of the datasets and maps used in this essay.”<a href="#footer5">[5]</a>  The “materials” referenced in those footnotes are located at the Version 2.0 link. 
        </p>
        <p className="p2">
          Ultimately, Version 2.0 was quick and dirty—its existence rushed by my desire to take advantage of a publication opportunity (a huge boost on the increasingly competitive job market) and to meet my profession’s standards of transparency. I committed myself to building a proper website as soon as possible.
        </p>
        <figure>
          <img src = { Hist3 } alt="Version 3 Screenshot"></img><br></br>
        </figure>
        <p className="p2">
          While a PhD student at UGA, I revamped the OMAM website built using ArcGIS Online into the StoryMap link above. Version 3.0 was an improvement on numerous levels: the text encompassed updated conclusions from my dissertation research, the site displayed several static maps exported from ArcGIS that visualized my conclusions in a clear way, my data and research methods were laid bare in their most transparent form ever, and the database was publically-accessible. 
        </p>
        <p className="p2">
        Two flaws remained. First, while the text and static maps reflected conclusions from my dissertation research (mostly conducted in Kentucky), the Interactive Map still only includes information from my master’s thesis. I chose not to rebuild an interactive map until I could do so properly—with grant money to hire Computer Science and GeoScience expertise. 
        </p>
        <p className="p2">
        Second, while the database from my master’s thesis was publically-accessible, actually doing this was still wrought with difficulties. In order to have the database truly available in a user-friendly way, I would have to allow the user to direct download the Excel file where I conduct data entry. I do not want to do this for professional reasons: I am still updating said database and building a career by drawing conclusions from it. As a junior faculty member, I cannot afford to allow a senior faculty member access to my research, as they may be able to publish conclusions from it before I can. Instead, I allow the user to view the database within the Interactive Map’s menu. Directions to do so are displayed in the YouTube tutorial posted on the website. In addition, there are step-by-step instructions in this footnote. <a href="footer6">[6]</a>
        </p>

        <hr></hr>
        <p id="footer1" className="p2">
          [1] There are three major exceptions. First, eHistory works closely with David Holcomb of the Information Technology Outreach Services group at the Carl Vinson Institute of the University of Georgia. Because of my association with eHistory, I was able to reach out to David for help on many occasions, especially regarding ArcGIS Online. Second, I hired Brandon Adams—Senior GIS Technician at the University of Georgia’s Center for Geospatial Research—for GIS tutoring using funds from the Horace Montgomery fellowship in 2015. Last, I took a research seminar while at UGA entitled History, Mapping, and Spatial Analysis. While the course represented an eight-week version of the entry-level GIS course I took at WVU, I spent the second eight weeks of the course learning valuable information from the course’s professor: Dr. Sergio Bernardes (also employed with UGA’s Center for Geospatial Research). My sincerest thanks to all these men. 
        </p>
        <p id="footer2" className="p2">
          [2] George Mason University, “Roy Rosenzweig Center for History and New Media,” http://omeka.org/ (accessed March 22, 2020).
        </p>
        <p id="footer3" className="p2">
          [3] For more information on Dublin Core standards, see, University of Tsukuba, Japan, “Dublin Core Metadata Initiative,” http://dublincore.org/ (accessed March 22, 2020).
        </p>
        <p id="footer4" className="p2">
          [4] For more info, see ESRI, “ArcGIS Online,” https://www.esri.com/en-us/arcgis/products/arcgis-online/overview (accesses March 22, 2020). 
        </p>
        <p id="footer5" className="p2">
          [5] Footnotes 61 and 63 from Andrew Fialka, “Controlled Chaos: Spatiotemporal Patterns within Missouri’s Irregular Civil War,” in The Civil War Guerrilla: Unfolding the Black Flag in History, Memory, and Myth, Joseph Beilein, Jr. & Matthew C. Hulbert, eds. (Lexington: University of Kentucky Press, 2015), 61, 64.
        </p>
        <p id="footer6" className="p2">
          [6] 1) follow the link to ‘Interactive Map with Accessible Database’; 2) Click ‘Content’ to pull up a menu where you can toggle off and on the map’s layers; 3) Expand the ‘Of Methods and Madness’ menu by clicking on the gray triangle next to ‘Of Methods and Madness’; 4) Scroll down to the layer entitled ‘Primary Source Data Displayed by City (Time)’; 5) Click on the ‘Show Table’ icon below any of the subfields in that layer. 
        </p>

      </div>
  )
}
export default History;