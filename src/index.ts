import { Observable, Subscriber } from "rxjs";

export const useActiveStream = () => {
    return new ActiveStream();
};

export class ActiveStream {
    private streamResponse = new Subscriber();
    constructor() {
    }

    stream = new Observable(x => {
        this.streamResponse = x;
    });

    request = (event: IActiveStreamMessage) => {
        this.streamResponse.next(event);
    };

}

export interface IActiveStreamMessage {
    name: string;
    data: any;
}
