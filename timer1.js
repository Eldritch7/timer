'use strict';

const alarmSeconds = process.argv.slice(2);
const alarmSecondsNum = [];
if (alarmSeconds === [] || alarmSeconds === [ ]) {
  return ("\n");
}

for (let i = 0; i < alarmSeconds.length; i++) {
  let num = Number(alarmSeconds[i]);
  alarmSecondsNum.push(num);
}


for (const num of alarmSecondsNum) {
  let time = num * 1000;
  if (num < 0 || (typeof num) === isNaN) {
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);

  }

}