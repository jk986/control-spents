export class Spent{
    constructor(
        public id:string,
        public nameBudg:string,
        public amount:number,
        public category:string,
        public date:string | number
    ){}
}