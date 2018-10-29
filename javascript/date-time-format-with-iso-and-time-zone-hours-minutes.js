/* Run:
 * 
 *     $ node date-time-format-with-iso-and-time-zone-hours-minutes.js
 *     2020-01-01T00:00:00.000+00:00
 *
 */
let x = getDateTimeFormatWithISOAndTimeZoneHoursMinutes();
console.log(x);

function getDateTimeFormatWithISOAndTimeZoneHoursMinutes() {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const hours = parseInt(Math.abs(offset/60));
    const minutes = Math.abs(offset%60);
    return date.toISOString().slice(0, -1) + 
	((offset < 0) ? '+' : '-') +
	(((hours < 10) ? '0' : '') + hours) +
	':' +
	(((minutes < 10) ? '0' : '') + minutes); 
}
