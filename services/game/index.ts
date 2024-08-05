import req from "@/utils/req";

export const getGame = (params: any) => req.get(`/api/game/${params?.id}`);
