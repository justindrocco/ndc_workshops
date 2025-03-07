/**
 * @generated SignedSource<<d1d23d612331231d67ba86977dc4302a>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ViewerSnapshotFragment_price$fragmentType: FragmentType;
import type { ViewerSnapshotRefetchableQuery$variables } from "./ViewerSnapshotRefetchableQuery.graphql";
export type ViewerSnapshotFragment_price$data = {|
  +change: ?{|
    +history: ?{|
      +nodes: ?$ReadOnlyArray<?{|
        +epoch: number,
        +price: number,
      |}>,
    |},
    +percentageChange: number,
  |},
  +currency: string,
  +id: string,
  +lastPrice: number,
  +$fragmentType: ViewerSnapshotFragment_price$fragmentType,
|};
export type ViewerSnapshotFragment_price$key = {
  +$data?: ViewerSnapshotFragment_price$data,
  +$fragmentSpreads: ViewerSnapshotFragment_price$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": "DAY",
      "kind": "LocalArgument",
      "name": "span"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "refetch": {
      "connection": null,
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./ViewerSnapshotRefetchableQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "ViewerSnapshotFragment_price",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currency",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastPrice",
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "span",
          "variableName": "span"
        }
      ],
      "concreteType": "AssetPriceChange",
      "kind": "LinkedField",
      "name": "change",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "percentageChange",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "HistoryConnection",
          "kind": "LinkedField",
          "name": "history",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetPriceHistory",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "epoch",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "price",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "AssetPrice",
  "abstractKey": null
};

(node/*: any*/).hash = "92f04f73a86ad17b385a146cb370f432";

module.exports = ((node/*: any*/)/*: RefetchableFragment<
  ViewerSnapshotFragment_price$fragmentType,
  ViewerSnapshotFragment_price$data,
  ViewerSnapshotRefetchableQuery$variables,
>*/);
