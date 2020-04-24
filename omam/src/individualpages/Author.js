import React from 'react'
import './Author.css';
import { Button } from '../Components/Buttons'
import {Link} from 'react-router-dom'
import Img from '../photos/Author_01_ParkRanger.jpg'
import Img2 from '../photos/Author_02_Fellman.jpg'
import Img3 from '../photos/Author_03_Sutherland.jpg'
import Img4 from '../photos/Author_04_ASD.jpg'
import Img5 from '../photos/Author_05_ArcGISScreenshot.jpg'

const Author = () =>(
  
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
      <h1 className = "header">A Ridiculously Short Bibliography </h1>
      <p className = "p1">My name is Andrew Fialka. I am an assistant professor at Middle Tennessee State University where I 
      teach Civil War and American history and conduct research on guerrilla war and spatial methodologies. 
      I also work at the University of Georgia’s Center for Virtual History (eHistory.org) on multiple digital humanities projects, 
      including Fugitive Federals: A Digital Humanities Investigation of Escaped Union Prisoners (2018) and 
      CSI: Dixie: The View from the American South’s County Coroners’ Offices, 1800-1900 (2014). 
      </p> <br></br>
      <h1 className = "header2">The Project's Origins</h1> <br></br>
      <figure>
        <img className = "ranger" src = { Img } align="right" alt="Ranger"></img>
        
      </figure>
      <p className = "p1">The inspiration for this project—making a map of the Civil War’s guerrilla violence,
       as opposed to its battlefield violence—came about at West Virginia University (WVU) and the National 
       Park Service from 2011-2013. I worked as a Park Ranger at the Fredericksburg and Spotsylvania National 
       Military Park in the summer between my two years at WVU. At the parks, we started off every battlefield 
       tour in front of a map, because it’s the only way you can make sense of such violence. 
       (Imagine a five-year-old dressed up in a Confederate uniform in a crowd of fifty people raising their
        hand and asking why soldiers who didn’t know one another tried to fill each other up with bullets. Yes, 
        that happened to me while giving a tour of the Battle of Fredericksburg.) It was much easier to explain 
        that almost 200,000 men fired lead into each other’s bodies because of the railroad on the map: it led 
        straight to Richmond, Virginia—the Confederate capital. If the Union army could take that railroad, 
        they could possibly end the war.As it turns out, they couldn’t; instead, tens of thousands of Federal 
        troops assaulted an entrenched Confederate line, resulting in one of the war’s most lop-sided battles. 
        Regiment after regiment of Union soldiers were sent running across an open field… uphill… towards southerners 
        firing from behind a stone wall… and against artillery pieces safely firing from atop the hill they were trying to storm. 
        It was a slaughter. 
        </p>
        <figcaption1> Me in uniform. Such a cool job. I worked under Greg Mertz.</figcaption1><br>
        </br>
      <p className = "p1">
      After work, I read up on the guerrilla war literature that would form the bibliography of my master’s thesis at WVU.
       One theme dominated: guerrillas were bad. Very bad. They were savage, mutants, and killed at random. 
       I then noticed a second important theme about guerrilla literature: it was devoid of any maps. 
       The one tool I used to make sense of violence on America’s battlefields was completely missing from historians’ analyses 
       of guerrilla warfare in the Civil War. To be sure, historians couldn’t make a map of guerrilla war until 
       the advent of digital mapping techniques—the guerrilla war’s size and scope was too big for traditional mapmakers. 
       Guerrillas operated on any given day, in any given space, throughout the Confederacy. That covers 1,500 days and 
       770,400 square miles (and doesn’t even include the guerrilla-style violence in the Missouri-Kansas border war 
       throughout the late 1850s or the guerrilla-style violence enacted by paramilitary groups like the Ku Klux Klan throughout Reconstruction).
      </p>
      <figure>
        <img className = "sutherland" src = { Img3 } align="left" alt="Sutherland"></img>
        
        <img className = "fellman" src = { Img2 } align="right" alt="Fellman"></img>
        <figcaption2>The giants of guerrilla historiography since the late 1980s: Daniel Sutherland and the late Michael Fellman.</figcaption2>
        <br></br>
      </figure>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br>
      <figure>
        <img className = "asd" src = { Img4 } align="left" alt="Asd"></img><br></br>
        
      </figure>
      <p className = "p1">
      Back at WVU, my training in historical research methods under Aaron Sheehan-Dean taught me that the 
      scale from which we view war determines what we see. On the ground, we see savagery—thousands of 
      troops running into a slaughter at Fredericksburg. From a bird’s-eye-view, we see order and 
      logic—Robert E. Lee’s legendary strategy and tactics at the same battle. Because historians 
      never looked at guerrilla war with a bird’s-eye-view, all they saw was savagery. Pretty simple, really.
      </p>
      <br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br>
      <figcaption3> Aaron Sheehan-Dean on the right</figcaption3>
      <br></br> <br></br>
      <p className = "p1">
      I set out to view guerrilla war from a bird’s-eye-view by using geographers’ preferred spatial 
      analysis system: ArcGIS. This software enabled me to map multiple layers of data over vast swaths 
      of space and time and run hundreds of tools that illuminated patterns within that data. 
      The essence of guerrilla warfare, and therefore the content of these maps, consists of 
      three main groups: instances of guerrilla violence, the Union army’s location, and southern-sympathizing 
      and guerrilla-aiding households (referred to collectively as guerrillas' domestic supply line). 
      By discovering when and where instances of guerrilla violence occurred in relation to the southern-sympathizing 
      civilians and Union soldiers present in the landscape, we can actually see the mutual locations where guerrilla 
      warfare’s participants operated. It was in this symbiotic space that guerrillas and Union troops continuously 
      reinvented their war-making policies, practices, and the justifications for both.
      </p>
      <figure>
        <img className = "arcg" src = { Img5 } align="left" alt="Arcg"></img><br></br>
      </figure>
      <br></br> <br></br>
      <h1 className = "header2">
      The Project’s Historical Conclusions
      </h1>
      <p className = "p1">
      My interpretation of these spatial relationships led to four key conclusions. 
      First, temporary Union occupation incited guerrilla violence. 
      Guerrillas frequently operated in locations previously occupied by small outfits of Union troops (typically cavalry units). 
      Furthermore, guerrillas targeted weak spots in Union war industries—small garrisons, railroads, telegraph lines, 
      and supply trains—and gray areas within official Union combatants—militias, Home Guards, and furloughed soldiers
      </p> 
      <p className = "p1">
      Second, guerrilla violence relied on a web of rebel households. Guerrillas' 
      “domestic supply line” enabled them to operate by functioning as quartermaster, 
      supply line, and command and control center. In essence, these first two arguments 
      inject order and logic into guerrillas’ violence. They also tack closer to interpretations of 
      guerrilla war espoused by historians outside the American Civil War field. 
      </p>
      <p className = "p1">
      Third, because Union occupiers rarely killed guerrillas and increasingly turned to attacking 
      guerrillas' domestic supply line instead, the home front and conventional battlefield were 
      not separate entities but a single, irregular war zone. Despite official policy 
      (historians typically cite the restraints present in Francis Lieber’s General Order 
      No. 100—the instructions for Union field armies), the Union army synthesized its regular and 
      irregular strategies in response to guerrilla warfare. Not only did guerrilla violence influence 
      the conventional war’s conduct, as Daniel Sutherland argues, it created a unique household war zone 
      that swallowed any person—commander, soldier, vigilante, guerrilla, or citizen—living in occupied territory
      </p>
      <p className = "p1">
      Last, despite all of these patterns, guerrillas still utilized terrorism. They often 
      targeted victims at random and employed tactics—ambushes, posthumous mutilation, retreats—deemed 
      inhumane and cowardly by typical nineteenth-century standards. American Civil War historians’ 
      previous conclusions about guerrillas are not wrong, they’re just unbalanced. This project is 
      entitled Of Methods and Madness as a nod to the scholarly giants whose shoulders my work stands upon. 
      </p>
      <p className = "p1">
      For detailed descriptions of evidence leading to these conclusions from Missouri and Kentucky, 
      please see previous versions of the project located in Project History. 
      </p>
      <p className = "p1">
      As the project’s current form uses data from the entire war (and not just Missouri and Kentucky—the states explored 
      in my dissertation), I’ll risk extrapolating my conclusions to our conceptions of war, in general. To do so, 
      I can’t help but borrow from two military theorists whose opposing viewpoints dominated global conceptions of 
      war in the nineteenth century: Carl von Clausewitz and Antoine-Henri Jomini<a href="#section1">[1]</a>. Jomini condemned guerrilla war as 
      uncivilized and “so terrible that, for the sake of humanity, we ought to hope never to see it.” On the other hand, 
      Clausewitz accepted guerrilla war as part of the human condition. He believed that Jomini’s idea of “civilized” 
      warfare was only “war on paper”—a veil to cover up the fact that war can never be civilized; it is not a rational 
      act between governments and it cannot be conducted free from emotion, passion, and hostility. “Real war” was different, 
      it was “an act of force to compel our adversary to do our will.” Clausewitz acknowledged that ruthless brutality was 
      the quickest way to achieve this end. Guerrilla war, then, was an unfortunate “intensification” of violence, but an 
      inevitable part of war, nonetheless. 
      </p>
      <p className = "p1">
      Of Methods and Madness maps guerrilla war in the hopes that if scholars ask precisely where and when guerrilla
       violence occurred, they can get closer to the answer of why it occurred, getting closer to understanding its 
       essential nature. The project's findings—patterns between guerrillas and Union soldiers and a reinforcement 
       of the necessary role of domestic spaces—serve to demythologize the interpretation of the Civil War as a limited,
        conventional one between formal armies and instead tack closer to Clausewitz's conception of "real war." 
        This scholarship forces us to answer to the chaos and brutality which characterized America’s Civil War in light 
        of today’s wars. If we can better understand how the Civil War's guerrilla conflict became such hell, perhaps we 
        can better understand war in all its hellish forms, whether it took place in the bush of Missouri, the trenches 
        at Spotsylvania Courthouse, the beaches at Normandy, the jungles of Vietnam, or the mountains of Afghanistan.
      </p>
      <hr></hr>
      <p id = "section1" align="left">
      [1] Antoine-Henri Jomini, The Art of War (Westport, Connecticut: Greenwood Press, 1971 
      [original 1862]), 29; Carl von Clausewitz, On War (Washington, D.C.: 
      Combat Forces Press, 1943 [original 1832]), 3-4, 53-55, 547-462.
      </p>
    </div>
)

export default Author;