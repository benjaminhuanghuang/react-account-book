import React, {useContext} from "react";

import { Tabs, Tab } from "../components/Tabs";
import CategorySelect from "../components/CategorySelect";
import PriceForm from "../components/PriceForm";

import { AppContext } from "../App";

function Create({ match }) {
  const filterCategories = {};
  return (
    <AppContext.Consumer>
      <div className="create-page py-3 px-3 rounded mt-3" style={{ background: "#fff" }}>
        <Tabs activeIndex={0} onTabChagee={() => {}}>
          <Tab>out</Tab>
          <Tab>IN</Tab>
        </Tabs>
        <CategorySelect categories={filterCategories} onSelectCategory={() => {}}></CategorySelect>
        <PriceForm onFormSubmit={() => {}} onCancelSubmit={() => {}}></PriceForm>
      </div>
    </AppContext.Consumer>
  );
}

export default Create;
