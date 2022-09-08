import IMessageDTO from "@modules/messages/dtos/IMessageDTO";
import IIterationOptionDTO from "./IIterationOptionDTO";

export default interface IIterationDTO {
    options?: IIterationOptionDTO[];
    messages: IMessageDTO[];
 }