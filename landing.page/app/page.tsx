'use client'

import styles from "./page.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";


import Image from "next/image";
import ProfileImage from "next/image"
import CenterImage from "next/image"
import Watermark1 from "next/image"
import Watermark2 from "next/image"
import Watermark3 from "next/image"
import Watermark4 from "next/image"
import Watermark5 from "next/image"
import Watermark6 from "next/image"
import Watermark7 from "next/image"
import Watermark8 from "next/image"
import Watermark9 from "next/image"
import Watermark10 from "next/image"




import watermark1 from "/public/watermarks/7.png";
import watermark2 from "/public/watermarks/2.png";
import watermark3 from "/public/watermarks/3.png";
import watermark4 from "/public/watermarks/3.png";
import watermark5 from "/public/watermarks/5.png";
import watermark6 from "/public/watermarks/6.png";
import watermark7 from "/public/watermarks/7.png";
import watermark8 from "/public/watermarks/7.png";
import watermark9 from "/public/watermarks/7.png";
import watermark10 from "/public/watermarks/7.png";






import profileimage from "/public/landing.png";
import centerimage from "/public/mainprofilelink3.png"

import profileiMage from "/public/landingas.png";


import Link from "next/link";



export default function Home() {

  return (
    
    <main className={styles.main}>

      <Watermark1 
      alt = "waterMark1"
      src = {watermark1}
      className={styles.waterMark1}
      />
         <Watermark2 
      alt = "waterMark2"
      src = {watermark2}
      className={styles.waterMark2}

      />   <Watermark3 
      alt = "waterMark3"
      src = {watermark3}
      className={styles.waterMark3}

      />   <Watermark4 
      alt = "waterMark4"
      src = {watermark4}
      className={styles.waterMark4}

      />   <Watermark5 
      alt = "waterMark5"
      src = {watermark5}
      className={styles.waterMark5}

      />   <Watermark6
      alt = "waterMark6"
      src = {watermark6}
      className={styles.waterMark6}

      />   <Watermark7 
      alt = "waterMark7"
      src = {watermark7}
      className={styles.waterMark7}

      />
      <Watermark8 
      alt = "waterMark8"
      src = {watermark8}
      className={styles.waterMark8}

      />
       <Watermark9
      alt = "waterMark9"
      src = {watermark9}
      className={styles.waterMark9}

      />
      <Watermark10
      alt = "waterMark10"
      src = {watermark10}
      className={styles.waterMark10}

      />


      <div className={styles.container}>
        <div className={styles.forImage}>
          <Image 
          alt="profile"
          src={profileimage}
          className={styles.hoverProfile}

          style={{
            width: "120px",
            height: "120px",
          }}
          
          />
          {/* <ProfileImage

          alt="profileiage"
          src={profileiMage}

          style={{
            width: "250px",
            height: "250px",
            position: "absolute",
            top: "40%"
          }}
          
          /> */}

          <span style={{textAlign: "center",position: "absolute",top: "130px",fontFamily: "inherit",color: "rgb(33,33,10)" ,fontSize: "25px"}}> <b>SABA LEKISHVILI</b> </span>
        </div>
        <div className={styles.mainContainer}>
          <span style={{zIndex: "4",position: "absolute",transform: "translateX(-150px)",top:"260px",color: "white"}} > <b>FIVERR PROFILE FOR ORDER</b> </span>
          <Link href={"https://www.fiverr.com/masterof_desig/crate-mini-online-website-for-your-social-links"} >
          <CenterImage 
          alt = "centerImagee"
          src = {centerimage}
          className={styles.hoverimage}

          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px"
          }}
          />
          </Link>
        </div>
        
        <div className={styles.icons} >
          

        <Link style={{color: "black"}}target="_blank" href={"https://www.facebook.com/saba.lekishvili.944"}>  
          <FaFacebook
          size={30}
          />            
        </Link>

        <Link style={{color: "black"}}target="_blank" href={"https://www.instagram.com/_lekishvili_/"}>
          <FaInstagram 
          size={30}
          />            
        </Link>

      <Link style={{color: "black"}} href={"#"}>
        <FaSnapchatGhost 
          size={30}
          />            
      </Link>

      <Link style={{color: "black"}}target="_blank" href={"https://web.telegram.org/a/#6620505497"}>
         <FaTelegram 
         size={30}
         />            
      </Link>

      <Link style={{color: "black"}}target="_blank" href={"https://twitter.com/Sala_Mala7"}>
         <FaTwitter 
         size={30}
         />            
      </Link>

      <Link style={{color: "black"}}target="_blank" href={"https://www.youtube.com/channel/UCziDTAb7HTH83dy5N7OG94g"}>
         <FaYoutube 
         size={30}
         />            
      </Link>

         <Link style={{color: "black"}} target="_blank" href={"https://github.com/Saba981?tab=overview&from=2024-03-01&to=2024-03-19" }>
         <TbBrandGithubFilled 
         size={30}
         />
         </Link>
      <Link style={{color: "black"}} href={"#"}> 
         <FaSpotify 
         size={30}
         />            
      </Link>

        </div>
      </div>
    </main>
  );
}
