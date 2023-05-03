import { Page } from "/src/components/sections/Page";
import { Header } from "/src/components/sections/Header";
import { MainVisual } from "/src/pages/Home/sections/MainVisual";
import { NavigationBar } from "/src/components/sections/NavigationBar";
import { News } from "./sections/News";
import { Concept } from "/src/pages/Home/sections/Concept";
import { Menu } from "/src/pages/Home/sections/Menu";
import { Footer } from "/src/components/sections/Footer";

import "./index.css"

export function Home(
   props: {}
): JSX.Element {
   return (
      <Page className="Home">
         <Header/>
         <MainVisual/>
         <NavigationBar/>
         <News/>
         <Concept/>
         <Menu/>
         <Footer/>
      </Page>
   );
}