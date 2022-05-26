import React from 'react'
import {NavigationDots} from '../components'
import { SocialMedia } from '../components'

const AppWrap = (Component,idName,classNames) => function HOC(){

    if(idName === 'contact'){
        return(
            <div id={idName} className={`app__container ${classNames}`}>            
            <div className={`app__wrapper app__flex `}>
            <Component/>
            </div>
            <NavigationDots active={idName}/>
        </div>
        )
    }

    else{
    return(
        <div id={idName} className={`app__container ${classNames}`}>
            <SocialMedia specialClass="app__special"/>
            <div className={`app__wrapper app__flex `}>
            <Component/>
            </div>
            <NavigationDots active={idName}/>
        </div>
    )

    }
}


export default AppWrap