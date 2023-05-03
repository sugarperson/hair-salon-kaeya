import { usePageStateContext } from "./contexts/PageStateContext";

import { Loading } from "/src/pages/Loading";
import { Opening } from "/src/pages/Opening";
import { Home } from "/src/pages/Home";
import { Menu } from "/src/pages/Menu";
import { Staff } from "/src/pages/Staff";
import { Reserve } from "/src/pages/Reserve";
import { Access } from "/src/pages/Access";
import { ServerError } from "/src/pages/ServerError";
import { PageNotFound } from "/src/pages/PageNotFound";

export function HairSalonKaeya(
   props: {}
): JSX.Element {
   const pageStateContext: PageStateContext = usePageStateContext();
   const pageList = [
      <Loading/>,
      <Opening/>,
      <Home/>,
      <Menu/>,
      <Staff/>,
      <Reserve/>,
      <Access/>,
      <ServerError/>,
      <PageNotFound/>,
   ]
   return pageList[pageStateContext.state];
}