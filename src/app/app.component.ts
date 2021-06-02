import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('schedulerReference') scheduler: jqxSchedulerComponent;
  ngAfterViewInit(): void {
      this.scheduler.ensureAppointmentVisible('id1');
  }

  generateAppointments(): any {
      let appointments = new Array();
      let appointment1 = {
          id: "id1",
          description: "George brings projector for presentations.",
          location: "",
          subject: "Quarterly Project Review Meeting",
          calendar: "Room 1",
          start: new Date(2016, 10, 23, 9, 0, 0),
          end: new Date(2016, 10, 23, 16, 0, 0)
      };
      let appointment2 = {
          id: "id2",
          description: "",
          location: "",
          subject: "IT Group Mtg.",
          calendar: "Room 2",
          start: new Date(2016, 10, 24, 10, 0, 0),
          end: new Date(2016, 10, 24, 15, 0, 0)
      };
      let appointment3 = {
          id: "id3",
          description: "",
          location: "",
          subject: "Course Social Media",
          calendar: "Room 3",
          start: new Date(2016, 10, 27, 11, 0, 0),
          end: new Date(2016, 10, 27, 13, 0, 0)
      };
      let appointment4 = {
          id: "id4",
          description: "",
          location: "",
          subject: "New Projects Planning",
          calendar: "Room 2",
          start: new Date(2016, 10, 23, 16, 0, 0),
          end: new Date(2016, 10, 23, 18, 0, 0)
      };
      let appointment5 = {
          id: "id5",
          description: "",
          location: "",
          subject: "Interview with James",
          calendar: "Room 1",
          start: new Date(2016, 10, 25, 15, 0, 0),
          end: new Date(2016, 10, 25, 17, 0, 0)
      };
      let appointment6 = {
          id: "id6",
          description: "",
          location: "",
          subject: "Interview with Nancy",
          calendar: "Room 4",
          start: new Date(2016, 10, 26, 14, 0, 0),
          end: new Date(2016, 10, 26, 16, 0, 0)
      };
      appointments.push(appointment1);
      appointments.push(appointment2);
      appointments.push(appointment3);
      appointments.push(appointment4);
      appointments.push(appointment5);
      appointments.push(appointment6);
      return appointments;
  };
  source: any =
  {
      dataType: "array",
      dataFields: [
          { name: 'id', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'location', type: 'string' },
          { name: 'subject', type: 'string' },
          { name: 'calendar', type: 'string' },
          { name: 'start', type: 'date' },
          { name: 'end', type: 'date' }
      ],
      id: 'id',
      localData: this.generateAppointments()
  };
  // appointmentAdd(event: any){
  //   alert('duda');
  // }
  dataAdapter: any = new jqx.dataAdapter(this.source);
  date: any = new jqx.date(2016, 11, 23);
  appointmentDataFields: any =
  {
      from: "start",
      to: "end",
      id: "id",
      description: "description",
      location: "location",
      subject: "subject",
      resourceId: "calendar"
  };
  resources: any =
  {
      colorScheme: "scheme05",
      dataField: "calendar",
      source: new jqx.dataAdapter(this.source)
  };
  views: any[] =
  [
      'dayView',
      'weekView',
      'monthView'
  ];
  localization={
    // separator of parts of a date (e.g. '/' in 11/05/1955)
    '/': "/",
    // separator of parts of a time (e.g. ':' in 05:44 PM)
    ':': ":",
    // the first day of the week (0 = Sunday, 1 = Monday, etc)
    firstDay: 0,
    days: {
      // full day names
      names: ["Sunday", "Lunes", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      // abbreviated day names
      namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      // shortest day names
      namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    },
    months: {
      // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
      names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
      // abbreviated month names
      namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
    },
    // AM and PM designators in one of these forms:
    // The usual view, and the upper and lower case versions
    //      [standard,lowercase,uppercase]
    // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
    //      null
    AM: ["AM", "am", "AM"],
    PM: ["PM", "pm", "PM"],
    eras: [
    // eras in reverse chronological order.
    // name: the name of the era in this culture (e.g. A.D., C.E.)
    // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
    // offset: offset in years from gregorian calendar
    {"name": "A.D.", "start": null, "offset": 0 }
    ],
    twoDigitYearMax: 2029,
    patterns: {
      // short date pattern
      d: "M/d/yyyy",
      // long date pattern
      D: "dddd, MMMM dd, yyyy",
      // short time pattern
      t: "h:mm tt",
      // long time pattern
      T: "h:mm:ss tt",
      // long date, short time pattern
      f: "dddd, MMMM dd, yyyy h:mm tt",
      // long date, long time pattern
      F: "dddd, MMMM dd, yyyy h:mm:ss tt",
      // month/day pattern
      M: "MMMM dd",
      // month/year pattern
      Y: "yyyy MMMM",
      // S is a sortable format that does not vary by culture
      S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
      // formatting of dates in MySQL DataBases
      ISO: "yyyy-MM-dd hh:mm:ss",
      ISO2: "yyyy-MM-dd HH:mm:ss",
      d1: "dd.MM.yyyy",
      d2: "dd-MM-yyyy",
      d3: "dd-MMMM-yyyy",
      d4: "dd-MM-yy",
      d5: "H:mm",
      d6: "HH:mm",
      d7: "HH:mm tt",
      d8: "dd/MMMM/yyyy",
      d9: "MMMM-dd",
      d10: "MM-dd",
      d11: "MM-dd-yyyy"
    },
      agendaViewString: "Agenda",
      agendaAllDayString: "all day",
      agendaDateColumn: "Date",
      agendaTimeColumn: "Time",
      agendaAppointmentColumn: "Appointment",
    backString: "Back",
    forwardString: "Forward",
    toolBarPreviousButtonString: "previous",
    toolBarNextButtonString: "next",
    emptyDataString: "No data to display",
    loadString: "Loading...",
    clearString: "Clear",
    todayString: "Today",
    dayViewString: "Day",
    weekViewString: "Week",
    monthViewString: "Month",
    timelineDayViewString: "Timeline Day",
    timelineWeekViewString: "Timeline Week",
    timelineMonthViewString: "Timeline Month",
    loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxScheduler raises the 'bindingComplete' event when the binding is completed.",
    editRecurringAppointmentDialogTitleString: "Edit Recurring Appointment",
    editRecurringAppointmentDialogContentString: "Do you want to edit only this occurrence or the series?",
    editRecurringAppointmentDialogOccurrenceString: "Edit Occurrence",
    editRecurringAppointmentDialogSeriesString: "Edit The Series",
    editDialogTitleString: "Edit Appointment",
    editDialogCreateTitleString: "Create New Appointment",
    contextMenuEditAppointmentString: "Edit Appointment",
    contextMenuCreateAppointmentString: "Create New Appointment",
    editDialogSubjectString: "Subject",
    editDialogLocationString: "Location",
    editDialogFromString: "From",
    editDialogToString: "To",
    editDialogAllDayString: "All day",
    editDialogExceptionsString: "Exceptions",
    editDialogResetExceptionsString: "Reset on Save",
    editDialogDescriptionString: "Description",
    editDialogResourceIdString: "Owner",
    editDialogStatusString: "Status",
    editDialogColorString: "Color",
    editDialogColorPlaceHolderString: "Select Color",
    editDialogTimeZoneString: "Time Zone",
    editDialogSelectTimeZoneString: "Select Time Zone",
    editDialogSaveString: "Save",
    editDialogDeleteString: "Delete",
    editDialogCancelString: "Cancel",
    editDialogRepeatString: "Repeat",
    editDialogRepeatEveryString: "Repeat every",
    editDialogRepeatEveryWeekString: "week(s)",
    editDialogRepeatEveryYearString: "year(s)",
    editDialogRepeatEveryDayString: "day(s)",
    editDialogRepeatNeverString: "Never",
    editDialogRepeatDailyString: "Daily",
    editDialogRepeatWeeklyString: "Weekly",
    editDialogRepeatMonthlyString: "Monthly",
    editDialogRepeatYearlyString: "Yearly",
    editDialogRepeatEveryMonthString: "month(s)",
    editDialogRepeatEveryMonthDayString: "Day",
    editDialogRepeatFirstString: "first",
    editDialogRepeatSecondString: "second",
    editDialogRepeatThirdString: "third",
    editDialogRepeatFourthString: "fourth",
    editDialogRepeatLastString: "last",
    editDialogRepeatEndString: "End",
    editDialogRepeatAfterString: "After",
    editDialogRepeatOnString: "On",
    editDialogRepeatOfString: "of",
    editDialogRepeatOccurrencesString: "occurrence(s)",
    editDialogRepeatSaveString: "Save Occurrence",
    editDialogRepeatSaveSeriesString: "Save Series",
    editDialogRepeatDeleteString: "Delete Occurrence",
    editDialogRepeatDeleteSeriesString: "Delete Series",
    editDialogStatuses:
    {
      free: "Free",
      tentative: "Tentative",
      busy: "Busy",
      outOfOffice: "Out of Office"
    },

  };
}

