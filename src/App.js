import React, {useState,useEffect,useRef}  from 'react';
import {Main,Navbar,Sidebar} from './components/index'
import gsap, {TweenLite, Power3} from "gsap";
import './App.css';

const App = () => {
  let main = useRef(null);
  let main1 = useRef(null);
  let overlay= useRef(null);

  const [width,setWidth] = useState(window.innerWidth);
  const [toggle,setToggle] = useState(false);

  let x;

  let click = () =>{
    setToggle(!toggle)
  }

/*   useEffect(()=>{

  })
 */

  useEffect(()=>{
    console.log(toggle);

    if(width<=420)
    {
      if(toggle)
      {
        TweenLite.to(overlay, 1, {left:+300, ease: Power3.easeInOut})
        TweenLite.to(overlay, 1, {display:"block", ease: Power3.easeInOut})
        TweenLite.to(overlay, 1, {opacity: 0.7, ease: Power3.easeOut})
        TweenLite.to(main, 1, {left: +300, ease: Power3.easeInOut})
        TweenLite.to(main1, 1, {marginLeft: 0, ease: Power3.easeInOut})
      }
    else{
      TweenLite.to(overlay, 1, {left: 0, ease: Power3.easeInOut})
      TweenLite.to(overlay, 1, {display:"none", ease: Power3.easeInOut})
      TweenLite.to(overlay, 1, {opacity: 0, ease: Power3.easeIn})
      TweenLite.to(main, 1, {left: 0, ease: Power3.easeInOut})
      TweenLite.to(main1, 1, {marginLeft: "-300px", ease: Power3.easeInOut})
    }
    }
    else{
      if(toggle)
        {
          TweenLite.to(overlay, 1, {left:+300, ease: Power3.easeInOut})
          TweenLite.to(overlay, 1, {display:"block", ease: Power3.easeInOut})
          TweenLite.to(overlay, 1, {opacity: 0.7, ease: Power3.easeOut})
          TweenLite.to(main, 1, {left: +300, ease: Power3.easeInOut})
          TweenLite.to(main1, 1, {marginLeft: 0, ease: Power3.easeInOut})
        }
      else{
        TweenLite.to(overlay, 1, {left: 0, ease: Power3.easeInOut})
        TweenLite.to(overlay, 1, {display:"none", ease: Power3.easeInOut})
        TweenLite.to(overlay, 1, {opacity: 0, ease: Power3.easeIn})
        TweenLite.to(main, 1, {left: 0, ease: Power3.easeInOut})
        TweenLite.to(main1, 1, {marginLeft: "-300px", ease: Power3.easeInOut})
      }
    }

  },[toggle])
  
  return ( 
    <>
    {/*  toggle ? <Sidebar/> : '' */}
    <div className="mainmain">
        <div ref={el=> overlay=el} className="overlay"></div>

        <div  ref={el => main1 = el} className="main1" >
            <Sidebar  wierd={()=>click()}/>
        </div>

        <div  ref={el => main = el} className="main">
          <Navbar  wierd={()=>click()}/>
          
          <Main head1={"Site of the day"} headsub1={"Previous Winners"} 
                head2={"Mobile Excellence"} headsub2={"Site of the week"}/>
          
          <Main head1={"Academy"} headsub1={"Leading thinkers teach digital talent"} 
                head2={""} headsub2={""}/>
          
          <Main head1={"Nominees"} headsub1={"We need your vote!"} 
                head2={""} headsub2={""}/>
        </div>
    </div>


          
    </>
   );
}

export default App;
