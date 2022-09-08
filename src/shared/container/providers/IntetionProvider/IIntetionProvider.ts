import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";

interface IIntetionProvider {
    process(data:any):Promise<IIterationDTO>
    makeMessage(userId):Promise<IIterationDTO>
}

export { IIntetionProvider };