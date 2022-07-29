import React from "react";
import classNames from "classnames/bind";
import DataTable from "react-data-table-component";
import { columns } from "scene/Main/ui/types";
import { isExist } from "src/utils/utils";
import styles from "./AppUi.module.scss";

const cnb = classNames.bind(styles);

interface Props {
  className?: string;
  summary?: number;
  maxPriceName?: string;
  minPriceName?: string;
  errorsName?: string[];
}

const AppUi: React.FC<Props> = ({ className, summary, minPriceName, maxPriceName, errorsName }) => {
  const transformNames = (errors: string[]): string => {
    return errors.join(", ");
  };
  return (
    <div className={classNames(cnb("appUi"), className)}>
      <div className={cnb("dataTable")}>
        <DataTable columns={columns} data={[]} />
      </div>
      <div className={cnb("results")}>
        {isExist(summary) && (
          <div className={cnb("resultRow")}>
            <h3>Итого</h3>
            <h5>{summary}</h5>
          </div>
        )}
        {isExist(maxPriceName) && (
          <div className={cnb("resultRow")}>
            <h3>Самая дорогая услуга</h3>
            <h5>{maxPriceName}</h5>
          </div>
        )}
        {isExist(minPriceName) && (
          <div className={cnb("resultRow")}>
            <h3>Самая дешевая услуга</h3>
            <h5>{minPriceName}</h5>
          </div>
        )}
        {isExist(errorsName) && (
          <div className={cnb("resultRow")}>
            <h3>Услуги с ошибками</h3>
            <h5>{transformNames(errorsName)}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppUi;
