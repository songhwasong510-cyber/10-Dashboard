import Layout from "@/components/Layout";
import StatCard from "@/components/StatCard";
import {
  AlertTriangle,
  MessageSquare,
  Users,
  Archive,
  Inbox,
  RotateCcw,
  Calendar,
  X,
} from "lucide-react";

export default function Index() {
  const chartData = [
    { date: "12-03", value: 2, dailyValue: 2 },
    { date: "12-04", value: 4, dailyValue: 4 },
    { date: "12-05", value: 2, dailyValue: 2 },
    { date: "12-06", value: 7, dailyValue: 7 },
    { date: "12-07", value: 2, dailyValue: 2 },
    { date: "12-08", value: 3, dailyValue: 3 },
    { date: "12-09", value: 4, dailyValue: 4 },
    { date: "12-10", value: 1, dailyValue: 1 },
    { date: "12-11", value: 0.5, dailyValue: 0.5 },
    { date: "12-12", value: 1, dailyValue: 1, isActive: true },
  ];

  const maxValue = 8;

  return (
    <Layout>
      <div className="px-6 py-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 text-sm mb-4">
          <span className="text-neutral-400 px-1">대시보드</span>
          <span className="text-text-secondary">/</span>
          <span className="text-text-primary px-1">서비스 현황</span>
        </div>

        {/* Page Header */}
        <div className="mb-6 p-[15px] rounded-lg border border-[#BEDBFF] bg-gradient-to-r from-primary-50 to-[#E0E7FF] shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-[38px] h-[38px] relative">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 bg-primary-600 rounded flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M2.49935 2.5H17.4993C17.9596 2.5 18.3327 2.8731 18.3327 3.33333V16.6667C18.3327 17.1269 17.9596 17.5 17.4993 17.5H2.49935C2.03912 17.5 1.66602 17.1269 1.66602 16.6667V3.33333C1.66602 2.8731 2.03912 2.5 2.49935 2.5ZM5.83268 10.8333V14.1667H7.49935V10.8333H5.83268ZM9.16602 5.83333V14.1667H10.8327V5.83333H9.16602ZM12.4993 8.33333V14.1667H14.166V8.33333H12.4993Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-bold text-text-primary">서비스 현황</h1>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1.5 mb-6">
          <div className="relative inline-flex items-center gap-1 px-3 py-1.5 rounded border border-neutral-200 shadow-sm bg-white">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary-50">
              <span className="text-xs text-[#193CB8]">아이티센글로벌</span>
              <button className="w-4 h-4 flex items-center justify-center">
                <X className="w-3 h-3 text-[#193CB8]" />
              </button>
            </div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="ml-1"
            >
              <path
                d="M8.99949 9.87831L12.7118 6.16602L13.7725 7.22667L8.99949 11.9997L4.22656 7.22667L5.28722 6.16602L8.99949 9.87831Z"
                fill="#1D293D"
              />
            </svg>
          </div>

          <div className="flex items-center gap-0.5">
            <div className="relative inline-flex items-center gap-1 px-3 py-1.5 rounded border border-neutral-200 shadow-sm bg-white">
              <span className="text-sm text-text-tertiary">시작일</span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary-50">
                <span className="text-xs text-[#193CB8]">2025-12-05</span>
                <button className="w-4 h-4 flex items-center justify-center">
                  <X className="w-3 h-3 text-[#193CB8]" />
                </button>
              </div>
              <Calendar className="w-[18px] h-[18px] text-text-primary ml-1" />
            </div>

            <span className="text-sm text-text-tertiary px-1">~</span>

            <div className="relative inline-flex items-center gap-1 px-3 py-1.5 rounded border border-neutral-200 shadow-sm bg-white">
              <span className="text-sm text-text-tertiary">종료일</span>
              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary-50">
                <span className="text-xs text-[#193CB8]">2025-12-12</span>
                <button className="w-4 h-4 flex items-center justify-center">
                  <X className="w-3 h-3 text-[#193CB8]" />
                </button>
              </div>
              <Calendar className="w-[18px] h-[18px] text-text-primary ml-1" />
            </div>
          </div>

          <button className="w-8 h-8 flex items-center justify-center rounded border border-neutral-200 hover:bg-neutral-50">
            <RotateCcw className="w-[18px] h-[18px] text-text-primary" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-[14px] mb-6">
          <StatCard
            icon={
              <div className="w-[38px] h-[38px] relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary-600 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            }
            label="비인가 에이전트
접근 시도"
            value="1"
            bgColor="bg-transparent"
          />
          <StatCard
            icon={
              <div className="w-[38px] h-[38px] relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 bg-[#00BC7D] rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            }
            label="총  질문 횟수"
            value="910"
            bgColor="bg-transparent"
          />
          <StatCard
            icon={
              <div className="w-[38px] h-[38px] relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 bg-[#615FFF] rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            }
            label="사용자
(MAU)"
            value="89"
            bgColor="bg-transparent"
          />
          <StatCard
            icon={
              <div className="w-[38px] h-[38px] relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary-600 rounded-lg flex items-center justify-center">
                    <Archive className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            }
            label="총 토큰
사용량"
            value="13.20M"
            bgColor="bg-transparent"
          />
          <StatCard
            icon={
              <div className="w-[38px] h-[38px] relative">
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 bg-[#00A6F4] rounded-lg flex items-center justify-center">
                    <Inbox className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            }
            label="추론
토큰"
            value="117.1K"
            bgColor="bg-transparent"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_455px] gap-[14px]">
          {/* Chart: Unauthorized Access */}
          <div className="rounded-lg border border-neutral-200 shadow-sm bg-white">
            <div className="h-[46px] border-b border-neutral-200 px-5 flex items-center">
              <h2 className="text-base font-bold text-text-primary">
                비인가 에이전트 접근 시도
              </h2>
            </div>
            <div className="p-5">
              {/* Legend */}
              <div className="flex items-center justify-end gap-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#00A6F4]"></div>
                  <span className="text-xs font-bold text-text-primary">
                    비인가 에이전트 접근 시도
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#4F39F6]"></div>
                  <span className="text-xs font-bold text-text-primary">
                    사용자(daily)
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="relative h-[310px]">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-full ${i === 8 ? "border-b border-[#90A1B9]" : "border-b border-dashed border-[#90A1B9]"}`}
                    ></div>
                  ))}
                </div>

                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-text-primary text-right pr-2 w-4">
                  {[8, 7, 6, 5, 4, 3, 2, 1, 0].map((val) => (
                    <span key={val} className="-mt-2">
                      {val}
                    </span>
                  ))}
                </div>

                {/* Bars and Line */}
                <div className="absolute left-8 right-0 bottom-8 top-0 flex items-end justify-between px-4">
                  {chartData.map((item, idx) => {
                    const barHeight = (item.value / maxValue) * 100;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center flex-1 max-w-[45px]"
                      >
                        <div className="w-full flex items-end justify-center h-full mb-1">
                          <div
                            className="w-7 bg-[#00A6F4] rounded-t-[4px]"
                            style={{ height: `${barHeight}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Purple line overlay */}
                <svg
                  className="absolute left-8 right-0 bottom-8 top-0 pointer-events-none"
                  style={{ overflow: "visible" }}
                >
                  <polyline
                    points={chartData
                      .map((item, idx) => {
                        const x = (idx / (chartData.length - 1)) * 100;
                        const y = 100 - (item.dailyValue / maxValue) * 100;
                        return `${x}%,${y}%`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#615FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {chartData.map((item, idx) => {
                    const x = (idx / (chartData.length - 1)) * 100;
                    const y = 100 - (item.dailyValue / maxValue) * 100;
                    return (
                      <circle
                        key={idx}
                        cx={`${x}%`}
                        cy={`${y}%`}
                        r="5"
                        fill="white"
                        stroke="#432DD7"
                        strokeWidth="2"
                      />
                    );
                  })}
                </svg>

                {/* X-axis labels */}
                <div className="absolute left-8 right-0 -bottom-2 flex justify-between px-4">
                  {chartData.map((item, idx) => (
                    <span
                      key={idx}
                      className={`text-xs flex-1 text-center max-w-[45px] ${item.isActive ? "text-primary-600 font-bold" : "text-text-primary"}`}
                    >
                      {item.date}
                    </span>
                  ))}
                </div>

                {/* Tooltip */}
                {chartData[9].isActive && (
                  <div className="absolute right-12 top-32 w-[155px] rounded bg-text-primary shadow-lg p-4 z-10">
                    <p className="text-xs font-bold text-white mb-1">
                      비인가 에이전트 접근 시도
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-bold text-white">
                        12-12일 :
                      </span>
                      <span className="text-[26px] font-bold text-white leading-none">
                        1
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[5px] border-l-transparent border-r-transparent border-t-text-primary"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="rounded-lg border border-neutral-200 shadow-sm bg-white">
            <div className="h-[46px] border-b border-neutral-200 px-5 flex items-center">
              <h2 className="text-base font-bold text-text-primary">
                시스템 상태
              </h2>
            </div>
            <div
              className="p-5 flex items-center justify-center"
              style={{ height: "calc(100% - 46px)" }}
            >
              <div className="relative w-[232px] h-[232px]">
                {/* Background circle */}
                <svg className="w-full h-full" viewBox="0 0 262 262">
                  <circle
                    cx="131"
                    cy="131"
                    r="116"
                    fill="none"
                    stroke="#D0FAE5"
                    strokeWidth="30"
                  />
                  <circle
                    cx="131"
                    cy="131"
                    r="116"
                    fill="none"
                    stroke="#00BC7D"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeDasharray="730"
                    strokeDashoffset="182"
                    transform="rotate(-90 131 131)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-[#006045]">
                      안전
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
