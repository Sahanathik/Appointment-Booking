import React from "react";
import Query from "./Query";
import Feedback from "./Feedback";
import Complaint from "./Complaint";
const Query_tab = () => {
  return (
    <>
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Query" key="1">
            <Query />
          </TabPane>
          <TabPane tab="Feedback" key="2">
            <Feedback></Feedback>
          </TabPane>
          <TabPane tab="Complaint" key="2">
            <Complaint />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Query_tab;
