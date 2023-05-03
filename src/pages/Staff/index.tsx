import { Page } from "/src/components/sections/Page";
import { Header } from "/src/components/sections/Header";
import { NavigationBar } from "/src/components/sections/NavigationBar";
import { StaffHeader } from "/src/pages/Staff/sections/StaffHeader";
import { Gaia } from "/src/pages/Staff/sections/Gaia";
import { Yaoyao } from "/src/pages/Staff/sections/Yaoyao";
import { HuTao } from "/src/pages/Staff/sections/HuTao";
import { Xingqiu } from "/src/pages/Staff/sections/Xingqiu";
import { Bennett } from "/src/pages/Staff/sections/Bennett";
import { Footer } from "/src/components/sections/Footer";

import "./index.css";

export function Staff(
   props: {}
): JSX.Element {
   return (
      <Page className="Staff">
         <Header/>
         <NavigationBar/>
         <StaffHeader/>
         <div className="contents">
            <Gaia/>
            <Yaoyao/>
            <HuTao/>
            <Xingqiu/>
            <Bennett/>
         </div>
         <Footer/>
      </Page>
   );
}