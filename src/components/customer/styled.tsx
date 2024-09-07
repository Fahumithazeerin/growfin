import { Carousel, Divider, Tabs } from "antd";
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

export const CustomTabs = styled(Tabs)`
  .ant-tabs-nav .ant-tabs-tab {
    gap: 1px;
  }

  .ant-tabs-nav .ant-tabs-tab-btn {
    width: 120px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
  }


  .ant-tabs-nav .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: rgba(30, 64, 175, 1);
  }

  .ant-tabs-ink-bar {
    background: linear-gradient(103.43deg, #2563EB 25.63%, #8D9097 80.73%);
  }

  .ant-tabs-content {
    color: #333;
  }

  box-sizing: border-box;
  padding-left: 90px;
  padding-right: 80px;
`;