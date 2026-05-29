import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationService } from "../core/navigation.service";
import { RouterLink } from "@angular/router";
import { BlogService } from "../services/blog.service";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports: [CommonModule, RouterLink],
    providers: [NavigationService],
})
export class HeaderComponent {
    title = "Pramod's Blog";

    constructor(private http: HttpClient) {}

    private readonly navigationService = inject(NavigationService);
    public navigation = this.navigationService.getNavigation();
    private readonly blogService = inject(BlogService); // Inject the service

    onSearch(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.blogService.updateSearchTerm(input.value);
    }

}