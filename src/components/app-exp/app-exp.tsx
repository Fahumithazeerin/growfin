import { Tabs, TabsProps } from "antd";
import { CustomTabs } from "../customer/styled";

const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Instant Capture',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Accurate Match',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Remittance Extraction',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Exceptions Handling',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '5',
      label: 'Touchless Posting',
      children: 'Content of Tab Pane 3',
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
