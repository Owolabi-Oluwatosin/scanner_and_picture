import React, { useState, useRef, useEffect } from 'react';
import { CustomAlert } from '../../components/Utils/Alert';
import QrReader from 'react-web-qr-reader';
import './style.css';

/**
* @author
* @function ScanQRcode
**/

export const Scan = (props) => {
    const [errorAlert, setErrorAlert] = useState(false);
    const [success, setSuccess] = useState(false);
    // eslint-disable-next-line 
    const [selected, setSelected] = useState("environment");
    const [msg, setMsg] = useState('');
    const [scanWebcamResult, setScanWebcamResult] = useState('');

    // useEffect(() => {
    //     if (navigator.userAgent.match(/Android/i)
    //         || navigator.userAgent.match(/webOS/i)
    //         || navigator.userAgent.match(/iPhone/i)
    //         || navigator.userAgent.match(/iPad/i)
    //         || navigator.userAgent.match(/iPod/i)
    //         || navigator.userAgent.match(/BlackBerry/i)
    //         || navigator.userAgent.match(/Windows Phone/i)) {
    //         setSelected('user');
    //     }
    // }, []);

    const qrRef = useRef(null);

    const handleErrorWebcam = (error) => {
        setMsg(error);
        setErrorAlert(true);
        console.log(error);
    }

    const handleScanWebcam = (result) => {
        if (result) {
            //console.log(result.data)
            const { data } = result;
            setScanWebcamResult(data);
        }
    }

    useEffect(() => {
        // eslint-disable-next-line 
    }, [scanWebcamResult]);

    //console.log(scanWebcamResult)

    return (
        <>
            <div className='webcam-scan'>
                {errorAlert && <CustomAlert setErrorAlert={setErrorAlert} msg={msg} errorAlert={errorAlert} />}
                {success && <CustomAlert setSuccess={setSuccess} success={success} msg={msg} />}
                <QrReader
                    facingMode={{ideal:selected}}
                    ref={qrRef}
                    delay={100}
                    style={{ with: '100%', border: 'none' }}
                    onError={handleErrorWebcam}
                    onScan={handleScanWebcam}
                />
            </div>
            {
                scanWebcamResult.length > 0 ?
                    <h2 className='webcam-scan-result'>
                        <a href={scanWebcamResult} download> {scanWebcamResult} </a>
                    </h2> : ''
            }

            {/* <a href='/images/scan-picture-svg.svg' download>
          <img src='/images/scan-picture-svg.svg' className='image-size' />
          </a> */}
        </>
    )

}

