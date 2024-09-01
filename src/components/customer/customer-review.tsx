import { AppFeatures, CarouselWrapper, CustomerName, CustomerReviewContainer, Dividers, Position } from "./styled";
import Quotation from '../../asset/quotation.png';
import { Button, Divider } from "antd";
import Card from "../app-exp/card";

function CustomerReview() {
    return (
        <>
        <CustomerReviewContainer>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                width: '170px',
                height: '60px',
                gap: '19px',
            }}>
                <Divider style={{
                    width: '153px',
                    border: '0.5px solid rgba(87, 83, 78, 1)'
                }} />
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    gap: '5px'
                }}>
                    <img src={Quotation} alt='quotation_1' />
                    <img src={Quotation} alt='quotation_2' />
                </div>
                <Dividers style={{ width: '153px', border: '0.5px solid rgba(87, 83, 78, 1)' }} />
            </div>
            <CarouselWrapper
                autoplay
                autoplaySpeed={4000}
                dots
                dotPosition="bottom"
            >
                <div style={{
                    height: '170px',
                }}>

                    "Growfin's Cash Application has helped us streamline the entire cash application <br />
                    process with less manual intervention & timely posting of payments. We were able <br />
                    to achieve one of our key objectives within months of going live."
                    <CustomerName style={{
                        marginTop: '4rem'
                    }}>
                        - Rohit Namboodiri <Position>,  AR Manager, Locus </Position>
                    </CustomerName>
                </div>
                <div style={{
                    height: '170px'
                }}>
                    "Growfin's Cash Application has helped us streamline the entire cash application <br />
                    process with less manual intervention & timely posting of payments. We were able <br />
                    to achieve one of our key objectives within months of going live."
                    <CustomerName style={{
                        marginTop: '4rem'
                    }}>
                        - Rohit Namboodiri <Position>,  AR Manager, Locus </Position>
                    </CustomerName>
                </div>
            </CarouselWrapper>
        </CustomerReviewContainer>
        <AppFeatures>
            <div style={{
                width: '522px',
                height: '190px',
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: '52px',
                lineHeight: '67.6px',
            }}>
               <span style = {{
                 background: '-webkit-linear-gradient(270deg, #2563EB 40%, #000000 140.58%)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent',
                }}> 
                  Experience 
                </span> <br/>
                <span style = {{
                    background: '-webkit-linear-gradient(270deg, #2563EB, #000000 110.58%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>Cash Application </span>  <br /> 
                <span style = {{
                    background: '-webkit-linear-gradient(270deg, #2563EB 0%, #000000 30.58%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}> Perfection </span> 
            </div>
            <div style={{
                width: '678px',
                height: '168px',
                fontFamily: 'Inter',
                fontWeight: '300',
                fontSize: '24px',
                lineHeight: '33.6px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'flex-end'
            }}>
              Achieve touchless cash application to enable faster and accurate financial reporting for your business and a better experience for your customers.
            </div>
        </AppFeatures>
        <Card />
        <div style={{
            width: '100%',
            height: '205px',
            boxSizing: 'border-box',
            padding: '0px, 0px, 36px, 0px',
            gap: '20px',
            background: 'rgba(228, 253, 255, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Button type = 'primary'  style={{
           width: '240px',
           height: '58px',
           backgroundColor: 'rgba(124, 58, 237, 1)',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           borderRadius: '20px',
           padding: '10px, 36px, 10px, 36px',
           gap: '10px'
        }}>
            <span style={{
                  width: '168px',
                  height: '30px',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '25.2px',
                color: 'rgba(255, 255, 255, 1)',
            }}> Schedule a Demo </span>
        </Button>
        <Button ghost
         style={{
           width: '221px',
           height: '58px',
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           borderRadius: '20px',
           boxSizing: 'border-box',
           padding: '10px, 36px, 10px, 36px',
           gap: '10px',
           border: '3px solid rgba(124, 58, 237, 1)'
        }}>
        <span style={{
                width: '149px',
                height: '25px',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '25.2px',
                color: 'rgba(124, 58, 237, 1)',
            }}> Request a Demo </span>
        </Button>
        </div>
        </>
    )
}

export default CustomerReview;
