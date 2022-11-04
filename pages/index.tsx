import * as ReactIFA from 'react-icons/fa'
import Article from '../src/components/Article'
import Link from '../src/components/Article/Link'
import Carousel from '../src/components/Carousel'
import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar'
import Picture from '../src/components/Picture'
import Signatures from '../src/components/Signatures'
import Title from '../src/components/Title'
import useMedia from '../src/hooks/useMedia'
import ListGoals from '../src/components/ListGoals'
import NextHead from 'next/head'


const Home = () => {
    const { GetPictureByNameS3 } = useMedia()

    const Images = [
      {
        alt : 'Downloading Pokimane Instagram profile pictures with Image Tracker extension',
        title : 'Downloading Pokimane Instagram profile pictures with Image Tracker extension',
        path : GetPictureByNameS3('downloading-profile-pictures-from-instagram-pokimane-09-17-2022')
      },
      {
        alt : 'Downloading Lilypichu Instagram profile pictures with Image Tracker extension',
        title : 'Downloading Lilypichu Instagram profile pictures with Image Tracker extension',
        path : GetPictureByNameS3('downloading-profile-pictures-from-instagram-lilypichu-09-17-2022')
      },
      {
        alt : 'Downloading Loserfruit Instagram profile pictures with Image Tracker extension',
        title : 'Downloading Loserfruit Instagram profile pictures with Image Tracker extension',
        path : GetPictureByNameS3('downloading-profile-pictures-from-instagram-loserfruit-09-17-2022')
      }
    ]
  
    return (
      <>
      <NextHead>
        <title>Image Tracker | Home</title>
      </NextHead>
        <NavBar />
      <div style={{
        transform : 'translate(0px, 75px)'
      }}>
        <Carousel>
            {Images.map(({ alt, path, title }, index) => 
              <Picture
                  key={index}
                  alt={alt}
                  path={path}
                  title={title}
              />
            )}
        </Carousel>
        <Title>
          <Link
            href='https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk' 
            text='Download images from Instagram and others web websites with Image Tracker'
          />
        </Title>
        <Article title='What is Image Tracker ?' icon={ <ReactIFA.FaExclamationCircle /> }>
          It is a tool, more specifically a browser extension (A browser extension a small software module for customizing a web browser, 
          <Link
            href='https://en.wikipedia.org/wiki/Browser_extension'
            text='learn more browser extension'
          />), 
          available on the 
          <Link 
            href='https://chrome.google.com/webstore/category/extensions'
            text='Google Web Store'
          />
          (can be expanded to other platforms in the future, as a mobile app, where it will be available on the 
            <Link 
              href='https://play.google.com/store/games?hl=pt_BR'
              text='Google Play'
            /> and 
            <Link 
              href='https://www.apple.com/br/store'
              text='Apple Store'
            />, see goals on our
            <Link 
              href='https://www.patreon.com/Image_Tracker'
              text='Patreon'
            />
          ), 
          it allows you to download images from Instagram and many other web websites in their original size and with a descriptive name for each one, 
          media downloaded from Instagram or other web websites will be available in a zip file.
        </Article>
        <Article title='About the extension' icon={ <ReactIFA.FaCamera /> }>
          Have you ever needed to download images from a web website and were blocked?, 
          with the&nbsp;
          <Link 
            href='/download' 
            text='browser extension Image Tracker' 
          /> you have control to download images from
          <Link 
            href='https://www.instagram.com' 
            text='Instagram' 
          />,
          <Link 
            href='https://twitter.com/home' 
            text='Twitter' 
          />,
          <Link 
            href='https://pinterest.com' 
            text='Pinterest' 
          />,
          <Link 
            href='https://www.facebook.com' 
            text='Facebook' 
          />,
          and others web websites, 
          in addition, you will have a zoom tool to analyze each image and finally, 
          a compression tool to compress all the images you want into a&nbsp;
          <Link 
            href='https://support.microsoft.com/en-us/windows/zip-and-unzip-files-8d28fa72-f2f9-712f-67df-f80cf89fd4e5'
            text='zip'
          /> file. 
          Now you might be wondering, can Image Tracker download
          <Link 
            href='https://en.wikipedia.org/wiki/GIF' 
            text='gif' 
          /> and other animated images? yes (
          <Link 
            href='https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types' 
            text='about animated media' 
          />), 
          as long as it is not video and it is available on the website page you can download Instagram videos using&nbsp;
          <Link 
            href='https://igram.io'
            text='Igram.io'
          />.
          if you want to give feedback or suggestion,
          you can do it through
          <Link 
            href='https://discord.com/invite/2kyjbbjBwe' 
            text='Discord'
          /> ,
          <Link 
            href='https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk' 
            text='extension'
          /> on
          <Link 
            href='https://chrome.google.com/webstore/category/extensions'
            text='Google Web Store'
          /> or on our
          <Link 
            href='https://www.patreon.com/Image_Tracker'
            text='Patreon'
          />, if you want to see Image Tracker in action just access our
          <Link
            href='https://www.youtube.com/channel/UCnl60Xy3I5Z1pwFvyf14FIQ'
            text='Youtube'
          />,  
          <Link
            href='https://www.tiktok.com/@image_tracker'
            text='Tik Tok'
          /> or 
          <Link 
            href='https://www.instagram.com/imagetracker' 
            text='Instagram' 
          />
        </Article>
            <Article title='Examples of Tools' icon={ <ReactIFA.FaTools /> }>
                    <span style={{
                      display : 'flex',
                      margin : '10px'
                    }}>
                      <Picture 
                        path={GetPictureByNameS3('image-tracker-tool-download-zip-09-17-2022')}
                        alt='image tracker tool download zip'
                        title='image tracker tool download zip'
                        width='400px'
                        height='auto'
                      />
                      <span style={{
                        margin : '10px'
                      }}>
                        In addition to being able to download the images from instagram, 
                        they will be in a zip format,
                        and all web websites will be separated by a folder with their respective name of each website, see here
                        <Link
                           download='Image-Tracker-Zip-Example'
                           href='https://imagetracker.org/media/downloads/Image-Tracker-Zip-Example.zip'
                           text='Download Example Zip'
                        />
                        in the future, if the goal is reached, these zip files can be shared, managed in a simplified way, and stored on
                        Image Tracker Drive similar to
                        <Link 
                          href='https://www.google.com/drive/'
                          text='Google drive'
                        />, this will depend on the will and need of the community.
                        To participate join our
                        <Link 
                          href='https://discord.com/invite/2kyjbbjBwe' 
                          text='Discord'
                        />.
                      </span>
                    </span>
                    <span style={{
                        display : 'flex',
                        margin : '10px'
                    }}>
                      <Picture 
                        path={GetPictureByNameS3('zoom-in-with-image-tracker-tool-09-17-2022')}
                        alt='zoom in with image tracker tool'
                        title='zoom in with image tracker tool'
                        width='400px'
                        height='auto'
                      />
                      <span style={{
                        margin : '10px'
                      }}>
                        Zoom in with the 
                        <Link 
                          href='https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk' 
                          text='Image Tracker'
                        /> tool, tracked images are rendered in the standard carousel format, 
                        you can use the arrow right or arrow left buttons on the panel or keyboard, as well as mouse scrolling also works, 
                        just scroll up and the carousel will go left, scroll down and it will go to the right, 
                        and you can zoom in by clicking with the left mouse button, 
                        you can also remove it by removing the mouse pointer from the image or using the right mouse button.
                      </span>
                  </span>
            </Article>
          <ListGoals />
          <Signatures />
        <Footer />
      </div>
    </>
  )
}

export default Home