export type MessageStatus = {
  read: boolean;
  updatedAt: string;
};

export type MessageAttachment = {
  uri: string;
  filenameOriginalExtension: string;
  filenameOriginal: string;
  size: number;
};

export type MessageAttachmentAlternate = {
  uri: string;
  filenameOriginalExtension: string;
  filename_original: string;
  filenameOriginal: string;
  size: number;
};

export type MessageRequest = {
  userUuid: string;
  messageConversationUuid?: string;
  afterCreatedAt?: string;
  beforeCreatedAt?: string;
};

export type MessageResponse = {
  uuid: string;
  userUuid: string;
  messageType: number;
  message: string;
  uriTarget: string;
  messageStatus: MessageStatus;
  messageConversationUuid: string;
  createdAt: string;
  messageAttachment: MessageAttachment;
};
