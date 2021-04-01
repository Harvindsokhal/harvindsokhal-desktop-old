import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Draggable from 'react-draggable';
import AppleLogo from "./assets/apple-icon1.png";
import Appstore from './assets/AppStore.png';
import Bin from './assets/bin.png';
import Folder from './assets/folder.png';
import Message from './assets/messages.png';
import News from './assets/news.png';
import Notes from './assets/notes.png';
import Safari from './assets/safari-icon.png';
import WIFI from './assets/wifi.png';
import Airplay from './assets/airplay.png';
import Battery from './assets/battery.png';
import Search from './assets/search.png';
import Discover from './assets/Discover-store.png';
import Create from './assets/Create-store.png';
import Work from './assets/Work-store.png';
import Play from './assets/Play-store.png';
import Develop from './assets/Develop-store.png';
import Catagories from './assets/Catagories-store.png';
import Updates from './assets/Updates-store.png';
import Profile from './assets/profile-store.png';
import Highlight from './assets/highlight1.png';
import Highlight2 from './assets/highlight2.jpeg';
import FlappyBird from './assets/flappy-bird.png';
import Oculus from './assets/oculus.jpg';
import p2p from './assets/p2p.png';
import Snake from './assets/snake.png';
import Scrapper from './assets/scrapper.png';
import Music from './assets/music.png';
import { Box } from '@material-ui/core';
import BackArrow from './assets/backarrow.png';
import FrontArrow from './assets/frontarrow.png';
import starFilled from './assets/star-filled.png';
import starHalf from './assets/star-half.png';
import starEmpty from './assets/star-empty.png';
import flappysc1 from './assets/flappysc1.jpg';
import flappysc2 from './assets/flappysc2.jpg';
import flappysc3 from './assets/flappysc3.jpg';
import Oculussc1 from './assets/oculus1.jpg';
import Oculussc2 from './assets/oculus2.jpg';
import p2psc1 from './assets/p2p1.png';
import Scrappersc1 from './assets/scrapper1.jpg';
import Scrappersc2 from './assets/scrapper2.jpg';
import Musicsc1 from './assets/music1.jpg';
import Musicsc2 from './assets/music2.jpg';
import Musicsc3 from './assets/music3.jpg';
import SnakeGame from './components/SnakeGame';
import PDFimage from './assets/pdf-image.png';
import CV from './assets/Harvind Sokhal CV.pdf'
import Sidebar from './assets/sidebar.png';
import Shield from './assets/shield.png';
import Lock from './assets/lock.png';
import Refresh from './assets/refresh.png';
import Cluod from './assets/cloud.png';
import Share from './assets/share.png';
import Plus from './assets/plus.png';
import Tabs from './assets/tabs.png';
import Twitter from './assets/twitter.jpg';
import LInkedIn from './assets/linkedin.jpg';

function App() {


  const [show, setShow] = useState({
    notes: '',
    appstore: '',
    snake: '',
    bin: '',
    internet: '',
    MessageApp: '',

  });
  
  const [appstorepage, setAppstore] = useState({
    page1: '',
    page2: 'none',
    page3: 'none',
    page4: 'none',
    page5: 'none',
    page6: 'none',
  })
  

  

  const dateBuilder = (d) => {

    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    let day = days[d.getDay()];

    var today = new Date();
    var time = (today.getHours() + ":" + (today.getMinutes<10? "0" : '') + today.getMinutes());
    

    return `${day} ${time} `

  }

  const NotesApp = show.notes ? (
    <Draggable>
    <div className='App1-taskbar'>
      <div class="dots-wrapper">
        <div onClick={() => setShow({notes: !show.notes})} id="dot-one" class="browser-dot"></div>
        <div id="dot-two" class="browser-dot"></div>
        <div id="dot-three" class="browser-dot"></div>
      </div>
      <p className='App-name'>Notes</p>  
      <div className='App1'>
        <div className='All-notes'>
          <div className='searchbox-container'>
            <form method="get" action="/search" id="search">
              <input name="q" type="text" size="40" placeholder="Search..." />
            </form>
          </div>
          <div className='skills-card'>
            <p id='one'>My Skills</p>
            <p id='two'>25/01/2021</p>
          </div>
        </div>
        <div className='bignote-container'>
          <h2>My Skills</h2>
            <div className='notes'>
              <ul>
                  <li>-Python</li>
                  <li>-Java Netbeans</li>
                  <li>-HTML/CSS</li>
                  <li>-Shell scripting</li>
              </ul>
              <ul>
                  <li>-React (Used to create Portfolio)</li>
                  <li>-JavaScript</li>
                  <li>-Kotlin</li>
                  <li>-Django</li>
              </ul>
            </div>
        </div>
        </div>
    </div>
  </Draggable>
  ) : (
    null
  );

  const MessageApp = show.MessageApp ? (
    <Draggable>
    <div className='Message-taskbar'>
    <div class="dots-wrapper">
      <div onClick={() => setShow({MessageApp: !show.MessageApp})} id="dot-one" class="browser-dot"></div>
      <div id="dot-two" class="browser-dot"></div>
      <div id="dot-three" class="browser-dot"></div>
    </div>
    <p className='App-name'>Get in touch</p>  
    <div className='Contact-page'>
      <div className='side-message'>
        <div className='message-card'>
            <div id='message-icon'>
              <p>H</p>
            </div>
            <div className='message-label-containers'>
              <p id='message-label-1'>Harvind Sokhal</p>
              <p id='message-label-2'>Message sent</p>
            </div>
        </div>
      </div>
      <div className='main-message'>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input className="input-field" type="text" name="name" />
        <label>Email</label>
        <input className="input-field" type="email" name="email" />
        <label>Subject</label>
        <input className="input-field" type="text" name="subject" />
        <label className='label'>Your message</label>
        <textarea id='message-box' className="input-field"  name="message" />
        <input id='submit-btn' type="submit" value="Send" />
      </form>
      </div>
    </div>
    </div>
    </Draggable>
  ): (
    null
  );

  const SnakeGameDisplay = show.snake ? (

    <Draggable>
    <div className='snake-taskbar'>
      <div class="dots-wrapper">
        <div onClick={() => setShow({snake: !show.snake})} id="dot-one" class="browser-dot"></div>
        <div id="dot-two" class="browser-dot"></div>
        <div id="dot-three" class="browser-dot"></div>
      </div>
      <p id='snake-name'>SnakeGame</p> 
      <div className='snake-game'>
        <SnakeGame/>
      </div>
    </div>
    </Draggable>
  ) : (
    null
  );

  const Trash = show.bin ? (
    <Draggable>
    <div className='bin-taskbar'>
      <div class="dots-wrapper">
        <div onClick={() => setShow({bin: !show.bin})} id="dot-one" class="browser-dot"></div>
        <div id="dot-two" class="browser-dot"></div>
        <div id="dot-three" class="browser-dot"></div>
      </div>
      <p id='bin-name'>Trash</p> 
      <div className='bin'>
        <div className='cv-container'>
          <a  href={CV} rel='noopener noreferrer' target='_blank'><img id='pdf-image' src={PDFimage} alt='Pdf-logo'/></a>
          <p id='file-name'>Harvind Sokhal CV.pdf</p>
        </div>
      </div>
    </div>
    </Draggable>
  ) : (
    null
  );
  
  const Internet = show.internet ? (
    <Draggable>
    <div className='safari-taskbar'>
      <div className='safari-taskbar-container'>
        <div class="dots-wrapper">
          <div onClick={() => setShow({internet: !show.internet})} id="dot-one" class="browser-dot"></div>
          <div id="dot-two" class="browser-dot"></div>
          <div id="dot-three" class="browser-dot"></div>
        </div>
        <img alt='sidebar-logo' id='sidebar' src={Sidebar}/>
        <img alt='Backarrow-logo' id='safari-arrow' src={BackArrow}/>
        <img alt='Frontarrow-logo' id='safari-arrow' src={FrontArrow}/>
        <img alt='shield-logo' id='shield' src={Shield}/>
        <div className='url'>
          <img alt='lock-logo' id='lock' src={Lock}/>
          <p id='url-text'>FollowMySocials.com</p>
          <img alt='refresh-logo' id='refresh' src={Refresh}/>
        </div>
        <div className='safari-taskbar-right'>
          <img alt='cloud-logo' id='cloud' src={Cluod}/>
          <img alt='share-logo' id='share' src={Share}/>
          <img alt='plus-logo' id='plus' src={Plus}/>
          <img alt='tabs-logo' id='tabs' src={Tabs}/>
        </div>
      </div>
      <div className='safari-page'>
        <a href ='https://twitter.com/sokhal_harvind' rel='noreferrer'  target='_blank'><img alt='twitter-sc' id='social1' src={Twitter}/></a>
        <a href ='https://www.linkedin.com/in/harvind-sokhal/' rel='noreferrer' target='_blank'><img  alt='LinkedIn-sc' id='social2' src={LInkedIn}/></a>
      </div>
    </div>
    </Draggable>
  ) : (
    null
  );


  const AppStore = show.appstore ? (
    <Draggable>
    <div className='App2-taskbar'>
      <div className='taskbarleft-color'>
        <div class="dots-wrapper">
          <div onClick={() => setShow({appstore: !show.appstore})} id="dot-one" class="browser-dot"></div>
          <div id="dot-two" class="browser-dot"></div>
          <div id="dot-three" class="browser-dot"></div>
        </div>
      </div>
      <div className='App2-left'>
        <div className='searchbox-container'>
            <form method="get" action="/search" id="search">
              <input name="q" type="text" size="40" placeholder="Search..." />
            </form>
          </div>
        </div>
        <div className='catagories-left'>
          <p><img src={Discover} alt='Discover-logo'/>Discover</p>
          <p><img src={Create} alt='Create-logo'/>Create</p>
          <p><img src={Work} alt='Work-logo'/>Work</p>
          <p><img src={Play} alt='Play-logo'/>Play</p>
          <p><img src={Develop} alt='Develop-logo'/>Develop</p>
          <p><img src={Catagories} alt='Catagories-logo'/>Catagories</p>
          <p><img src={Updates} alt='Updates-logo'/>Updates</p> <div className='update-num'><p>2</p></div>
        </div>
        <div className='profile-left'>
          <img src={Profile} alt='profile-sc'></img>
          <p id='profile-name'>Harvind Sokhal</p>
          <p>£9999.99 Credit</p>
        </div>
      <div className='App2-right'>
        <Box display={appstorepage.page1}>
        <div className='App2-intro'>
          <p>Develop</p>
        </div>
        <div className='App2-highlights'>
          <div className='highlights-left'>
            <p id='text1'>PRO TIP</p>
            <p id='text2.1'>3 Things to Love About Things 3</p>
            <p id='text3'>Seamless task management.</p>
            <img src={Highlight} alt='Highlight-sc'></img>
          </div>
          <div className='highlights-right'>
            <p id='text1'>LIFE HACK</p>
            <p id='text2.1'>Quick Workflow Tips</p>
            <p id='text3'>Because every second counts.</p>
            <img src={Highlight2} alt='Highlight-image2'></img>
          </div>
          <div className='bottom-line'></div>
        </div>
        <div className='past-projects'>
          <p>Past Projects</p>
          <div className='app-row1'>
            <div className='app1'>
                <img alt='flappy-logo' src={FlappyBird}></img>
                <div className='text-container'>
                  <p id='des1'>AI Flappy Bird</p>
                  <p id='des2'>AI Bot Plays Flappy Bird</p>
                  <div className='open-app' onClick={() => setAppstore({
                    page1: 'none', 
                    page3: 'none', 
                    page4: 'none', 
                    page5: 'none',
                    page6: 'none'})}><p>Open</p></div>
                  <div className='app-line'></div>
                </div>
            </div>
            <div className='app1' id='app2'>
              <img alt='oculus-logo' src={Oculus}></img>
              <div className='text-container'>
                <p id='des1'>Water Aid VR Game</p>
                <p id='des2'>A Custom Game With VR</p>
                <div className='open-app' onClick={() => setAppstore({
                  page1: 'none', 
                  page2:'none', 
                  page4:'none',
                  page5: 'none',
                  page6: 'none'
                  })}><p>Open</p></div>  
                <div className='app-line'></div>
              </div>
            </div>
            <div className='app1' id='app2'>
              <img alt='p2p-logo' src={p2p}></img>
              <div className='text-container'>
                <p id='des1'>P2P Chat App</p>
                <p id='des2'>Local Network Chat App</p>
                <div className='open-app' onClick={() => setAppstore({
                  page1: 'none', 
                  page2:'none', 
                  page3:'none', 
                  page5: 'none',
                  page6: 'none'})}><p>Open</p></div>  
                <div className='app-line'></div>
              </div>
            </div>
          </div>
          <div className='app-row2'>
            <div className='app1'>
              <img alt='scrapper-logo' src={Scrapper}></img>
              <div className='text-container'>
                <p id='des1'>Web Scraper App</p>
                <p id='des2'>A Social Media Scrapper</p>
                <div className='open-app' onClick={() => setAppstore({
                  page1: 'none', 
                  page2:'none', 
                  page3:'none', 
                  page4: 'none',
                  page6: 'none'})}><p>Open</p></div>  
              </div>
            </div>
            <div className='app1' id='app3'>
              <img alt='music-logo' src={Music}></img>
              <div className='text-container'>
                <p id='des1'>Party Music Player</p>
                <p id='des2'>Full Stack Web Music Player</p>
                <div className='open-app' onClick={() => setAppstore({
                  page1: 'none', 
                  page2:'none', 
                  page3:'none', 
                  page4: 'none',
                  page5: 'none'})}><p>Open</p></div>  
              </div>
            </div>
            <div className='app1' id='app4'>
              <img alt='snake-logo' src={Snake}></img>
              <div className='text-container'>
                <p id='des1'>Snake Game</p>
                <p id='des2'>A JSX Snake Game</p>
                <div className='open-app' onClick={() => setShow({
                  snake: !show.snake})}><p>Open</p></div>  
              </div>
            </div>
          </div>
        </div>
        </Box>
        <Box display={appstorepage.page2}>
        <div className='App-detail'>
          <input className='backarrow' type='image' alt='backarrow' src={BackArrow} onClick={() => setAppstore({page1: ''})}></input>
            <div className='App-begin'>
              <img alt='flappy-logo' src={FlappyBird}/>
              <div className='App-begin-details'>
                <h1>AI Flappy Bird</h1>
                <p>Games</p>
                <p id='text2'>Harvind Sokhal Corporation</p>
              </div>
              <div className='App-begin-details-right'>
                <div className='get-app'><p>GET</p></div>  
                <div className='circle-app'><p>...</p></div>  
              </div>
            </div>
            <div className='break-line'></div>
            <div className='app-rating'>
              <div className='stars-contianer'>
                <h2>4.5</h2>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='half-star' src={starHalf}/>
              </div>
              <p id='numOfRatings'>250,000 ratings</p>
            </div>
            <div id='breakline2'></div>
            <div className='app-description'>
                <h3>Description</h3>
                <p>This was an artificial intelligence project that involved the use of Deep Q learning. 
                  The Bot that was created knew the current state that it was in with the use of frames, which meant it had access to data like the distence of the next pipe and the height.
                   The bot would recieve a reward of +1 for successfully getting passed a pipe or -5 for hitting a pipe or leaving a frame.  
                    A negative of Deep Q learning is that it required a lot of training iterations in order to see progress and for the bot to start learning.</p>
                <p>Applications used: Python, OpenAI Gym </p>
                
            </div>
            <div id='breakline3'></div>
            <div className='preview'>
              <h3>Preview</h3>
              <div className='image-container'>
                <img alt='flappysc-1' src={flappysc1}/>
                <img alt='flappysc-2' src={flappysc2}/>
                <img alt='flappysc-3' src={flappysc3}/>
              </div>
            </div>
        </div>
        </Box>
        <Box display={appstorepage.page3}>
        <div className='App-detail'>
          <input className='backarrow' type='image' alt='backarrow' src={BackArrow} onClick={() => setAppstore({page1: ''})}></input>
            <div className='App-begin'>
              <img alt='oculus-logo' src={Oculus}/>
              <div className='App-begin-details'>
                <h1>Water Aid VR Game</h1>
                <p>Games</p>
                <p id='text2'>Harvind Sokhal Corporation</p>
              </div>
              <div className='App-begin-details-right'>
                <div className='get-app'><p>GET</p></div>  
                <div className='circle-app'><p>...</p></div>  
              </div>
            </div>
            <div className='break-line'></div>
            <div className='app-rating'>
              <div className='stars-contianer'>
                <h2>3.8</h2>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='half-star' src={starHalf}/>
                <img alt='empty-star' src={starEmpty}/>
              </div>
              <p id='numOfRatings'>175,100 ratings</p>
            </div>
            <div id='breakline2'></div>
            <div className='app-description'>
                <h3>Description</h3>
                <p>A 3D game enviroment created in collab with WaterAid which supports the Oculus Rift. 
                  The aim was to create a Ethiopian village which simulates a village that has had a water tap installed. 
                  This was a team based project with my role primarly involving the creation of greenary assets and designing and putting together the map itself.</p>
                  
                <p id='vr-AppsUsed'>Applications used: Unreal engine, 3DS Max</p>
            </div>
            <div id='breakline3'></div>
            <div className='preview'>
              <h3>Preview</h3>
              <div className='image-container-two'>
                <img alt='oculussc-1' src={Oculussc1}/>
                <img alt='oculussc-2' src={Oculussc2}/>
              </div>
            </div>
        </div>
        </Box>
        <Box display={appstorepage.page4}>
        <div className='App-detail'>
          <input className='backarrow' type='image' alt='backarrow' src={BackArrow} onClick={() => setAppstore({page1: ''})}></input>
            <div className='App-begin'>
              <img alt='p2p-logo' src={p2p}/>
              <div className='App-begin-details'>
                <h1>P2P Chat App</h1>
                <p>Social</p>
                <p id='text2'>Harvind Sokhal Corporation</p>
              </div>
              <div className='App-begin-details-right'>
                <div className='get-app'><p>GET</p></div>  
                <div className='circle-app'><p>...</p></div>  
              </div>
            </div>
            <div className='break-line'></div>
            <div className='app-rating'>
              <div className='stars-contianer'>
                <h2>3.6</h2>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='half-star' src={starFilled}/>
                <img alt='full-empty' src={starHalf}/>
                <img alt='full-empty' src={starEmpty}/>
              </div>
              <p id='numOfRatings'>92,234 ratings</p>
            </div>
            <div id='breakline2'></div>
            <div className='app-description'>
                <h3>Description</h3>
                <p>A Peer-to-Peer chat application created using Java Netbeans with the use of sockets allowing multiple users to communicate on the same network.
                  Users are able to connect to each other by using ports and once connected each user can view chat dialogue and respond in real-time.
                   The application also consists of an admin feature that allows them to connect multiple users together and if the admin disconnects a new user is selected as the admin.
                </p>
                  
                <p>Applications used: Java</p>
            </div>
            <div id='breakline3'></div>
            <div className='preview'>
              <h3>Preview</h3>
              <div className='image-container-two'>
                <img alt='p2p-sc' id='p2psc1' src={p2psc1}/>
              </div>
            </div>
        </div>
        </Box>
        <Box display={appstorepage.page5}>
        <div className='App-detail'>
          <input className='backarrow' type='image' alt='backarrow' src={BackArrow} onClick={() => setAppstore({page1: ''})}></input>
            <div className='App-begin'>
              <img alt='scrapper-logo' src={Scrapper}/>
              <div className='App-begin-details'>
                <h1>Web Scraper App</h1>
                <p>Buisness</p>
                <p id='text2'>Harvind Sokhal Corporation</p>
              </div>
              <div className='App-begin-details-right'>
                <div className='get-app'><p>GET</p></div>  
                <div className='circle-app'><p>...</p></div>  
              </div>
            </div>
            <div className='break-line'></div>
            <div className='app-rating'>
              <div className='stars-contianer'>
                <h2>4.2</h2>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-empty' src={starEmpty}/>
              </div>
              <p id='numOfRatings'>352,624 ratings</p>
            </div>
            <div id='breakline2'></div>
            <div className='app-description'>
                <h3>Description</h3>
                <p>Web Scraping application that gathers images from popular social media sites such as Instagram and Pinterest. 
                  The application also consists of a metadata extractor which can be used once the web crawler has completed writing images to a local drive.
                   The key pieces of metadata that the extractor looks for is the date/time an image was taken and the GPS co-ordinates which can be taken into a map application such as google maps to view the location of where the image was taken. 
                    </p>
                <p>Applications used: Python, BeautifulSoup, Selenium, Pillow</p>
            </div>
            <div id='breakline3'></div>
            <div className='preview'>
              <h3>Preview</h3>
              <div className='image-container-two'>
                <img alt='full-star' src={Scrappersc2}/>
                <img alt='full-star' src={Scrappersc1}/>
              </div>
            </div>
        </div>
        </Box>
        <Box display={appstorepage.page6}>
        <div className='App-detail'>
          <input className='backarrow' type='image' alt='backarrow' src={BackArrow} onClick={() => setAppstore({page1: ''})}></input>
            <div className='App-begin'>
              <img alt='music-logo' src={Music}/>
              <div className='App-begin-details'>
                <h1>Music Party Player</h1>
                <p>Sound</p>
                <p id='text2'>Harvind Sokhal Corporation</p>
              </div>
              <div className='App-begin-details-right'>
                <div className='get-app'><p>GET</p></div>  
                <div className='circle-app'><p>...</p></div>  
              </div>
            </div>
            <div className='break-line'></div>
            <div className='app-rating'>
              <div className='stars-contianer'>
                <h2>4.2</h2>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-star' src={starFilled}/>
                <img alt='full-empty' src={starEmpty}/>
              </div>
              <p id='numOfRatings'>352,624 ratings</p>
            </div>
            <div id='breakline2'></div>
            <div className='app-description'>
                <h3>Description</h3>
                <p>A fullstack web music player that allows users to listen to the same song simultaneously with the use of the Spotify API.
                  The application allows users to join, create rooms and vote to skip songs with the only requirements being the room code and a verified Spotify account.
                   The music player uses React and JavaScript as the front end to handle all the visual elements and Django and Python as the backend to handle user functionality such as sending requests to Spotify or registering votes.
                    </p>
                <p>Applications used: Python, React, Django, JavaScript</p>
            </div>
            <div id='breakline3'></div>
            <div className='preview'>
              <h3>Preview</h3>
              <div className='image-container'>
                <img alt='music-sc-1' src={Musicsc1}/>
                <img alt='music-sc-2' src={Musicsc2}/>
                <img alt='music-sc-3' src={Musicsc3}/>
              </div>
            </div>
        </div>
        </Box>
      </div>
    </div>
    </Draggable>
  ) : (
    null
  );

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p8esuhp', 'template', e.target, 'user_gWZcxZKCRzviMpXukJMBZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  
  return (
    <div className='main-container'>
      <div className="Top-bar">
        <div className='Top-items-left'>
          <img src={AppleLogo} alt='AppleLogo' id='apple-icon'/>
          <p className='Finder'>Finder</p>
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Go</p>
          <p>Window</p>
          <p>Help</p>
        </div>

        <div className='Top-items-right'>
          <img src={WIFI} alt='wifi-logo' id='topright-icon'/>
          <img src={Airplay} alt='airplay-logo' id='topright-icon'/>
          <img src={Battery} alt='battery-logo' id='topright-icon'/>
          <div className='date'>{dateBuilder(new Date())}</div>
          <img src={Search} alt='search-logo' id='topright-icon'/>
        </div>
      </div>
      
      {NotesApp}
      {AppStore}
      {SnakeGameDisplay}
      {Trash}
      {Internet}
      {MessageApp}
      


      <div className='task-bar'>
        <div className ='taskbar-items'> 
          <input type='image' src={Message} alt='notes-icon' id='taskbar-icon' onClick={() => setShow({MessageApp: !show.MessageApp})}/>
          <img src={News} alt='notes-icon' id='taskbar-icon'/>
          <input type='image' src={Appstore} alt='appstore-logo' id='taskbar-icon' onClick={() => setShow({appstore: !show.appstore})}/>
          <input type='image' src={Notes} alt='notes-icon' id='taskbar-icon' onClick={() => setShow({notes: !show.notes})}/>
          <input type ='image' src={Safari} alt='safari-logo' id='taskbar-icon' onClick={() => setShow({internet: !show.internet})}/>
          <img src={Folder} alt='notes-icon' id='taskbar-icon'/>
          <input type='image' src={Bin} alt='notes-icon' id='taskbar-icon' onClick={() => setShow({bin: !show.bin})}/>
        </div>
      </div>
    </div>
  );
}

export default App;
