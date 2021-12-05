import Head from 'next/head'
import Image from 'next/image'
import HeaderNav from "../components/Header/HeaderNav";
import styles from '../styles/Home.module.css'
import { Button, MenuItem } from "@material-ui/core";
import HomeBanner from '../components/HomeBanner/HomeBanner';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCard from '../components/Cards/HomeCards/HomeCard';
import Grid from "@material-ui/core/Grid";
import MenuBar from '../components/Header/MenuBar';
import HomeAbout from '../components/About/HomeAbout';
import HomeServices from '../components/Services/HomeServices';
import HomeProducts from '../components/Products/HomeProducts';
import TestimonialSlider from '../components/Testimonies/TestimonialSlider';
import ContactSection from '../components/Contact/ContactSection';
import OtherServices from '../components/Services/Others/OtherServices';


export default function Home() {
  return (
    <div>
      {/* <HeaderNav /> */}
      {/* <MenuBar /> */}
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <OtherServices />
      <HomeProducts />
      <TestimonialSlider />
      <ContactSection />

      <div className={styles.container}>
        {/* <main className={styles.main}>

          
        </main> */}

        
      </div>
    </div>
  );
}
