import Banks from '../../asset/hut.png';
import Branch from '../../asset/branch.png';
import Percent from '../../asset/percent.png';
import { Divider } from 'antd';

export default function AppFeatures() {
return (
    <div style ={{
      display: 'flex',
      width: '1440px',
      height: '621px',
      gap: '190px'
    }}>
     <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '416px',
        height: '442.99px',
        gap: '54px'
     }}>
     <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '416px',
        height: '266.99px',
        gap: '24px'
     }}>
       <h3 style={{
         width: '416px',
         height: '82px',
         fontFamily: 'Montserrat',
         fontSize: '32px',
         fontWeight: '700',
         lineHeight: '44.8px',
         color: 'rgba(0, 0, 0, 1)'
       }}>
        Instantly Capture All Incoming Payments
       </h3>
       <p style={{
        width: '416px',
        height: '160px',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '28px',
        color: 'rgba(0, 0, 0, 1)',
       }}>
          Still logging into each of your bank accounts and wrestling with spreadsheets? Growfin integrates with your bank accounts to extract every incoming transaction in real-time. It's almost magic.
       </p>
     </div>
     <div style={{
        marginTop: '4rem',
        display: 'flex',
        width: '374px',
        height: '122.99px',
        gap: '24px'
     }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '374px',
        height: '122.99px',
        gap: '20px'
     }}>
         <img src = {Banks} alt = 'fallback.png' style={{
            width: '47px',
            height: '47px',
         }}/>
         <p style={{
            marginTop: '-7px',
            width: '120px',
            height: '56px',
            fontFamily: 'Inter',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(0, 0, 0, 1)'
         }}>
        Integrates with <br />all major banks
         </p>
        </div>
        <Divider type = 'vertical' style={{
            height: '110px',
            border: '1px solid rgba(148, 163, 184, 1)'
        }}/>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '374px',
        height: '122.99px',
        gap: '20px'
     }}>
        <img src = {Percent} alt = 'fallback.png' style={{
            width: '86px',
            height: '47px',
            gap: '10px'
         }}/>
         <p style={{
            marginTop: '-7px',
            width: '163px',
            height: '56px',
            fontFamily: 'Inter',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(0, 0, 0, 1)'
         }}>
          Integrates with <br />all major banks
         </p>
        </div>

     </div>
     </div>
     <img src = {Branch} alt = 'branch.png' style={{
        width: '40%',
        height: '550px',
        left: '250px',
        marginTop: '2rem'
      }} />
    </div>
    )
};