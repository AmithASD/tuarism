import '../../styles/home.css'
// import Logo from '../../assets/img/home/logo.jpg'
import Logo from '../../assets/img/home/result.png'
import { bgColor } from '../../common/color/color';
import HorizontalLoader from '../../components/loading/Loading';
export const Home = () => {
  return (
    <>
      <div className='home-outer' style={{background:bgColor}}>
        <h1 className='head-topic'>COMING SOON...</h1>
        <HorizontalLoader/>
        <img src={Logo}/>
        <div className='description'>
            <h2 className='add-topic'>THAWTHISA FOOD AND BEVERAGES (PVT) LTD</h2>
            <p>No. 12, Park Road, Colombo 05,  Hotline : 0777445858</p>
            <p>web : www.thawthisafood.lk </p>
        </div>
      </div>
    </>
  );
};
