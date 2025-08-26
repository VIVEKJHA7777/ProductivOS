import { useState } from "react";
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import AccessAlarmsRoundedIcon from '@mui/icons-material/AccessAlarmsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { href, Outlet } from 'react-router-dom'

const SidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar toggle button (mobile only) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-400 rounded-lg sm:hidden hover:text-gray-900 dark:hover:cursor-pointer hover:cursor-pointer focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed flex justify-center items-center top-0 left-0 z-40 w-65 sm-w-60 h-screen transition-transform bg-[#232428] dark:bg-[#232428] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full w-full sm:w-[90%] px-3 py-4 overflow-y-auto flex flex-col">
          <div className="flex justify-center items-center gap-3">
          <h2 className="text-3xl py-2 text-amber-600 font-semibold flex gap-1">ProductivOS <i className="text-blue-500"> <BarChartRoundedIcon/> </i></h2>
          <i className="self-end inline-block sm:hidden text-gray-100 py-2"><ClearRoundedIcon sx={{fontSize:30}}/></i>
          </div>
          <ul className="space-y-2 font-medium">
            {[
              {
                label:'Dashboard', 
                icon: <QueryStatsRoundedIcon/>,
                href: "/dashboard",
              },
              {
                label:'Tasks', 
                icon: <AddTaskRoundedIcon/>,
                href: "/tasks",
                badge: 'Pro'
              },
              {
                label:'Goals', 
                icon: <OutlinedFlagRoundedIcon/>,
                href: "/Goals",
                badge: 3
              },
              {
                label:'Time', 
                icon: <AccessAlarmsRoundedIcon/>,
                href: "/time",
              },
              {
                label:'Calender', 
                icon: <CalendarMonthRoundedIcon/>,
                href: "/calender"
              },
            ].map((item,idx)=>(
              <li key={idx}>
              <a
                href={item.href}
                className="flex items-center p-2 text-gray-100 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 hover:text-white group"
              >
                {item.icon}
                <span className="ms-3">{item.label}</span>
                 {item.badge && (
                    <span
                      className={"inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full text-gray-100 bg-gray-600 dark:bg-gray-600 dark:text-gray-300"}
                    >
                      {item.badge}
                    </span>
                  )}
              </a>
            </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* main Content */}
      <div className="p-4 sm:ml-64 w-full">
        <Outlet/>
      </div>
    </div>
  );
};

export default SidebarLayout;

