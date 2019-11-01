import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Steps, Icon, Tag } from 'antd';
import mock from './mock'
const { Step } = Steps;

function App() {

  const need_node = [{ node: 'KYC_BD_CS', node_name: 'KYC submit'}, { node: 'KYC_OPS', node_name: 'Maker' }, { node: 'KYC_S_OPS', node_name: 'Checker' }, { node: 'COMPLIANCE', node_name: 'Compliance' }, { node: '', node_name: 'Completed' }]
  const logs1 = [{
    id: 320,
    wf_task_id: 126,
    wf_code: 'WF_ONBOARDING_KYC',
    wf_node_action: 'WF_START',
    operator: 0,
    operate_time: '2019-07-04 11:36:51.617571+00',
    current_node: 'INIT',
    next_node: 'KYC_BD_CS'
  }, {
    id: 321,
    wf_task_id: 126,
    wf_code: 'WF_ONBOARDING_KYC',
    wf_node_action: 'KYC_BD_CS_APPROVE',
    operator: 0,
    operate_time: '2019-07-04 11:36:57.520645+00',
    current_node: 'KYC_BD_CS',
    next_node: 'KYC_OPS'
  }, {
    id: 322,
    wf_task_id: 126,
    wf_code: 'WF_ONBOARDING_KYC',
    wf_node_action: 'KYC_LEADER_ASSIGN_S',
    operator: 0,
    operate_time: '2019-07-04 11:36:57.541915+00',
    current_node: 'KYC_LEADER_ASSIGN_S',
    next_node: 'KYC_S_OPS'
  }, {
    id: 322,
    wf_task_id: 126,
    wf_code: 'WF_ONBOARDING_KYC',
    wf_node_action: 'KYC_S_REJECT_BD',
    operator: 0,
    operate_time: '2019-07-04 11:36:57.541915+00',
    current_node: 'KYC_S_OPS',
    next_node: 'KYC_BD_CS'
  }, 
  // {
  //   id: 322,
  //   wf_task_id: 126,
  //   wf_code: 'WF_ONBOARDING_KYC',
  //   wf_node_action: 'KYC_BD_TO_OPS2',
  //   operator: 0,
  //   operate_time: '2019-07-04 11:36:57.541915+00',
  //   current_node: 'KYC_BD_CS',
  //   next_node: 'KYC_S_OPS'
  // }, {
  //   id: 322,
  //   wf_task_id: 126,
  //   wf_code: 'WF_ONBOARDING_KYC',
  //   wf_node_action: 'KYC_S_OPS_APPROVE_D',
  //   operator: 0,
  //   operate_time: '2019-07-04 11:36:57.541915+00',
  //   current_node: 'KYC_S_OPS',
  //   next_node: ''
  // }
]
  const generateIcon = (idx, nodeInfo, isRejected, status, currentIndex) => {
    let color 
    let icon
    let isFirst = idx === 0
    let isLast = idx === nodeInfo.length - 1
    let isUndo = isRejected
    let afterCurrentNode = idx > currentIndex
    switch (status) {
      case 'fail':
        color = isLast && 'red'
        break;
      case 'pass':
        color = isLast && 'green'
        break
      case 'close':
        color = isFirst && 'grey'
        break
    }
    if (isUndo && afterCurrentNode || status === 'close') color = 'red'

    switch (Math.sign(idx - currentIndex)) {
      case 0: icon = 'clock-circle'
        break
      case 1: icon = isRejected ?  'undo' : 'check-circle'
        break
      case -1: icon = 'check-circle'
    }

    if (isLast && status === 'fail') icon = 'minus-circle'
    if (isFirst && status === 'close') icon = 'close-circle'
    if (isLast || (isLast && status) === 'pass') icon = 'check-circle'
    console.log(idx, isUndo , afterCurrentNode, color);

    return {
      icon,
      color
    }

  }
  const wfConverter = (nodes, log) => {
    // const intersection = need_node.filter(v => nodes.includes(v.node))
    const nodeInfo =  nodes.map(item => {
      const node_log = log.filter(ele => ele.current_node === item.node)
      return {
        ...item,
        node_log
      }
    })
    const currentNode = log[log.length - 1].next_node
    const currentIndex = nodes.findIndex(item => item.node === currentNode)
    return {
      nodeInfo,
      currentNode,
      currentIndex
    }
  }
  const nodeList = [
    { node: 'CREATED', nodeName: 'Maker' },
    { node: 'APPROVAL', nodeName: 'Checker' },
    { node: '', nodeName: 'Completed' }
  ]
  const log = mock.data.activities.data
  const task = mock.data.task[0]
  const wfInfo = wfConverter(nodeList, log)
  const list2 = [
    {
      node: 'START',
      node_name: 'KYC Submit',
      node_log: [{
        action: 'WF_START',
        operator: '0',
        operation_time: '2019-07-04 11:36:51.617571+00'
      }, {
        action: 'KYC_BD_CS_APPROVE',
        operator: '0',
        operation_time: '2019-07-04 11:36:57.520645+00'
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
      },{
        action: 'KYC_OPS_REJECT',
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
  const stepList = wfInfo.nodeInfo.map((item, index) => {
    const desc = item.node_log[item.node_log.length - 1] || {}
    const rejectAction = !!item.node_log.find(ele => ele.wf_node_action.indexOf('RETUREN') > -1 || ele.wf_node_action.indexOf('REJECT') > -1) && (index > wfInfo.currentIndex) || status === 'close'
    
    const resubmitAcount = index === 0 && item.node_log.length > 1 ? item.node_log.length : 0
    const returnTag = rejectAction ? <Tag color="red">returned</Tag> : null
    const resubmitTag = resubmitAcount > 1 ? <Tag color="blue">resubmited</Tag> : null

    status = 'close'

    
    
    const iconInfo = generateIcon(index, wfInfo.nodeInfo, rejectAction, status, wfInfo.currentIndex )
    const iconStyle = {
      fontSize: '32px',
      ...iconInfo.color && {color: iconInfo.color}
    }
    return <Step
            key={`map-${index}`}
            title={<div>{item.node_name}</div>}
            description={<div>
              <div>{desc.operator}{index === 0 ? resubmitTag : returnTag}</div>
              <div>{desc.operate_time}</div>
            </div>}
            icon={<Icon
              type={ iconInfo.icon}
              style={iconStyle} /> } />
  })
  
  return (
    <div style={{padding: '20px'}}>
      <Steps current={wfInfo.currentIndex}>
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
