import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { 
  blogPostDetails, 
  closureCode, 
  systemDesign, 
  javascriptSorting_1, 
  javascriptSorting_2, 
  javascriptSorting_3, 
  javascriptSorting_4, 
  javascriptSorting_5,
  javascriptSorting_6
} from '../../data/blog-posts';
import { NgFor, NgIf } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [RouterModule, NgFor, NgIf]
})
export class PostComponent implements OnInit {
  postId!: string | null;
  postRoute!: string | null;
  blogPostDetails: Record<string, any> = blogPostDetails;
  postDetails: any;
  // codeBlock: SafeHtml;
  // systemDesign: SafeHtml;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    // this.codeBlock = this.sanitizer.bypassSecurityTrustHtml(closureCode);
    // this.systemDesign = this.sanitizer.bypassSecurityTrustHtml(systemDesign);
  }
  private placeholders: Record<string, string> = {
    '_closureCode_': closureCode,
    '_systemDesign_': systemDesign,
    '_javascriptSorting_1': javascriptSorting_1,
    '_javascriptSorting_2': javascriptSorting_2,
    '_javascriptSorting_3': javascriptSorting_3,
    '_javascriptSorting_4': javascriptSorting_4,
    '_javascriptSorting_5': javascriptSorting_5,
    '_javascriptSorting_6': javascriptSorting_6,
  };

  getSanitizedHtml(html: string): SafeHtml {
    const resolved = Object.entries(this.placeholders).reduce(
      (str, [key, val]) => str.replace(key, val),
      html
    );
    return this.sanitizer.bypassSecurityTrustHtml(resolved);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const route = this.route.snapshot.paramMap.get('route');
    
    if (/*id && this.blogPostDetails[id]*/ route && this.blogPostDetails[route]) {
      //this.postId = id;
      this.postRoute = route;
      this.postDetails = this.blogPostDetails[route];
    } else {
      console.error('Invalid or missing post ID');
    }
  }
}
