import React, { useState, useRef } from 'react';
import { CustomAlert } from '../../components/Utils/Alert';
import './style.css';

/**
* @author
* @function ScanQRcode
**/

export const Picture = (props) => {
    const [errorAlert, setErrorAlert] = useState(false);
    const [success, setSuccess] = useState(false);
    // eslint-disable-next-line 
    const [selected, setSelected] = useState("environment");
    const [msg, setMsg] = useState('');
    const [resultingPhoto, setResultingPhoto] = useState('');

    const videoRef = useRef(null);
    const photoRef = useRef(null);

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

    const getVideo = async () => {
        navigator.mediaDevices
            .getUserMedia({
                video: {
                    facingMode: {
                        selected
                    },
                    width: 1920,
                    height: 1080
                }
            })
            .then(stream => {
                let video = videoRef.current;
                if (video) {
                    video.srcObject = stream;
                    video.play()
                }
            })
            .catch(err => {
                setMsg(err);
                setErrorAlert(true);
                console.error(err);
            });
    }

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        const dataURL = photo.toDataURL();
        //console.log(dataURL);
        if (dataURL) {
            console.log(dataURL);
            setResultingPhoto(dataURL);
            setMsg('Photo taken');
            setSuccess(true);
        }
    }

    getVideo();

    const handleRefresh = () => {
        setResultingPhoto('');
    }

    const handleClearMsg = () => {
        setSuccess(false)
        setErrorAlert(false)
        setMsg('');
    }

    return (
        <>
            <div className='camera'>
                {errorAlert && <CustomAlert handleClearMsg={handleClearMsg} msg={msg} errorAlert={errorAlert} />}
                {success && <CustomAlert handleClearMsg={handleClearMsg} msg={msg} success={success} />}
                <video ref={videoRef} className={resultingPhoto ? 'canvas-property' : ''}></video>
                <canvas ref={photoRef} className={resultingPhoto ? 'new-canvas-property' : 'canvas-property'}></canvas>
                {
                    resultingPhoto ?
                        <div className=''>
                            <button className='refresh-btn' onClick={handleRefresh}>Refresh</button>
                        </div>
                        :
                        <button className='snap-btn' onClick={takePhoto}>Take a Picture</button>
                }
                {
                    resultingPhoto &&
                    <div className=''>
                        <h4>Please, press and hold or right click to download the image</h4>
                        <img className='image_taken' src={resultingPhoto} alt='image taken' />
                    </div>
                }
            </div>
        </>
    )

}

