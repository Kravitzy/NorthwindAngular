export class SeasonService {

  constructor() { }

  public date : Date;

  public isSummerNow() :boolean{
      const month = new Date().getMonth() + 1;
      if (month >= 5 &&  month <= 9){
        return true;
      }
      else{
          return false;
      }
  }
}
