import React, { useState } from "react";

export interface TableProps {
  headers: string[];
  rows: string[][];
  theme: "light" | "dark";
  expandableColumns?: string[];
  actionsColumn?: {
    label: string;
    actions: (row: string[]) => React.ReactNode[];
  };
  className?: string;
  expandedContent: (row: string[]) => React.ReactNode;
  iconNotExpanded: React.ReactNode;
  iconExpanded: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  theme,
  expandableColumns,
  actionsColumn,
  className,
  expandedContent,
  iconNotExpanded,
  iconExpanded,
}) => {
  const [expandedRows, setExpandedRows] = useState<any>({});

  const handleExpandRow = (rowIndex: number) => {
    setExpandedRows((prevExpandedRows: any) => ({
      ...prevExpandedRows,
      [rowIndex]: !prevExpandedRows[rowIndex],
    }));
  };

  return (
    <div
      className={`flex flex-col overflow-x-auto shadow-md rounded ${className}`}
    >
      <table
        className={`w-full text-sm text-left ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        } border-separate border-spacing-0`}
      >
        <thead
          className={`bg-${
            theme === "dark" ? "gray-700" : "gray-50"
          } text-xs text-${
            theme === "dark" ? "gray-400" : "gray-600"
          } uppercase`}
        >
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-6 py-3 border-b border-${
                  theme === "dark" ? "gray-600" : "gray-200"
                }`}
              >
                {header}
              </th>
            ))}
            {actionsColumn && (
              <th
                key="actions"
                className={`px-6 py-3 border-b border-${
                  theme === "dark" ? "gray-600" : "gray-200"
                }`}
              >
                {actionsColumn.label}
              </th>
            )}
            {expandableColumns && expandableColumns?.length > 0 && (
              <th
                key="expand"
                className={`px-6 py-3 border-b border-${
                  theme === "dark" ? "gray-600" : "gray-200"
                }`}
              >
                <span className="sr-only">Expand</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr
                className={`bg-${
                  theme === "dark" ? "gray-800" : "white"
                } hover:bg-${theme === "dark" ? "gray-700" : "gray-100"} ${
                  rowIndex % 2 === 0
                    ? theme === "dark"
                      ? "bg-gray-700"
                      : "bg-gray-50"
                    : ""
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-6 py-4 border-b border-${
                      theme === "dark" ? "gray-600" : "gray-200"
                    } border-r border-l`}
                  >
                    {cell}
                  </td>
                ))}
                {actionsColumn && (
                  <td
                    key={`actions-${rowIndex}`}
                    className={`px-6 py-4 border-b border-${
                      theme === "dark" ? "gray-600" : "gray-200"
                    } border-r border-l`}
                  >
                    {actionsColumn.actions(row)}
                  </td>
                )}
                {expandableColumns?.includes(headers[0]) && (
                  <td
                    key={`expand-${rowIndex}`}
                    className={`px-6 py-4 border-b border-${
                      theme === "dark" ? "gray-600" : "gray-200"
                    } border-r border-l`}
                  >
                    <button
                      onClick={() => handleExpandRow(rowIndex)}
                      className={`text-sm text-${
                        theme === "dark" ? "gray-400" : "gray-600"
                      } hover:text-${
                        theme === "dark" ? "gray-200" : "gray-800"
                      }`}
                      aria-label={`Expand row ${rowIndex}`}
                      aria-expanded={expandedRows[rowIndex]}
                      role="button"
                    >
                      {iconExpanded && iconNotExpanded
                        ? expandedRows[rowIndex]
                          ? iconExpanded
                          : iconNotExpanded
                        : expandedRows[rowIndex]
                          ? "Collapse"
                          : "Expand"}
                    </button>
                  </td>
                )}
              </tr>
              {expandedRows[rowIndex] && (
                <tr
                  className={`bg-${theme === "dark" ? "gray-700" : "gray-50"}`}
                >
                  <td
                    colSpan={
                      headers.length +
                      (actionsColumn ? 1 : 0) +
                      (expandableColumns && expandableColumns?.length > 0
                        ? 1
                        : 0)
                    }
                    className={`px-6 py-4 border-b border-${
                      theme === "dark" ? "gray-600" : "gray-200"
                    } border-r border-l`}
                  >
                    {expandedContent(row)}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
