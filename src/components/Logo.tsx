import logo from "../assets/logo.svg";

export function Logo( props: { size: number } ) {
    return <img src={logo} alt="wobb" width={props.size} height="auto"/>
}