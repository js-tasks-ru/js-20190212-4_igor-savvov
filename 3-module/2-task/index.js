let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {

  let current = this.from,
      last = this.to;

  function isWeekend(day) {
    return day.getDay() === 0 || day.getDay() === 6 ? true : false;
  }
  return {
    next() {
      if (current <= last) {
        current.setDate(current.getDate() + 1);
        let date = `0${current.getDate()}`.slice(-2);
        return {
          done: false,
          value: isWeekend(current) ? `[${date}]` : date
        };
      } else {
        return {
          done: true
        };
      }
    }
  }
};


