import { Animal } from "./Animal";


export abstract class Repeteis extends Animal{
    public abstract classTypeGuard(object: any) :boolean ;
    public abstract setNome(nome:string) : void;
    public abstract getName(): string;
}