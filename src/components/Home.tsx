import { TopAppBar } from "./TopAppBar";
import { MessagingOverlay } from "../messaging/MessagingOverlay";
import { UserPool } from "../core/constants";
import { useMemo } from "react";

export function Home() {

    const user = useMemo(() => UserPool.getCurrentUser(), []);

    return <div className="home">
        <TopAppBar />
        <main>
            {
                user && "User"
            }
        </main>
        <MessagingOverlay />
    </div>

}

