import { Observable } from "rxjs";

export interface IFormCanDeactivate {
  podeDesativar(): Observable<boolean> | Promise<boolean> | boolean;

}