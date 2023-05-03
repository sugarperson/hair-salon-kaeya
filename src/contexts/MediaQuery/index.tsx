import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useGlobalVariableDictContext } from '../GlobalVariableDictContext';

const MediaQueryContext = React.createContext({
  isSP: false,  // スマートフォン
  isTB: false,  // タブレット
  isMB: false,  // スマートフォン or タブレット
  isPC: false,  // PC（1280px未満）
  isLPC: false, // PC（1280px以上）
});

export function MediaQueryProvider(
  props: {
    children: React.ReactNode,
  }
): JSX.Element {
  const global = useGlobalVariableDictContext();
  const isSP = useMediaQuery({            // 520px未満
    maxWidth: global.tbBreakPoint - 1,
  });
  const isTB = useMediaQuery({            // 520px以上960px未満
    minWidth: global.tbBreakPoint,
    maxWidth: global.pcBreakPoint - 1,
  });
  const isMB = isSP || isTB;
  const isPC = !isMB && useMediaQuery({   // 960px以上1280px未満
    maxWidth: global.lpcBreakPoint - 1,
  });
  const isLPC = !isMB && useMediaQuery({  // 1280px以上
    minWidth: global.lpcBreakPoint,
  });

  return (
    <MediaQueryContext.Provider value={{ isSP, isTB, isMB, isPC, isLPC }}>
      {props.children}
    </MediaQueryContext.Provider>
  )
}

export const useDeviceType = () => useContext(MediaQueryContext)