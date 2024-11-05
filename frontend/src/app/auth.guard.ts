import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStorageService } from './services/storage/user-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.isLoggedIn(); 
    if (!isAuthenticated) {
      this.router.navigate(['/login']); 
      return false;
    }

    return true; 
  }

  private isLoggedIn(): boolean {
    
    if (UserStorageService.isAdminLoggedIn() || UserStorageService.isCustomerLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
