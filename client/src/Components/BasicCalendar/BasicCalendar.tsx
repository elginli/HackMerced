import moment from "moment";
import Calendar from "../Calendar";

interface Data {
  data: any[];
}

export default function BasicCalendar(prop: Data) {
  console.log('Prop Data:', prop.data); // Log the data to the console for inspection
  return <Calendar events={prop.data} />;
}
