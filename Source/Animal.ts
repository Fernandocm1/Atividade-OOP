export abstract class Animal{
    public nome : string;
    constructor(){
        this.nome = "";
    }
    public abstract classTypeGuard(object: any) :boolean ;
    public abstract setNome(nome:string) : void;
    public abstract getName(): string;
}