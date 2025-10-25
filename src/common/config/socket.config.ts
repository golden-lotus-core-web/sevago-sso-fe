import { Manager } from "socket.io-client";
import type { Socket } from "socket.io-client";
import type { Store } from "@reduxjs/toolkit";
import { UserType } from "../../apis/user/user.enum";

export enum SocketNamespace {
  SYSTEM = "system",
  COMMENT = "comment",
  CHAT = "chat",
  CHAT_MESSAGE = "chat-message",
}
export enum SocketSystemRoom {
  ROOT = UserType.ROOT,
  CUSTOMER = UserType.HR,
  ADMIN = UserType.ADMIN,
}

export enum SocketSystemEvent {
  UPDATE_DISCUSSION = "update-discussion",
  DELETE_DISCUSSION = "delete-discussion",
}

let manager: Manager | null = null;

const sockets: Record<string, Socket> = {};

let currentToken = "";

export const initSockets = (store: Store) => {
  if (manager) return;

  const baseURL = `${process.env.REACT_APP_BE_URL}chat`.replace(
    /\/api\/?$/,
    ""
  );

  manager = new Manager(baseURL, {
    transports: ["websocket"],
    withCredentials: true,
    autoConnect: false,
  });

  currentToken = store.getState().account.accessToken;

  store.subscribe(() => {
    const next = store.getState().account.accessToken;
    if (next !== currentToken) {
      currentToken = next;

      Object.values(sockets).forEach((s) => {
        if (!s) return;
        s.auth = { token: currentToken };
        if (s.connected) s.emit("auth:refresh", currentToken);
      });
    }
  });
};

export const socketConfig = (
  namespace: SocketNamespace,
  roomId?: string
): Socket => {
  if (sockets[namespace]) return sockets[namespace]!;

  console.log("namespace", namespace);
  if (!manager) throw new Error("Please initial socket at app!");

  const socket = manager.socket(`/${namespace}`, {
    auth: { token: currentToken, roomId },
  });

  socket.on("reconnect_attempt", () => {
    socket.auth = { token: currentToken };
  });

  sockets[namespace] = socket;
  return socket;
};
