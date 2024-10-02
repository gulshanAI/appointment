import ActionForm from "./components/ActionForm";
import CalendarBox from "./components/CalendarBox";
import ViewDetail from "./components/ViewDetail";
import useAppointment from "./hooks/useAppointment";

function App() {
  const {
    data,
    loading,
    error,
    addAppointment,
    deleteAppotintMent,
    popActionForm,
    showAction,
    handleUpdateEvents,
    handleDeleteEvent,
  } = useAppointment();

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <CalendarBox
        data={data}
        deleteAppotintMent={deleteAppotintMent}
        handleDateSelect={popActionForm}
        handleUpdateEvents={handleUpdateEvents}
        handleDeleteEvent={handleDeleteEvent}
      />
      {showAction && <ActionForm addAppointment={addAppointment} />}
      {/* {viewDetail && <ViewDetail addAppointment={addAppointment} />} */}
    </>
  );
}

export default App;
