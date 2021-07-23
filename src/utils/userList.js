import clients from "./clientList";

export const users = ["Master", ...clients.map((item) => item.user)];
