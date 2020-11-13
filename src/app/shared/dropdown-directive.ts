import { from } from 'rxjs'
import {Directive, HostBinding, HostListener} from '@angular/core';
@Directive({
    selector : '[appDropdown]'
})

export class DropdownDirective{
@HostBinding('class.open') isOpen = false;
/*
I want to listen to a click event. Then I want to execute toggle open which looks like or sounds like
a fitting name because that is what I want to do,
I want to toggle whether this should be opened or not.
Well then, I will add an isOpen directive which I'll set to false initially and in my @HostListener, I'll

simply set open or isOpen to
what it is currently not. So if isOpen was true,
it will now be set to false
and the other way around.
So with that, I'm toggling that property. Now to dynamically attach or detach a CSS class depending
on this,
all I have to do is, I'll add @HostBinding which needs to be imported from @angular/core and allows us to
bind to properties of the element
the directive is placed on and here,
I want to bind to the class property of that component, of that element, class simply is an array of
all the classes and here, it's all about this open class.
 that's the CSS class we need to attach dynamically or detach
and now the rest will be handled by Angular since I bind to isOpen,
this will not be attached initially, whenever isOpen switches to true,
it will be attached and whenever it switches to false, it will be removed
and that's our entire directive.

*/


@HostListener('click') toggleOpen(){
this.isOpen = !this.isOpen;
}
}