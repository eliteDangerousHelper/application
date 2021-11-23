import { ApproachSettlement, ReceiveText } from "@/types/events/other";

export const approachSettlement = (event: ApproachSettlement) => {
  console.log("approachSettlement :", event);
};

export const receiveText = (event: ReceiveText) => {
  console.log("receiveText :", event);
};