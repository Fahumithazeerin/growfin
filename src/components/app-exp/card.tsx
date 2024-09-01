import React from "react";

const data = [
    {
      image: require('../../asset/sync.png'),
      heading: 'Automate Cash Application',
      para: 'Auto-match payments and extract remittances from even unstructured data, and achieve straight-through posting.'
    },
    {
        image: require('../../asset/check.png'),
        heading: 'Achieve Exceptional Accuracy',
        para: 'Ensure precise payment matching, even with partial or overpayments, to reduce posting errors and compliance nightmares.'
    },
    {
        image: require('../../asset/eye.png'),
        heading: 'Deliver Real-time Visibility',
        para: 'Gain real-time visibility into cash flow and AR aging to optimize collection strategies and improve forecasting accuracy.'
    },
    {
        image: require('../../asset/smile.png'),
        heading: 'Enhance Customer Experience',
        para: 'Avoid disputes, incorrect follow-ups and improve customer satisfaction with real-time, touchless cash applications.'
    }

];

export default function Card() {
    return (
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '472px',
        gap: '30px',
        background: 'rgba(228, 253, 255, 1)',
    }}>
    <div style={{
        width: '93%',
        display: 'flex',
        gap: '15px',
    }}>
     {data.map((d) => {
       return (
      <div style={{
            display: 'flex',
            width: '305px',
            height: '432px',
            background: 'rgba(255, 255, 255, 1)',
            padding: '30px',
            boxSizing: 'border-box',
            gap: '30px'
       }}>
         <div style={{
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'flex-start',
             gap: '20px'
         }}>
           <img src = {d.image} alt = 'sync.png' style={{ width: '80px', height: '80px'}}/>
           <div style={{
            width: '245px',
            height: '65px',
            fontFamily: 'Montserrat',
            fontSize: '22px',
            fontWeight: '700',
            lineHeight: '30.8px',
            color: 'rgba(0, 0, 0, 1)'
           }}>
            {d.heading}
           </div>
         </div>
         <div style={{
            width: '245px',
            height: '154px',
            position: 'absolute',
            marginTop: '13rem',
            textAlign: 'left',
            fontFamily: 'Inter',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '25.2px'
         }}>
            {d.para}
         </div>
       </div>
     )})}
    </div>
    </div>
    )
};