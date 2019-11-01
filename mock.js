const mock = {
  "success": true,
  "data": {
    "task": [
      {
        "id": 136,
        "task_id": "temp_128f59af-d5b8-4143-87b1-b0981825713e",
        "wf_code": "WF_DEPOSIT_OPS",
        "current_node": "CREATED",
        "is_completed": false,
        "creator": "0",
        "created_at": "2019-07-12T02:38:44.952Z",
        "updated_at": "2019-07-19T10:54:16.316Z",
        "timer_start_at": null,
        "timer_hours": null,
        "deleted": true,
        "wf_data": {
          "ccy": "EUR",
          "maker": 19,
          "amount": 6,
          "accType": "VA",
          "checker": 17,
          "decision": "pass",
          "provider": "LHV",
          "accountId": "ba0d2f1a-d506-4b15-b94d-70b238d29261",
          "_wfSubType": "AUTO",
          "isReturned": true,
          "businessName": "测试测试测色彩色彩二次",
          "bankAccountId": "f8ba4151-4a04-4678-b52f-de40df905496",
          "linkedWorkflowId": null,
          "reconciliationId": "253de7de-4347-45b3-b76c-b9658bf4bf36",
          "remitterBankName": "FAKE BANK UK",
          "bankAccountNumber": "80003426",
          "bankTransactionId": "253de7de-4347-45b3-b76c-b9658bf4bf36",
          "remitterAccountName": "Sam Smith"
        },
        "comments": null
      }
    ],
    "activities": {
      "totalCount": "4",
      "pageSize": 10,
      "pageNum": 1,
      "data": [
        {
          "id": 480,
          "wf_task_id": 136,
          "wf_code": "WF_DEPOSIT_OPS",
          "wf_node_action": "WF_START",
          "operator": "0",
          "operate_time": "2019-07-12T02:38:44.962Z",
          "current_node": "INIT"
        },
        {
          "id": 481,
          "wf_task_id": 136,
          "wf_code": "WF_DEPOSIT_OPS",
          "wf_node_action": "MAKER_SUBMIT",
          "operator": "19",
          "operate_time": "2019-07-12T02:39:38.864Z",
          "current_node": "CREATED"
        },
        {
          "id": 482,
          "wf_task_id": 136,
          "wf_code": "WF_DEPOSIT_OPS",
          "wf_node_action": "CHECKER_RETURN",
          "operator": "17",
          "operate_time": "2019-07-12T02:39:56.107Z",
          "current_node": "APPROVAL"
        },
        {
          "id": 672,
          "wf_task_id": 136,
          "wf_code": "WF_DEPOSIT_OPS",
          "wf_node_action": "WF_CLOSE",
          "operator": "19",
          "operate_time": "2019-07-19T10:54:16.321Z",
          "current_node": "CREATED"
        }
      ]
    },
    "nodes": [
      {
        "id": 16,
        "wf_code": "WF_DEPOSIT_OPS",
        "code": "INIT",
        "type": "TAG_START",
        "operator": "null",
        "description": "INIT",
        "created_at": "2019-07-02T07:53:21.552Z",
        "updated_at": "2019-07-02T07:53:21.552Z",
        "hours": null
      },
      {
        "id": 17,
        "wf_code": "WF_DEPOSIT_OPS",
        "code": "CREATED",
        "type": "ROLE",
        "operator": "R_OPERATION",
        "description": "Deposit Created",
        "created_at": "2019-07-02T07:53:21.552Z",
        "updated_at": "2019-07-02T07:53:21.552Z",
        "hours": null
      },
      {
        "id": 18,
        "wf_code": "WF_DEPOSIT_OPS",
        "code": "APPROVAL",
        "type": "ROLE",
        "operator": "R_SR_OPERATION",
        "description": "Deposit Approval",
        "created_at": "2019-07-02T07:53:21.552Z",
        "updated_at": "2019-07-02T07:53:21.552Z",
        "hours": null
      }
    ]
  }
}

export default mock