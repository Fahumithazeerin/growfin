import Oracle from '../asset/integrations/oracle.png';
import SAP from '../asset/integrations/sap.png';
import Intuit from '../asset/integrations/intuit.png';
import BOA from '../asset/integrations/BOA.png';
import JPMorganChase from '../asset/integrations/JP-Morgan-Chase.png';
import Wells_Fargo from '../asset/integrations/Wells_Fargo.png';
import Security1 from '../asset/integrations/Security.png';
import Security2 from '../asset/integrations/Security2.png';
import { Divider } from 'antd';
import { Dividers } from './customer/styled';

const data = [
    {
        heading: 'Tight ERP Integration',
        para: <p style={{
            width: '408px',
            height: '94px',
           fontFamily: 'Inter',
           fontSize: '20px',
           fontWeight: '400',
           lineHeight: '28px',
           textAlign: 'left',
           color: 'rgba(0, 0, 0, 1)'
       }}> Keep your books accurate and up-to-date, <br />
               and the auditors at bay with  a seamless <br /> 
               2-way integration with your ERP.</p>,
        style: {
          display: 'flex',
          justifyContent: 'center',
          width: '356px',
          height: '34px',
          gap: '34px',
          marginTop: '3rem',
        },
        divider: true,
        images: [
            { 
              src: Oracle,
              style: {
                width: '97px',
                height: '30px',
              }
            },
            {
              src: SAP,
              style: {
                width: '66px',
                height: '34px',
              },
            },
            {
              src: Intuit,
              style: {
                width: '125px',
                height: '34px',
              }
            }
        ]
    },
    {
        heading: 'Unmatched Security',
        para:  <p style={{
            width: '408px',
            height: '94px',
           fontFamily: 'Inter',
           fontSize: '20px',
           fontWeight: '400',
           lineHeight: '28px',
           textAlign: 'left',
           color: 'rgba(0, 0, 0, 1)'
       }}> Stay confident and compliant with, <br />
               oftware that’s approved by the world’s <br /> 
               most trusted certifications.</p>,
        style: {
            width: '171px',
            height: '69px',
            display: 'flex',
            gap: '34px',
            marginTop: '2rem',
        },
        divider: true,
        images: [
            { 
              src: Security1,
              style: {
                width: '69px',
                height: '69px',
              }
            },
            {
              src: Security2,
              style: {
                width: '68px',
                height: '69px',
              },
            }
        ]
    },
    {
        heading: 'Wide Bank Coverage',
        para:  <p style={{
            width: '408px',
            height: '94px',
           fontFamily: 'Inter',
           fontSize: '20px',
           fontWeight: '400',
           lineHeight: '28px',
           textAlign: 'left',
           color: 'rgba(0, 0, 0, 1)'
       }}> Out-of-the-box connection to all your <br />
               bank accounts across geographies to read <br /> 
               payments in real-time.</p>,
        style: {
            width: '326px',
            height: '59px',
            display: 'flex',
            gap: '38px',
            marginTop: '2rem',
        },
        divider: false,
        images: [
            { 
              src: BOA,
              style: {
                width: '104px',
                height: '50px',
              }
            },
            {
              src: JPMorganChase,
              style: {
                width: '99px',
                height: '56px',
              },
            },
            {
              src: Wells_Fargo,
              style: {
                width: '55px',
                height: '59px',
              },
            }
        ]
    }
]

export default function Integrations() {
    return (
    <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '576px',
            gap: '38px',
            padding: '0px, 80px, 0px, 0px',
            boxSizing: 'border-box',
            marginTop: '7rem'
        }}>
            {data && data.map((d) => {
               return <>
               <div key={d.heading} style={{
                   display: 'flex',
                   flexDirection: 'row',
                   width: '90%',
                   height: '94px',
                   gap: '45px',
                    marginTop: '-4rem'
               }}>
                   <div style={{
                       display: 'flex',
                       alignContent: 'flex-start',
                       width: '65%',
                       height: '94px',
                       gap: '34px'
                   }}>
                       <h3 style={{
                           display: 'flex',
                           width: '431px',
                           height: '45px',
                           fontFamily: 'Montserrat',
                           fontSize: '32px',
                           fontWeight: '700',
                           lineHeight: '44.8px',
                           textAlign: 'left',
                           color: 'rgba(0, 0, 0, 1)'
                       }}>
                           {d.heading}
                       </h3>
                       <p style={{
                           width: '500px',
                           height: '94px',
                           fontFamily: 'Inter',
                           fontSize: '20px',
                           fontWeight: '400',
                           lineHeight: '28px',
                           textAlign: 'left',
                           color: 'rgba(0, 0, 0, 1)'
                       }}>
                           {d.para}
                       </p>
                   </div>
                   <div key={d.heading} style={d.style}>
                       {d.images && d.images.map((img) => {
                           return <img key={img.src} src={img.src} alt='none.png' style={img.style} />;
                       })}
                   </div>
               </div>
               {d.divider && <Dividers style = {{
                minWidth: '50rem',
                marginLeft: '21rem',
                border: '0.2px solid black'
               }}/>}
            </>
            })}
        </div>
    )
};