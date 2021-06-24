import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseService } from '../../Autofacets.Infrastructure.Services/base.service';

interface ClipboardItem {
    readonly types: string[]
    getType: (type: string) => Promise<Blob>
  }
  
  declare var ClipboardItem: {
    prototype: ClipboardItem
    new(objects: Record<string, Blob>): ClipboardItem
  }
  
  interface Clipboard {
    read?(): Promise<Array<ClipboardItem>>
    write?(items: Array<ClipboardItem>): Promise<void>
  }

@Directive({
  selector: 'img'
})

export class CopyImageDirective implements OnInit{
    // @Input() appCopy = '';
    constructor(private el: ElementRef,
        private readonly baseService: BaseService,
    private readonly translateService: TranslateService
    ) {
        
    //    el.nativeElement.style.src = 'red';
    }
    // private highlight(color: string) {
    //     this.el.nativeElement.style.backgroundColor = color;
    //   }
    
    @HostListener('contextmenu', ['$event'])
    onRightClick(event) {
        console.log(event.srcElement.currentSrc);
        this.saveToClipboard(event.srcElement.currentSrc);
        // event.preventDefault();
        // event.stopPropagation();
        // console.log('Click from Host Element!');
      }
    // @HostListener('mouseenter') onMouseEnter() {
        // console.log('enter',this.el);
        // this.highlight('yellow');
//       }
      ngOnInit(){
            // console.log('imgurl direvctive',this.el.nativeElement.src);
      }
//   @HostListener('mouseleave') onMouseLeave() {
//     console.log('leave',this.el);

//     this.highlight('');
    // }

  public  async saveToClipboard(imgURL) {
  
    this.setCanvasImage(imgURL, (imgBlob) => {
      console.log('doing it!')
      const anyNavigator: any = window.navigator;
      anyNavigator.clipboard.write(
        [
          new ClipboardItem({ 'image/png': imgBlob })
        ]
      )
        .then(e => { 
          console.log('Image copied to clipboard');
          this.baseService.toastr.success(this.translateService.instant('CopyImageCustomMessage'));
          
        })
        .catch(e => { console.log(e) 
        
          this.baseService.toastr.error("Image Not Copied");})
    })

  }

  setCanvasImage(path, func) {
    const img = new Image;
    img.setAttribute('crossorigin', 'anonymous');
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d')
    img.onload = function () {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0)
      c.toBlob(blob => {
        func(blob)
      }, 'image/png')
    }
    img.src = path
  }

      
}
