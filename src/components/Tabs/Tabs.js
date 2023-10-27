import './tabs.css';
import CardEnem from '../Card/CardEnem';
import CardFuvest from '../Card/CardFuvest'
import CardUnicamp from '../Card/CardUnicamp'
import CardUnesp from '../Card/CardUnesp'
import CardUfpr from '../Card/CardUfpr'
import CardUfsc from '../Card/Cardufsc'
import CardUerj from '../Card/CardUerj'
import CardUnb from '../Card/CardUnb'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


export default function TabComponent(){

    return(

    <Tabs className="tabs">
        <TabList className='tabHeader'>
        <Tab className="tabItem">Enem</Tab>
        <Tab className="tabItem">Fuvest</Tab>
        <Tab className="tabItem">Unicamp</Tab>
        <Tab className="tabItem">Unesp</Tab>
        <Tab className="tabItem">UFPR</Tab>
        <Tab className="tabItem">UFSC</Tab>
        <Tab className="tabItem">UERJ</Tab>
        <Tab className="tabItem">UnB</Tab>
        </TabList>

        <TabPanel className="tabContent">
        <h2>ENEM</h2>
        {/* <Card id={`6519f99fea706673814c2a94`} ></Card> */}
        <CardEnem></CardEnem>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>FUVEST</h2>
        <CardFuvest></CardFuvest>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UNICAMP</h2>
        <CardUnicamp></CardUnicamp>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UNESP</h2>
        <CardUnesp></CardUnesp>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UFPR</h2>
        <CardUfpr></CardUfpr>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UFSC</h2>
        <CardUfsc></CardUfsc>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UERJ</h2>
        <CardUerj></CardUerj>
        </TabPanel>
        
        <TabPanel className="tabContent">
        <h2>UnB</h2>
        <CardUnb></CardUnb>
        </TabPanel>
  </Tabs>

    )
}