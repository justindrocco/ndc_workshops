/**
 * @generated SignedSource<<500cecee489f3eccbd03bdd6a09783e2>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteAlertInput = {|
  alertId: string,
|};
export type AlertsActionsDAMutation$variables = {|
  input: DeleteAlertInput,
|};
export type AlertsActionsDAMutation$data = {|
  +deleteAlert: {|
    +deletedAlert: ?{|
      +asset: {|
        +hasAlerts: boolean,
      |},
    |},
  |},
|};
export type AlertsActionsDAMutation = {|
  response: AlertsActionsDAMutation$data,
  variables: AlertsActionsDAMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasAlerts",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AlertsActionsDAMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteAlertPayload",
        "kind": "LinkedField",
        "name": "deleteAlert",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "deletedAlert",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AlertsActionsDAMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteAlertPayload",
        "kind": "LinkedField",
        "name": "deleteAlert",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Alert",
            "kind": "LinkedField",
            "name": "deletedAlert",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a655da751f0ad413aef8b825bb1bb025",
    "id": null,
    "metadata": {},
    "name": "AlertsActionsDAMutation",
    "operationKind": "mutation",
    "text": "mutation AlertsActionsDAMutation(\n  $input: DeleteAlertInput!\n) {\n  deleteAlert(input: $input) {\n    deletedAlert {\n      asset {\n        hasAlerts\n        id\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "1bf7b69dbf1752922396c043ca33941c";

module.exports = ((node/*: any*/)/*: Mutation<
  AlertsActionsDAMutation$variables,
  AlertsActionsDAMutation$data,
>*/);
