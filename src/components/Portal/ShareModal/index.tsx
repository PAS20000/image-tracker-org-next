import * as React from 'react'
import * as ReactIFA from 'react-icons/fa'
import Modal from '../../Modal'
import css from './index.module.css'

const ShareModal = () => {
   const copy = (text : string) => {
        navigator.clipboard.writeText(text)
        alert(`${text} copied`)
   }
   return (
        <Modal targetClose='share' title='Share Image Tracker'>
            <div className={css['container-links']}>
                <a href='https://twitter.com' target='_blank' className={css['twitter']}>
                    <ReactIFA.FaTwitter />
                </a>
                <a href='https://web.whatsapp.com/' target='_blank' className={css['whatsapp']}>
                    <ReactIFA.FaWhatsapp />
                </a>
                <a href='https://web.telegram.org' target='_blank' className={css['telegram']}>
                    <ReactIFA.FaTelegramPlane />
                </a>
                <a href='https://www.instagram.com/' target='_blank' className={css['instagram']}>
                    <ReactIFA.FaInstagram />
                </a>
            </div>
            <div className={css['container-label-video']}>
                <iframe 
                    width='50%'
                    height='240px' 
                    src="https://www.youtube.com/embed/sSNFM7XsYAo?list=RDsSNFM7XsYAo" 
                    title="Surf Curse - Freaks (LYRICS) “I dream of you almost every night hopefully I won't wake”[TikTok Song]" 
                    frameBorder={0} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen 
                />
                <div className={css['container-label']}>
                    <label 
                        onClick={() => copy('https://imagetracker.org')} 
                        title='Copy website link'
                    >
                        <span>
                            <ReactIFA.FaGlobe /> Copy website link
                        </span>
                    </label>
                    <label 
                        onClick={() => copy('video link')} 
                        title='Copy video link'
                    >
                        <span>
                            <ReactIFA.FaVideo /> Copy video link
                        </span>
                    </label>
                    <label 
                        onClick={() => copy('https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk')}
                        title='Copy download link'
                    >
                        <span>
                            <ReactIFA.FaDownload /> Copy download link
                        </span>
                    </label>
                    <label 
                        onClick={() => copy('https://www.patreon.com/Image_Tracker')}
                        title='Copy Patreon link'
                    >
                        <span>
                            <ReactIFA.FaPatreon /> Copy Patreon link
                        </span>
                    </label>
                </div>
            </div>
        </Modal>
    )
}

export default ShareModal