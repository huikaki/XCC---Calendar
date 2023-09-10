import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

function ShowHoliday() {
  return (
    <div>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin,
          googleCalendarPlugin,
        ]}
        googleCalendarApiKey="AIzaSyC6BhLp6FaXKtyRrddzE_mbaWIoRB1TV2k"
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        editable={true}
        selectable={true}
        dayMaxEvents={true}
        events={{
          googleCalendarId: "en.hong_kong#holiday@group.v.calendar.google.com",
          color: "red",
          textColor: "black",
        }}
      />
    </div>
  );
}

export default ShowHoliday;
