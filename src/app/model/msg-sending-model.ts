export interface MsgSendingModel {
    sendType: string;
    receiver: string;
    date?: string;
    msg: any[];
    groupMainId: number;
    createTime?: string;
}
