import { viwiLogger, viwiLoggerInstance } from "./log";
import * as uuid from "uuid";


class viwiWebSocket {
  private _id:string;
  private _logger:viwiLoggerInstance;
  
  constructor(private ws: WebSocket) {
    this._logger = viwiLogger.getInstance().getLogger("viwiWebSocket");
    this._logger.transports["console"].level = 'silly'; // for debug
    this._id = uuid.v4();
  }

  private _send(viwiMessageObject:Object):boolean {
    if (this.ws.readyState === this.ws.OPEN) {
      this._logger.debug(this.constructor.name + "._send():", viwiMessageObject);
      this.ws.send(JSON.stringify(viwiMessageObject));
      return true;
    }
    this._logger.error(this.constructor.name + "._send(): WebSocket readyState is ", this.ws.readyState);
    return false;
  }

  get id():string {
    return this._id;
  }

  /**
  * send viwi formatted data via WebSocket
  * @param event the event name (uri) to emitted viwi formatted
  * @param payloadthe payload to be emitted for the event
  *
  * @returns true on successful send
  */
  sendData(event:string, payload:Object):boolean {
    this._logger.debug(this.constructor.name + ".sendData():", event);
    return this._send({type: "data", status: "ok", event: event, data: payload});
  }
  
  /**
  * send viwi formatted error message via WebSocket
  * @param code error code
  * @param err the actual Error containing the message
  *
  * @returns true on successful send
  */
  sendError(event: string, code:number, err:Error):boolean {
    this._logger.debug(this.constructor.name + ".sendError():", event, code, err.message);
    return this._send({type: "error", "event": event, code: code, data: err.message});
  }
  
  /**
  * acknowledge the subscription
  * @param event the event name (uri) to acknowledge the subscription for
  *
  * @returns true on successful acknowledgement
  */
  acknowledgeSubscription(event:string):boolean {
    this._logger.debug(this.constructor.name + ".acknowledgeSubscription():", event);
    return this._send({type: "subscribe", status: "ok", event: event});
  }
  
  /**
   * acknowledge the subscription
   * @param event the event name (uri) to acknowledge the unsubscription for
   * 
   * @returns true on successful acknowledgement
   */
  acknowledgeUnsubscription(event:string):boolean {
    this._logger.debug(this.constructor.name + ".acknowledgeUnsubscription():", event);
    return this._send({type: "unsubscribe", status: "ok", event: event});
  }
}

export { viwiWebSocket };