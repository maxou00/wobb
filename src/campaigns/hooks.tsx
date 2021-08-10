import { useMemo } from "react";
import { useLocation } from "react-router";
import qs from "querystring";

export function useUrlParam(key: string, defaultValue: string){
    const location = useLocation();
    const status = useMemo(() => qs.parse(location.search.replace("?", ""))[key] as string || defaultValue, [location, defaultValue,key]);
    return status;
}

export function useUrlFilter(defaultValue: string){
    return useUrlParam("filter", defaultValue);
}