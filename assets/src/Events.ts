import { Millennium } from "@steambrew/client"

export const WatchDog = {
    startReload: () => {
        SteamClient.Browser.RestartJSContext();
    },
    startRestart: () => {
        SteamClient.User.StartRestart(false);
    },
    startRestartForce: () => {
        SteamClient.User.StartRestart(true);
    }
}