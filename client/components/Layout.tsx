import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  User,
  Building,
  MessageSquare,
  Clock,
  Settings,
  HelpCircle,
  Bell,
  FileText,
  ChevronDown,
  ChevronUp,
  Menu,
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "대시보드",
      icon: BarChart3,
      path: "/",
      subItems: [
        { label: "서비스 현황", path: "/" },
        { label: "시스템 현황", path: "/system" },
      ],
    },
    { id: "account", label: "계정", icon: User, path: "/account" },
    {
      id: "organization",
      label: "조직",
      icon: Building,
      path: "/organization",
    },
    { id: "agent", label: "에이전트", icon: MessageSquare, path: "/agent" },
    { id: "logs", label: "로그", icon: Clock, path: "/logs" },
    { id: "system", label: "시스템", icon: Settings, path: "/system-settings" },
    { id: "support", label: "지원", icon: HelpCircle, path: "/support" },
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
        w-[234px] border-r border-neutral-200 bg-neutral-50 flex flex-col flex-shrink-0 z-50
        fixed lg:static inset-y-0 left-0 transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="h-[52px] border-b border-neutral-200 flex items-center justify-between px-[18px]">
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none">
            <path
              d="M14.0622 0C14.24 0 14.4147 0.0460062 14.5674 0.131673C14.7201 0.218926 14.8475 0.342667 14.9341 0.493377L22.8725 14.1794C22.9559 14.3238 23 14.4856 23 14.6522C23 14.8172 22.9559 14.9806 22.8725 15.1249L20.3324 19.505C20.2458 19.6542 20.1199 19.7795 19.9657 19.8667C19.813 19.954 19.6383 20 19.4604 20H3.53798C3.36013 20 3.18544 19.954 3.03278 19.8667C2.88012 19.7795 2.75263 19.6542 2.66607 19.505L0.127481 15.1249C0.0440676 14.9806 0 14.8172 0 14.6522C0 14.4872 0.0440676 14.3238 0.127481 14.1794L8.06432 0.493377C8.15088 0.344253 8.27836 0.218926 8.43103 0.131673C8.58369 0.0444198 8.75838 0 8.93623 0H14.0622ZM5.98214 15.1186C5.98214 15.1186 9.2085 12.9325 11.4984 12.9325C13.7884 12.9325 17.0147 15.1186 17.0147 15.1186L11.4984 5.46046L5.98214 15.1186Z"
              fill="#1D293D"
            />
          </svg>
          <button
            className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-200/50"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Menu className="w-[18px] h-[18px] text-text-tertiary" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-3 py-[6px] overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              (item.id === "dashboard" && location.pathname === "/");
            const hasSubItems = item.subItems && item.subItems.length > 0;

            return (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.id === "dashboard") {
                      setIsDashboardOpen(!isDashboardOpen);
                    }
                  }}
                  className={`w-full flex items-center justify-between px-[10px] py-[11px] rounded text-sm font-bold transition-colors ${
                    isActive
                      ? "text-primary-600"
                      : "text-text-secondary hover:bg-neutral-200/30"
                  }`}
                >
                  <div className="flex items-center gap-[6px]">
                    <Icon className="w-[18px] h-[18px]" />
                    <span>{item.label}</span>
                  </div>
                  {hasSubItems &&
                    (isDashboardOpen ? (
                      <ChevronUp className="w-[18px] h-[18px] text-text-tertiary" />
                    ) : (
                      <ChevronDown className="w-[18px] h-[18px] text-text-tertiary" />
                    ))}
                </button>

                {/* Sub Items */}
                {hasSubItems && isDashboardOpen && (
                  <div className="mt-0 space-y-0">
                    {item.subItems?.map((subItem, idx) => {
                      const isSubActive = location.pathname === subItem.path;
                      return (
                        <Link
                          key={idx}
                          to={subItem.path}
                          className={`flex items-center ml-3 pl-2 pr-2 py-2 rounded text-xs font-bold border-l transition-colors ${
                            isSubActive
                              ? "border-primary-600 bg-white shadow-sm text-primary-600"
                              : "border-neutral-400 text-neutral-400 hover:bg-neutral-200/30"
                          }`}
                        >
                          <span className="ml-2">{subItem.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        {/* Header */}
        <header className="h-[52px] border-b border-neutral-200 bg-white flex items-center justify-between lg:justify-end px-5 flex-shrink-0">
          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-50"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-[18px] h-[18px] text-text-tertiary" />
          </button>
          <div className="flex items-center gap-1">
            {/* Notifications */}
            <button className="p-2 rounded hover:bg-neutral-50 relative">
              <Bell className="w-[18px] h-[18px] text-text-tertiary" />
              <span className="absolute top-1 right-1 bg-[#E7000B] text-white text-xs px-1.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                10
              </span>
            </button>

            {/* File List */}
            <button className="min-w-8 min-h-8 flex items-center justify-center rounded hover:bg-neutral-50">
              <FileText className="w-[18px] h-[18px] text-text-tertiary" />
            </button>

            {/* AI Messages */}
            <button className="min-w-8 min-h-8 flex items-center justify-center rounded hover:bg-neutral-50">
              <MessageSquare className="w-[18px] h-[18px] text-text-tertiary" />
            </button>

            {/* User */}
            <div className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-neutral-50 cursor-pointer">
              <div className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center">
                <span className="text-sm text-neutral-400">GD</span>
              </div>
              <span className="text-sm font-bold text-text-secondary">
                홍길동
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
