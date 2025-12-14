import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  bgColor?: string;
}

export default function StatCard({ icon, label, value, bgColor = "bg-primary-50" }: StatCardProps) {
  return (
    <div className="w-full min-w-[220px] h-[150px] rounded-lg border border-neutral-200 shadow-sm p-5 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-bold text-text-primary leading-tight whitespace-pre-line">
          {label}
        </h3>
        <div className={`w-[52px] h-[52px] rounded-lg flex items-center justify-center ${bgColor}`}>
          {icon}
        </div>
      </div>
      <p className="text-[30px] font-bold text-text-primary leading-[133%]">
        {value}
      </p>
    </div>
  );
}
