import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import MenuBar from '../Header/MenuBar';
import styles from "../../styles/Home.module.css";
import HtmlHeader from '../Header/HtmlHeader';
import Footer from '../Footer/Footer';

function Layout(props) {
  return (
    <div>
      {/* <MenuBar /> */}
      <HtmlHeader />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
