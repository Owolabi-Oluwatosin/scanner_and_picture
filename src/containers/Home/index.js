import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import './style.css';

/**
* @author
* @function Home
**/

export const Home = (props) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className='container'>
        <div className='home-image to-hidde-image'>
          <img src='/images/scan-picture-svg.svg' width={300} height={300} alt='snap_image'/>
        </div>
        <div className='home-text-and-button'>
          <h3 className='heading-text'>Scan QRCode and Take instance picture free of cherge</h3>
          <p className='sub-heading-text'>
            Scan QRCode and Take instance picture free of chergeScan QRCode and Take instance picture free of cherge
            Scan QRCode and Take instance picture free of chergeScan QRCode and Take instance picture free of cherge
          </p>
          <div className='button-container'>
            <button className='btn btn-scan' onClick={() => navigate('/camera-to-cw1/scan-qr-code')}>Scan QRCode</button>
            <button className='btn btn-instance-picture' onClick={() => navigate('/camera-to-cw1/take-picture')}>Take instance picture</button>
          </div>
        </div>
        <div className='home-image to-hidde-image-media'>
          <img src='/images/scan-picture-svg.svg' className='image-size' alt='snap_image'/>
        </div>
      </div>
    </Layout>
  )

}