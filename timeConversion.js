// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time

const timeConversion = (s) => {
    let arr = s.slice(0,8).split(':');

    arr[0] =
        (s.indexOf('PM') !== -1) ? (arr[0] === '12' ? '12' : Number(arr[0])+12)
        :
        (arr[0] === '12' ? '00' : arr[0])

    let convertedTime = arr.join(':');
    return convertedTime;
}
