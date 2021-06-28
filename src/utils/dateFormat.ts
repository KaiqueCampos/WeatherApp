import moment from 'moment';

export function dateFormat (date: string | undefined){
     const currentDateFormated = moment(date, 'DDMMYYYY' ).format("dddd , MMMM DD, yyyy")
     return currentDateFormated
}