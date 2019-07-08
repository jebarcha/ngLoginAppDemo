import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private auth: AuthService, private router: Router) {}

	canActivate(): boolean {
		// console.log('Entro al Guard', this.auth.estaAuthenticado());
		if (this.auth.estaAuthenticado()) {
			return true;
		} else {
			this.router.navigateByUrl('login');
			return false;
		}
	}
}
