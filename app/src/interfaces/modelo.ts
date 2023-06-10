import { Imprimivel } from "../utils/imprimivel.js";
import { Commparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Commparavel<T> {

}