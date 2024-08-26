import { Button } from "antd";
import { DemoButtonContainer, HeadContainer, HeadInnerContainer } from "./styled";
import logo from "../../asset/logo.png";

function Header() {
    return(
     <HeadContainer>
        <HeadInnerContainer>
            <img src = {logo} alt = 'logo' 
                style={{
                width: '9rem',
                height: '51px'
            }} />
            <DemoButtonContainer>
                <Button type = 'primary'
                 style = {{ 
                    borderRadius: '20px', 
                    padding: '8px 20px 8px 20px',
                    background: 'rgba(5, 255, 255, 1)',
                    width:'10rem',
                    height: '38px',
                    font: 'Montserrat',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '22.4px',
                    color: 'rgba(15, 23, 42, 1)'
                }}
                >
                  Schedule a Demo
                </Button>
                <Button  
                 ghost
                 style = {{ 
                    borderRadius: '20px', 
                    padding: '8px 20px 8px 20px',
                    width:'186px',
                    height: '38px',
                    font: 'Montserrat',
                    fontWeight: '600',
                    fontSize: '16px',
                    lineHeight: '22.4px',
                    color: 'rgba(5, 255, 255, 1)',
                    border: '2px solid rgba(5, 255, 255, 1)',
                }}>
                  Request Access
                </Button>
            </DemoButtonContainer>
        </HeadInnerContainer>
    </HeadContainer>
    );
}

export default Header;
