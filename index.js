import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Steps, Icon, Tag } from 'antd';

const { Step } = Steps;

function App() {
  // id  | wf_task_id |      wf_code      |  wf_node_action   | operator |         operate_time          |   current_node
  // -----+------------+-------------------+-------------------+----------+-------------------------------+-------------------
  //  320 |        126 | WF_ONBOARDING_KYC | WF_START          | 0        | 2019-07-04 11:36:51.617571+00 | INIT
  //  321 |        126 | WF_ONBOARDING_KYC | KYC_BD_CS_APPROVE | 0        | 2019-07-04 11:36:57.520645+00 | KYC_BD_CS
  //  322 |        126 | WF_ONBOARDING_KYC | KYC_LEADER_ASSIGN | 0        | 2019-07-04 11:36:57.541915+00 | KYC_LEADER_ASSIGN
  //  323 |        126 | WF_ONBOARDING_KYC | KYC_OPS_APPROVE   | 23       | 2019-07-04 11:37:27.911221+00 | KYC_OPS
  //  324 |        126 | WF_ONBOARDING_KYC | KYC_LEADER_CHECK  | 0        | 2019-07-04 11:37:27.919225+00 | KYC_LEADER_CHECK
  //  622 |        126 | WF_ONBOARDING_KYC | KYC_S_REJECT      | 22       | 2019-07-12 01:56:03.587579+00 | KYC_S_OPS
  //  623 |        126 | WF_ONBOARDING_KYC | KYC_OPS1_TO_OPS2  | 23       | 2019-07-12 03:31:11.321227+00 | KYC_OPS
  const current_node = 'KYC_OPS'
  const list = [
    {
      node: '',
      node_name: 'KYC Submit',
      node_log: [{
        action: 'WF_START',
        operator: '0',
        operation_time: '2019-07-04 11:36:51.617571+00'
      }, {
        action: 'KYC_BD_CS_APPROVE',
        operator: '0',
        operation_time: '2019-07-04 11:36:57.520645+00'
      }]
    },
    {
      node: 'KYC_OPS',
      node_name: 'Maker',
      node_log: [{
        action: 'KYC_OPS_APPROVE',
        operator: '23',
        operation_time: '2019-07-04 11:37:27.911221+00'
      }, {
        action: 'KYC_OPS1_TO_OPS2',
        operator: '23',
        operation_time: '2019-07-04 11:37:27.911221+00'
      }]
    },
    {
      node: 'KYC_S_OPS',
      node_name: 'Checker',
      node_log: [{
        action: 'KYC_S_REJECT',
        operator: '22',
        operation_time: '2019-07-12 01:56:03.587579+00'
      }]
    },
    {
      node: 'KYC_COMPLIANCE',
      node_name: 'Compliance',
      node_log: []
    },
    {
      node: '',
      node_name: 'Completed',
      node_log: []
    },
  ];
  const currentIndex = list.findIndex(item => item.node === current_node)
  const stepList = list.map((item, index) => {
    // item.node_log.
    const desc = item.node_log[item.node_log.length - 1] || {}
    const rejectAction = item.node_log.find(ele => ele.action.indexOf('RETUREN') > -1 || ele.action.indexOf('REJECT') > -1)
    const tag = rejectAction ? <Tag color="red">returned</Tag> : null
    const iconType = index === currentIndex ? "smile" : "check-circle"
    const iconStyle = {
      fontSize: '32px'
    }
    if (rejectAction && (index > currentIndex) ) iconStyle.color = 'red'
    return <Step
            key={`map-${index}`}
            title={<div>{item.node_name}</div>}
            description={<div>
              <div>{desc.operator}{tag}</div>
              <div>{desc.operation_time}</div>
            </div>}
            icon={<Icon
              type={ rejectAction && (index > currentIndex) ? "rollback" : iconType}
              style={iconStyle} /> } />
  })
  
  return (
    <div style={{padding: '20px'}}>
      <Steps current={currentIndex}>
        {stepList}
        {/* <Step title="Login" icon={<Icon type="check-circle" />} />
        <Step title="Verification" icon={<Icon type="message" />} />
        <Step title="Pay" icon={<Icon type="message" />} />
        <Step status="wait" title="Done" icon={<Icon type="message" />} /> */}
      </Steps>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
