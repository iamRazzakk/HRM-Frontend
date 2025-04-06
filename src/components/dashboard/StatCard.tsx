import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  title: string;
  value: string | number;
  trend: string;
};

export const StatCard = ({ icon, title, value, trend }: StatCardProps) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      <div className="p-2 rounded-lg bg-gray-100">{icon}</div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-gray-500 mt-1">{trend}</p>
    </CardContent>
  </Card>
);