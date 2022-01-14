import './styles.css';

import { DOMcontroller } from './DOM/DOMsripts';

class RunPage{

    constructor(){
        this.DOMcontroller = new DOMcontroller
    }

    run (){
        this.DOMcontroller.runDOM()
    }
}

let site = new RunPage

site.run()