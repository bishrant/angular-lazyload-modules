import { Component, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public componentPlaceholder: ViewContainerRef;
  @ViewChild('lazy', {read: ViewContainerRef}) lazyDiv;
  constructor(private resolver: ComponentFactoryResolver) {}

  showLazyComponent = () => {
    import('./lazy/lazy.module').then(({ LazyModule }) => {
      const lazyComponent = LazyModule.getLargeComponent();
      this.lazyDiv.createComponent(this.resolver.resolveComponentFactory(lazyComponent));
    });
  }

  ngAfterViewInit()  {
    this.showLazyComponent();
  }
}
