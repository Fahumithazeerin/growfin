import { ColumnContent, ColumnLeft, ColumnRight, ContentSection, ImgSection, IntroContainer, PartnerLogo, PartnerLogoContainer, Percentage, SectionThree, SideContent, SubIntoContainer } from "./styled";
import Revenue from '../../asset/revenue.png';
import Potrait from '../../asset/Portrait_Business.png';
import Bill from '../../asset/Vector.png';
import Time from '../../asset/time.png';
import Automation from '../../asset/automation.png';
import Experience from '../../asset/experience.png';
import MindTickle from '../../asset/comp1.png';
import Locous from '../../asset/logo-Locus.png';
import DrawinBox from '../../asset/logo-darwinbox.png';
import { Button, Divider } from "antd";
import CustomerReview from "../customer/customer-review";
import TabContainer from "../app-exp/app-exp";


function Intro() {
    return(
     <>
        <IntroContainer>
                <SubIntoContainer>
                    <ContentSection>
                        <h1
                            style={{
                                width: '570px',
                                height: '203px',
                                font: 'Montserrat',
                                fontWeight: '700',
                                fontSize: '64px',
                                lineHeight: '76.8px',
                                color: 'rgba(255, 255, 255, 1)'
                            }}>
                            Real-Time <br />Cash Application Software
                        </h1>
                        <h3
                            style={{
                                width: '422px',
                                height: '114px',
                                font: 'Inter',
                                fontWeight: '400',
                                fontSize: '20px',
                                lineHeight: '30px',
                                color: 'rgba(255, 255, 255, 1)',
                                wordWrap: 'break-word'
                            }}>
                            Radically minimize manual intervention and achieve same-day closure with Growfin’s <br />ML-powered Cash Application that delivers accurate, touchless posting.
                        </h3>
                        <div
                            style={{
                                width: '449px',
                                height: '135px',
                                top: '413px',
                                boxSizing: 'border-box',
                                padding: '64px 0px 22px 0px',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                            <Button type='primary'
                                style={{
                                    borderRadius: '20px',
                                    padding: '12, 24, 12, 24',
                                    background: 'rgba(5, 255, 255, 1)',
                                    width: '239px',
                                    height: '49px',
                                    font: 'Montserrat',
                                    fontWeight: '600',
                                    fontSize: '18px',
                                    lineHeight: '25.2px',
                                    color: 'rgba(0, 0, 0, 1)',
                                    gap: '8px'
                                }}
                            >
                                Schedule a Demo
                            </Button>
                            <Button
                                ghost
                                style={{
                                    borderRadius: '20px',
                                    padding: '12, 24, 12, 24',
                                    width: '194px',
                                    height: '49px',
                                    font: 'Montserrat',
                                    fontWeight: '600',
                                    fontSize: '16px',
                                    lineHeight: '22.4px',
                                    color: 'rgba(5, 255, 255, 1)',
                                    border: '2px solid rgba(5, 255, 255, 1)',
                                    gap: '8px'
                                }}>
                                Request Access
                            </Button>
                        </div>
                    </ContentSection>
                    <ImgSection src={Revenue} alt='revenue' />
                </SubIntoContainer>
        </IntroContainer>
        <div 
            style={{
            width: '100%',
            height: '256px',
            boxSizing: 'border-box',
            padding: '64px 0px 64px 0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <div 
        style={{
            width: '90%',
            height: '184px',
            padding: '24px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <div 
                style={{
                    width: '752px',
                    height: '136px',
                    padding: '24px',
                    fontSize: '52px',
                    font: 'Montserrat',
                    fontWeight: '700',
                    lineHeight: '67.6px',
                    textAlign: 'center',
                }}>

                <span 
                style = {{ 
                    background: '-webkit-linear-gradient(#2563EB 10.35%, #000000 136.14%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    What our Early Customers 
                </span> 
                <br/>
                <span 
                style = {{ 
                    background: '-webkit-linear-gradient(rgba(0, 0, 0, 1) 20.35%, rgba(37, 99, 235, 1) 136.14%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    have Already Achieved
                </span> 
            </div>
            </div>
        </div>
        <SectionThree>
          <ColumnLeft>
           <img src = {Potrait} alt = 'business' style = {{width: '522px', height: '635px'}}/>
          </ColumnLeft>
          <ColumnRight>
            <ColumnContent>
             <div style = {{width: '62px', height: '62px', color: 'rgba(37, 99, 235, 1)'}}>
               <img src = {Bill} alt = 'bill' 
                  style={{
                    width: '52.7px',
                    height: '52.7px',
                    top: '9px',
                    left: '5px'
                  }}/>
            </div>
            <Percentage> 95 
                <span style = {{
                    font: 'Montserrat',
                    fontWeight: '700',
                    fontSize: '50px',
                    lineHeight: '70px'
                }}> 
                    % 
                </span>
             </Percentage> 
             <SideContent style={{
                width: '233px',
             }}>
                Increase in same-day invoice posting
             </SideContent>
            </ColumnContent>
            <Divider 
              style={{
                marginTop: '0rem',
                width: '600px',
                border: '1px solid rgba(87, 83, 78, 1)'
              }}/>
            <ColumnContent style={{width: '542px'}}>
             <div style = {{width: '62px', height: '62px', color: 'rgba(37, 99, 235, 1)'}}>
               <img src = {Time} alt = 'bill' 
                  style={{
                    width: '52.7px',
                    height: '52.7px',
                    top: '9px',
                    left: '5px'
                  }}/>
            </div>
            <Percentage> 70
                <span style = {{
                    font: 'Montserrat',
                    fontWeight: '700',
                    fontSize: '50px',
                    lineHeight: '70px'
                }}> 
                    % 
                </span>
             </Percentage> 
             <SideContent style={{
                width: '273px',
             }}>
                Reduction in posting delays and errors
             </SideContent>
            </ColumnContent>
            <Divider 
              style={{
                marginTop: '1rem',
                width: '600px',
                border: '1px solid rgba(87, 83, 78, 1)'
              }}/>
            <ColumnContent style={{width: '569px', height: '71px'}}>
             <div style = {{width: '62px', height: '62px', color: 'rgba(37, 99, 235, 1)'}}>
               <img src = {Automation} alt = 'bill' 
                  style={{
                    width: '52.7px',
                    height: '52.7px',
                    top: '9px',
                    left: '5px'
                  }}/>
            </div>
            <Percentage> 75 
                <span style = {{
                    font: 'Montserrat',
                    fontWeight: '700',
                    fontSize: '50px',
                    lineHeight: '70px'
                }}> 
                    % 
                </span>
             </Percentage> 
             <SideContent style={{
                width: '299px',
                height: '71px'
             }}>
               Increase in automation for manual Cash Application
             </SideContent>
            </ColumnContent>
            <Divider 
              style={{
                marginTop: '1rem',
                width: '600px',
                border: '1px solid rgba(87, 83, 78, 1)'
              }}/>
            <ColumnContent style={{width: '569px'}}>
             <div style = {{width: '62px', height: '62px', color: 'rgba(37, 99, 235, 1)'}}>
               <img src = {Experience} alt = 'bill' 
                  style={{
                    width: '52.7px',
                    height: '52.7px',
                    top: '9px',
                    left: '5px'
                  }}/>
            </div>
            <Percentage> 100
                <span style = {{
                    font: 'Montserrat',
                    fontWeight: '700',
                    fontSize: '50px',
                    lineHeight: '70px'
                }}> 
                    % 
                </span>
             </Percentage> 
             <SideContent style={{
                width: '300px',
             }}>
               Improvement in customer communication & experience
             </SideContent>
            </ColumnContent>
          </ColumnRight>
        </SectionThree>
        <PartnerLogoContainer>
          <PartnerLogo>
            <img 
              src = {MindTickle} 
              alt = 'logo_mindtickle' 
              style={{
                width: '198px',
                height: '31px'
              }}/>
            <img 
              src = {Locous} 
              alt = 'logo_locous' 
              style={{
                width: '144.29px',
                height: '36.33px'
              }}
            />
            <img 
              src = {DrawinBox} 
              alt = 'logo_drawinbox'
              style={{
                width: '263.2px',
                height: '58px'
              }}
            />
          </PartnerLogo>
        </PartnerLogoContainer>
        <CustomerReview />
        <TabContainer />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: '10px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            width: '946px',
            height: '200px',
            gap: '30px',
            textAlign: 'center',
            fontFamily: 'Montserrat',
            fontSize: '52px',
            fontWeight: '700',
            lineHeight: '67.6px',
          }}>
          <span style={{
            background: '-webkit-linear-gradient(270deg, #2563EB 30%, #000000 140.58%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

          }}>
             Secure, Seamless, and Scalable 
           </span> <br />
          <span style = {{
               background: '-webkit-linear-gradient(270deg, #2563EB -20.29%, #000000 90.90%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
            }}> Cash Application </span>

          </div>
          <p style={{
            width: '830px',
            height: '68px',
            gap: '50px',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '24px',
            fontWeight: '300',
            lineHeight: '33.6px',
            color: 'rgb(0,0,0,1)',
          }}>
           Integrate seamlessly with all your banks and ERP, and keep your auditors happy with state-of-the-art compliance and security measures.
          </p>
        </div>

    </>
    );
}

export default Intro;
