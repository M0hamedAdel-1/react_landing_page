import React, { useContext, useState } from 'react'
import logo from '../images/logo.png'
import { Ismobilecontext } from '../../utiles/Ismobilecontext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {Ismobile} = useContext(Ismobilecontext)
  const [activemenu,setactivemenu] = useState(false)
  const links = [
    {id:1,link:"home",isactive:true},
    {id:2,link:"about"},
    {id:3,link:"movies"},
    {id:4,link:"contact"},
  ]

  return (
    <nav>
        <motion.div initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} className='logo'>
            <img src={logo} alt='logo'></img>
        </motion.div>
      {!Ismobile&&<>
        <motion.div initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} className='menu'>
          <ul>
            {links.map((link,index)=><a key={index} href='#' className={link.isactive?"active":""}>{link.link}</a>)}
          </ul>
        </motion.div>
        <motion.div initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}}  className='btn'>
          <button>get started</button>
        </motion.div>
      </>}
      {Ismobile&&<>
        <motion.div initial={{opacity:0,y:20}}  whileInView={{opacity:1,y:0}} transition={{delay:0.5,duration:1}} className='bar' onClick={()=>setactivemenu(!activemenu) }>
        <div></div>
        <div></div>
      </motion.div>
      <div className={`mobile-menu ${activemenu ? "active" :""} `}>
      <ul>
            {links.map((link,index)=><Link key={index} to="/" className={link.isactive?"active":""}>{link.link}</Link>)}
      </ul>
      </div>
      </>}
    </nav>
  )
}

export default Navbar
