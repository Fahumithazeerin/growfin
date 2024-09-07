import { Tabs, TabsProps } from "antd";
import { CustomTabs } from "../customer/styled";
import AppFeatures from "./app-featu";

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Instant Capture',
      children: <AppFeatures />,
    },
    {
      key: '2',
      label: 'Accurate Match',
      children: <AppFeatures />,
    },
    {
      key: '3',
      label: 'Remittance Extraction',
      children: <AppFeatures />,
    },
    {
      key: '4',
      label: 'Exceptions Handling',
      children: <AppFeatures />,
    },
    {
      key: '5',
      label: 'Touchless Posting',
      children: <AppFeatures />,
    }
  ];

export default function TabContainer() {
    return (
    <div style = {{
        width: '100%',
        height: '783px',
        gap: '50px'
       
    }}>
        <CustomTabs defaultActiveKey = '1'  
        tabBarGutter={140}
        items={items}
         />  
    </div>
    )
};
