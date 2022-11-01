import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { GlobalService } from '../../../core/global/_services/global.service';
// import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'kt-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar', { static: true }) calendarComponent: FullCalendarComponent;
  // @ViewChild('calendar', { static: true }) ucCalendar: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin];
  calendarEvents: any = [
    {
      "CalendarID": 2, "TitleArabic": "آخر موعد لاستلام تقارير المشاركة", "TitleEnglish": "آخر موعد لاستلام تقارير المشاركة", "DescriptionArabic": "آخر موعد لاستلام تقارير المشاركة", "DescriptionEnglish": "آخر موعد لاستلام تقارير المشاركة", "From": "2018-08-04T21:00:00", "To": "2018-08-04T21:00:00", "Authorize": 0, "DateCreated": "2018-05-03T10:18:58.28", "DateUpdated": null
    },
    {
      "CalendarID": 3, "TitleArabic": "الاعداد لعملية التقييم", "TitleEnglish": "الاعداد لعملية التقييم", "DescriptionArabic": "تقوم ادارة الجائزة بالاعداد لعملية التقييم ودراسة تقارير المشاركة وتوزيع الفرق", "DescriptionEnglish": "تقوم ادارة الجائزة بالاعداد لعملية التقييم ودراسة تقارير المشاركة وتوزيع الفرق", "From": "2018-08-05T21:00:00", "To": "2018-08-05T21:00:00", "Authorize": 0, "DateCreated": "2018-05-03T10:22:30.093", "DateUpdated": "2018-05-27T08:56:31.927"
    },
    {
      "CalendarID": 4, "TitleArabic": "نهاية الاعداد لعملية التقييم", "TitleEnglish": "نهاية الاعداد لعملية التقييم", "DescriptionArabic": "ستقوم ادارة الجائزة بالتواصل مع المنشآت المشاركة وتبلغيهم بالفرق ومواعيد الزيارة الميدانية", "DescriptionEnglish": "ستقوم ادارة الجائزة بالتواصل مع المنشآت المشاركة وتبلغيها بالفرق ومواعيد الزيارة الميدانية", "From": "2018-09-12T21:00:00", "To": "2018-09-12T21:00:00", "Authorize": 0, "DateCreated": "2018-05-03T10:24:53.67", "DateUpdated": null
    },
    {
      "CalendarID": 5, "TitleArabic": "بداية عملية التقييم", "TitleEnglish": "بداية التقييم", "DescriptionArabic": "بداية التقييم المكتبي والميداني وتحكيم النتائج", "DescriptionEnglish": "بداية التقييم المكتبي والميداني وتحكيم النتائج", "From": "2018-09-15T21:00:00", "To": "2018-09-15T21:00:00", "Authorize": 0, "DateCreated": "2018-05-03T10:26:57.717", "DateUpdated": "2018-05-03T10:28:36.75"
    },
    {
      "CalendarID": 6, "TitleArabic": "نهاية عملية التقييم", "TitleEnglish": "نهاية عملية التقييم", "DescriptionArabic": "نهاية التقييم المكتبي والميداني وتحكيم النتائج", "DescriptionEnglish": "نهاية التقييم المكتبي والميداني وتحكيم النتائج", "From": "2018-10-10T21:00:00", "To": "2018-10-10T21:00:00", "Authorize": 0, "DateCreated": "2018-05-03T10:28:02.297", "DateUpdated": null
    },
    {
      "CalendarID": 7, "TitleArabic": "اعتماد النتائج واعلان الفائزين", "TitleEnglish": "اعتماد النتائج واعلان الفائزين", "DescriptionArabic": "اعتماد النتائج واعلان اسماء المنشآت الفائزة بالدورة الرابعة للجائزة", "DescriptionEnglish": "اعتماد النتائج واعلان اسماء المنشآت الفائزة بالدورة الرابعة للجائزة", "From": "2018-10-17T21:00:00", "To": "2018-10-17T21:00:00", "Authorize": 0, "DateCreated": "2018-05-03T10:31:15.56", "DateUpdated": null
    },
    {
      "CalendarID": 8, "TitleArabic": "حفل الجائزة وعرض أفضل الممارسات", "TitleEnglish": "حفل الجائزة وعرض أفضل الممارسات", "DescriptionArabic": "سوف يعلن موعد ومكان حفل الجائزة وعرض أفضل الممارسات عبر حسابات التواصل الخاصة بالجائزة والذي يعتبر تتويج للمنشآت الفائزة وايضاً مشاركة متحدثين وخبراء بمجال الجودة ومنشآت عربية وعالمية فازو بجوائز الجودة المناظرة او شبيه لجائزة الملك عبدالعزيز للجودة", "DescriptionEnglish": "سوف يعلن موعد ومكان حفل الجائزة وعرض أفضل الممارسات والذي يعتبر تتويج للمنشآت الفائزة وايضاً مشاركات متحدثين خبراء بمجال الجودة ومنشآت عربية وعالمية فازو بجوائز الجودة المناظرة او شبية لجائزة الملك عبدالعزيز للجودة", "From": "2019-01-06T21:00:00", "To": "2019-01-08T21:00:00", "Authorize": 0, "DateCreated": "2018-05-03T10:34:18.75", "DateUpdated": "2018-11-26T07:00:25.413"
    },
    {
      "CalendarID": 9, "TitleArabic": "التسجيل بمنظومة تميز .نت والتقدم للدورة الخامسة", "TitleEnglish": "التسجيل بمنظومة تميز .نت والتقدم للدورة الخامسة", "DescriptionArabic": "التسجيل بمنظومة تميز .نت والتقدم للدورة الخامسة", "DescriptionEnglish": "التسجيل بمنظومة تميز .نت والتقدم للدورة الخامسة", "From": "2019-04-06T23:00:00", "To": "2019-08-30T23:00:00", "Authorize": 0, "DateCreated": "2019-04-11T10:43:25.987", "DateUpdated": "2019-06-24T09:16:20.343"
    },
    {
      "CalendarID": 10, "TitleArabic": "تسجيل المقيمين", "TitleEnglish": "تسجيل المقيمين", "DescriptionArabic": "تسجيل المقيمين الدورة الخامسة", "DescriptionEnglish": "تسجيل المقمين الدورة الخامسة", "From": "2019-12-28T21:00:00", "To": "2020-01-15T21:00:00", "Authorize": 3, "DateCreated": "2019-12-29T08:08:52.897", "DateUpdated": null
    },
    {
      "CalendarID": 11, "TitleArabic": "مرحلة التقييم", "TitleEnglish": "مرحلة التقييم", "DescriptionArabic": "مرحلة تقييم جميع المنشآت المتقدمة على لدورة الخامسة", "DescriptionEnglish": "مرحلة تقييم جميع المنشآت المتقدمة على لدورة الخامسة", "From": "2020-02-29T21:00:00", "To": "2020-07-22T21:00:00", "Authorize": 0, "DateCreated": "2020-01-01T10:57:31.053", "DateUpdated": "2020-01-01T10:58:20.57"
    },
    {
      "CalendarID": 0, "TitleArabic": "زمن الزيارات الميدانية", "TitleEnglish": "Site Visit", "DescriptionArabic": "مدينة الملك فهد الطبية ", "DescriptionEnglish": "مدينة الملك فهد الطبية ", "From": "2018-09-15T00:00:00", "To": "2018-09-30T00:00:00", "Authorize": 0, "DateCreated": "2020-02-13T13:53:32.4667118Z", "DateUpdated": null
    },
    {
      "CalendarID": 0, "TitleArabic": "زمن الزيارات الميدانية", "TitleEnglish": "Site Visit", "DescriptionArabic": "مستشفى دلة - الرياض ", "DescriptionEnglish": "مستشفى دلة - الرياض ", "From": "2018-09-19T00:00:00", "To": "2018-09-30T00:00:00", "Authorize": 0, "DateCreated": "2020-02-13T13:53:32.4695912Z", "DateUpdated": null
    },
    {
      "CalendarID": 0, "TitleArabic": "زمن الزيارات الميدانية", "TitleEnglish": "Site Visit", "DescriptionArabic": "Almoosa Specialist Hospital ", "DescriptionEnglish": "Almoosa Specialist Hospital ", "From": "2018-09-25T00:00:00", "To": "2018-09-29T00:00:00", "Authorize": 0, "DateCreated": "2020-02-13T13:53:32.4725789Z", "DateUpdated": null
    },
    {
      "CalendarID": 0, "TitleArabic": "زمن قياس جاهزية المقيمين", "TitleEnglish": "Assessing Readiness & Participation", "DescriptionArabic": "زمن قياس جاهزية المقيمين", "DescriptionEnglish": "Assessing Readiness & Participation", "From": "2018-07-27T19:00:00", "To": "2018-08-27T19:00:00", "Authorize": 0, "DateCreated": "2020-02-13T13:53:32.4725789Z", "DateUpdated": null
    }
  ];
  calendarOptions: any;

  constructor(private tS: Title,
    private translate: TranslateService,
    private globalService: GlobalService) {
    this.tS.setTitle(this.translate.instant('PAGES.CALENDAR.TITLE') + this.globalService.webTitle);
  }

  ngOnInit() {
    // this.calendarEvents.concat([
    //   { title: 'event 1', date: '2019-04-01' }
    // ]);
    this.calendarOptions = {
      // lang: 'ar-sa',
      // isRTL: this.currentLang === 'ar' ? true : false,
      // locale: this.currentLang,
      editable: false,
      firstDay: 0,
      eventLimit: false,
      // header: this.isRTL(),
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      plugins: [dayGridPlugin],
      customButtons: {
        myCustomButton: {
          text: this.translate.instant('CALENDAR.ADDEVENT'),
          click: () => {
            // $('#btnOpenEventModel').click();
          }
        }
      },
      buttonText: {
        month: this.translate.instant('CALENDAR.MONTH'),
        week: this.translate.instant('CALENDAR.WEEK'),
        day: this.translate.instant('CALENDAR.DAY'),
        list: this.translate.instant('CALENDAR.LIST'),
        today: this.translate.instant('CALENDAR.TODAY')
      },
      allDayText: '',
      selectable: true,
      events: this.setDataForCalendar(this.calendarEvents)
    };
  }

  setDataForCalendar(data) {
    const events = [];
    for (let i = 0; i < data.length; i++) {
      events[i] = {
        title: data[i].TitleArabic,
        description: data[i].DescriptionArabic,
        start: new Date(data[i].From),
        end: this.UTCToLocal(new Date(data[i].To)),
        allDay: true, backgroundColor: '#d2af29'
      };
    }
    return events;
  }

  UTCToLocal(date) {
    const newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return newDate.setDate(newDate.getDate() + 1);
  }

  addEvent() {
    this.calendarEvents = this.calendarEvents.concat([
      { title: 'event 2', date: '2019-04-02' }
    ]);
    console.log('In');
  }

  modifyTitle(eventIndex, newTitle) {
    let calendarEvents = this.calendarEvents.slice(); // a clone
    let singleEvent = Object.assign({}, calendarEvents[eventIndex]); // a clone
    singleEvent.title = newTitle;
    calendarEvents[eventIndex] = singleEvent;
    this.calendarEvents = calendarEvents; // reassign the array
  }

}
