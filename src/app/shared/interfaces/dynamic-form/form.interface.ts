export interface IForm{
 formTitle : string
 saveBtnTitle : string
 resetBtnTitle: string
 formControls: IFormControl[]
}

 export interface IFormControl {
  name: string
  label: string
  value?: string
  options?:IOptions[],
  radioOptions?:string[],
  palceholder?: string
  class: string
  type: string
  validators: IValidator[]
}

 export interface IValidator {
  validationName?: string
  message?: string
  pattern?:string,
  minLength?:number,
  maxLength?:number,
  email?:string,
  required?: boolean
}
interface IOptions{
  id:number,
  value:string
}
