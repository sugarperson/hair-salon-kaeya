import { Page } from "/src/components/sections/Page";
import { Header } from "/src/components/sections/Header";
import { NavigationBar } from "/src/components/sections/NavigationBar";
import { MenuHeader } from "/src/pages/Menu/sections/MenuHeader";
import { Cut } from "/src/pages/Menu/sections/Cut";
import { CutAndShampoo } from "/src/pages/Menu/sections/CutAndShampoo";
import { CutAndColor } from "/src/pages/Menu/sections/CutAndColor";
import { CutAndTreatment } from "/src/pages/Menu/sections/CutAndTreatment";
import { Color } from "/src/pages/Menu/sections/Color";
import { ColorAndTreatment } from "/src/pages/Menu/sections/ColorAndTreatment";
import { Footer } from "/src/components/sections/Footer";

import "./index.css";

export function Menu(
   props: {}
): JSX.Element {
   return (
      <Page className="Menu">
         <Header/>
         <NavigationBar/>
         <MenuHeader/>
         <main className="contents">
            <Cut/>
            <CutAndShampoo/>
            <CutAndColor/>
            <CutAndTreatment/>
            <Color/>
            <ColorAndTreatment/>
         </main>
         <Footer/>
      </Page>
   );
}