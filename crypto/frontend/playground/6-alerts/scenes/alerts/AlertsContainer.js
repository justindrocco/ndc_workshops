import {memo, useState} from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';

import {Tab, TabPanel, Tabs} from '@/components';

import {AddAlert, DeleteAlert} from './AlertsActions';

export default memo(function AlertsContainer({symbol, cacheBuster}) {
  const data = useLazyLoadQuery(
    graphql`
      query AlertsContainerQuery($symbol: String!) {
        assetBySymbol(symbol: $symbol) {
          hasAlerts
          ...AlertsActionsAAFragment_asset
          ...AlertsActionsDAFragment_asset
        }
      }
    `,
    {symbol},
    {
      fetchKey: cacheBuster,
      fetchPolicy: 'store-and-network',
    },
  );
  const hasAlerts = !!data.assetBySymbol?.hasAlerts;

  const [tab, setTab] = useState(0);

  const handleTabChange = (_event, value) => {
    setTab(value);
  };

  return (
    <>
      <Tabs value={tab} aria-label="alert actions" onChange={handleTabChange}>
        <Tab index={0} label="New Alert" />
        <Tab index={1} label="All Alerts" disabled={!hasAlerts} />
      </Tabs>
      <TabPanel index={0} value={tab}>
        <AddAlert fragmentRef={data.assetBySymbol} />
      </TabPanel>
      <TabPanel index={1} value={tab}>
        <DeleteAlert fragmentRef={data.assetBySymbol} />
      </TabPanel>
    </>
  );
});
