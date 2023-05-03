import React from "react";
import { useState, useEffect } from "react";

import "./index.css";

/**
 * 子コンポーネントの交差を監視するためのコンポーネント
 * @param props Object : {
 * 
 *    componentName : string : 子コンポーネントのクラス名,
 * 
 *    observationTargetSuffix : string : 子コンポーネントのコンテナ要素のクラス名のサフィックス,
 * 
 *    intersectingElementClassName : string : 子コンポーネントが交差しているときに付与するクラス名,
 * 
 *    [
 * 
 *       option : {
 * 
 *          root : HTMLElement | null : 子コンポーネントとの交差を監視する要素,
 * 
 *          rootMargin : string : rootの余白,
 * 
 *          threshold: number : 交差判定の閾値,
 *          
 *       }
 * 
 *    ],
 * 
 *    children : React.ReactNode : 子コンポーネント,
 * 
 * }
 * @returns JSX.Element
 */
export function IntersectionDetector(
   props: {
      componentName: string,
      observationTargetSuffix: string,
      intersectingElementClassName: string,
      option?: {
         root: HTMLElement | null,
         rootMargin: string,
         threshold: number,
      },
      children: React.ReactNode,
   } 
): JSX.Element {

   const [suffix, setSuffix] = useState<string>("");
   useEffect(() => {
      new IntersectionObserver((
            entries: IntersectionObserverEntry[], 
            observer: IntersectionObserver
         ): void => {
            if(entries[0].isIntersecting) setSuffix(props.intersectingElementClassName);
         },
         props.option == undefined ? null : props.option
      ).observe(document.querySelector(`.observation-target-of-${props.observationTargetSuffix}`));
   }, []);

   /**********************************************************************
    * 子コンポーネントを交差監視用のdiv要素で囲んで描画し、
    * 親コンポーネントに交差状況に応じたクラス名を付与するコンポーネントを作成
    **********************************************************************/
   return (
      <div className={`${props.componentName} ${suffix}`}>
         <div className={`observation-target-of-${props.observationTargetSuffix}`}>
            {props.children}
         </div>
      </div>
   )
}