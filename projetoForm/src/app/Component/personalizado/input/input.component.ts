import { Component, inject, input } from "@angular/core";
import { ControlValueAccessor, FormsModule, NgControl } from "@angular/forms";

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [FormsModule],
    template: `
        <label>{{ label() }}</label>
        <input 
            type="text"
            [(ngModel)]="inputValue" 
            (focus)="onTouched && onTouched()" 
            (input)="onChange && onChange(inputValue)"
            [disabled]="isDisabled"
        />
    `,
    styleUrl: `input.component.css`,
})

export class InputComponent implements ControlValueAccessor{

    label = input.required();
    //exemplo de como seria na mão, usando formsModule.
    inputValue = '';

    //Setup
    // Pode ser opicional caso não seja um component de formulario
    // deve passar como parametro a opção ",  { optional: true }"
    private ngControl = inject(NgControl, {optional: true });
    protected onTouched?: () => {};
    protected onChange?: (value: string) => {};
    protected isDisabled = false;

    constructor(){
        if(this.ngControl) this.ngControl.valueAccessor = this; 
        //if(this.onTouched) this.onTouched();
    }

    // Como que o Angular vai setar um valor no seu componente
    writeValue(obj: string): void {
        this.inputValue = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
    

}