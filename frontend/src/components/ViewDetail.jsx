import { convertReadableDateTime, getReadableDateAndTime } from "../lib/helper";

const List = ({ item }) => {
  console.log(item);
  const { extendedProps, title, start, end } = item;
  console.log(extendedProps);
  const { date, time } = getReadableDateAndTime(start);
  return (
    <div className="grid grid-cols-3 py-2">
      <div className="flex flex-col border-r">
        <span className="text-xl">{date}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-gray-600 text-sm pl-2 border-r">{title}</p>
      <div className="pl-2 text-sm">
        <p>{extendedProps?.name}</p>
        <p>{extendedProps?.email}</p>
      </div>
    </div>
  );
};

const ViewDetail = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-50 z-40" />
      <div className="fixed right-0 top-0 h-full bg-white p-4 z-50 w-1/2">
        <div className="flex justify-between items-center border-b pb-2">
          <h5 className="text-xl font-bold mb-4 text-indigo-600">Summary </h5>
          <p>Total Appointment: {data.length}</p>
        </div>
        <div className="overflow-auto h-full pb-24 pt-8">
          {data.map((item) => (
            <List key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
