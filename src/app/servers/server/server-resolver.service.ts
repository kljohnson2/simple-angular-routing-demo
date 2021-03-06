import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/Router';
import { Observable } from 'rxjs/Observable';
import { ServersService } from '../servers.service';

// Todo: move this into its own file
interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolverService implements Resolve<Server> {

  constructor(private serversService: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<Server> | Promise<Server> | Server {
      return this.serversService.getServer(+route.params['id']);
  }

}
