# Northwind

This project was made in John Bryce Angular course.

## Day 01

### Topics
01. Installing and running node.js.
command to install angular: use `npm i -g @angular/cli`.
02. run the app: use `ng s --aot -o`.
03. Learned the structure of Angular framework, and important files.
04. Learned what is Module and Component and relation between them.
05. built a layout for the app and insert each component in its proper place.
06. Learned about routing, RouterLinkActive, adding routs in app-routing and inserting routing in component.

## Day 02

### Topics:
01. Property binding-
    - Interpolation.
    - Property Binding.
    - Event Binding.
    - Two-Way Binding.
02. Template Refrence Variable.
03. Directives-
    + Attribute Directive.
    + Structural Directive.
04. NgContent
05. Services
    * Component Level.
    * Module Level.
    * App Level.
06. Models.

## Day 03
01. callback function.
    `this.prodService.get(products => this.products = products, err => alert(err.message));`
02. promise.
03. await; async.
04. observable.
05. HttpClient.
06. Image Source of products change dynamcily within list.
07. mouseenter child parent event @Output and EventEmitter.

## Day 04
01. Title Service.
02. Route Parameters.

## Day 05
01. Adding Module.
    `ng g m modules/admin --flat`
02. Adding Component to new Module.
    `ng g c components/admin -m modules/admin --skipTests`
03. Lazy loading for new Module Component:
    `{path: "admin", loadChildren: "./modules/admin.module#adminModule"}`
    must add to adminModule:
    `
    const routes: Routes = [
    {path: "", component: AdminComponent} // "" is relative to "/"
    `
    `
    imports: [ 
    CommonModule,
    RouterModule.forChild(routes)
    `
  ]
]
04. Route children:
    `
    // inner router  
    {
        path: "", component: SellersComponent, children: [  
            { path: "retailers", component: RetailersComponent }, // "" is relative to "/"  
            { path: "wholesalers", component: WholeSalersComponent } // "" is relative to "/"  
        ]  
    }
    `
05. Shared Module.
    `ng g m modules/shared --flat`
06. Costum Pipe.
    `ng g p pipes/zero-symbol -m modules/shared --skipTests`
    must add to exports in module
07. Custom Directive.
    host - tag we want to use directive on.
    `ng g d directives/colored -m modules/shared --skipTests`
    * by @HostBinding()
    * by `onstructor(private elementRef: ElementRef, private renderer: Renderer2)`  
    `this.renderer.setStyle(this.elementRef.nativeElement, "transition", "color 1s");`
08. CSS-
    * `transition: color 1s`
    * `@keyframes RotateAnimation { {from: transform: rotate(0deg)}, to { transform: rotate(360deg)}} `

## Day 06
01. Redux - 
    - `npm i redux`
    - AppState, Store, ActionType, Action, Dispatch, Reducer
    - `const newObj = { ...objToCopy }` // spread operator - משכפל כל האוביקט לאוביקט חדש
02. Subscribe and Unsubscribe to the service
03. Debugger for chrome
    - download from extentions
    - view command pallete ` debug open launch.json -> choose: chrome`
    - change `"url": "http://localhost:8080"` to `"url": "http://localhost:4200"`
04. Change Detection



