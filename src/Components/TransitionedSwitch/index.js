import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useLocation} from "react-router-dom";
import {Switch}  from 'react-router-dom';

const TransitionedSwitch = ({children}) => {
    const location = useLocation();
    return <TransitionGroup>
        <CSSTransition
            key={location.pathname}
            classNames="op-transition"
            timeout={1000}
        >
            <div>
            <Switch location={location}>
                {children}
            </Switch>
            </div>
        </CSSTransition>
    </TransitionGroup>
};

export default TransitionedSwitch;