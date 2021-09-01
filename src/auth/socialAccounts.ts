import { useCallback, useEffect, useMemo } from "react";
import { INSTAGRAM_CLIENT_ID } from "../core/constants";
import { useUrlQuery } from "../core/hooks";

const INSTA_BASE_URL = "https://api.instagram.com";

function useInstagramAuth() {
    let rawCode = useUrlQuery("code", "");
    const realCode = useMemo(() => {
        if(rawCode && rawCode.endsWith("#_")) {
            return rawCode.replace("#_", "");
        }
    }, [rawCode]);

    useEffect(() => {
        if(realCode) {
            
        }
    }, []);

    const exchangeCodeWithToken = useCallback(() => {
        
    } , []);
}