/*!
 * welcome to use aqua toolbox！
 * @author　　：roketRobin
 * @summary　 ：bussines irrelevant、dom irrelevant、js useful function set
 * @version　 ：V0.1.0
 * @lisence   :Apache 2.0 http://www.apache.org/licenses/
 */
/**
 * TimeSpan just like the class TimpSpan in C# ,represent the time difference
 * @class TimeSpan
 */
declare class TimeSpan {
    constructor(millionseconds: number);
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
    totalMillionseconds: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millionsecond: number;
    /**
     * if the date2 later than date 1 ,it's true
     * @type {boolean}
     * @memberOf TimeSpan
     */
    isPositive: boolean;
}
/**
 * aqua 对象
 */
declare var aqua: {
    isJson: (obj: any) => boolean;
    diffDate: (date: Date, diff: number) => Date;
    UTC: (date: Date) => number;
    fmtDate: (date: Date, pattern: string) => string;
    compareDate: (date1: Date, date2: Date) => TimeSpan;
    fillZero: (src: number, direction: string, digit: number) => string;
};
