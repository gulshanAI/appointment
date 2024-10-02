const ViewDetail = () => {
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-50 z-40" />
      <div
        id="modalContent"
        className="fixed top-1/2 left-1/2 max-w-md w-full bg-white p-4 rounded shadow-lg z-50 -translate-x-1/2 -translate-y-1/2"
      >
        <h2 className="text-2xl font-bold mb-4">Book appointment</h2>
      </div>
    </div>
  );
};

export default ViewDetail;
