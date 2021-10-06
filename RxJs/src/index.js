import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const greetings = clicks.pipe(mapTo('Hi'));
greetings.subscribe(x => console.log(x));