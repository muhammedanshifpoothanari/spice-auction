'use client'

class AuthObservable {
    private observer: Function[] = [];
    constructor() {
        this.observer =[];
    }
    
    subscribe(func: Function) {
        this.observer.push(func);
        console.log(this.observer);
        
    }

    unsubscribe(func: Function) {
        this.observer.filter(fn => fn !== func);
    }

    notify(clicked = "login") {
      if(clicked) {
        this.observer.forEach(observer => {
            observer(clicked)
        });
      }
    }
}


export default new AuthObservable;