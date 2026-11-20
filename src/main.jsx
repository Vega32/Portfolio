import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToTheMoon from './assets/ACarToTheMoonPic.png'
import BlueSquare from './assets/BlueSquarePic.png'
import BioWeapon from './assets/BioWeaponPic.png'
import Terminal from './assets/TerminalPic.png'
import Playlist from './assets/PlaylistSynchPic.png'
import Messenger from './assets/MessengerPic.png'
import TrackMyDegree from './assets/TrackMyDegreePic.png'
import RayTracer from './assets/RayTracerPic.png'
import SemanticSearch from './assets/SemanticSearchPic.png'
import Container from './Container.jsx'
import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <AboutMe/>
    <br />
    <h1 style={{color:'gold'}}>Projects</h1>

    <Container title={"Track My Degree"}
    image={TrackMyDegree}
    link={"https://trackmydegree.ca/"}
    description={"Track My Degree is my Software Engineering capstone project. Me and a team of other Software Engineering students were contracted by Concordia’s advisors to develop a web app that, like the name suggests, allows engineering and computer science students to track their progress in their current degree and plan out their path through Concordia. The site automatically updates its data by scraping the Concordia website and using its open API to help students build course timelines as well as verify graduation requirements. "}
    skill={"TypeScript, HTML, CSS, Python, Redis, MongoDB"}/>

    <Container title={"Semantic Search"}
    image={SemanticSearch}
    link={"https://github.com/Vega32/SemanticSearch"}
    description={"Semantic Search is an AI powered application for finding information across multiple documents using natural language. It goes beyond traditional keyword matching. It combines transformer-based semantic embeddings, BM25 keyword retrieval, hybrid ranking, and cross-encoder reranking to find relevant passages based on both meaning and textual relevance."}
    skill={"Python, Machine Learning"}/>

    <Container title={"Ray Tracer"}
    image={RayTracer}
    link={"https://github.com/Vega32/Ray-Tracer"}
    description={"This is a simple ray tracer developed using C++. It takes as input a json file with information about the output format, lighting, and geometry. This data is then used for the actual ray tracing process and finally outputted to a .ppm file. It currently supports area lighting and anti-aliasing. "}
    skill={"C++"}/>

    <Container title={"Terminal Chunk Partitioner"} 
    image={Terminal} 
    link={"https://github.com/Vega32/Terminal_Chunk_Partitioner"}
    description={"Terminal Chunk Partitioner was a the product of a group effort with a good friend of mine. We created this project during the Hack the Hill hackathon of 2024 hosted by the University of Ottawa. The program itself allows multiple machines to connect with one another and share files between them by splitting the file into chunks that are then distributed across the network. These files can then be downloaded by any node in the network. It's a simpler version of a torrent in a way."}
    skill={"Python"}/>

    <Container title={"Playlist Synchronizer"} 
    image={Playlist} 
    link={"https://github.com/Vega32/Playlist-Synchronizer"}
    description={"I initially created this program because I personally use it. I like listening to my music offline so I wanted to automate the process of changing the content of my different playlist. In short, this software allows you to create a local playlist based on an online one and keep them synchronized."}
    skill={"Python"}/>

    <Container title={"TCP-Messaging"} 
    image={Messenger} 
    link={"https://github.com/Vega32/TCP-Messaging"}
    description={"The TCP-Messaging app is exactly what the names says it is. It allows multiple devices to create a peer to peer connection and exchange messages with one of the devices acting as a host. I'm planning to add features to this program in the future such as the ability to send complete files and my integrate a system similar to the one present the the Terminal Chunk Partitioner."}
    skill={"C#"}/>

    <Container title={"A Car to the Moon"} 
    image={ToTheMoon} 
    link={"https://starscourgevega.itch.io/a-car-to-the-moon"}
    description={"A Car to the Moon is a 3D platformer I developed by myself during winter of 2023. It's a relatively short game where you have to collect the missing pieces needed to fix your car. It's currently available on both Windows and Mac. On top of the code, all the assets (other than the soundtrack) were created by me."}
    skill={"Godot game engine, Python, Blender"}/>
    
  </StrictMode>,
)
