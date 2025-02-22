import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", Study: 40, Exams: 20 },
  { month: "Feb", Study: 30, Exams: 10 },
  { month: "Mar", Study: 55, Exams: 32 },
  { month: "Apr", Study: 40, Exams: 20 },
  { month: "May", Study: 20, Exams: 10 },
  { month: "Jun", Study: 25, Exams: 15 },
  { month: "Jul", Study: 50, Exams: 25 },
];

type TooltipProps = {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
};

const CustomTooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded">
        {payload.map((item) => (
          <p key={item.name} style={{ color: item.color }}>
            {item.name}: {item.value} Hr
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const StackedBarChart: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-[#15171E] rounded-lg p-6">
      <h2 className="unbound text-[#06052A] mb-5">Hours Spent</h2>
      <div className="flex py-2 px-8 mt-1 gap-6">
        <div className="flex gap-1">
          <span className="w-3 h-3 rounded-sm bg-[rgba(111,10,255,1)]"></span>
          <span className="text-xs -mt-[1px]">Study</span>
        </div>
        <div className="flex gap-1">
          <span className="w-3 h-3 rounded-sm bg-[rgba(246,226,248,1)]"></span>
          <span className="text-xs -mt-[1px]">Exams</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#555555" />
          <XAxis dataKey="month" stroke="rgba(133, 135, 141, 1)" />
          <YAxis stroke="rgba(133, 135, 141, 1)" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="Study" stackId="a" fill="rgba(111, 10, 255, 1)" />
          <Bar dataKey="Exams" stackId="a" fill="rgba(246, 226, 248, 1)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedBarChart;
