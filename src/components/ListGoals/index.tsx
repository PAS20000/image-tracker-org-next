import * as React from 'react'
import * as ReactIFA from 'react-icons/fa'
import { AiFillControl } from 'react-icons/ai'
import css from './index.module.css'
import { BsCameraFill, BsFillGearFill } from 'react-icons/bs'
import { ImVideoCamera } from 'react-icons/im'
import { TbWorldDownload } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
import Goal from './Goal'
import Link from '../Article/Link'
import Article from '../Article'

const ListGoals = () => {

    return (
        <Article 
            title='Goals for new features' 
            icon={ <ReactIFA.FaTrophy /> } 
            custom={
                <div className={css['container-list']}>
                    <ul>
                        <Goal 
                            header={
                                {
                                    value : 'Dashboard',
                                    icon : <AiFillControl />,
                                    billing_target : 400
                                }
                            }
                            content={
                                {
                                    value : 'Capture page images automatically.',
                                    icon :  <BsCameraFill />
                                }
                            }
                            text='Press a button and activate auto capture, no more manually scrolling.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'Which websites should i work',
                                    icon :  <ReactIFA.FaListAlt/> 
                                }
                            }
                            text='Choose the websites you want me to crawl the images.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'Automatic conversion to the desired extension',
                                    icon : <ReactIFA.FaImage />
                                }
                            }
                            text='Set up automatic conversion, to jpg, png, webp and other formats.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'Image filters and effects',
                                    icon :  <ReactIFA.FaMagic />
                                }
                            }
                            text='Add filters and effects to images, similar to Instagram filters.'
                        />
                    </ul>
                    <ul>
                        <Goal 
                            header={
                                {
                                    value : 'Drive',
                                    icon :<ReactIFA.FaCloudUploadAlt/>,
                                    billing_target : 1000
                                }
                            }
                            content={
                                {
                                    value : 'Storage and sharing',
                                    icon :   <ReactIFA.FaArchive /> 
                                }
                            }
                            text='Store and share files in the cloud, with your friends or with your app, 
                            you can upload them directly from your device or already use the images available in the extension.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'File life cycle',
                                    icon :  <ReactIFA.FaBusinessTime /> 
                                }
                            }
                            text='The file can be created as temporary, and will be deleted by a date set by you.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'API for you developer',
                                    icon :  <BsFillGearFill /> 
                                }
                            }
                            text='It will be agnostic, easy to authenticate, 
                            using a secret key (you can configure which folders/files it will grant access) or 
                            token (in this case your admin account, you can also use a secret key in place of the token), 
                            any app can use it regardless of language.'
                        />
                    </ul>
                    <ul>
                        <Goal 
                            header={
                                {
                                    value : 'Browser extension, will support video files',
                                    icon :<ImVideoCamera /> ,
                                    billing_target : 2000
                                }
                            }
                            content={
                                {
                                    value : 'Download videos.',
                                    icon :   <ReactIFA.FaDownload /> 
                                }
                            }
                            text='Download multiple videos from websites like Disney+, Netflix and other streaming services.'
                        />
                        <Goal 
                            content={
                                {
                                    value : ' Record your screen',
                                    icon :  <ReactIFA.FaRecordVinyl />
                                }
                            }
                            text='Download the recording in mp4 format and share it on our drive if you want.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'Support chat',
                                    icon :  <BiSupport />
                                }
                            }
                            text="In addition to having support on discord, we will receive messages and respond in chat, 
                            thus leaving the support tab only for frequent questions and common bug fixes, 
                            the chat will be available on our website, extension, desktop and mobile (when created), 
                            so that we can better serve you, clarifying doubts and solving any problems that may arise."
                        />
                    </ul>
                    <ul>
                        <Goal 
                            header={
                                {
                                    value : 'Safe room',
                                    icon : <ReactIFA.FaBed/>,
                                    billing_target : 3000
                                }
                            }
                            content={
                                {
                                    value : 'Connect with your friends or meet new people',
                                    icon : <ReactIFA.FaUsers /> 
                                }
                            }
                            text='Create a public or private chat room and share it via a link with whoever you want. 
                            The public room will be available for anyone to enter and search through a tool of our extension, 
                            the private ones will only be accessible through a link and password and will not be indexed in our search.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'Chat',
                                    icon : <ReactIFA.FaRocketchat /> 
                                }
                            }
                            text='Chat with your friends via chat, send audios and use your webcam if you want.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'Secure network',
                                    icon : <ReactIFA.FaShieldAlt /> 
                                }
                            }
                            text='The rooms you create will be available in the lobby (random people can join via a search or link), 
                            private rooms will only be accessible via a link and password (they will not be listed in the lobby), 
                            messages are also protected by encryption and when the creator closes the room, 
                            all content within it will be deleted from our servers immediately upon closing 
                            (thus ensuring your security and anonymity).'
                        />
                    </ul>
                    <ul>
                        <Goal 
                            header={
                                {
                                    value : 'Discord Bot',
                                    icon : <ReactIFA.FaRobot/>,
                                    billing_target : 4000
                                }
                            }
                            content={
                                {
                                    value : 'Record and send audio',
                                    icon : <ReactIFA.FaFileAudio /> 
                                }
                            }
                            text='Record and send audio as whatsapp but on Discord.'
                        />
                        <Goal 
                            content={
                                {
                                    value : 'Get image tracker drive file',
                                    icon :  <ReactIFA.FaSearch/> 
                                }
                            }
                            text='Search the file(s), folder(s) and show them in Discord chat using this command.'
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Upload file to image tracker drive',
                                    icon :  <ReactIFA.FaUpload />  
                                }
                            }
                            text='Upload file(s) or folder(s) to the image tracker drive, via links or your own device'
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Create safe room',
                                    icon :  <ReactIFA.FaBed />  
                                }
                            }
                            text='Create a room and share the link in discord chat, to certain people or in a channel.'
                        />
                    </ul>
                    <ul>
                        <Goal 
                            header={
                                {
                                    value : 'Desktop app',
                                    icon : <ReactIFA.FaDesktop/>,
                                    billing_target : 5000
                                }
                            }
                            content={
                                {
                                    value : 'New look',
                                    icon : <ReactIFA.FaPaintBrush /> 
                                }
                            }
                            text="When we stop being an extension 
                            (it will still be active, but we will only update to fix bugs and we won't add anything else to it.) 
                            and we adapt to computers, we will have more possibilities and we can improve the optimization and 
                            performance of our application, both from current and new features, 
                            in addition to opening up even greater possibilities for what we can add in features."
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Extremely higher performance',
                                    icon :  <ReactIFA.FaHandSparkles />  
                                }
                            }
                            text='As said before, 
                            it will be much more robust so that you can use Image Tracker in an even simpler and faster way.'
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Download in a simplified way',
                                    icon :  <TbWorldDownload />  
                                }
                            }
                            text='Download the full media from a page just by placing the link and 
                            configuring our tool or continue using it as before,
                            load the page in our desktop application and use all the tools we have made available so far.'
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Mouse and keyboard macro for the web page',
                                    icon :  <ReactIFA.FaKeyboard />  
                                }
                            }
                            text='Automate mouse and keyboard presses, 
                            the action will be repeated on that page and you can also share the 
                            configuration or use the configuration of others.'
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Simple edits',
                                    icon :  <ReactIFA.FaMagic />  
                                }
                            }
                            text='Convert files, use filters, effects, 
                            add text and other editing features like contrast and blur.'
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Spy and Domain Analysis',
                                    icon :  <ReactIFA.FaEye />  
                                }
                            }
                            text='Generate reports about the domain (website) discover possible security flaws, 
                            find ads that point to it and also see the traffic of people on the website.'
                        />
                    </ul>
                    <ul>
                        <Goal 
                            header={
                                {
                                    value : 'Mobile app',
                                    icon : <ReactIFA.FaMobile/>,
                                    billing_target : 6000
                                }
                            }
                            content={
                                {
                                    value : 'All tools',
                                    icon : <ReactIFA.FaTools /> 
                                }
                            }
                            text="Everything you're already using, now available on your mobile."
                        />
                        <Goal 
                            content={
                                {
                                    value :  'Compatibility',
                                    icon :  <ReactIFA.FaAndroid />  
                                }
                            }
                            text='Compatibility with iOS (Apple System) and Android. '
                        />
                    </ul>
                    <p>
                        💡Leave your suggestions on our  
                        <Link
                        href='https://discord.com/invite/2kyjbbjBwe' 
                        text='Discord'
                        /> or&nbsp;
                        <Link 
                        href='/Support' 
                        text='Support'
                        />.
                        Be part of the community and always leave your opinions, in addition to evaluating us 
                        on the Google web store so that we are delivering the best possible software to everyone. 💞
                    </p>
                </div>
            } 
        />
    )
}

export default ListGoals