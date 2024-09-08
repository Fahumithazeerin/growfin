import LinkedIn from '../../asset/socials/linkedIn.png';
import Twitter from '../../asset/socials/twitter.png';
import FaceBook from '../../asset/socials/fb.png';
import Instagram from '../../asset/socials/insta.png';
import { Href } from './styled';

const footerOne = [
    { name: 'Strategize', link: 'https://www.growfin.ai/features/strategize' },
    { name: 'Collaboration', link: 'https://www.growfin.ai/features/collaboration'},
    { name: 'Tracking', link: 'https://www.growfin.ai/features/tracking' },
    { name: 'Reporting', link: 'https://www.growfin.ai/features/reporting' }
  ];
  
  const footerTwo = [
    { name: 'CFOs and Directors of Finance', link: 'https://www.growfin.ai/roles#cfos-and-director-of-finance' },
    { name: 'Controllers', link: 'https://www.growfin.ai/roles#cfos-and-director-of-finance' },
    { name: 'AR Managers', link: 'https://www.growfin.ai/roles#ar-managers' },
    { name: 'Collection Teams', link: 'https://www.growfin.ai/roles#csms-aes-and-ams' },
    { name: 'CSMs, AEs and AMs', link: 'https://www.growfin.ai/roles#csms-aes-and-ams' }
  ];
  
  const footerThree = [
    { name: 'Blog', link: 'https://www.growfin.ai/blog' },
    { name: 'Webinars', link: 'https://www.growfin.ai/webinars' },
    { name: 'The Casheroes', link: 'https://www.growfin.ai/the-casheroes' },
    { name: 'ROI Calculator', link: 'https://www.growfin.ai/roi-calculator' }
  ];
  
  const footerFour = [
    { name: 'About us', link: 'https://www.growfin.ai/our-story' },
    { name: 'Careers', link: 'https://www.growfin.ai/careers' },
    { name: 'Book a Demo', link: 'https://www.growfin.ai/features/strategize' }
  ];
  
  const footerFive = [
    { name: 'hello@growfin.ai' },
    { name: '3082 Moser Way, Marietta, GA 30060' }
  ];
  
  const footerSix = [
    { name: 'Terms of use', link: 'https://www.growfin.ai/legal/terms' },
    { name: 'Privacy policy', link: 'https://www.growfin.ai/legal/privacy-policy' }
  ];
  
  const socialHandles = [
    { name: LinkedIn, link: 'https://linkedin.com' },
    { name: Twitter, link: 'https://twitter.com' },
    { name: FaceBook, link: 'https://facebook.com' },
    { name: Instagram, link: 'https://instagram.com' }
  ];
  

export default function Footer() {
    return (
       <div style={{
            width: '100%',
            height: '540px',
            padding: '59px, 0px, 64px, 80px',
            gap: '46px',
            background: 'rgba(0, 0, 0, 1)',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                width: '90%',
                height: '400px',
                gap: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ul style={{
                    width: '164px',
                    height: '161px',
                    color: ' rgba(255, 255, 255, 1)'
                }}>
                 <p style={{
                    width: '68px',
                    height: '26px',
                    padding: '5px',
                    gap: '10px',
                    boxSizing: 'border-box',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: '400',
                    lineHeight: '18.69px',
                    textAlign: 'left'

                }}> Features </p>
                  {footerOne.map((item) => {
                    return <li key = {item.name} style={{
                        width: '112px',
                        height: '30px',
                        listStyle: 'none',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '20.03px',
                        textAlign: 'left',
                        gap: '3px'
                    }}> <Href href = {item.link}>{ item.name } </Href></li>
                  })}
                </ul>
                <ul style={{
                    marginTop: '7rem',
                    width: '267px',
                    height: '246px',
                    gap: '1px',
                    color: ' rgba(255, 255, 255, 1)'
                }}>
                 <p style={{
                    width: '137px',
                    height: '19px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '18.69px',
                    textAlign: 'left'

                }}> What's in it for you? </p>
                <p style = {{
                     width: '54px',
                     height: '20px',
                     fontFamily: 'Inter',
                     fontSize: '15px',
                     fontWeight: '500',
                     lineHeight: '20.03px',
                     textAlign: 'left',
                     color: ' rgba(255, 255, 255, 1)'
                    }}>By Role</p>
                  {footerTwo.map((item) => {
                    return <li key = {item.name} style={{
                        marginLeft: '1.5rem',
                        width: '257px',
                        height: '30px',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '20.03px',
                        textAlign: 'left',
                        gap: '3px'
                    }}> <Href href = {item.link}>{ item.name } </Href> </li>
                  })}
                  <p style = {{
                     width: '102px',
                     height: '20px',
                     fontFamily: 'Inter',
                     fontSize: '15px',
                     fontWeight: '500',
                     lineHeight: '20.03px',
                     textAlign: 'left',
                     marginTop: '0.2rem'
                    }}>By Tech Stack</p>
                </ul>
                <ul style={{
                    width: '164px',
                    height: '161px',
                    color: ' rgba(255, 255, 255, 1)'
                }}>
                <p style={{
                    width: '68px',
                    height: '26px',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: '400',
                    lineHeight: '18.69px',
                    textAlign: 'left'

                }}> Resources </p>
                  {footerThree.map((item) => {
                    return <li key = {item.name} style={{
                        width: '112px',
                        height: '30px',
                        listStyle: 'none',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '20.03px',
                        textAlign: 'left',
                        gap: '3px'
                    }}> <Href href = {item.link}>{ item.name } </Href> </li>
                  })}
                </ul>
                <ul style={{
                    width: '164px',
                    height: '161px',
                    color: ' rgba(255, 255, 255, 1)'
                }}>
                <p style={{
                    width: '68px',
                    height: '26px',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: '400',
                    lineHeight: '18.69px',
                    textAlign: 'left'

                }}> Company </p>
                  {footerFour.map((item) => {
                    return <li key = {item.name} style={{
                        width: '112px',
                        height: '30px',
                        listStyle: 'none',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '20.03px',
                        textAlign: 'left',
                        gap: '3px'
                    }}> <Href href = {item.link}>{ item.name } </Href> </li>
                  })}
                </ul>
                <ul style={{
                    width: '164px',
                    height: '161px',
                    color: ' rgba(255, 255, 255, 1)'
                }}>
                <p style={{
                    width: '100px',
                    height: '26px',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: '400',
                    lineHeight: '18.69px',
                    textAlign: 'left'

                }}> Contact us </p>
                   <li style={{
                        width: '142px',
                        height: '30px',
                        listStyle: 'none',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '20.03px',
                        textAlign: 'left',
                        gap: '3px',
                        color: ''
                    }}> 
                        <a href="mailto:hello@growfin.ai" style= {{ color: 'rgba(5, 255, 255,1)' }}>
                            hello@growfin.ai
                        </a> 
                    </li>
                       <li style={{
                        width: '142px',
                        height: '30px',
                        listStyle: 'none',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '20.03px',
                        textAlign: 'left',
                        gap: '3px'
                    }}> 3082 Moser Way, Marietta, GA 30060 </li>
                </ul>
                <ul style={{
                    width: '164px',
                    height: '161px',
                    color: ' rgba(255, 255, 255, 1)'
                }}>
                <p style={{
                    width: '68px',
                    height: '26px',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: '400',
                    lineHeight: '18.69px',
                    textAlign: 'left'

                }}> Legal </p>
                  {footerSix.map((item) => {
                    return <li key = {item.name} style={{
                        width: '112px',
                        height: '30px',
                        listStyle: 'none',
                        fontFamily: 'Inter',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '20.03px',
                        textAlign: 'left',
                        gap: '3px'
                    }}> <Href href = {item.link}>{ item.name } </Href></li>
                  })}
                </ul>
            </div>
            <div style={{
                width: '85%',
                height: '400px',
                display: 'flex',
                alignItems: 'center'
            }}>
            <div style={{
                width: '600px',
                height: '30px',
                gap: '35px',
                display: 'flex',
            }}>
                <div style={{
                    width: '200px',
                    height: '30px',
                    display: 'flex',
                    gap: '15px',
                }}>
                    {socialHandles && socialHandles.map((socialHandle) => {
                        return <Href href = {socialHandle.link} style={{
                            width: '30px',
                            height: '30px',
                            }}>
                            <img src = {socialHandle.name} alt = 'social.png' key ={socialHandle.name} />
                        </Href>
                    })}
                </div>
                <div  style={{
                    width: '518px',
                    height: '29px',
                    padding: '5px',
                    gap: '10px',
                    color: 'rgba(255, 255, 255, 1)'
                }}>
                  Copyright © 2023 Growfin. All rights reserved.
                </div>
            </div>
        </div>
        </div>
    ); 
};