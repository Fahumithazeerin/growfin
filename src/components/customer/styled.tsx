import { Carousel, Divider } from "antd";
import styled from "styled-components";

export const CarouselWrapper = styled(Carousel)`
  > .slick-dots li button {
    width: 12px;
    height: 11px;
    border-radius: 80%;
    background: rgba(147, 197, 253, 1);
  }
  > .slick-dots li.slick-active button {
    width: 12px;
    height: 11px;
    border-radius: 70%;
    background: rgba(147, 197, 253, 1);
  }
  width: 1031px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 38.4px;
  gap: 31px;
`;

export const CustomerReviewContainer = styled.div`
  width: 100%;
  height: 447px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
`;

export const Dividers = styled(Divider)`
  width: 153px;
  top: 55px;
  left: 771px;
  border: 0.5px solid rgba(87, 83, 78, 1);
`;

export const CustomerName = styled.div`
 font-family: Montserrat;
 font-size: 18px;
 font-weight: 600;
 line-height: 25.2px;
 text-align: center;
`;

export const Position = styled.span`
 font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  text-align: center;
`;

export const AppFeatures = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 80px Opx 80px;
  gap: 10px;
  background: rgba(228, 253, 255, 1);
`;