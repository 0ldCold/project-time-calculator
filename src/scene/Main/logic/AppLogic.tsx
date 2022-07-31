import React from "react";
import AppUi from "scene/Main/ui/AppUi";
import { TableRowType } from "scene/Main/ui/types";

const AppLogic: React.FC = () => {
  const table: TableRowType[] = [
    {
      name: "Дизайн",
      count: 0,
      price: 0,
      amount: 0
    }
  ];
  // test
  const summary = 0;
  const minPriceName = "-";
  const maxPriceName = "-";
  const errorsName: string[] = [];

  return (
    <AppUi
      tableData={table}
      summary={summary}
      minPriceName={minPriceName}
      maxPriceName={maxPriceName}
      errorsName={errorsName}
    />
  );
};
export default AppLogic;
