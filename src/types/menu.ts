// menu type that client sends
export interface CreateMenuPayload {
  name: string;
  price: number;
  assetUrl?: string;
}

// menu type responded from server
export interface Menu extends CreateMenuPayload {
  id: number;
  isArchived: boolean;
}