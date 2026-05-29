import {
  Component, ElementRef, OnInit, OnDestroy,
  ViewChild, ChangeDetectorRef, AfterViewInit, computed, signal
} from '@angular/core';
import { blogPosts } from '../../data/blog-posts';
import { RouterModule } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  imports: [RouterModule]
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  blogPosts = blogPosts;

  // Convert data into a signal
  allPosts = signal(blogPosts);

  // Link to the service signal
  private searchTerm = this.blogService.searchTerm;

  @ViewChild('anchor', { static: false }) anchor!: ElementRef;
  private observer!: IntersectionObserver;

  page = 1;
  limit = 4;
  loading = false;
  hasMore = true;
  blogs: any[] = [];

  constructor(private blogService: BlogService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  ngAfterViewInit(): void {
    this.setupObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        // console.log('👁 Anchor visible:', entries[0].isIntersecting);
        const entry = entries[0];
        if (entry.isIntersecting && this.hasMore && !this.loading) {
          this.loadBlogs();
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (this.anchor?.nativeElement) {
      this.observer.observe(this.anchor.nativeElement);
    }
  }

  loadBlogs(): void {
    if (this.loading || !this.hasMore) return; // ✅ Guard against duplicate calls

    this.loading = true;
    this.blogService.getBlogs(this.page, this.limit).subscribe({
      next: (data) => {
        this.blogs.push(...data);
        this.page++;

        if (data.length < this.limit) {
          this.hasMore = false;
          this.observer?.disconnect(); // ✅ Stop observing when no more data
        }

        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.loading = false;          // ✅ Always unblock on error
        this.cdr.detectChanges();
      }
    });
  }

  trackByRoute(index: number, post: any): string {
    return post.route;
  }

  // Automatically recalculate when searchTerm or allPosts change
  filteredBlogs = computed(() => {
    const term = this.searchTerm();
    return this.allPosts().filter(post => 
      post.title.toLowerCase().includes(term)
    );
  });
}