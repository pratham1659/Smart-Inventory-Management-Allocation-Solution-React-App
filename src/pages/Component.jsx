import * as React from "react";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaFilter } from "react-icons/fa";
import { LuRotateCcw } from "react-icons/lu";

export default function Component() {
  const [activeTab, setActiveTab] = React.useState("Product Configuration");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Configuration</h1>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("Product Configuration")}
            className={`pb-2 px-1 ${
              activeTab === "Product Configuration"
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}>
            Product Configuration
          </button>
          <button
            onClick={() => setActiveTab("Store Configuration")}
            className={`pb-2 px-1 ${
              activeTab === "Store Configuration"
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}>
            Store Configuration
          </button>
        </div>
      </div>

      {/* Product Status Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Product Status</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-1">
              Channel
              <span className="text-red-500">*</span>
            </label>
            <Select defaultValue="retail-store">
              <SelectTrigger>
                <SelectValue placeholder="Select Channel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retail-store">Retail-Store</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-1">
              Department
              <span className="text-red-500">*</span>
            </label>
            <Select defaultValue="d01">
              <SelectTrigger>
                <SelectValue placeholder="Select Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="d01">D01-Womens Bags</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Class</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="class1">Class 1</SelectItem>
                <SelectItem value="class2">Class 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Silhouette</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Silhouette" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="silhouette1">Silhouette 1</SelectItem>
                <SelectItem value="silhouette2">Silhouette 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">SubCollect</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select SubCollect" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sub1">SubCollect 1</SelectItem>
                <SelectItem value="sub2">SubCollect 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Store Group Mapped</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Store Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="group1">Store Group 1</SelectItem>
                <SelectItem value="group2">Store Group 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <Button variant="outline" className="flex items-center gap-2">
            <FaFilter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <LuRotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-8">
        <Button variant="secondary" className="mb-4">
          Columns
        </Button>

        <div className="border rounded-lg">
          <Table>
            <thead>
              <tr className="bg-gray-100">
                <th className="w-10">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="p-3">
                  <div className="space-y-2">
                    <div className="font-medium">Style Color ID</div>
                    <Input placeholder="Search in bulk by" className="max-w-[200px]" />
                  </div>
                </th>
                <th className="p-3">
                  <div className="space-y-2">
                    <div className="font-medium">Style ID</div>
                    <Input placeholder="Search..." className="max-w-[200px]" />
                  </div>
                </th>
                <th className="p-3">
                  <div className="space-y-2">
                    <div className="font-medium">Color ID</div>
                    <Input placeholder="Search..." className="max-w-[200px]" />
                  </div>
                </th>
                <th className="p-3">
                  <div className="space-y-2">
                    <div className="font-medium">Style Description</div>
                    <Input placeholder="Search..." className="max-w-[200px]" />
                  </div>
                </th>
                <th className="p-3">
                  <div className="space-y-2">
                    <div className="font-medium">Style Color</div>
                    <Input placeholder="Search..." className="max-w-[200px]" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows as needed */}
              <tr className="border-t">
                <td className="p-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-3">SC001</td>
                <td className="p-3">ST001</td>
                <td className="p-3">C001</td>
                <td className="p-3">Leather Handbag</td>
                <td className="p-3">Black</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
