import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { cn, filterFns } from "@/utils";
import { useState } from "react";
import { DebouncedInput } from "..";

export default function Table({
  data,
  columns,
  showFooter = true,
  showNavigation = true,
  filterFn = filterFns.fuzzy,
  showGlobalFilter = true,
}) {
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: filterFn,
  });

  return (
    <div className="flex flex-col">
      {/* Search Input */}
      {showGlobalFilter && (
        <>
          <div className="max-w-[250px]">
            {data?.length ? (
              <DebouncedInput
                value={globalFilter ?? ""}
                onChange={(value) => setGlobalFilter(String(value))}
                placeholder="Search all columns..."
              />
            ) : null}
          </div>
        </>
      )}

      {/* Scrollable Table Area */}
      <div className="relative max-h-[400px] overflow-y-auto overflow-x-auto border">
        <table className="min-w-full table-auto text-center">
          {/* Table Head */}
          <thead className="bg-gray-50 sticky top-0 z-[1]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={cn(
                      "px-4  py-2 text-sm font-medium text-gray-900",

                      {
                        "sticky top-0 right-0 bg-gray-100 shadow-lg z-20":
                          header.column.id === "actions",
                      },
                      {
                        "min-w-[11rem]":
                          header.column.id === "lastMaintainedDate",
                      }
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body */}
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b bg-white">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`whitespace-nowrap px-4 py-2 text-sm text-gray-900 ${
                      cell.column.id === "actions"
                        ? "sticky right-0 bg-gray-100 shadow-lg"
                        : ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          {/* Table Footer */}
          {showFooter && (
            <tfoot className="bg-gray-50 sticky bottom-0 z-0">
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`px-4 py-2 text-sm font-medium text-gray-900 ${
                        header.column.id === "actions"
                          ? "sticky bottom-0 right-0 bg-gray-100 shadow-lg z-20"
                          : ""
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          )}
        </table>
      </div>

      {/* Pagination */}
      {showNavigation && (
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-2">
            <button
              className="cursor-pointer rounded border p-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="cursor-pointer rounded border p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="cursor-pointer rounded border p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="cursor-pointer rounded border p-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
          </div>
          <span className="flex items-center gap-1">
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="w-16 rounded border p-1"
            />
          </span>
          {/* <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="border p-1"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select> */}
        </div>
      )}
    </div>
  );
}
