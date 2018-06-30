export class Result{
    Success:boolean
    Data: any
    Errors: Error[]
  }

  class Error{
    Code:number
    Message:string
  }