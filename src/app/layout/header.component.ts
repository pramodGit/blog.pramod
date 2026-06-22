import { HttpClient } from "@angular/common/http";
import { Component, inject, computed } from "@angular/core";
import { CommonModule, NgIf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationService } from "../core/navigation.service";
import { Router, RouterLink, ActivatedRoute, NavigationEnd, Data } from "@angular/router";
import { BlogService } from "../services/blog.service";
import { filter, map } from "rxjs";
import { startWith } from 'rxjs/operators';


@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    imports: [CommonModule, RouterLink, NgIf],
    providers: [NavigationService],
})
export class HeaderComponent {
    title = "Pramod's Blog";

    constructor(private http: HttpClient) {}

    
    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);

    private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }

    // ✅ startWith(null) ensures we capture the initial route on first load
    private currentRouteData$ = this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        startWith(null),
        map(() => this.getDeepestRoute(this.activatedRoute)),
        filter((route): route is ActivatedRoute => !!route.snapshot),  
        map((route): Data => route.snapshot.data),
    );

    //                    👇 No generic, let it infer Signal<Data | undefined>
    private routeData = toSignal(this.currentRouteData$);

    showSearch = computed(() => {
        const data = this.routeData();
        return data?.['search'] !== false; // ✅ ?. safely handles undefined
    });




    private readonly navigationService = inject(NavigationService);
    public navigation = this.navigationService.getNavigation();
    private readonly blogService = inject(BlogService); // Inject the service

    onSearch(event: Event): void {
        const input = event.target as HTMLInputElement;
        this.blogService.updateSearchTerm(input.value);
    }

}