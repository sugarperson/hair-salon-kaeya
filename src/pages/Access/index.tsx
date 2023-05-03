import { Header } from "/src/components/sections/Header";
import { NavigationBar } from "/src/components/sections/NavigationBar";
import { Map } from "/src/pages/Access/sections/Map";
import { Appearance } from "/src/pages/Access/sections/Appearance";
import { Footer } from "/src/components/sections/Footer";

export function Access(
   props: {}
): JSX.Element {
   return (
      <div className="Access">
         <Header/>
         <NavigationBar/>
         <div className="contents">
            <Map/>
            <Appearance/>
         </div>
         <Footer/>
      </div>
   );
}