export class HobbiService{

   // private data: string[] = [ "Skill number one", "Skill number two",  "Skill number three"];

   private name: string= "Появляться на заднем плане ТВ" 
   private nadescrme: string="Это хобби довольно редкое, и самый известный его приверженец — Пол Ярроу, который успел «засветиться» уже более чем в сотне сюжетов. Как только Пол видит, что в общественном месте (public venue) устанавливают камеру, он тут же начинает слоняться (hang around ) на заднем плане."
   private path1: string="/assets/images/img1.jpg"
   private path2: string="/assets/images/img2.jfif"
    
     getData(): string[] {
              
            return this.data;
        }
    }