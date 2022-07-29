import React from "react";
import { TableColumn } from "react-data-table-component";

export interface TableRowType {
  name: string;
  count: number;
  price: number;
  amount: number;
}

export const columns: TableColumn<TableRowType>[] = [
  {
    name: "Название",
    cell: (row) => <div>{row.name}</div>
  },
  {
    name: "Количество (в часах)",
    cell: (row) => <div>{row.count}</div>
  },
  {
    name: "Цена (в рублях)",
    cell: (row) => <div>{row.price}</div>
  },
  {
    name: "Цена (в рублях)",
    cell: (row) => <div>{row.amount}</div>
  }
];
