const URI = 'http://10.0.2.2:8000/api/';

export const getData = {
  async fetchData(data: string) {
    try {
      let response = await fetch(URI + data);
      let responseJsonData = await response.json();
      //console.log(responseJsonData, 'Data');
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
// / URI + data + '?email=' + email + '&pass=' + pass
export const auth = {
  async fetchData(data: string, email: string, pass: string) {
    try {
      let response = await fetch(
        URI + data + '?email=' + email + '&password=' + pass,
      );
      let responseJsonData = await response.json();
      console.log(responseJsonData[0], 'Auth');
      if (responseJsonData === '?') {
        return false;
      } else {
        return responseJsonData[0];
      }
      //return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const dataUsingId = {
  async fetchData(data: string, id: string, table: string) {
    try {
      let response = await fetch(URI + data + '?id=' + id + '&table=' + table);
      // console.log(URI + data + '?id=' + id + '&table=' + table, 'link');

      let responseJsonData = await response.json();
      // console.log(URI + data + '?id=' + id + '&table=' + table, ':checklink');

      // console.log(responseJsonData[0], 'Auth');
      if (responseJsonData === '?') {
        return false;
      } else {
        return responseJsonData[0];
      }
      //return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};

export const updateUser = {
  async fetchData(
    data: string,
    id: string,
    email: string,
    fname: string,
    lname: string,
    city: string,
    phone: string,
    timezone: string,
  ) {
    try {
      let response = await fetch(
        URI +
          data +
          '?id=' +
          id +
          '&email=' +
          email +
          '&fname=' +
          fname +
          '&lname=' +
          lname +
          '&city=' +
          city +
          '&timezone=' +
          timezone +
          '&phone=' +
          phone,
      );

      let responseJsonData = await response.text();
      // console.log(responseJsonData, 'Auth');
      if (responseJsonData === 'true') {
        return true;
      }
      //return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const all_appointments = {
  async fetchData(data: string, date: string) {
    try {
      let response = await fetch(URI + data + '?date=' + date);
      //console.log(URI + data + '?date=' + date);
      let responseJsonData = await response.json();
      //console.log(responseJsonData, 'Data');
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const updateAppointment = {
  async fetchData(
    data: string,
    id: string,
    name: string,
    date: string,
    time: string,
    duration: string,
  ) {
    try {
      let response = await fetch(
        URI +
          data +
          '?id=' +
          id +
          '&name=' +
          name +
          '&date=' +
          date +
          '&time=' +
          time +
          '&duration=' +
          duration,
      );
      console.log(
        URI +
          data +
          '?id=' +
          id +
          '&name=' +
          name +
          '&date=' +
          date +
          '&time=' +
          time +
          '&duration=' +
          duration,
        'link',
      );

      let responseJsonData = await response.text();
      // console.log(responseJsonData, 'Auth');
      if (responseJsonData === 'true') {
        return true;
      }
      //return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const cancelAppointment = {
  async fetchData(data: string, id: string) {
    try {
      let response = await fetch(URI + data + '?id=' + id);
      console.log(URI + data + '?id=' + id, 'link');

      let responseJsonData = await response.text();
      // console.log(responseJsonData, 'Auth');
      if (responseJsonData === 'true') {
        return true;
      }
      //return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const getTable = {
  async fetchData(data: string, name: string) {
    try {
      let response = await fetch(URI + data + '?table=' + name);
      let responseJsonData = await response.json();
      //console.log(responseJsonData, 'Data');
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export function changeDays(data: any) {
  //console.log(data, ' incomming');

  var all = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  };
  if (data[0].status === 'on') {
    all.monday = true;
  }
  if (data[1].status === 'on') {
    all.tuesday = true;
  }
  if (data[2].status === 'on') {
    all.wednesday = true;
  }
  if (data[3].status === 'on') {
    all.thursday = true;
  }
  if (data[4].status === 'on') {
    all.friday = true;
  }
  if (data[5].status === 'on') {
    all.saturday = true;
  }
  if (data[6].status === 'on') {
    all.sunday = true;
  }
  return all;
}
export function changeDurations(data: any) {
  var all = {
    _15mins: false,
    _30mins: false,
    _45mins: false,
    _60mins: false,
  };
  if (data[0].status === 'on') {
    all._15mins = true;
  }
  if (data[1].status === 'on') {
    all._30mins = true;
  }
  if (data[2].status === 'on') {
    all._45mins = true;
  }
  if (data[3].status === 'on') {
    all._60mins = true;
  }
  return all;
}
export function changeTimings(data: any) {
  var all = {
    start: '',
    end: '',
  };
  data.forEach((element: any) => {
    all.start = element.start_time;
    all.end = element.end_time;
  });
  return all;
}
export const updateBookings = {
  async fetchData(data: string, days: any, durations: any, timings: any) {
    try {
      let response = await fetch(
        URI +
          data +
          '?monday=' +
          days.monday +
          '&tuesday=' +
          days.tuesday +
          '&wednesday=' +
          days.wednesday +
          '&thursday=' +
          days.thursday +
          '&friday=' +
          days.friday +
          '&saturday=' +
          days.saturday +
          '&sunday=' +
          days.sunday +
          '&15min=' +
          durations._15mins +
          '&30min=' +
          durations._30mins +
          '&45min=' +
          durations._45mins +
          '&60min=' +
          durations._60mins +
          '&start=' +
          timings.start +
          '&end=' +
          timings.end,
      );
      let responseJsonData = await response.json();
      //console.log(responseJsonData, 'Data');
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const new_client = {
  async fetchData(data: string, info: any) {
    try {
      let response = await fetch(
        URI +
          data +
          '?email=' +
          info.email +
          '&fname=' +
          info.fname +
          '&lname=' +
          info.lname +
          '&pass=' +
          info.pass +
          '&city=' +
          info.city +
          '&phone=' +
          info.phone +
          '&timezone=' +
          info.timezone,
      );
      console.log(
        URI +
          data +
          '?email=' +
          info.email +
          '&fname=' +
          info.fname +
          '&lname=' +
          info.lname +
          '&pass=' +
          info.pass +
          '&city=' +
          info.city +
          '&phone=' +
          info.phone +
          '&timezone=' +
          info.timezone,
        'link',
      );

      let responseJsonData = await response.json();
      //console.log(responseJsonData, 'Data');
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const bookAppointment = {
  async fetchData(
    data: string,
    client: any,
    duration: string,
    time: string,
    date: any,
  ) {
    try {
      let response = await fetch(
        URI +
          data +
          '?id=' +
          client.id +
          '&name=' +
          client.fname +
          ' ' +
          client.lname +
          '&date=' +
          date +
          '&time=' +
          time +
          '&duration=' +
          duration,
      );
      console.log(
        URI +
          data +
          '?id=' +
          client.id +
          '&name=' +
          client.fname +
          ' ' +
          client.lname +
          '&date=' +
          date +
          '&time=' +
          time +
          '&duration=' +
          duration,
      );

      let responseJsonData = await response.text();
      // console.log(responseJsonData, 'Auth');

      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
export const changePassword = {
  async fetchData(data: string, id: string, pass: string) {
    try {
      let response = await fetch(URI + data + '?id=' + id + '&pass=' + pass);
      console.log(URI + data + '?id=' + id + '&pass=' + pass);

      let responseJsonData = await response.json();
      console.log(responseJsonData, 'Auth');

      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
