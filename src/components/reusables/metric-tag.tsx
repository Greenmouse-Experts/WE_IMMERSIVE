
interface MetricTagProps{
    figure:number;
    title: string;  // title of the metric (e.g., Followers, Rating, Total Likes)  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const MetricTag = ({figure, title}:MetricTagProps) => {
  return (
    <div className='bg-[#E0C8FF] w-[92px] h-[75px] flex flex-col items-center justify-center rounded-[10px]'>
        <p className="text-primary text-lg fw-500">{figure}</p>
        <p className="text-primary text-xs fw-600">{title}</p>
    </div>
  )
}

export default MetricTag