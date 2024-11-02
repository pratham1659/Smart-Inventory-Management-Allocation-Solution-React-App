import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { earningData, recentTransactions, dropdownData } from "../utils/data";
import SelectFilter from "../components/SelectFilter";
import { useStateContext } from "../contexts/ContextProvider";

const Report = () => {
  // eslint-disable-next-line
  const { currentMode } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("May 2021");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
    console.log("Selected date:", date);
  };

  return (
    <div>
      <div className="min-h-screen">
        <span className="text-2xl mx-4 ml-3 font-semibold">Order Batching</span>
        <SelectFilter />
      </div>
      {/* KPI Tiles CARD */}
      <div className="flex m-3 flex-wrap justify-center gap-5 items-center">
        {earningData.map((item) => (
          <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 rounded-2xl ">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl">
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
            </p>
            <p className="text-sm text-gray-400  mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            {/* Dropdown */}
            <div className="relative w-48">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <span>{selectedDate}</span>
                <IoIosArrowDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul className="py-1">
                    {dropdownData.map((date) => (
                      <li
                        key={date.id}
                        onClick={() => handleSelect(date.date)}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                          date.date === selectedDate ? "text-primary" : "text-gray-900"
                        }`}>
                        {date.date}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Dropdown */}
          </div>
          <div className="mt-10 w-72 md:w-400">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl">
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color"></div>
        </div>
      </div>
    </div>
  );
};

export default Report;
