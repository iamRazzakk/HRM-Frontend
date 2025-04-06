import { Progress } from "../ui/progress";

type DepartmentProgressProps = {
  name: string;
  value: number;
  color: string;
};

export const DepartmentProgress = ({ name, value, color }: DepartmentProgressProps) => (
  <div>
    <div className="flex justify-between text-sm mb-1">
      <span>{name}</span>
      <span>{value}%</span>
    </div>
    <Progress value={value} className={`h-2 ${color}`} />
  </div>
);