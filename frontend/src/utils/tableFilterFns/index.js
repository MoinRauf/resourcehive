/* eslint-disable @typescript-eslint/no-explicit-any */
import { rankItem, rankings } from "@tanstack/match-sorter-utils";

// most of table work acceptably well with this function
const fuzzy = (row, columnId, filterValue, addMeta) => {
  const itemRank = rankItem(row?.getValue(columnId), filterValue, {
    threshold: rankings.MATCHES,
  });
  addMeta(itemRank);
  return itemRank.passed;
};

//  if the value is falsy, then the columnFilters state entry for that filter will removed from that array.
// https://github.com/KevinVandy/material-react-table/discussions/223#discussioncomment-4249221
fuzzy.autoRemove = (val) => !val;

const contains = (row, id, filterValue) =>
  row
    .getValue(id)
    .toString()
    .toLowerCase()
    .trim()
    .includes(filterValue.toString().toLowerCase().trim());

contains.autoRemove = (val) => !val;

const startsWith = (row, id, filterValue) =>
  row
    .getValue(id)
    .toString()
    .toLowerCase()
    .trim()
    .startsWith(filterValue.toString().toLowerCase().trim());

startsWith.autoRemove = (val) => !val;

export const filterFns = {
  fuzzy,
  contains,
  startsWith,
};
