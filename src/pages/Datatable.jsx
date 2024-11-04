import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { RiArrowUpDownLine } from "react-icons/ri";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const data = [
  {
    id: "1",
    channel: "Online",
    department: "Electronics",
    class: "Smartphones",
    silhouette: "Compact",
    subCollect: "Premium",
    storeGroup: "A",
  },
  {
    id: "2",
    channel: "Retail",
    department: "Clothing",
    class: "Men's Wear",
    silhouette: "Casual",
    subCollect: "Basics",
    storeGroup: "B",
  },
  {
    id: "3",
    channel: "Wholesale",
    department: "Home & Garden",
    class: "Furniture",
    silhouette: "Modern",
    subCollect: "Living Room",
    storeGroup: "C",
  },
  {
    id: "3",
    channel: "Wholesale",
    department: "Home & Garden",
    class: "Furniture",
    silhouette: "Modern",
    subCollect: "Living Room",
    storeGroup: "C",
  },
  {
    id: "3",
    channel: "Wholesale",
    department: "Home & Garden",
    class: "Furniture",
    silhouette: "Modern",
    subCollect: "Living Room",
    storeGroup: "C",
  },
  {
    id: "3",
    channel: "Wholesale",
    department: "Home & Garden",
    class: "Furniture",
    silhouette: "Modern",
    subCollect: "Living Room",
    storeGroup: "C",
  },
];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "channel",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Channel
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("channel")}</div>,
  },
  {
    accessorKey: "department",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Department
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("department")}</div>,
  },
  {
    accessorKey: "class",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Class
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("class")}</div>,
  },
  {
    accessorKey: "silhouette",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Silhouette
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("silhouette")}</div>,
  },
  {
    accessorKey: "subCollect",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          SubCollect
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("subCollect")}</div>,
  },
  {
    accessorKey: "storeGroup",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Store Group
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("storeGroup")}</div>,
  },
  {
    accessorKey: "storeGroup",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Store Group
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("storeGroup")}</div>,
  },
  {
    accessorKey: "storeGroup",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Store Group
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("storeGroup")}</div>,
  },
  {
    accessorKey: "storeGroup",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Store Group
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("storeGroup")}</div>,
  },
  {
    accessorKey: "storeGroup",
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Store Group
          <RiArrowUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("storeGroup")}</div>,
  },
];

export default function DataTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [freezeColumns, setFreezeColumns] = useState([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const toggleFreezeColumn = (columnId) => {
    setFreezeColumns((prev) => (prev.includes(columnId) ? prev.filter((id) => id !== columnId) : [...prev, columnId]));
  };

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <FaChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}>
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-2">
              Freeze Columns <FaChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Select columns to freeze</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                const isFrozen = freezeColumns.includes(column.id);
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={isFrozen}
                    onCheckedChange={() => toggleFreezeColumn(column.id)}>
                    {column.id}
                    {isFrozen ? <HiOutlineLockClosed className="ml-2 h-4 w-4" /> : <HiOutlineLockOpen className="ml-2 h-4 w-4" />}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        position: freezeColumns.includes(header.id) ? "sticky" : "static",
                        left: freezeColumns.includes(header.id) ? "0" : "auto",
                        zIndex: freezeColumns.includes(header.id) ? "1" : "auto",
                        background: freezeColumns.includes(header.id) ? "white" : "transparent",
                      }}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
            <TableRow>
              {table.getAllColumns().map((column) => {
                return (
                  <TableHead
                    key={column.id}
                    style={{
                      position: freezeColumns.includes(column.id) ? "sticky" : "static",
                      left: freezeColumns.includes(column.id) ? "0" : "auto",
                      zIndex: freezeColumns.includes(column.id) ? "1" : "auto",
                      background: freezeColumns.includes(column.id) ? "white" : "transparent",
                    }}>
                    {column.id !== "select" && (
                      <Input
                        placeholder={`Search ${column.id}...`}
                        value={column?.getFilterValue() ?? ""}
                        onChange={(event) => column.setFilterValue(event.target.value)}
                        className="max-w-sm"
                      />
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        position: freezeColumns.includes(cell.column.id) ? "sticky" : "static",
                        left: freezeColumns.includes(cell.column.id) ? "0" : "auto",
                        zIndex: freezeColumns.includes(cell.column.id) ? "1" : "auto",
                        background: freezeColumns.includes(cell.column.id) ? "white" : "transparent",
                      }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
